import React, { useState } from 'react';
import { 
  Building2, 
  Bus, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Navigation, 
  ExternalLink,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Check,
  Copy
} from 'lucide-react';
import { COMPANY_INFO, BRANCH_LOCATIONS } from '../data/mockData';

interface ContactPageProps {
  initialDepartment?: 'media-advertising' | 'civil-construction';
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  initialDepartment = 'media-advertising' 
}) => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('bengaluru-hq');
  
  // Form State
  const [department, setDepartment] = useState<'media-advertising' | 'civil-construction'>(initialDepartment);
  const [serviceType, setServiceType] = useState<string>(
    initialDepartment === 'media-advertising' 
      ? 'KSRTC / BMTC Transit Fleet Wrapping' 
      : 'Turnkey Residential Home Construction'
  );
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredBranch, setPreferredBranch] = useState('Bengaluru Corporate HQ');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const selectedBranch = BRANCH_LOCATIONS.find((b) => b.id === selectedBranchId) || BRANCH_LOCATIONS[0];

  const handleDepartmentChange = (newDept: 'media-advertising' | 'civil-construction') => {
    setDepartment(newDept);
    if (newDept === 'media-advertising') {
      setServiceType('KSRTC / BMTC Transit Fleet Wrapping');
    } else {
      setServiceType('Turnkey Residential Home Construction');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ref = `DISIPL-${department === 'media-advertising' ? 'ADV' : 'CIV'}-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRef(ref);
    }, 600);
  };

  const handleCopy = () => {
    if (submittedRef) {
      navigator.clipboard.writeText(submittedRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#0B132B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Branch Network & Commercial Headquarters
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Connect with Our Engineering & Media Directorate
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We operate an interconnected dual-hub operational structure across Karnataka. Visit our corporate headquarters in Nagarbhavi, Bengaluru, or connect with our regional operations team in Mysuru.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Dual-Hub Network Showcase (Prompt Requirement: Bengaluru HQ + Mysuru Branch) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Regional Hub Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 mt-1">
            Two Strategic Operating Centers
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Our multi-hub architecture ensures responsive transit media dispatch and direct on-site civil project supervision across both metropolitan and tier-2 Karnataka corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hub 1: Bengaluru Corporate HQ */}
          <div 
            onClick={() => setSelectedBranchId('bengaluru-hq')}
            className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer relative ${
              selectedBranchId === 'bengaluru-hq'
                ? 'border-amber-500 bg-white shadow-md ring-2 ring-amber-500/20'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 rounded-md text-xs font-bold uppercase tracking-wider">
                Corporate Headquarters
              </span>
              <span className="text-xs font-mono text-slate-400">Hub 01</span>
            </div>

            <h3 className="font-heading font-bold text-xl text-slate-900">
              Bengaluru Corporate HQ
            </h3>
            
            <div className="mt-3 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="font-medium leading-relaxed">
                  176, 2nd Main Road, 4th Cross Rd, 13th Block, 2nd Stage, Nagarbhavi, Bengaluru, Karnataka 560072
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.helplinePhone}`} className="hover:text-amber-700 font-mono font-semibold">
                  {COMPANY_INFO.helplinePhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="hover:text-amber-700 font-mono font-semibold">
                  {COMPANY_INFO.officialEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Monday – Saturday: 9:00 AM – 6:30 PM IST</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Specialized Operations at this Hub:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Executive Board & Media Strategy</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>KSRTC & BMTC Fleet Command</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Turnkey Home Engineering Studio</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Class-I PWD Tender Tendering Cell</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-amber-600 font-semibold">
                {selectedBranchId === 'bengaluru-hq' ? '● Currently Active Map View' : 'Click to view map & coordinates'}
              </span>
              <a
                href="https://maps.google.com/?q=176+2nd+Main+Road+4th+Cross+Rd+13th+Block+2nd+Stage+Nagarbhavi+Bengaluru+Karnataka+560072"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-700 hover:text-amber-600 flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Hub 2: Mysuru Branch Operations */}
          <div 
            onClick={() => setSelectedBranchId('mysuru-hub')}
            className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer relative ${
              selectedBranchId === 'mysuru-hub'
                ? 'border-blue-500 bg-white shadow-md ring-2 ring-blue-500/20'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-md text-xs font-bold uppercase tracking-wider">
                Regional Hub Office
              </span>
              <span className="text-xs font-mono text-slate-400">Hub 02</span>
            </div>

            <h3 className="font-heading font-bold text-xl text-slate-900">
              Mysuru Regional Operations Hub
            </h3>
            
            <div className="mt-3 space-y-2.5 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="font-medium leading-relaxed">
                  No. 42/B, Industrial Suburb 2nd Stage, Hunsur Main Road, Mysuru, Karnataka 570018
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`tel:${COMPANY_INFO.secondaryPhone}`} className="hover:text-blue-700 font-mono font-semibold">
                  {COMPANY_INFO.secondaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="hover:text-blue-700 font-mono font-semibold">
                  {COMPANY_INFO.officialEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Monday – Saturday: 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                Specialized Operations at this Hub:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>KSRTC Mysuru City & Rural Fleets</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Mysuru & Mandya Residential Builds</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>South Karnataka Signage Rigging</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Rapid Maintenance Support Teams</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-blue-600 font-semibold">
                {selectedBranchId === 'mysuru-hub' ? '● Currently Active Map View' : 'Click to view map & coordinates'}
              </span>
              <a
                href="https://maps.google.com/?q=Mysuru+Karnataka"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Map & Unified Lead Capture Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Map Viewer & Hub Location Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-600" />
                  <span className="font-heading font-bold text-sm text-slate-900">
                    Location & Route Navigation
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setSelectedBranchId('bengaluru-hq')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      selectedBranchId === 'bengaluru-hq' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Bengaluru
                  </button>
                  <button
                    onClick={() => setSelectedBranchId('mysuru-hub')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      selectedBranchId === 'mysuru-hub' ? 'bg-blue-600 text-white font-bold' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Mysuru
                  </button>
                </div>
              </div>

              {/* Map Container */}
              <div className="h-72 w-full rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100">
                <iframe
                  title={selectedBranch.name}
                  src={selectedBranch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>

                {/* Overlay Badge */}
                <div className="absolute top-2 left-2 bg-slate-950/85 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{selectedBranch.name}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                <strong className="text-slate-900 block mb-0.5">{selectedBranch.name}:</strong>
                {selectedBranch.address}
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`tel:${selectedBranch.phone}`}
                  className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{selectedBranch.phone}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.officialEmail}?subject=Inquiry%20regarding%20${encodeURIComponent(selectedBranch.name)}`}
                  className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Email Hub</span>
                </a>
              </div>
            </div>

            {/* Statutory & Official Data */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <div className="font-bold text-slate-900">Statutory Communication Data:</div>
              <div className="flex justify-between">
                <span>CIN:</span>
                <span className="font-mono text-slate-800 font-semibold">{COMPANY_INFO.cin}</span>
              </div>
              <div className="flex justify-between">
                <span>GSTIN:</span>
                <span className="font-mono text-slate-800">{COMPANY_INFO.gstin}</span>
              </div>
              <div className="flex justify-between">
                <span>Contractor Class:</span>
                <span className="text-emerald-700 font-semibold">Karnataka PWD Class-I</span>
              </div>
            </div>
          </div>

          {/* Unified B2B Lead Generation Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                B2B Lead Generation Form
              </span>
              <h3 className="font-heading font-bold text-xl text-slate-900">
                Request a Custom Quote or Submit RFP
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Segment your inquiry directly to our specialized department directors for accelerated response.
              </p>
            </div>

            {submittedRef ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-xl text-slate-900">
                    Your Commercial Brief Has Been Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{fullName}</strong>. A technical director from our {department === 'media-advertising' ? 'Transit Advertising' : 'Civil Engineering'} desk will evaluate your requirements and contact you within 24 business hours.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left max-w-sm mx-auto space-y-2">
                  <div className="text-[11px] text-slate-500">Official Tracking Reference:</div>
                  <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200">
                    <span className="font-mono font-bold text-sm text-slate-900">{submittedRef}</span>
                    <button
                      onClick={handleCopy}
                      className="text-xs text-slate-600 hover:text-slate-900 px-2 py-1 rounded bg-slate-100 flex items-center gap-1"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Direct notification dispatched to <span className="font-mono text-slate-600">{COMPANY_INFO.officialEmail}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.helplinePhone}`}
                    className="px-5 py-2.5 bg-amber-500 text-slate-950 rounded-lg text-xs font-bold hover:bg-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Desk Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 1. Department Dropdown (Explicit Prompt Requirement) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                    Select Department <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleDepartmentChange('media-advertising')}
                      className={`p-3 text-left rounded-xl border transition-all flex items-start gap-2.5 ${
                        department === 'media-advertising'
                          ? 'border-blue-600 bg-blue-50/60 ring-1 ring-blue-600'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Bus className={`w-4 h-4 mt-0.5 shrink-0 ${department === 'media-advertising' ? 'text-blue-600' : 'text-slate-400'}`} />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Request Advertising Quote</div>
                        <div className="text-[10px] text-slate-500">Transit fleets, KSRTC/BMTC, signage, digital</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDepartmentChange('civil-construction')}
                      className={`p-3 text-left rounded-xl border transition-all flex items-start gap-2.5 ${
                        department === 'civil-construction'
                          ? 'border-amber-600 bg-amber-50/60 ring-1 ring-amber-600'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Building2 className={`w-4 h-4 mt-0.5 shrink-0 ${department === 'civil-construction' ? 'text-amber-600' : 'text-slate-400'}`} />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Submit Civil Construction RFP</div>
                        <div className="text-[10px] text-slate-500">Contract homes, public works, civic tenders</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* 2. Service Required Dropdown (Prompt Requirement: Service Required dropdown) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    {department === 'media-advertising' ? (
                      <>
                        <option value="KSRTC / BMTC Transit Fleet Wrapping">Outdoor Moving Media & Transit (KSRTC & BMTC Bus Branding)</option>
                        <option value="BMTC City Volvo Bus Branding">BMTC City Volvo Bus Branding (Tech Corridors)</option>
                        <option value="KSRTC Inter-District State Fleet">KSRTC Inter-District Express (Statewide Reach)</option>
                        <option value="Indoor Advertising & Architectural Signages">Indoor Advertising & Architectural 3D Signboards</option>
                        <option value="Digital Marketing & Regional SEO">Digital Marketing (SEO, Google Ads, Social Campaigns)</option>
                      </>
                    ) : (
                      <>
                        <option value="Turnkey Residential Home Construction">Turnkey Home Construction (Contract Basis)</option>
                        <option value="Custom Luxury Villa Construction">Custom Luxury Villa Construction (Architectural)</option>
                        <option value="Government Public Works Contract">Government Public Works & Civic Infrastructure Tenders</option>
                        <option value="Municipal Arterial Road Laying">Municipal Arterial Road Laying & Asphalt Works</option>
                        <option value="RCC Stormwater Drain Networks">RCC Stormwater Drain Networks & Box Culverts</option>
                      </>
                    )}
                  </select>
                </div>

                {/* 3. Text labels for intuitive B2B Inquiry: Name, Company, Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Karnataka Enterprises or Individual"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Official Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Contact Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 70226 62105"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>

                {/* Hub routing preference */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Route to Nearest Operational Hub
                  </label>
                  <select
                    value={preferredBranch}
                    onChange={(e) => setPreferredBranch(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none"
                  >
                    <option value="Bengaluru Corporate HQ">Bengaluru Corporate HQ (Nagarbhavi 2nd Stage)</option>
                    <option value="Mysuru Regional Hub">Mysuru Regional Hub (Industrial Suburb 2nd Stage)</option>
                  </select>
                </div>

                {/* 4. Project Brief (Prompt Requirement: Project Brief) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Brief & Scope Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={
                      department === 'media-advertising'
                        ? "Detail your moving transit campaign: number of buses, preferred routes (e.g. Majestic, Whitefield, Mysuru Road), campaign duration, or indoor signage requirements..."
                        : "Describe the construction scope: turnkey residential home contract (plot size, built-up area in sq.ft., floors, preferred location) or public works tender specs..."
                    }
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div className="text-[11px] text-slate-400">
                    Dispatched to <span className="font-mono text-slate-600">{COMPANY_INFO.officialEmail}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-[#0B132B] hover:bg-[#1C2541] text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                  >
                    {isSubmitting ? (
                      <span>Sending Brief...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-amber-400" />
                        <span>{department === 'media-advertising' ? 'Request Advertising Quote' : 'Submit Civil Construction RFP'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
