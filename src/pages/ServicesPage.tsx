import React, { useState } from 'react';
import { 
  Bus, 
  Maximize2, 
  TrendingUp, 
  Home, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  FileCheck, 
  Ruler, 
  ShieldCheck, 
  Sparkles,
  ChevronRight,
  Calculator
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { TransitEstimator } from '../components/TransitEstimator';
import { CivilEstimator } from '../components/CivilEstimator';

interface ServicesPageProps {
  openLeadModal: (defaultDept?: 'media-advertising' | 'civil-construction', defaultService?: string) => void;
  setActiveTab: (tab: string) => void;
  setSelectedProject: (projId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  openLeadModal, 
  setActiveTab, 
  setSelectedProject 
}) => {
  const [activeTabKey, setActiveTabKey] = useState<string>('transit-media');
  const [activeDivisionFilter, setActiveDivisionFilter] = useState<'all' | 'media' | 'civil'>('all');

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeDivisionFilter === 'all') return true;
    return s.division === activeDivisionFilter;
  });

  const activeService = SERVICES_DATA.find((s) => s.id === activeTabKey) || SERVICES_DATA[0];

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Bus': return <Bus className="w-5 h-5" />;
      case 'Maximize2': return <Maximize2 className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      default: return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. Page Header */}
      <section className="bg-[#0B132B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Multi-Divisional Service Directory
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Integrated Capabilities. <br />
              Uncompromised Execution.
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our dual operational pipelines: high-density moving transit media across Karnataka's highway and metropolitan corridors, and precision contract-based civil construction & public works.
            </p>

            {/* Division Filter Segmented Control */}
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => setActiveDivisionFilter('all')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeDivisionFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                All 5 Pillars
              </button>
              <button
                onClick={() => setActiveDivisionFilter('media')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeDivisionFilter === 'media'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Bus className="w-3.5 h-3.5" />
                <span>Media & Advertising</span>
              </button>
              <button
                onClick={() => setActiveDivisionFilter('civil')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeDivisionFilter === 'civil'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Civil & Public Works</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Service Showcase Tabs & Deep Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Tab Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Select Vertical Pillar
            </span>
            <div className="space-y-2">
              {filteredServices.map((service) => {
                const isSelected = activeTabKey === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTabKey(service.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? service.division === 'media'
                          ? 'bg-blue-50/70 border-blue-500 shadow-xs ring-1 ring-blue-500'
                          : 'bg-amber-50/70 border-amber-500 shadow-xs ring-1 ring-amber-500'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected
                          ? service.division === 'media'
                            ? 'bg-blue-600 text-white'
                            : 'bg-amber-500 text-slate-950'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase font-semibold text-slate-400">
                          {service.division === 'media' ? 'Media Agency' : 'Civil Engineering'}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-sm text-slate-900 truncate">
                        {service.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Consultation Callout Box */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-3 mt-6">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                <span>Commercial Inquiries</span>
              </div>
              <h5 className="font-heading font-bold text-sm text-white">
                Require a formal rate card or structural tender estimate?
              </h5>
              <p className="text-xs text-slate-300">
                Our commercial directors provide detailed route plans and BOQs within 24 working hours.
              </p>
              <button
                onClick={() => openLeadModal(activeService.division === 'media' ? 'media-advertising' : 'civil-construction', activeService.title)}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Quotation for {activeService.division === 'media' ? 'Media' : 'Civil'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service Detail Panel (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
            {/* Header info */}
            <div className="border-b border-slate-100 pb-6 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border ${
                  activeService.division === 'media'
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'bg-amber-50 text-amber-800 border-amber-200'
                }`}>
                  {activeService.badge}
                </span>

                {activeService.clientShowcase && (
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Premier Client: <strong className="text-slate-800 font-medium">{activeService.clientShowcase}</strong></span>
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 leading-tight">
                {activeService.title}
              </h2>
              <p className="text-sm font-medium text-slate-600">
                {activeService.tagline}
              </p>
            </div>

            {/* Concise Editorial Copy Paragraphs (Prompt Requirement) */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {activeService.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Operational Highlights */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Engineering & Deployment Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                      activeService.division === 'media' ? 'text-blue-600' : 'text-amber-600'
                    }`} />
                    <span className="leading-snug">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">Operational & Technical Benchmark Data</span>
                <span className="font-mono text-[10px] text-slate-500">ISO / PWD Compliance</span>
              </div>
              <div className="divide-y divide-slate-100">
                {activeService.specs.map((spec, i) => (
                  <div key={i} className="p-3.5 sm:px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <span className="text-slate-500 font-medium">{spec.label}</span>
                    <strong className="text-slate-900">{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="text-xs text-slate-500">
                Operational bases in <strong className="text-slate-800">Bengaluru HQ</strong> and <strong className="text-slate-800">Mysuru Branch</strong>.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {activeService.id === 'transit-media' && (
                  <button
                    onClick={() => {
                      setActiveTab('portfolio');
                      setSelectedProject('kmf-nandini-statewide');
                    }}
                    className="px-4 py-2 border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-semibold text-slate-700 transition-colors"
                  >
                    View KMF Fleet Case
                  </button>
                )}

                <button
                  onClick={() => openLeadModal(activeService.division === 'media' ? 'media-advertising' : 'civil-construction', activeService.title)}
                  className={`w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    activeService.division === 'media'
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xs'
                      : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-xs'
                  }`}
                >
                  <span>Request Proposal for {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Embedded Estimators for Direct Interaction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="border-t border-slate-200 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Real-Time Cost Transparency
            </span>
            <h3 className="text-2xl font-heading font-bold text-slate-900">
              Instant Scoping Engines
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Whether budgeting for a statewide transit wrap or building a custom home in Bengaluru or Mysuru, utilize our integrated estimators to calculate projections.
            </p>
          </div>

          <div className="space-y-8">
            <TransitEstimator
              onPlanSelected={(details) => openLeadModal('media-advertising', details)}
            />

            <CivilEstimator
              onPlanSelected={(details) => openLeadModal('civil-construction', details)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
