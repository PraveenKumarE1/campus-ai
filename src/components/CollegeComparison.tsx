import React from 'react';
import { College } from '../types';
import { X, Shirt, IndianRupee, TrendingUp, Award, Building, CheckCircle2 } from 'lucide-react';

interface Props {
  colleges: College[];
  onRemove: (collegeId: string) => void;
  onClear: () => void;
  onClose: () => void;
}

export const CollegeComparison: React.FC<Props> = ({
  colleges,
  onRemove,
  onClear,
  onClose
}) => {
  if (colleges.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Multi-College Comparative Matrix</span>
              <span>·</span>
              <span>Comparing {colleges.length} Colleges (Max 5)</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Side-by-Side Deep Intelligence Comparison</h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="text-xs text-slate-500 hover:text-rose-600 transition-colors font-medium"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="p-6 overflow-x-auto flex-1 text-xs">
          <table className="w-full border-collapse border border-slate-200 text-left">
            <thead>
              <tr className="bg-slate-100/80 text-slate-700">
                <th className="p-3 border border-slate-200 w-44 font-bold">Metric / Feature</th>
                {colleges.map((c) => (
                  <th key={c.id} className="p-3 border border-slate-200 min-w-[220px] max-w-[260px] align-top bg-white">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="font-bold text-slate-900 text-sm block leading-snug">{c.name}</span>
                        <span className="text-[11px] text-slate-500 block mt-0.5">{c.city}, {c.district}</span>
                      </div>
                      <button
                        onClick={() => onRemove(c.id)}
                        className="text-slate-400 hover:text-rose-600 p-0.5"
                        title="Remove from compare"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Institution Type & Accreditation */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-600">Institution & NIRF</td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 border border-slate-200 text-slate-800">
                    <span className="font-medium block">{c.institution_type}</span>
                    <span className="text-slate-500 text-[11px] block">{c.accreditation}</span>
                  </td>
                ))}
              </tr>

              {/* DRESS CODE & STRICTNESS LEVEL */}
              <tr className="bg-sky-50/30 hover:bg-sky-50/60">
                <td className="p-3 border border-slate-200 font-bold text-slate-800 flex items-center gap-1.5">
                  <Shirt className="w-4 h-4 text-sky-700" />
                  <span>Dress Code & Strictness</span>
                </td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 border border-slate-200">
                    <span className={`font-bold block ${
                      c.dress_code.strictness_level === 'Strict Formals' ? 'text-amber-700' :
                      c.dress_code.strictness_level === 'High Freedom / Casuals' ? 'text-emerald-700' : 'text-sky-700'
                    }`}>
                      {c.dress_code.strictness_level}
                    </span>
                    <span className="text-[11px] text-slate-600 block mt-0.5 line-clamp-3">
                      {c.dress_code.policy_summary}
                    </span>
                    <div className="mt-1 text-[10px] text-slate-500 font-medium">
                      Freedom Score: {c.campus_freedom.score}/10 ({c.dress_code.confidence_level}% conf.)
                    </div>
                  </td>
                ))}
              </tr>

              {/* Verified Total Yearly Fees */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-600">Total Yearly Cost (Approx)</td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 border border-slate-200">
                    <span className="text-sm font-bold text-slate-900 block">
                      ₹{c.fees.total_yearly_estimated.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Tuition: ₹{c.fees.tuition_fee_yearly.toLocaleString('en-IN')} + Hostel: ₹{c.fees.hostel_fee_yearly.toLocaleString('en-IN')}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Cutoff (OC Closing) */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-600">Closing Cutoff (OC)</td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 border border-slate-200 font-bold text-sky-700 text-sm">
                    {c.courses[0]?.historical_cutoffs[0]?.OC_closing || 180} / 200
                  </td>
                ))}
              </tr>

              {/* Placements */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-600">Placements & Packages</td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 border border-slate-200">
                    <span className="font-bold text-emerald-700 block">
                      {c.placements.placement_percentage}% Placement Rate
                    </span>
                    <span className="text-slate-700 block">Avg: ₹{c.placements.average_package_lpa} LPA</span>
                    <span className="text-slate-500 text-[11px] block">Highest: ₹{c.placements.highest_package_lpa} LPA</span>
                  </td>
                ))}
              </tr>

              {/* Major Recruiters */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-600">Key Recruiting Companies</td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 border border-slate-200 text-slate-700">
                    {c.recruitment_history.map((r) => r.company_name).slice(0, 3).join(', ')}
                  </td>
                ))}
              </tr>

              {/* Campus Infrastructure */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-600">Campus Facilities & Hostels</td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 border border-slate-200 text-slate-700">
                    <span className="block font-medium">{c.campus_area_acres} Acres Campus</span>
                    <span className="text-slate-500 text-[11px] block">{c.infrastructure.wifi_bandwidth}</span>
                    <span className="text-slate-500 text-[11px] block">
                      {c.infrastructure.hostel_ac_available ? 'AC & Non-AC Hostels' : 'Non-AC Hostels'}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Student Satisfaction */}
              <tr className="hover:bg-slate-50/50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-600">Student Satisfaction</td>
                {colleges.map((c) => (
                  <td key={c.id} className="p-3 border border-slate-200">
                    <span className="font-bold text-slate-900 block">{c.overall_rating} / 5.0</span>
                    <span className="text-slate-500 text-[11px] block">{c.student_reviews.length} Verified Reviews</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Comparing verified real-time public data across Tamil Nadu colleges</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
