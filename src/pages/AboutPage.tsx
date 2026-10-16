import React from 'react';
import { 
  Building2, 
  Bus, 
  ShieldCheck, 
  Target, 
  Compass, 
  CheckCircle2, 
  Award, 
  Layers, 
  Users, 
  MapPin,
  ArrowRight,
  TrendingUp,
  Scale
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/mockData';
import { CompanyLogo } from '../components/CompanyLogo';

interface AboutPageProps {
  setActiveTab: (tab: string) => void;
  openLeadModal: (defaultDept?: 'media-advertising' | 'civil-construction') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActiveTab, openLeadModal }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#0B132B] text-white py-16 sm:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Corporate Overview & Heritage
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Scaling Physical Infrastructure. <br />
              Mobilizing Regional Brands.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Deekshith Infra Solutions India Private Limited (DISIPL) was incorporated with a singular mandate: to bridge the physical structural development of Karnataka's urban landscapes with high-velocity public transit moving media networks.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Detailed Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Institutional Foundation
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 leading-tight">
              A Decisive Multi-Sector Partner for Civic Authorities & Commercial Enterprises
            </h2>
            <p>
              Headquartered at Nagarbhavi, Bengaluru, with active regional operational hubs in Mysuru, <strong>Deekshith Infra Solutions India Private Limited</strong> operates at the convergence of two foundational pillars of state growth: high-visibility mass communications and concrete structural engineering.
            </p>
            <p>
              In our <strong>Transit Media & Advertising Wing</strong>, we partner with premier state mobility boards including the Karnataka State Road Transport Corporation (KSRTC) and Bengaluru Metropolitan Transport Corporation (BMTC). We deploy large-scale moving media assets, transforming thousands of state and city commuter vehicles into high-recall mobile billboards. Our fleet advertising has spearheaded statewide campaigns for icons such as the Karnataka Milk Federation (KMF Nandini Products), ensuring that commercial brand narratives penetrate every key intersection from Bengaluru's tech corridors to inter-district arterial highways.
            </p>
            <p>
              Concurrently, our <strong>Civil Construction & Public Works Division</strong> delivers end-to-end turnkey residential home contracts and executes civic public infrastructure tenders under Karnataka PWD Class-I accreditation. From bespoke architectural luxury villas built on strict milestone billing to municipal asphalt carriageways and reinforced stormwater drainage corridors, our engineering protocols prioritize life-cycle structural durability, soil-tested foundation integrity, and zero cost overruns.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Official Trademark & Visual Identity</span>
                <CompanyLogo theme="light" className="h-12 w-auto" />
              </div>
              <h3 className="font-heading font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">
                Corporate Vital Data & Governance
              </h3>
              <div className="space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Corporate Identity (CIN):</span>
                  <span className="font-mono font-semibold text-slate-900">{COMPANY_INFO.cin}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Public Works Accreditation:</span>
                  <span className="font-semibold text-emerald-700">Class-I PWD Karnataka</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Primary Hubs:</span>
                  <span className="font-semibold text-slate-900">Bengaluru HQ & Mysuru Branch</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-100">
                  <span className="text-slate-500">Direct Helpline:</span>
                  <a href={`tel:${COMPANY_INFO.helplinePhone}`} className="font-mono font-bold text-amber-600 hover:text-amber-700">
                    {COMPANY_INFO.helplinePhone}
                  </a>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">Official Email:</span>
                  <span className="font-mono text-slate-900">{COMPANY_INFO.officialEmail}</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-blue-900 space-y-1">
              <div className="font-bold text-blue-950 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Zero Subcontracting Dilution Policy</span>
              </div>
              <p className="text-blue-800 leading-relaxed">
                Whether printing and applying 3M cast vinyl in depot yards or casting RCC foundation slabs, all work is supervised directly by DISIPL internal staff engineers and certified riggers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Statements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-blue-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-700 block">
                Corporate Mission Statement
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                Scale, Reliability, and Measurable Outreach
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our mission is to establish Karnataka's most dependable dual-sector operational engine. We commit to empowering brands through high-impact transit media formats that deliver billions of real-world commuter impressions, while simultaneously raising the benchmark for residential and civic infrastructure through engineering discipline, uncompromising material authenticity, and transparent contract delivery.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-blue-800">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>Verifiable outcomes in every district we serve</span>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-amber-200 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-700 block">
                Corporate Vision Statement
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                Leading the Future of Public Presence & Civic Resilience
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be universally recognized across South India as the premier model of an integrated corporate enterprise—where visionary outdoor marketing infrastructure seamlessly accelerates regional commerce, and resilient civil construction enriches community life for generations to come.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-amber-900">
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
              <span>Sustained growth through institutional integrity</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Dual-Discipline Philosophy (Why Media + Civil Construction) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
              Architectural Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              The Dual-Wing Synergy: Mobility Meets Structural Foundation
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              At first glance, moving media advertising and civil contracting may appear distinct. In reality, they share the exact same underlying core: <strong>mastering the public domain</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="text-amber-400 font-bold text-sm">1. Regulatory Mastery</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Navigating PWD municipal building sanctions and KSRTC/BMTC transport board compliance requires deep legal literacy, safety adherence, and institutional relationship frameworks that few single-vertical agencies possess.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="text-blue-400 font-bold text-sm">2. Industrial Fabrication</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Large-format 3D ACP signage structures, transit terminal installations, and building elevations share structural steel framing, load-bearing rigging, and electrical safety standards that our in-house civil engineers directly oversee.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <div className="text-emerald-400 font-bold text-sm">3. Grounded Regional Reach</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                With operational depots and active project sites spanning Bengaluru, Mysuru, Mandya, and Hubballi, our rapid-response logistics and ground manpower execute campaigns and civil handovers with zero delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Corporate Pillars</span>
          <h2 className="text-2xl font-heading font-bold text-slate-900 mt-0.5">
            The Principles That Govern Every Contract
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <Scale className="w-5 h-5 text-amber-600" />
            <h3 className="font-heading font-bold text-sm text-slate-900">Structural & Contractual Honesty</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent milestone billing with no hidden markups. Whether billing per bus or per built-up square foot, our clients receive verifiable line-item accounting.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            <h3 className="font-heading font-bold text-sm text-slate-900">Rigorous Quality Assurance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Laboratory concrete cube compression tests for homes and roads; certified 3M solvent-latex inks and laminates for moving media fleets.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            <h3 className="font-heading font-bold text-sm text-slate-900">Rapid Depot & Site Execution</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nightly bus wraps at transport depots prevent bus downtime; pre-cast RCC elements accelerate municipal roadway handovers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <Users className="w-5 h-5 text-purple-600" />
            <h3 className="font-heading font-bold text-sm text-slate-900">Dedicated Project Directors</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every client—from private homeowner in Nagarbhavi to regional brand marketing managers—is assigned a dedicated single point of contact.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-bold text-lg text-slate-900">
              Consult with Our Technical Directorate
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              Arrange an in-person briefing at our Nagarbhavi Corporate Headquarters or Mysuru Regional Office to review route availability or structural drawings.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Locate Our Branches
            </button>
            <button
              onClick={() => openLeadModal()}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg text-xs font-bold transition-colors"
            >
              Initiate Commercial Brief
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
