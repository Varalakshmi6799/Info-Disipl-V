import React, { useState } from 'react';
import { 
  Building2, 
  Bus, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  MapPin, 
  ChevronRight, 
  Sparkles,
  TrendingUp,
  Compass,
  CheckCircle2,
  Users,
  Eye,
  FileText
} from 'lucide-react';
import { COMPANY_INFO, COMPANY_STATS, CLIENT_PARTNERS, TESTIMONIALS } from '../data/mockData';
import { TransitEstimator } from '../components/TransitEstimator';
import { CivilEstimator } from '../components/CivilEstimator';
import { CompanyLogo } from '../components/CompanyLogo';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  openLeadModal: (defaultDept?: 'media-advertising' | 'civil-construction', defaultService?: string) => void;
  setSelectedProject: (projId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  setActiveTab, 
  openLeadModal, 
  setSelectedProject 
}) => {
  const [activeDivisionFocus, setActiveDivisionFocus] = useState<'media' | 'civil'>('media');

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero Section: Dual-Capability Corporate Announcement */}
      <section className="relative bg-[#0B132B] text-white overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-slate-800">
        {/* Subtle geometric background grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Corporate Identification Kicker with Official Logo Emblem */}
            <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-slate-700/80 px-3.5 py-2 rounded-xl shadow-xs">
              <CompanyLogo variant="emblem" className="w-8 h-8 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-white tracking-wide">
                  DEEKSHITH INFRA SOLUTIONS
                </div>
                <div className="text-[10px] text-amber-400 font-mono">
                  INDIA PRIVATE LIMITED · HQ: BENGALURU
                </div>
              </div>
            </div>

            {/* Impactful B2B Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.12]">
              Engineering Physical Foundations. <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-200 to-blue-400">
                Amplifying Market Reach.
              </span>
            </h1>

            {/* Intro Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Welcome to Deekshith Infra Solutions India Private Limited. We are Karnataka's foremost integrated enterprise operating two high-caliber business wings: an omnipresent <strong>Transit & Moving Media Advertising Agency</strong> (commanding KSRTC & BMTC fleet networks) and an accredited <strong>Civil Construction & Public Works Division</strong> delivering turnkey residential contracts and civic infrastructure with uncompromised engineering precision.
            </p>

            {/* Dual CTAs (Prompt Requirement: "Explore Media Services" and "View Construction Portfolio") */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  setActiveTab('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group"
              >
                <Bus className="w-4 h-4 text-blue-200 group-hover:scale-110 transition-transform" />
                <span>Explore Media Services</span>
                <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2.5 group"
              >
                <Building2 className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>View Construction Portfolio</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Quick credentials line */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Class-I PWD Registered</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Exclusive KSRTC & BMTC Media Access</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>3M™ Certified Wrap Materials</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className={`pt-4 lg:pt-0 ${idx !== 0 ? 'lg:pl-6' : ''}`}>
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-800 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Distinct Split Section: Advertising Solutions vs Civil Engineering */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
            Two Specialized Vertical Pipelines
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            A Dual Enterprise Built for Scale & Solidity
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Whether deploying high-recall brand visibility across 320 buses or laying engineered foundations for luxury residences and municipal highways, our specialized business wings operate with singular accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wing 1: Advertising Solutions */}
          <div className="bg-white rounded-2xl border border-blue-200/80 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Bus className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  Media & Outdoor Wing
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                  Advertising & Moving Media Solutions
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Dominating Karnataka's arterial highways and city roads through statewide KSRTC and BMTC bus branding. From complete bus wraps to architectural signages and hyper-targeted digital performance campaigns.
                </p>
              </div>

              {/* Service bullets */}
              <ul className="space-y-2.5 pt-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>KSRTC & BMTC Bus Branding:</strong> Whole bus wraps, side panels, and rear glass graphics reaching millions daily.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Premier Client Portfolio:</strong> Statewide fleet campaigns for Karnataka Milk Federation (KMF Nandini Products).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Indoor Signage & Retail 3D Letters:</strong> Precision ACP cladding, illuminated LED signage, and mall kiosks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Digital Marketing:</strong> Search Engine Optimization (SEO), high-conversion Google Ads, and social media funnels.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => openLeadModal('media-advertising')}
                className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5"
              >
                <span>Request Media Rate Card</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Explore Media Services
              </button>
            </div>
          </div>

          {/* Wing 2: Civil Engineering Solutions */}
          <div className="bg-white rounded-2xl border border-amber-200/80 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                  Engineering & Public Works Wing
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
                  Civil Engineering & Public Works Solutions
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Executing contract-based home construction and civic public works with structural rigor. From custom luxury villas in Nagarbhavi & Mysuru to municipal roads and stormwater infrastructure.
                </p>
              </div>

              {/* Service bullets */}
              <ul className="space-y-2.5 pt-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Turnkey Contract Home Building:</strong> Bespoke luxury villas and duplexes delivered on time with zero cost escalation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Government Public Works:</strong> PWD-accredited municipal arterial roads, asphalt paving, and stormwater channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Structural Integrity:</strong> Primary Fe550D TMT steel and Grade-53 cement validated with certified cube tests.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Complete Clearances:</strong> BBMP, BDA, and MUDA building sanction approvals, soil testing, and structural drawings.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => openLeadModal('civil-construction')}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
              >
                <span>Submit Civil Tender / RFP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('portfolio');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                View Construction Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Flagship Case Highlight: KMF Nandini Statewide Transit Campaign */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-br from-slate-900 to-[#0B132B] rounded-2xl text-white p-8 sm:p-12 overflow-hidden border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Project Milestone</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight">
                KMF Nandini Products Statewide Transit Blitz
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Deekshith Infra Solutions designed, printed, and installed full-body vehicle wraps across <strong>320+ KSRTC and BMTC buses</strong> promoting Karnataka Milk Federation's Nandini Pure Ghee, GoodLife Milk, and Paneer range across 14 transport divisions.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-heading font-bold text-amber-400">320+</div>
                  <div className="text-[11px] text-slate-400">Buses Wrapped</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-heading font-bold text-blue-400">42M+</div>
                  <div className="text-[11px] text-slate-400">Verified Impressions</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xl font-heading font-bold text-emerald-400">99.4%</div>
                  <div className="text-[11px] text-slate-400">Fleet Uptime</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => {
                    setActiveTab('portfolio');
                    setSelectedProject('kmf-nandini-statewide');
                  }}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Inspect Complete Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                  alt="KSRTC Bus branding showcase"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-slate-200">
                    High-tack 3M Cast Vinyl Installation at KSRTC Central Depot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Planning Suites: Transit & Civil Estimators */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Interactive Planning Suite
            </span>
            <h2 className="text-2xl font-heading font-bold text-slate-900">
              Estimate Your Transit Campaign or Civil Build
            </h2>
          </div>

          {/* Interactive Toggle */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveDivisionFocus('media')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeDivisionFocus === 'media'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bus className="w-3.5 h-3.5" />
              <span>Transit Media Estimator</span>
            </button>
            <button
              onClick={() => setActiveDivisionFocus('civil')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeDivisionFocus === 'civil'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Civil Construction Estimator</span>
            </button>
          </div>
        </div>

        {activeDivisionFocus === 'media' ? (
          <TransitEstimator
            onPlanSelected={(details) => {
              openLeadModal('media-advertising', details);
            }}
          />
        ) : (
          <CivilEstimator
            onPlanSelected={(details) => {
              openLeadModal('civil-construction', details);
            }}
          />
        )}
      </section>

      {/* 6. Trusted Clients & Institutional Authorities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Institutional Credibility
            </span>
            <h3 className="text-lg font-heading font-bold text-slate-900 mt-0.5">
              Trusted by Premier State Undertakings & Private Homeowners
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CLIENT_PARTNERS.map((partner, i) => (
              <div 
                key={i} 
                className="bg-white p-3.5 rounded-xl border border-slate-200/80 text-center flex flex-col justify-center items-center shadow-2xs"
              >
                <div className="font-heading font-bold text-xs text-slate-900 leading-tight">
                  {partner.name}
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  {partner.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <strong className="text-slate-900 block font-semibold">{t.author}</strong>
                  <span className="text-[11px] text-slate-500">{t.organization}</span>
                </div>
                <span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                  {t.division}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
