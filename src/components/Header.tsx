import React, { useState } from 'react';
import { 
  Building2, 
  Bus, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { CompanyLogo } from './CompanyLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openLeadModal: (defaultDept?: 'media-advertising' | 'civil-construction', defaultService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  activeTab, 
  setActiveTab, 
  openLeadModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Top Corporate Strip */}
      <div className="bg-[#0B132B] text-slate-300 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>HQ: Nagarbhavi, Bengaluru · Branch: Mysuru</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>CIN: {COMPANY_INFO.cin} · Class-I PWD Contractor</span>
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <a 
              href={`mailto:${COMPANY_INFO.officialEmail}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Official Communications"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-mono text-slate-200">{COMPANY_INFO.officialEmail}</span>
            </a>
            <a 
              href={`tel:${COMPANY_INFO.helplinePhone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-amber-400"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono">{COMPANY_INFO.helplinePhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <button 
            onClick={() => navigateTo('home')}
            className="flex items-center text-left group focus:outline-none hover:opacity-95 transition-opacity"
            aria-label="Deekshith Infra Solutions Home"
          >
            <CompanyLogo theme="light" className="h-11 sm:h-12 w-auto" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => navigateTo('home')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'home' ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => navigateTo('about')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'about' ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown (Mega-Menu) */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => navigateTo('services')}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === 'services' ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white rounded-xl shadow-xl border border-slate-200/80 p-5 mt-1 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  {/* Wing A: Media & Advertising */}
                  <div className="p-3.5 rounded-lg bg-blue-50/40 border border-blue-100">
                    <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-blue-200/60">
                      <Bus className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Media & Advertising</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li>
                        <button 
                          onClick={() => navigateTo('services')} 
                          className="hover:text-blue-700 text-left font-medium block"
                        >
                          <span className="font-semibold text-slate-900 block">KSRTC & BMTC Transit Media</span>
                          <span className="text-[11px] text-slate-500">Fleet wrapping, KMF campaign benchmark</span>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => navigateTo('services')} 
                          className="hover:text-blue-700 text-left font-medium block"
                        >
                          <span className="font-semibold text-slate-900 block">Indoor Signage & Retail 3D Letters</span>
                          <span className="text-[11px] text-slate-500">ACP cladding, LED fascias, kiosks</span>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => navigateTo('services')} 
                          className="hover:text-blue-700 text-left font-medium block"
                        >
                          <span className="font-semibold text-slate-900 block">Digital Performance Marketing</span>
                          <span className="text-[11px] text-slate-500">SEO, Google Ads, B2B Social growth</span>
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Wing B: Civil Construction */}
                  <div className="p-3.5 rounded-lg bg-amber-50/40 border border-amber-100">
                    <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-amber-200/60">
                      <Building2 className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900">Civil & Public Works</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li>
                        <button 
                          onClick={() => navigateTo('services')} 
                          className="hover:text-amber-700 text-left font-medium block"
                        >
                          <span className="font-semibold text-slate-900 block">Turnkey Home Construction</span>
                          <span className="text-[11px] text-slate-500">Contract residential builds, custom villas</span>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => navigateTo('services')} 
                          className="hover:text-amber-700 text-left font-medium block"
                        >
                          <span className="font-semibold text-slate-900 block">Public Works & Municipal Tenders</span>
                          <span className="text-[11px] text-slate-500">Roads, RCC storm drains, civic buildings</span>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => navigateTo('services')} 
                          className="hover:text-amber-700 text-left font-medium block"
                        >
                          <span className="font-semibold text-slate-900 block">Structural Engineering & Approvals</span>
                          <span className="text-[11px] text-slate-500">Soil tests, BBMP/MUDA sanction support</span>
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Looking for an instant budget calculation?</span>
                    <button 
                      onClick={() => navigateTo('services')}
                      className="text-amber-600 font-semibold hover:text-amber-700 flex items-center gap-1"
                    >
                      <span>Explore Interactive Calculators</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('portfolio')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'portfolio' ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Portfolio & Work
            </button>

            <button
              onClick={() => navigateTo('branches')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'branches' ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Our Footprint
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                activeTab === 'contact' ? 'text-amber-600 font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Action Callouts */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openLeadModal('media-advertising')}
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-2 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors"
            >
              Advertising Quote
            </button>

            <button
              onClick={() => openLeadModal('civil-construction')}
              className="text-xs font-semibold text-white bg-[#0B132B] hover:bg-[#1C2541] px-4 py-2.5 rounded-lg shadow-xs hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Submit Civil RFP</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => openLeadModal()}
              className="text-xs font-semibold bg-amber-500 text-slate-950 px-3 py-2 rounded-lg"
            >
              Request Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => navigateTo('home')}
              className={`text-left px-3 py-2 text-base font-medium rounded-md ${
                activeTab === 'home' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`text-left px-3 py-2 text-base font-medium rounded-md ${
                activeTab === 'about' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              About Us (Corporate Overview)
            </button>
            <button
              onClick={() => navigateTo('services')}
              className={`text-left px-3 py-2 text-base font-medium rounded-md ${
                activeTab === 'services' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Services (Media & Civil Divisions)
            </button>
            <button
              onClick={() => navigateTo('portfolio')}
              className={`text-left px-3 py-2 text-base font-medium rounded-md ${
                activeTab === 'portfolio' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Portfolio & Client Handoveers
            </button>
            <button
              onClick={() => navigateTo('branches')}
              className={`text-left px-3 py-2 text-base font-medium rounded-md ${
                activeTab === 'branches' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Our Footprint (Bengaluru & Mysuru)
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`text-left px-3 py-2 text-base font-medium rounded-md ${
                activeTab === 'contact' ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              Contact Us & Locations
            </button>
          </nav>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openLeadModal('media-advertising');
              }}
              className="w-full text-center py-2.5 px-3 bg-blue-50 text-blue-900 border border-blue-200 rounded-lg text-xs font-semibold"
            >
              Media Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openLeadModal('civil-construction');
              }}
              className="w-full text-center py-2.5 px-3 bg-[#0B132B] text-white rounded-lg text-xs font-semibold"
            >
              Civil RFP
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
