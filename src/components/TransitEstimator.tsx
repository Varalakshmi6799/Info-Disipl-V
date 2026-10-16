import React, { useState } from 'react';
import { Bus, MapPin, Calculator, Eye, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface TransitEstimatorProps {
  onPlanSelected: (details: string) => void;
}

export const TransitEstimator: React.FC<TransitEstimatorProps> = ({ onPlanSelected }) => {
  const [fleetType, setFleetType] = useState<'bmtc-volvo' | 'bmtc-nonac' | 'ksrtc-express'>('bmtc-volvo');
  const [busCount, setBusCount] = useState<number>(20);
  const [format, setFormat] = useState<'full-wrap' | 'side-panels' | 'rear-glass'>('full-wrap');
  const [durationMonths, setDurationMonths] = useState<number>(3);

  // Estimator logic
  const impressionsPerBusPerDay = fleetType === 'bmtc-volvo' ? 52000 : fleetType === 'bmtc-nonac' ? 44000 : 38000;
  const totalDailyImpressions = busCount * impressionsPerBusPerDay;
  const totalCampaignImpressions = totalDailyImpressions * (durationMonths * 30);
  
  // Approximate rate cards for planning transparency
  const ratePerBusPerMonth = 
    format === 'full-wrap' 
      ? (fleetType === 'bmtc-volvo' ? 38000 : fleetType === 'bmtc-nonac' ? 24000 : 28000)
      : format === 'side-panels'
      ? (fleetType === 'bmtc-volvo' ? 19000 : fleetType === 'bmtc-nonac' ? 12000 : 15000)
      : (fleetType === 'bmtc-volvo' ? 11000 : fleetType === 'bmtc-nonac' ? 7500 : 9000);

  const estimatedTotalBudget = busCount * ratePerBusPerMonth * durationMonths;

  const handleTransfer = () => {
    const summary = `Transit Media Estimate: ${busCount}x ${
      fleetType === 'bmtc-volvo' ? 'BMTC Volvo Low-Floor AC' : fleetType === 'bmtc-nonac' ? 'BMTC City Non-AC' : 'KSRTC Inter-District Express'
    } | Format: ${format === 'full-wrap' ? 'Full Body Wrap' : format === 'side-panels' ? 'Side King/Queen Panels' : 'Full Rear Glass'} | Duration: ${durationMonths} Months | Est. Daily Impressions: ${(totalDailyImpressions / 100000).toFixed(2)} Lakhs`;
    onPlanSelected(summary);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-[#0B132B] px-6 py-4 text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5 h-5 text-amber-400" />
          <h4 className="font-heading font-bold text-base">Karnataka Transit Campaign Estimator</h4>
        </div>
        <span className="text-xs text-blue-300 font-mono">BMTC & KSRTC Rates</span>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* 1. Fleet Category */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Select Fleet Network
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setFleetType('bmtc-volvo')}
                className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                  fleetType === 'bmtc-volvo'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-xs ring-1 ring-blue-600'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="font-bold">BMTC Volvo AC</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">Tech Corridors & Airport</div>
              </button>

              <button
                type="button"
                onClick={() => setFleetType('bmtc-nonac')}
                className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                  fleetType === 'bmtc-nonac'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-xs ring-1 ring-blue-600'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="font-bold">BMTC Non-AC</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">High Density City Routes</div>
              </button>

              <button
                type="button"
                onClick={() => setFleetType('ksrtc-express')}
                className={`p-3 text-left rounded-xl border text-xs font-semibold transition-all ${
                  fleetType === 'ksrtc-express'
                    ? 'border-blue-600 bg-blue-50 text-blue-900 shadow-xs ring-1 ring-blue-600'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="font-bold">KSRTC State Fleet</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">Inter-District Highways</div>
              </button>
            </div>
          </div>

          {/* 2. Bus Count Slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1.5">
              <span>Fleet Volume: <strong className="text-blue-700 font-mono text-sm">{busCount} Buses</strong></span>
              <span className="text-slate-400 text-[11px]">Recommended: 15–50 for optimal recall</span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              step="5"
              value={busCount}
              onChange={(e) => setBusCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>5 buses</span>
              <span>50 buses</span>
              <span>100 buses</span>
              <span>150+ fleet</span>
            </div>
          </div>

          {/* 3. Branding Format */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              Branding Wrap Format
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setFormat('full-wrap')}
                className={`p-2.5 text-center rounded-xl border text-xs font-medium transition-all ${
                  format === 'full-wrap'
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold ring-1 ring-blue-600'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Full Bus Wrap
                <div className="text-[10px] text-slate-500 font-normal">360° Cinematic Presence</div>
              </button>
              <button
                type="button"
                onClick={() => setFormat('side-panels')}
                className={`p-2.5 text-center rounded-xl border text-xs font-medium transition-all ${
                  format === 'side-panels'
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold ring-1 ring-blue-600'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Side King / Queen Panels
                <div className="text-[10px] text-slate-500 font-normal">Eye-level traffic view</div>
              </button>
              <button
                type="button"
                onClick={() => setFormat('rear-glass')}
                className={`p-2.5 text-center rounded-xl border text-xs font-medium transition-all ${
                  format === 'rear-glass'
                    ? 'border-blue-600 bg-blue-50/70 text-blue-950 font-semibold ring-1 ring-blue-600'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Full Back Glass
                <div className="text-[10px] text-slate-500 font-normal">High junction dwell-time</div>
              </button>
            </div>
          </div>

          {/* 4. Duration */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-1.5">
              <span>Campaign Duration: <strong className="text-blue-700 font-mono text-sm">{durationMonths} Month{durationMonths > 1 ? 's' : ''}</strong></span>
            </div>
            <div className="flex gap-2">
              {[1, 2, 3, 6, 12].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setDurationMonths(m)}
                  className={`flex-1 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                    durationMonths === m
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {m}M
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projection Card (5 cols) */}
        <div className="lg:col-span-5 bg-slate-50 rounded-xl p-5 border border-slate-200 flex flex-col justify-between space-y-4">
          <div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Estimated Campaign Projections
            </div>
            <div className="text-2xl font-heading font-extrabold text-slate-900">
              {(totalDailyImpressions / 100000).toFixed(2)} Lakh <span className="text-xs font-normal text-slate-500">Impressions / Day</span>
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Total reach: ~<strong>{(totalCampaignImpressions / 10000000).toFixed(2)} Crore</strong> cumulative visual exposures over {durationMonths} month{durationMonths > 1 ? 's' : ''}.
            </div>
          </div>

          <div className="space-y-2.5 text-xs border-y border-slate-200 py-3.5">
            <div className="flex justify-between items-center text-slate-600">
              <span>Daily Kilometers Covered:</span>
              <strong className="text-slate-900 font-mono">~{(busCount * 220).toLocaleString()} km / day</strong>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Material Specification:</span>
              <span className="text-slate-900 font-medium">3M Cast Vinyl + UV Coat</span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Maintenance & Inspection:</span>
              <span className="text-emerald-700 font-medium">Depot Nightly Audits</span>
            </div>
            <div className="flex justify-between items-center text-slate-600">
              <span>Benchmark Client Case:</span>
              <span className="text-blue-700 font-semibold">KMF Nandini Products</span>
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-xs text-slate-500">Indicative Estimate:</span>
              <div className="text-right">
                <span className="font-heading font-bold text-lg text-slate-900">
                  ₹{(estimatedTotalBudget / 100000).toFixed(2)} Lakhs
                </span>
                <span className="text-[10px] text-slate-400 block">+ GST & Transport Board Cess</span>
              </div>
            </div>

            <button
              onClick={handleTransfer}
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Lock In This Configuration for Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
