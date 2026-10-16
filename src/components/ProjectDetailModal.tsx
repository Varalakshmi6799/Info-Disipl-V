import React, { useState } from 'react';
import { X, MapPin, Calendar, Building2, Bus, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquire: (division: 'media-advertising' | 'civil-construction', serviceName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  if (!project) return null;
  const [activeImage, setActiveImage] = useState(project.heroImage);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0B132B] text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded-lg ${project.division === 'media' ? 'bg-blue-600/30 text-blue-400' : 'bg-amber-500/30 text-amber-400'}`}>
              {project.division === 'media' ? <Bus className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-400">
                {project.categoryLabel} · {project.location}
              </span>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Photo & Thumbnail strip */}
          <div className="space-y-3">
            <div className="w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={activeImage}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {project.galleryImages.length > 0 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                <button
                  onClick={() => setActiveImage(project.heroImage)}
                  className={`w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImage === project.heroImage ? 'border-amber-500 shadow-xs' : 'border-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={project.heroImage} alt="Main view" className="w-full h-full object-cover" />
                </button>
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImage === img ? 'border-amber-500 shadow-xs' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Meta Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Client / Authority</span>
              <strong className="text-slate-900 font-medium">{project.client}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Timeline</span>
              <strong className="text-slate-900 font-medium">{project.year}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Geography</span>
              <strong className="text-slate-900 font-medium">{project.location}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Division</span>
              <strong className="text-slate-900 font-medium capitalize">{project.division === 'media' ? 'Media Agency' : 'Civil Engineering'}</strong>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Project Overview</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] block">
                The Engineering / Media Challenge
              </span>
              <p className="text-slate-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs space-y-1.5">
              <span className="text-blue-900 font-bold uppercase tracking-wider text-[10px] block">
                The DISIPL Deployed Solution
              </span>
              <p className="text-blue-950 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Verifiable Results */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Key Outcomes & Deliverables</h4>
            <ul className="space-y-2">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications Table */}
          {project.specifications.length > 0 && (
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-100/70 px-4 py-2 border-b border-slate-200 text-xs font-bold text-slate-800">
                Technical Data Sheet
              </div>
              <div className="divide-y divide-slate-100">
                {project.specifications.map((spec, i) => (
                  <div key={i} className="px-4 py-2 flex items-center justify-between text-xs">
                    <span className="text-slate-500">{spec.label}</span>
                    <strong className="text-slate-900 font-medium">{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-slate-500">
            Case Reference ID: <span className="font-mono text-slate-700">DISIPL-{project.id.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200 hover:bg-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(
                  project.division === 'media' ? 'media-advertising' : 'civil-construction',
                  project.title
                );
              }}
              className="w-1/2 sm:w-auto px-5 py-2 text-xs font-bold text-white bg-[#0B132B] hover:bg-[#1C2541] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <span>Inquire About Similar Scope</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
