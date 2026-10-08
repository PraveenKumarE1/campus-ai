import React from 'react';
import { College } from '../types';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  ShieldAlert, 
  TrendingUp, 
  IndianRupee, 
  Award,
  Shirt,
  Sparkles,
  ExternalLink,
  Clock,
  Compass,
  Layers
} from 'lucide-react';

interface Props {
  college: College;
  onSelect: (college: College) => void;
  onToggleCompare: (college: College) => void;
  isCompared: boolean;
  onInspect3D?: (college: College) => void;
}

export const CollegeCard: React.FC<Props> = ({
  college,
  onSelect,
  onToggleCompare,
  isCompared,
  onInspect3D
}) => {
  const match = college.recommendation_match;
  const primaryCourse = college.courses[0];
  const cutoffOC = primaryCourse?.historical_cutoffs[0]?.OC_closing || 185;

  const isStrict = college.dress_code.strictness_level === 'Strict Formals';
  const isHighFreedom = college.dress_code.strictness_level === 'High Freedom / Casuals';

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden">
      {/* Decorative top accent border based on freedom */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 transition-all ${
          isHighFreedom 
            ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
            : isStrict 
            ? 'bg-gradient-to-r from-rose-500 to-amber-500' 
            : 'bg-gradient-to-r from-sky-500 to-indigo-500'
        }`}
      />

      <div>
        {/* Top Kicker & Verification Status */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5 pt-1">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
              {college.institution_type}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{college.city}, {college.district}</span>
          </div>

          <div className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified ({college.data_confidence}%)</span>
          </div>
        </div>

        {/* Primary College Title & Match Score */}
        <div className="mb-3">
          <div className="flex items-start justify-between gap-3">
            <h3 
              onClick={() => onSelect(college)}
              className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors cursor-pointer leading-snug"
            >
              {college.name}
            </h3>
            {match && (
              <div className="text-right shrink-0 bg-sky-50 px-2.5 py-1 rounded-xl border border-sky-100">
                <span className="text-lg font-black text-sky-700 leading-none block">
                  {match.overall_match_score}%
                </span>
                <span className="text-[9px] uppercase font-bold text-sky-600 tracking-wider">
                  AI Match
                </span>
              </div>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-1 line-clamp-1">{college.accreditation}</p>
        </div>

        {/* DRESS CODE & CAMPUS STRICTNESS INDICATOR */}
        <div className={`p-3 rounded-xl border mb-3.5 space-y-1.5 transition-colors ${
          isStrict 
            ? 'bg-rose-50/60 border-rose-200/80 text-rose-950' 
            : isHighFreedom
            ? 'bg-emerald-50/60 border-emerald-200/80 text-emerald-950'
            : 'bg-sky-50/60 border-sky-200/80 text-sky-950'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-bold text-xs">
              <Shirt className={`w-4 h-4 ${
                isStrict ? 'text-rose-600' : isHighFreedom ? 'text-emerald-600' : 'text-sky-600'
              }`} />
              <span>Dress Code: {college.dress_code.strictness_level}</span>
            </div>
            
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
              isHighFreedom 
                ? 'bg-emerald-100 text-emerald-800' 
                : isStrict 
                ? 'bg-rose-100 text-rose-800'
                : 'bg-sky-100 text-sky-800'
            }`}>
              {college.campus_freedom.score}/10 Freedom
            </span>
          </div>
          
          <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
            {college.dress_code.policy_summary}
          </p>

          <div className="flex items-center justify-between pt-1 border-t border-slate-200/50 text-[10px] text-slate-500">
            <span className="font-medium italic">{college.dress_code.disclaimer}</span>
            <span>{college.dress_code.review_count} student reviews</span>
          </div>
        </div>

        {/* Core Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-2 py-2.5 border-y border-slate-100 text-center mb-3.5">
          <div className="p-1.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">TNEA Cutoff</span>
            <span className="text-sm font-bold text-slate-900">{cutoffOC.toFixed(1)} / 200</span>
            {match?.cutoff_compatibility && (
              <span className={`block text-[10px] font-bold mt-0.5 ${
                match.cutoff_compatibility === 'Safe' ? 'text-emerald-700' :
                match.cutoff_compatibility === 'Moderate' ? 'text-amber-700' : 'text-rose-700'
              }`}>
                {match.cutoff_compatibility}
              </span>
            )}
          </div>

          <div className="p-1.5 border-x border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Yearly Cost</span>
            <span className="text-sm font-bold text-slate-900">
              ₹{(college.fees.total_yearly_estimated / 1000).toFixed(0)}k
            </span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Tuition + Hostel</span>
          </div>

          <div className="p-1.5">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Avg Package</span>
            <span className="text-sm font-bold text-emerald-700">
              ₹{college.placements.average_package_lpa} LPA
            </span>
            <span className="block text-[10px] text-slate-500 mt-0.5">
              {college.placements.highest_package_lpa} LPA Max
            </span>
          </div>
        </div>

        {/* Top Recommendation Highlight Bullet if matched */}
        {match?.reasons && match.reasons.length > 0 && (
          <div className="mb-3.5 text-xs text-slate-600 bg-sky-50/50 p-2.5 rounded-xl border border-sky-100">
            <div className="flex items-center gap-1.5 font-bold text-sky-800 mb-0.5 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Matching Recommendation:</span>
            </div>
            <p className="line-clamp-2 leading-relaxed text-[11px]">{match.reasons[0]}</p>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
        {/* 3D Structure Quick View Button */}
        <button
          onClick={() => onInspect3D ? onInspect3D(college) : onSelect(college)}
          className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1"
          title="Inspect 3D Campus Structure"
        >
          <Building2 className="w-3.5 h-3.5 text-sky-600" />
          <span className="hidden sm:inline">3D Model</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleCompare(college)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              isCompared
                ? 'bg-sky-50 text-sky-700 border-sky-300'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {isCompared ? 'Compared ✓' : '+ Compare'}
          </button>
          
          <button
            onClick={() => onSelect(college)}
            className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-all shadow-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
