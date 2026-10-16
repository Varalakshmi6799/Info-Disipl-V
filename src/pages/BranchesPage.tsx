import React, { useState } from 'react';
import { 
  MapPin, 
  Building2, 
  Bus, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  Navigation,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { BRANCH_LOCATIONS, COMPANY_INFO } from '../data/mockData';

interface BranchesPageProps {
  setActiveTab: (tab: string) => void;
  openLeadModal: (defaultDept?: 'media-advertising' | 'civil-construction') => void;
}

export const BranchesPage: React.FC<BranchesPageProps> = ({ 
  setActiveTab, 
  openLeadModal 
}) => {
  const [selectedBranch, setSelectedBranch] = useState(BRANCH_LOCATIONS[0]);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#0B132B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Statewide Operational Footprint
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              A Strategic Multi-Hub Network Across Karnataka
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Deekshith Infra Solutions India Private Limited maintains a dual-hub operating framework anchored at our Nagarbhavi Corporate Headquarters in Bengaluru and extended through our Mysuru Regional Operations Center, commanding 31 Karnataka districts.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Primary Hub Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {BRANCH_LOCATIONS.map((branch) => {
            const isHQ = branch.type === 'Headquarters';
            return (
              <div
                key={branch.id}
                className={`bg-white rounded-2xl border p-6 sm:p-8 flex flex-col justify-between shadow-xs transition-all ${
                  selectedBranch.id === branch.id
                    ? isHQ ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-md uppercase tracking-wider ${
                      isHQ ? 'bg-amber-100 text-amber-900' : 'bg-blue-100 text-blue-900'
                    }`}>
                      {branch.type}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      {isHQ ? 'Karnataka Main Command' : 'South Karnataka Base'}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900">
                    {branch.name}
                  </h3>

                  <div className="space-y-2 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isHQ ? 'text-amber-600' : 'text-blue-600'}`} />
                      <p className="font-medium leading-relaxed">{branch.address}</p>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className={`w-4 h-4 shrink-0 ${isHQ ? 'text-amber-600' : 'text-blue-600'}`} />
                      <a href={`tel:${branch.phone}`} className="hover:text-slate-900 font-mono font-semibold">
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Mail className={`w-4 h-4 shrink-0 ${isHQ ? 'text-amber-600' : 'text-blue-600'}`} />
                      <a href={`mailto:${branch.email}`} className="hover:text-slate-900 font-mono font-semibold">
                        {branch.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-slate-500">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {branch.description}
                  </p>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Hub Capabilities:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {branch.servicesCovered.map((srv, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isHQ ? 'text-amber-600' : 'text-blue-600'}`} />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedBranch(branch)}
                    className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1"
                  >
                    <span>View Map & Coordinates</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    Route Inquiry to This Hub
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Detailed Map Inspection for Selected Branch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Selected Facility Geospatial Viewer
              </span>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                {selectedBranch.name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Switch Focus:</span>
              <button
                onClick={() => setSelectedBranch(BRANCH_LOCATIONS[0])}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedBranch.id === 'bengaluru-hq' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Bengaluru HQ
              </button>
              <button
                onClick={() => setSelectedBranch(BRANCH_LOCATIONS[1])}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedBranch.id === 'mysuru-hub' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 text-slate-700'
                }`}
              >
                Mysuru Hub
              </button>
            </div>
          </div>

          <div className="h-80 sm:h-96 w-full rounded-xl overflow-hidden border border-slate-200 relative bg-slate-100">
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
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Full Address: <strong>{selectedBranch.address}</strong></span>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-semibold transition-colors flex items-center gap-1.5"
            >
              <span>Open in Google Maps Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Statewide Transit & Civil Logistics Coverage Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
              Pan-Karnataka Reach
            </span>
            <h3 className="font-heading font-bold text-2xl text-white">
              Transit Depots & Civil Construction Reach Across 31 Districts
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our operations extend far beyond Bengaluru and Mysuru city limits. We coordinate daily transit wrapping fleets and civil road crews across Karnataka's core economic belts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
              <div className="font-bold text-amber-400 text-sm">Metropolitan Hub</div>
              <div className="text-slate-300 font-semibold">Bengaluru Urban & Rural</div>
              <p className="text-[11px] text-slate-400">BMTC Volvos, IT Corridors, Nagarbhavi HQ residential builds</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
              <div className="font-bold text-blue-400 text-sm">Southern Hub</div>
              <div className="text-slate-300 font-semibold">Mysuru & Mandya</div>
              <p className="text-[11px] text-slate-400">KSRTC City/Rural fleets, turnkey duplex residences, MUDA works</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
              <div className="font-bold text-emerald-400 text-sm">Central & Coastal</div>
              <div className="text-slate-300 font-semibold">Mangaluru, Udupi & Hassan</div>
              <p className="text-[11px] text-slate-400">State highway bus wraps, KMF Nandini coastal distribution routes</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
              <div className="font-bold text-purple-400 text-sm">Northern Corridors</div>
              <div className="text-slate-300 font-semibold">Hubballi, Belagavi & Kalaburagi</div>
              <p className="text-[11px] text-slate-400">NWKRTC and KKRTC state transport corridors and highway signage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
