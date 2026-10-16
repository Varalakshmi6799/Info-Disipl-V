import React, { useState } from 'react';
import { Building2, Calculator, ShieldCheck, Ruler, Calendar, ArrowRight } from 'lucide-react';

interface CivilEstimatorProps {
  onPlanSelected: (details: string) => void;
}

export const CivilEstimator: React.FC<CivilEstimatorProps> = ({ onPlanSelected }) => {
  const [projectType, setProjectType] = useState<'turnkey-home' | 'luxury-villa' | 'public-civic'>('turnkey-home');
  const [builtUpArea, setBuiltUpArea] = useState<number>(3200);
  const [floors, setFloors] = useState<string>('G + 2 Floors');
  const [packageTier, setPackageTier] = useState<'standard' | 'premium' | 'ultra'>('premium');

  // Rates per sq.ft.
  const ratePerSqFt = 
    projectType === 'public-civic'
      ? (packageTier === 'standard' ? 1850 : packageTier === 'premium' ? 2300 : 2800)
      : projectType === 'luxury-villa'
      ? (packageTier === 'standard' ? 2600 : packageTier === 'premium' ? 3200 : 4100)
      : (packageTier === 'standard' ? 2150 : packageTier === 'premium' ? 2650 : 3350);

  const estimatedCost = builtUpArea * ratePerSqFt;
  
  // Approximate construction duration
  const estimatedMonths = 
    builtUpArea < 2500 ? 7 : builtUpArea < 4500 ? 9 : builtUpArea < 7000 ? 12 : 15;

  const handleTransfer = () => {
    const summary = `Civil Construction RFP: ${
      projectType === 'turnkey-home' ? 'Turnkey Contract Home' : projectType === 'luxury-villa' ? 'Bespoke Luxury Villa' : 'Civic / Public Works Building'
    } | Area: ${builtUpArea.toLocaleString()} sq.ft. (${floors}) | Package: ${
      packageTier === 'standard' ? 'Standard Engineering' : packageTier === 'premium' ? 'Premium Executive' : 'Ultra-Luxury Bespoke'
    } | Est. Cost: ₹${(estimatedCost / 100000).toFixed(2)} Lakhs | Est. Handover: ${estimatedMonths} Months`;
    onPlanSelected(summary);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-[#0B132B] px-6 py-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5 h-5 text-amber-400" />
          <h4 className="font-heading font-bold text-base">Contract Construction & Sq.Ft. Estimator</h4>
        </div>
        <span className="text-xs text-amber-400 font-mono">Karnataka IS 456 Norms</span>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Project Type */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Select Construction Typology
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setProjectType('turnkey-home')}
                className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                  projectType === 'turnkey-home'
                    ? 'border-amber-600 bg-amber-50 text-amber-950 shadow-xs ring-1 ring-amber-600'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="font-bold">Turnkey Home</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">Contract Basis, Duplex</div>
              </button>

              <button
                type="button"
                onClick={() => setProjectType('luxury-villa')}
                className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                  projectType === 'luxury-villa'
                    ? 'border-amber-600 bg-amber-50 text-amber-950 shadow-xs ring-1 ring-amber-600'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="font-bold">Luxury Villa</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">Architectural Landmark</div>
              </button>

              <button
                type="button"
                onClick={() => setProjectType('public-civic')}
                className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                  projectType === 'public-civic'
                    ? 'border-amber-600 bg-amber-50 text-amber-950 shadow-xs ring-1 ring-amber-600'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="font-bold">Public Works</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">Civic Tenders & Infrastructure</div>
              </button>
            </div>
          </div>

          {/* Area Slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1.5">
              <span>Total Built-Up Area: <strong className="text-amber-700 font-mono text-sm">{builtUpArea.toLocaleString()} sq.ft.</strong></span>
              <span className="text-slate-400 text-[11px]">(Across all levels)</span>
            </div>
            <input
              type="range"
              min="1200"
              max="10000"
              step="200"
              value={builtUpArea}
              onChange={(e) => setBuiltUpArea(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>1,200 sq.ft.</span>
              <span>3,500 sq.ft.</span>
              <span>6,000 sq.ft.</span>
              <span>10,000+ sq.ft.</span>
            </div>
          </div>

          {/* Floor Structure */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Floor Elevation
              </label>
              <select
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:bg-white focus:outline-none"
              >
                <option value="Ground Only (1 Floor)">Ground Floor Only</option>
                <option value="G + 1 Floor">G + 1 Floor (Duplex)</option>
                <option value="G + 2 Floors">G + 2 Floors (Triplex / Stilt)</option>
                <option value="G + 3 Floors">G + 3 Floors (Multi-Unit)</option>
                <option value="G + 4 Floors & Above">G + 4 Floors & Above</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Specification Package
              </label>
              <select
                value={packageTier}
                onChange={(e) => setPackageTier(e.target.value as any)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:bg-white focus:outline-none"
              >
                <option value="standard">Standard Engineering (₹{projectType === 'luxury-villa' ? '2,600' : '2,150'}/sq.ft)</option>
                <option value="premium">Premium Executive (₹{projectType === 'luxury-villa' ? '3,200' : '2,650'}/sq.ft)</option>
                <option value="ultra">Ultra-Luxury Bespoke (₹{projectType === 'luxury-villa' ? '4,100' : '3,350'}/sq.ft)</option>
              </select>
            </div>
          </div>

          {/* Material Quality Highlights */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-semibold text-slate-900">Guaranteed Material Standards:</div>
            <div className="grid grid-cols-2 gap-x-2 text-[11px] text-slate-600">
              <span>• Fe550D TMT Primary Steel (Tata / JSW)</span>
              <span>• Grade-53 ACC / Ultratech Concrete</span>
              <span>• Waterproofing: 5-Year Polymer Membrane</span>
              <span>• RERA & BBMP / MUDA Sanctioning Support</span>
            </div>
          </div>
        </div>

        {/* Projection Card (5 cols) */}
        <div className="lg:col-span-5 bg-amber-50/40 rounded-xl p-5 border border-amber-200/80 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-1">
              Estimated Construction Outlay
            </div>
            <div className="text-2xl font-heading font-extrabold text-slate-900">
              ₹{(estimatedCost / 100000).toFixed(2)} Lakhs
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Unit Rate: <strong className="text-slate-900 font-mono">₹{ratePerSqFt} / sq.ft.</strong> inclusive of materials, architectural drawings, and supervision.
            </div>
          </div>

          <div className="space-y-2.5 text-xs border-y border-amber-200/60 py-3.5">
            <div className="flex justify-between items-center text-slate-700">
              <span>Estimated Delivery Timeline:</span>
              <strong className="text-slate-950 font-mono">{estimatedMonths} Months Handover</strong>
            </div>
            <div className="flex justify-between items-center text-slate-700">
              <span>Payment Framework:</span>
              <span className="text-slate-900 font-medium">8-Stage Milestone Billing</span>
            </div>
            <div className="flex justify-between items-center text-slate-700">
              <span>Structural Warranty:</span>
              <span className="text-emerald-800 font-semibold">10-Year Comprehensive</span>
            </div>
            <div className="flex justify-between items-center text-slate-700">
              <span>Regional Coverage:</span>
              <span className="text-slate-900 font-medium">Bengaluru HQ & Mysuru Branch</span>
            </div>
          </div>

          <div>
            <button
              onClick={handleTransfer}
              className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Submit This Estimate as RFP Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="text-[10px] text-center text-slate-500 mt-1.5">
              Subject to physical soil test and site elevation survey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
