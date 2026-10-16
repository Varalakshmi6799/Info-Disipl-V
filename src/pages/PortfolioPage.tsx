import React, { useState } from 'react';
import { 
  Bus, 
  Building2, 
  Maximize2, 
  Filter, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { PortfolioProject } from '../types';

interface PortfolioPageProps {
  onSelectProject: (project: PortfolioProject) => void;
  openLeadModal: (defaultDept?: 'media-advertising' | 'civil-construction', defaultService?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ 
  onSelectProject, 
  openLeadModal 
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'transit-media' | 'civil-construction' | 'indoor-signage'>('all');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'transit-media') return proj.category === 'transit-media';
    if (activeFilter === 'civil-construction') return proj.category === 'civil-construction' || proj.category === 'public-works';
    if (activeFilter === 'indoor-signage') return proj.category === 'indoor-signage';
    return true;
  });

  return (
    <div className="space-y-14 sm:space-y-16 pb-16">
      {/* 1. Header Banner with B2B Introductory Copy */}
      <section className="bg-[#0B132B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest block">
              Track Record & Commissioned Handover Archive
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              Executed Media Fleets & Engineered Civil Assets
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We invite corporate brand directors, civic development boards, and prospective homeowners to inspect our completed moving transit campaigns and structural civil handovers across Karnataka. Every commission in this register reflects our zero-defect policy, certified material traceability, and on-schedule execution.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar & Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Filter Portfolio by Vertical:</span>
          </div>

          {/* Filter Pills / Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects ({PORTFOLIO_PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('transit-media')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeFilter === 'transit-media'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bus className="w-3.5 h-3.5" />
              <span>Transit & Media Campaigns</span>
            </button>
            <button
              onClick={() => setActiveFilter('civil-construction')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeFilter === 'civil-construction'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Civil Projects (Homes & Public Works)</span>
            </button>
            <button
              onClick={() => setActiveFilter('indoor-signage')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeFilter === 'indoor-signage'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Indoor & Signages</span>
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100 cursor-pointer" onClick={() => onSelectProject(project)}>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs ${
                      project.division === 'media'
                        ? 'bg-blue-600 text-white'
                        : 'bg-amber-500 text-slate-950'
                    }`}>
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-medium bg-slate-900/90 text-white px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90 bg-slate-950/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span className="truncate max-w-[160px]">{project.location}</span>
                    </span>
                    <span className="font-mono text-slate-300">{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-5 space-y-2">
                  <div className="text-[11px] font-mono uppercase font-semibold text-slate-400">
                    Client: {project.client}
                  </div>
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="font-heading font-bold text-base text-slate-900 group-hover:text-amber-600 transition-colors cursor-pointer line-clamp-1"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Quick specs pills */}
                <div className="px-5 pt-1 space-y-1.5 text-xs border-t border-slate-100">
                  {project.specifications.slice(0, 2).map((sp, idx) => (
                    <div key={idx} className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400">{sp.label}:</span>
                      <strong className="text-slate-800 font-medium truncate max-w-[180px]">{sp.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-5 pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold text-slate-800 hover:text-amber-600 transition-colors flex items-center gap-1.5"
                >
                  <span>Inspect Case Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => openLeadModal(project.division === 'media' ? 'media-advertising' : 'civil-construction', project.title)}
                  className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 underline underline-offset-4"
                >
                  Quote Similar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Pre-Tender / Client Assurance CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0B132B] text-white rounded-2xl p-8 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block">
              B2B & Government Tender Verification
            </span>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
              Need Past Completion Certificates or Tender Audits?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We provide formal PWD completion certificates, BMTC/KSRTC campaign logs, and laboratory concrete cube test reports for your procurement committees.
            </p>
          </div>

          <button
            onClick={() => openLeadModal('civil-construction', 'Request Past Project Completion Documents & Certifications')}
            className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shrink-0 shadow-xs"
          >
            Request Official Credentials Dossier
          </button>
        </div>
      </section>
    </div>
  );
};
