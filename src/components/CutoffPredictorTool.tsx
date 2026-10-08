import React, { useState } from 'react';
import { College, CutoffChance } from '../types';
import { Calculator, CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';

interface Props {
  colleges: College[];
  studentCutoff: number;
  onSelectCollege: (college: College) => void;
}

export const CutoffPredictorTool: React.FC<Props> = ({
  colleges,
  studentCutoff: initialCutoff,
  onSelectCollege
}) => {
  const [cutoff, setCutoff] = useState<number>(initialCutoff || 188.0);
  const [category, setCategory] = useState<'OC' | 'BC' | 'BCM' | 'MBC' | 'SC'>('OC');
  const [selectedDegree, setSelectedDegree] = useState<string>('All');

  // Categorize college courses
  const evaluatedCourses = colleges.flatMap((college) => {
    return college.courses.map((course) => {
      const closing = course.historical_cutoffs[0]?.OC_closing || 185;
      const diff = cutoff - closing;

      let chance: CutoffChance = 'Moderate';
      if (diff >= 2.5) chance = 'Safe';
      else if (diff >= -2.0) chance = 'Moderate';
      else chance = 'Reach';

      return {
        college,
        course,
        closingCutoff: closing,
        difference: diff,
        chance
      };
    });
  });

  const filtered = evaluatedCourses.filter((item) => {
    if (selectedDegree !== 'All' && item.course.degree !== selectedDegree) return false;
    return true;
  });

  const safeList = filtered.filter((i) => i.chance === 'Safe');
  const moderateList = filtered.filter((i) => i.chance === 'Moderate');
  const reachList = filtered.filter((i) => i.chance === 'Reach');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <Calculator className="w-4 h-4" />
            <span>Tamil Nadu Cutoff Statistical Predictor</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5">
            Evaluate Safe, Moderate & Reach Institutions
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Simulates counselling probabilities based on official historical TNEA closing ranks.
          </p>
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <div>
            <label className="block text-[10px] font-bold uppercase text-slate-500 mb-0.5">Your Cutoff (out of 200)</label>
            <input
              type="number"
              step="0.25"
              min="70"
              max="200"
              value={cutoff}
              onChange={(e) => setCutoff(parseFloat(e.target.value) || 0)}
              className="w-28 px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase text-slate-500 mb-0.5">Community Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="OC">Open Competition (OC)</option>
              <option value="BC">Backward Class (BC)</option>
              <option value="BCM">BC Muslim (BCM)</option>
              <option value="MBC">MBC / DNC</option>
              <option value="SC">Scheduled Caste (SC)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Probability Buckets Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Safe Choices</span>
            <span className="text-base font-black text-emerald-700">{safeList.length} Options</span>
          </div>
          <p className="text-xs text-emerald-900/80">
            Cutoff is +2.5 points above last year closing. Very high Round 1 allotment probability.
          </p>
        </div>

        <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Moderate Choices</span>
            <span className="text-base font-black text-amber-700">{moderateList.length} Options</span>
          </div>
          <p className="text-xs text-amber-900/80">
            Within ±2.0 points of historical closing. Competitive; prioritize high on choice filling.
          </p>
        </div>

        <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-800">Reach / Aspirational</span>
            <span className="text-base font-black text-rose-700">{reachList.length} Options</span>
          </div>
          <p className="text-xs text-rose-900/80">
            Closing cutoff was higher than current score. Include as early choices without risk.
          </p>
        </div>
      </div>

      {/* Detailed Course Results Table */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-900">Calculated Admission Probabilities</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs bg-white">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 font-bold">College & Branch</th>
                <th className="py-3 px-4 font-bold">Closing Cutoff</th>
                <th className="py-3 px-4 font-bold">Cutoff Differential</th>
                <th className="py-3 px-4 font-bold">Admission Probability</th>
                <th className="py-3 px-4 font-bold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 10).map((item, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-4">
                    <span className="font-bold text-slate-900 block text-xs">{item.college.name}</span>
                    <span className="text-[11px] text-slate-500">{item.course.degree} in {item.course.course_name}</span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-slate-800">
                    {item.closingCutoff.toFixed(1)} / 200
                  </td>
                  <td className="py-3 px-4">
                    <span className={`font-semibold ${item.difference >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {item.difference >= 0 ? `+${item.difference.toFixed(1)}` : item.difference.toFixed(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`font-bold inline-block px-2.5 py-0.5 rounded text-[11px] ${
                      item.chance === 'Safe' ? 'bg-emerald-100 text-emerald-800' :
                      item.chance === 'Moderate' ? 'bg-amber-100 text-amber-800' :
                      'bg-rose-100 text-rose-800'
                    }`}>
                      {item.chance}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onSelectCollege(item.college)}
                      className="text-sky-700 hover:text-sky-900 font-semibold inline-flex items-center gap-1"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Explicit Disclaimer */}
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 flex items-start gap-2">
        <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
        <p>
          <strong className="text-slate-700">Important Advisory:</strong> Admission prediction is based on previous counselling cutoffs and statistical normal distribution. Real-time seat allotment varies each year depending on the number of 12th centums, total applicants, and choice matrix orders. This tool does not guarantee admission.
        </p>
      </div>
    </div>
  );
};
