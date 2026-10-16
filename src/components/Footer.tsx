import React from 'react';
import { 
  Building2, 
  Bus, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Award
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openLeadModal: (defaultDept?: 'media-advertising' | 'civil-construction') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openLeadModal }) => {
  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-slate-800">
      {/* Pre-footer Callout */}
      <div className="border-b border-slate-800/80 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-amber-400 font-mono text-xs uppercase tracking-wider mb-1">Dual-Pillar Enterprise Architecture</div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                Ready to mobilize your brand fleet or initiate your civil build?
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Connect with our specialized division directors in Bengaluru HQ or our Mysuru regional operations hub.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openLeadModal('media-advertising')}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                Request Advertising Rate Card
              </button>
              <button
                onClick={() => openLeadModal('civil-construction')}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold shadow-xs transition-colors"
              >
                Submit Civil Tender / RFP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="mb-2">
              <CompanyLogo theme="dark" className="h-12 w-auto" />
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Deekshith Infra Solutions India Private Limited (DISIPL) is an integrated multi-divisional corporate enterprise bridging high-density public transit advertising networks (KSRTC & BMTC fleet branding) with precision turnkey civil engineering and government public works across Karnataka.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CIN: <strong className="text-slate-200 font-mono">{COMPANY_INFO.cin}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Class-I PWD Karnataka Registered Contractor</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation & Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Corporate Wings
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-amber-400 transition-colors text-left flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>KSRTC / BMTC Transit Media</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-amber-400 transition-colors text-left flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Indoor Retail Signages</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-amber-400 transition-colors text-left flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Digital Marketing & SEO</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-amber-400 transition-colors text-left flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Turnkey Home Construction</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('services')} className="hover:text-amber-400 transition-colors text-left flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>Public Works & Tenders</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('portfolio')} className="hover:text-amber-400 transition-colors text-left flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-slate-600" />
                  <span>KMF Nandini Case Study</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Hub 1: Bengaluru HQ (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Bengaluru Head Office
              </h4>
              <span className="text-[10px] text-amber-400 font-mono">HQ</span>
            </div>
            
            <div className="text-xs text-slate-300 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  176, 2nd Main Road, 4th Cross Rd, 13th Block, 2nd Stage, Nagarbhavi, Bengaluru, Karnataka 560072
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.helplinePhone}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.helplinePhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.officialEmail}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.officialEmail}
                </a>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <span>View Nagarbhavi Map & Routes</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Hub 2: Mysuru Regional Hub (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Mysuru Branch Operations
              </h4>
              <span className="text-[10px] text-blue-400 font-mono">Regional</span>
            </div>

            <div className="text-xs text-slate-300 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  No. 42/B, Industrial Suburb 2nd Stage, Hunsur Main Road, Mysuru, Karnataka 570018
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.secondaryPhone}`} className="hover:text-white transition-colors font-mono">
                  {COMPANY_INFO.secondaryPhone}
                </a>
              </div>

              <div className="text-slate-400 text-[11px]">
                Serving Mysuru, Mandya, Hassan, Chamarajanagar & Kodagu regional transit and civil works.
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => navigateTo('branches')}
                  className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                >
                  <span>Explore Southern Karnataka Network</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Compliance Bar */}
      <div className="border-t border-slate-800 bg-[#070D1E] py-5 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Deekshith Infra Solutions India Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>Corporate CIN: {COMPANY_INFO.cin}</span>
            <span>·</span>
            <span>PWD Karnataka Class-I</span>
            <span>·</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-slate-300">Privacy & Terms</button>
            <span>·</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-slate-300">Tender Inquiries</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
