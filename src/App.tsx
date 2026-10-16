import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadInquiryModal } from './components/LeadInquiryModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { BranchesPage } from './pages/BranchesPage';
import { PORTFOLIO_PROJECTS, COMPANY_INFO } from './data/mockData';
import { PortfolioProject } from './types';
import { MessageSquare, PhoneCall, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [modalDepartment, setModalDepartment] = useState<'media-advertising' | 'civil-construction'>('media-advertising');
  const [modalService, setModalService] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLeadModal = (
    defaultDept?: 'media-advertising' | 'civil-construction',
    defaultService?: string
  ) => {
    if (defaultDept) setModalDepartment(defaultDept);
    if (defaultService) setModalService(defaultService);
    setLeadModalOpen(true);
  };

  const handleSelectProjectById = (projId: string) => {
    const found = PORTFOLIO_PROJECTS.find((p) => p.id === projId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openLeadModal={openLeadModal}
      />

      {/* Main View Container */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            openLeadModal={openLeadModal}
            setSelectedProject={handleSelectProjectById}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            setActiveTab={setActiveTab}
            openLeadModal={openLeadModal}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            openLeadModal={openLeadModal}
            setActiveTab={setActiveTab}
            setSelectedProject={handleSelectProjectById}
          />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioPage
            onSelectProject={(project) => setSelectedProject(project)}
            openLeadModal={openLeadModal}
          />
        )}

        {activeTab === 'branches' && (
          <BranchesPage
            setActiveTab={setActiveTab}
            openLeadModal={openLeadModal}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            initialDepartment={modalDepartment}
          />
        )}
      </main>

      {/* Global Modals */}
      <LeadInquiryModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialDepartment={modalDepartment}
        initialService={modalService}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(dept, service) => {
          setSelectedProject(null);
          openLeadModal(dept, service);
        }}
      />

      {/* Corporate Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openLeadModal={openLeadModal}
      />

      {/* Quick Action Floating Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-md flex items-center justify-center transition-all hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href="tel:7022662105"
          className="px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg text-xs font-bold flex items-center gap-2 border border-emerald-400/30 transition-all hover:scale-105"
          title="Call Direct Helpline: 7022662105"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span className="font-mono">70226 62105</span>
        </a>

        <button
          onClick={() => openLeadModal('media-advertising')}
          className="px-4 py-2.5 rounded-full bg-[#0B132B] hover:bg-[#1C2541] text-white shadow-xl text-xs font-bold flex items-center gap-2 border border-slate-700/80 transition-all hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Quick Quote / RFP</span>
        </button>
      </div>
    </div>
  );
}
