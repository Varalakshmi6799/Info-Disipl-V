import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Building2, 
  Bus, 
  FileText, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { CompanyLogo } from './CompanyLogo';

interface LeadInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDepartment?: 'media-advertising' | 'civil-construction';
  initialService?: string;
}

export const LeadInquiryModal: React.FC<LeadInquiryModalProps> = ({
  isOpen,
  onClose,
  initialDepartment = 'media-advertising',
  initialService = ''
}) => {
  const [department, setDepartment] = useState<'media-advertising' | 'civil-construction'>(initialDepartment);
  const [serviceType, setServiceType] = useState<string>(initialService || (initialDepartment === 'media-advertising' ? 'KSRTC / BMTC Transit Fleet Wrapping' : 'Turnkey Residential Home Construction'));
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Bengaluru');
  const [estimatedBudget, setEstimatedBudget] = useState('₹5 Lakhs – ₹15 Lakhs');
  const [timeline, setTimeline] = useState('Immediate (Within 30 Days)');
  const [projectBrief, setProjectBrief] = useState('');
  const [fleetSizeOrSqFt, setFleetSizeOrSqFt] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ quoteRef: string; timestamp: string } | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync state if initialDepartment changes
  React.useEffect(() => {
    if (initialDepartment) {
      setDepartment(initialDepartment);
      if (initialDepartment === 'media-advertising') {
        setServiceType('KSRTC / BMTC Transit Fleet Wrapping');
      } else {
        setServiceType('Turnkey Residential Home Construction');
      }
    }
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialDepartment, initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `DISIPL-${department === 'media-advertising' ? 'ADV' : 'CIV'}-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedData({
        quoteRef: generatedRef,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      });
    }, 600);
  };

  const handleCopyRef = () => {
    if (submittedData) {
      navigator.clipboard.writeText(submittedData.quoteRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setProjectBrief('');
    setFleetSizeOrSqFt('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="bg-[#0B132B] text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-lg bg-slate-800 border border-slate-700 shrink-0">
              <CompanyLogo variant="emblem" className="w-9 h-9" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg leading-tight">
                Corporate RFP & Quotation Portal
              </h3>
              <p className="text-[11px] text-slate-400">
                Deekshith Infra Solutions India Private Limited · Commercial Desk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submittedData ? (
          /* Success Screen */
          <div className="p-8 space-y-6 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl font-heading font-bold text-slate-900">
                Inquiry Logged Successfully
              </h4>
              <p className="text-sm text-slate-600 mt-2 max-w-lg mx-auto">
                Thank you, <strong className="text-slate-800">{fullName}</strong>. Your project brief has been registered with our {department === 'media-advertising' ? 'Media & Fleet Planning' : 'Civil Engineering & Tenders'} division in Bengaluru.
              </p>
            </div>

            {/* Reference Card */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-left max-w-md mx-auto space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Official Tracking Reference</span>
                <span>{submittedData.timestamp}</span>
              </div>
              <div className="flex items-center justify-between bg-white p-2.5 rounded-lg border border-slate-200">
                <span className="font-mono font-bold text-base text-slate-900">{submittedData.quoteRef}</span>
                <button
                  onClick={handleCopyRef}
                  className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-[11px] text-slate-500">
                Dispatched copy sent to: <span className="font-mono text-slate-700">{COMPANY_INFO.officialEmail}</span>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.helplinePhone}`}
                className="w-full sm:w-auto px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Desk: {COMPANY_INFO.helplinePhone}</span>
              </a>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                Done / Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Department Selection Selector (Prompt Requirement) */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                1. Select Department <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setDepartment('media-advertising');
                    setServiceType('KSRTC / BMTC Transit Fleet Wrapping');
                  }}
                  className={`p-3 text-left rounded-xl border transition-all flex items-start gap-3 ${
                    department === 'media-advertising'
                      ? 'border-blue-600 bg-blue-50/50 shadow-xs ring-1 ring-blue-600'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <Bus className={`w-5 h-5 shrink-0 mt-0.5 ${department === 'media-advertising' ? 'text-blue-600' : 'text-slate-400'}`} />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Request Advertising Quote</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Moving Transit, KSRTC/BMTC Fleets, Signage, Digital</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setDepartment('civil-construction');
                    setServiceType('Turnkey Residential Home Construction');
                  }}
                  className={`p-3 text-left rounded-xl border transition-all flex items-start gap-3 ${
                    department === 'civil-construction'
                      ? 'border-amber-600 bg-amber-50/50 shadow-xs ring-1 ring-amber-600'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <Building2 className={`w-5 h-5 shrink-0 mt-0.5 ${department === 'civil-construction' ? 'text-amber-600' : 'text-slate-400'}`} />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Submit Civil Construction RFP</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Contract Home Construction, Public Works, Tenders</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Service Subcategory Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                    <option value="KSRTC / BMTC Transit Fleet Wrapping">KSRTC / BMTC Transit Fleet Wrapping (Full Body Wrap)</option>
                    <option value="BMTC City Volvo Bus Branding">BMTC City Volvo Bus Branding (IT Corridors & Airport)</option>
                    <option value="KSRTC Inter-District Express Branding">KSRTC Inter-District Express Branding (Statewide Routes)</option>
                    <option value="Architectural 3D LED Signboard & ACP Cladding">Architectural 3D LED Signboard & ACP Cladding</option>
                    <option value="In-Store Retail Merchandising & Fixtures">In-Store Retail Merchandising & Fixtures</option>
                    <option value="Digital Marketing & Performance SEO Campaign">Digital Marketing & Performance SEO Campaign</option>
                  </>
                ) : (
                  <>
                    <option value="Turnkey Residential Home Construction">Turnkey Residential Home Construction (Contract Basis)</option>
                    <option value="Custom Luxury Villa Construction">Custom Luxury Villa Construction (Architectural Build)</option>
                    <option value="Government Public Works & Municipal Roads Tender">Government Public Works & Municipal Roads Tender</option>
                    <option value="RCC Stormwater Drain & Box Culvert Infrastructure">RCC Stormwater Drain & Box Culvert Infrastructure</option>
                    <option value="Commercial Complex & Institutional Building">Commercial Complex & Institutional Building</option>
                    <option value="Structural Blueprinting, Soil Testing & Sanctioning">Structural Blueprinting, Soil Testing & Sanctioning</option>
                  </>
                )}
              </select>
            </div>

            {/* Personal / Corporate Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
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
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Official Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. contact@company.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
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

            {/* Scope / Dimension details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Location Preference
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none"
                >
                  <option value="Bengaluru Urban & Rural">Bengaluru (HQ & Metro)</option>
                  <option value="Mysuru Regional District">Mysuru & Mandya Region</option>
                  <option value="Hubballi / Belagavi Corridor">North Karnataka (Hubballi / Belagavi)</option>
                  <option value="Coastal Karnataka (Mangaluru / Udupi)">Coastal Karnataka (Mangaluru)</option>
                  <option value="Pan-Karnataka Statewide">Statewide (All 31 Districts)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Estimated Budget
                </label>
                <select
                  value={estimatedBudget}
                  onChange={(e) => setEstimatedBudget(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none"
                >
                  <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                  <option value="₹5 Lakhs – ₹15 Lakhs">₹5 Lakhs – ₹15 Lakhs</option>
                  <option value="₹15 Lakhs – ₹50 Lakhs">₹15 Lakhs – ₹50 Lakhs</option>
                  <option value="₹50 Lakhs – ₹2 Crores">₹50 Lakhs – ₹2 Crores</option>
                  <option value="Above ₹2 Crores (Institutional)">Above ₹2 Crores (Institutional)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {department === 'media-advertising' ? 'Target Bus Count / Units' : 'Estimated Built-up Sq.Ft.'}
                </label>
                <input
                  type="text"
                  placeholder={department === 'media-advertising' ? 'e.g. 25 BMTC Buses' : 'e.g. 3,500 sq.ft.'}
                  value={fleetSizeOrSqFt}
                  onChange={(e) => setFleetSizeOrSqFt(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Project Brief & Technical Specifications <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder={
                  department === 'media-advertising'
                    ? "Specify your brand objective, preferred routes (e.g. Outer Ring Road, Majestic, Mysuru Express), target duration, and any custom vinyl specs..."
                    : "Describe the residential home specs (number of floors, architectural style, turnkey scope) or public works tender ID and site details..."
                }
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
              ></textarea>
            </div>

            {/* Footer Submit */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>NDA & Commercial Confidentiality Guaranteed</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-[#0B132B] hover:bg-[#1C2541] rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  {isSubmitting ? (
                    <span>Dispatching Brief...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                      <span>{department === 'media-advertising' ? 'Request Media Quote' : 'Submit Civil RFP'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
