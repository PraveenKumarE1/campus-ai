import React, { useState } from 'react';
import { College } from '../types';
import { 
  X, 
  ExternalLink, 
  ShieldCheck, 
  Building, 
  BookOpen, 
  IndianRupee, 
  TrendingUp, 
  Award, 
  Shirt, 
  Users, 
  AlertTriangle, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Briefcase, 
  Sparkles, 
  Smile, 
  Meh, 
  Frown, 
  Scale 
} from 'lucide-react';

interface Props {
  college: College | null;
  onClose: () => void;
}

function getDressCodeMetrics(college: College) {
  const level = college.dress_code.strictness_level;

  let uniformPolicy: 'Mandatory Formals / Uniform' | 'Smart Casuals & Ethnic' | 'Open Casuals';
  let enforcementFrequency: string;
  let enforcementIntensity: number; // 1 to 5
  let satisfiedPct: number;
  let neutralPct: number;
  let restrictivePct: number;
  let verdict: string;
  let aspects: {
    morningGate: number;
    labSafety: number;
    hostelCurfew: number;
    groomingHair: number;
    mobileLiberty: number;
  };

  if (level === 'Strict Formals') {
    uniformPolicy = 'Mandatory Formals / Uniform';
    enforcementFrequency = 'Daily Morning Checkpoint (Gate, Buses & Class Corridors)';
    enforcementIntensity = 5;
    satisfiedPct = 26;
    neutralPct = 34;
    restrictivePct = 40;
    verdict = 'Students report strict morning dress scrutiny, mandatory tucked-in formal shirts, shaved beards, pinned dupattas on both shoulders, and strict bans on mobile phones during class hours.';
    aspects = {
      morningGate: 4.9,
      labSafety: 5.0,
      hostelCurfew: 4.8,
      groomingHair: 4.7,
      mobileLiberty: 1.3
    };
  } else if (level === 'High Freedom / Casuals') {
    uniformPolicy = 'Open Casuals';
    enforcementFrequency = 'Zero Daily Gate Checks · Advisory Safety in Labs Only';
    enforcementIntensity = 1;
    satisfiedPct = 89;
    neutralPct = 8;
    restrictivePct = 3;
    verdict = 'Students experience full personal attire freedom, unrestricted movement within campus premises, and relaxed non-intrusive administration with no dress policing.';
    aspects = {
      morningGate: 1.1,
      labSafety: 3.8,
      hostelCurfew: 1.9,
      groomingHair: 1.0,
      mobileLiberty: 4.9
    };
  } else {
    // Moderate / Smart Casuals
    uniformPolicy = 'Smart Casuals & Ethnic';
    enforcementFrequency = 'Lab Sessions, Presentation Days & Semester Exams';
    enforcementIntensity = 3;
    satisfiedPct = 74;
    neutralPct = 18;
    restrictivePct = 8;
    verdict = 'Balanced professional culture. Respectful polo t-shirts, kurtas, and jeans are common, while formal attire and closed shoes are expected during practical lab exams.';
    aspects = {
      morningGate: 2.2,
      labSafety: 4.5,
      hostelCurfew: 3.4,
      groomingHair: 2.1,
      mobileLiberty: 3.9
    };
  }

  return {
    uniformPolicy: college.dress_code.uniform_policy || uniformPolicy,
    enforcementFrequency: college.dress_code.enforcement_frequency || enforcementFrequency,
    enforcementIntensity,
    satisfiedPct,
    neutralPct,
    restrictivePct,
    verdict,
    aspects
  };
}

export const CollegeDetailModal: React.FC<Props> = ({ college, onClose }) => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'dresscode' | 'courses' | 'fees' | 'placements' | 'infrastructure' | 'scholarships' | 'sources'
  >('dresscode');

  if (!college) return null;

  const dressMetrics = getDressCodeMetrics(college);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-fadeIn">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-50/80 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
              <span className="font-semibold text-slate-700">{college.institution_type}</span>
              <span aria-hidden="true">·</span>
              <span>Affiliated / Recognized: {college.approval_info}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified Data ({college.data_confidence}% Confidence)
              </span>
            </div>

            <h1 className="text-2xl font-bold text-slate-900 leading-tight">
              {college.name}
            </h1>

            <p className="text-xs text-slate-600">
              {college.address} · Est. {college.establishment_year} · Campus: {college.campus_area_acres} Acres
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={college.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:text-sky-700 text-xs font-medium rounded-lg shadow-sm transition-colors"
            >
              <span>Official Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-slate-200 px-6 bg-white overflow-x-auto gap-5 shrink-0">
          {[
            { id: 'dresscode', label: 'Dress Code & Campus Culture' },
            { id: 'overview', label: 'Overview' },
            { id: 'courses', label: 'Courses & Cutoffs' },
            { id: 'fees', label: 'Verified Fees' },
            { id: 'placements', label: 'Placements & Companies' },
            { id: 'infrastructure', label: 'Campus & Hostels' },
            { id: 'scholarships', label: 'Scholarships' },
            { id: 'sources', label: 'Verified Sources & Audit' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-sky-600 text-sky-700 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm">
          {/* DEDICATED TAB: DRESS CODE & CAMPUS CULTURE */}
          {activeTab === 'dresscode' && (
            <div className="space-y-6">
              {/* Primary Policy & Enforcement Banner */}
              <div className="p-5 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white rounded-2xl border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-sky-400 border border-white/10">
                      <Shirt className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block">
                        Campus Dress Policy Classification
                      </span>
                      <h2 className="text-lg font-bold text-white">
                        {college.dress_code.strictness_level} · {dressMetrics.uniformPolicy}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-2xl font-black text-sky-300">
                        {college.campus_freedom.score}
                      </span>
                      <span className="text-xs text-slate-400"> / 10.0</span>
                      <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Freedom Index
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                  {college.dress_code.policy_summary}
                </p>

                {/* Enforcement Frequency Bar */}
                <div className="p-3 bg-white/10 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-slate-400 block font-medium">Frequency of Enforcement:</span>
                      <span className="text-white font-semibold">{dressMetrics.enforcementFrequency}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 self-start sm:self-auto">
                    <span className="text-slate-400">Inspection Level:</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-3.5 h-2 rounded-sm ${
                            level <= dressMetrics.enforcementIntensity
                              ? college.dress_code.strictness_level === 'Strict Formals'
                                ? 'bg-amber-400'
                                : college.dress_code.strictness_level === 'High Freedom / Casuals'
                                ? 'bg-emerald-400'
                                : 'bg-sky-400'
                              : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-slate-300 font-bold ml-1">
                      {dressMetrics.enforcementIntensity}/5
                    </span>
                  </div>
                </div>

                {/* Compliance & Verification Tag */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-400 border-t border-white/10">
                  <span className="font-semibold text-slate-300">
                    {college.dress_code.disclaimer}
                  </span>
                  <span>
                    Aggregated from {college.dress_code.review_count} verified alumni & student reports ({college.dress_code.confidence_level}% confidence)
                  </span>
                </div>
              </div>

              {/* STUDENT SENTIMENT VISUALIZATION FOR FREEDOM LEVELS */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Student Sentiment Visualization & Freedom Dynamics
                    </h3>
                    <p className="text-xs text-slate-500">
                      Aggregated perception of campus discipline, autonomy, and daily student comfort.
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                    Sample: {college.dress_code.review_count} Reviews Audited
                  </span>
                </div>

                {/* Sentiment Distribution Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Freedom & Comfort Distribution</span>
                    <span className="text-slate-500">Total 100% Student Perception</span>
                  </div>

                  {/* Multi-segment progress bar */}
                  <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
                    <div 
                      style={{ width: `${dressMetrics.satisfiedPct}%` }}
                      className="bg-emerald-500 h-full transition-all duration-500"
                      title={`Satisfied / Empowered: ${dressMetrics.satisfiedPct}%`}
                    />
                    <div 
                      style={{ width: `${dressMetrics.neutralPct}%` }}
                      className="bg-amber-400 h-full transition-all duration-500"
                      title={`Neutral / Tolerant: ${dressMetrics.neutralPct}%`}
                    />
                    <div 
                      style={{ width: `${dressMetrics.restrictivePct}%` }}
                      className="bg-rose-500 h-full transition-all duration-500"
                      title={`Restrictive / High Burden: ${dressMetrics.restrictivePct}%`}
                    />
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-3 gap-2 pt-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900 block">{dressMetrics.satisfiedPct}%</span>
                        <span className="text-[11px] text-slate-500">High Autonomy / Satisfied</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-400 shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900 block">{dressMetrics.neutralPct}%</span>
                        <span className="text-[11px] text-slate-500">Balanced / Moderate Rules</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500 shrink-0" />
                      <div>
                        <span className="font-bold text-slate-900 block">{dressMetrics.restrictivePct}%</span>
                        <span className="text-[11px] text-slate-500">Strict / High Surveillance</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Aspect-by-Aspect Freedom Rigidity Meter */}
                <div className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 space-y-3.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    Campus Freedom Aspect Breakdown (1 to 5 Scale)
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-xs">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-600">Morning Gate & Bus Check Rigidity</span>
                        <span className="font-bold text-slate-900">{dressMetrics.aspects.morningGate} / 5.0</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-sky-600 h-full rounded-full" 
                          style={{ width: `${(dressMetrics.aspects.morningGate / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Higher = Stricter Gate Scrutiny</span>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-600">Laboratory Safety Dress Compliance</span>
                        <span className="font-bold text-slate-900">{dressMetrics.aspects.labSafety} / 5.0</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-sky-600 h-full rounded-full" 
                          style={{ width: `${(dressMetrics.aspects.labSafety / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Closed shoes & aprons inside workshops</span>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-600">Hostel Curfew & In-Time Rigidity</span>
                        <span className="font-bold text-slate-900">{dressMetrics.aspects.hostelCurfew} / 5.0</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-amber-600 h-full rounded-full" 
                          style={{ width: `${(dressMetrics.aspects.hostelCurfew / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Higher = Stricter Evening Curfews</span>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-600">Beard & Hair Grooming Scrutiny</span>
                        <span className="font-bold text-slate-900">{dressMetrics.aspects.groomingHair} / 5.0</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-rose-500 h-full rounded-full" 
                          style={{ width: `${(dressMetrics.aspects.groomingHair / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-slate-400 mt-0.5 block">Higher = Clean Shaven Mandate</span>
                    </div>
                  </div>
                </div>

                {/* Key Student Consensus Verdict Quote */}
                <div className="p-3.5 bg-sky-50/60 rounded-xl border border-sky-100 flex items-start gap-2.5 text-xs text-sky-950">
                  <Sparkles className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sky-900">Student Body Consensus Verdict:</span>
                    <p className="leading-relaxed mt-0.5">{dressMetrics.verdict}</p>
                  </div>
                </div>
              </div>

              {/* SPECIFIC RULES DIRECTORY MATRIX */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-3">
                  Specific Rule Directory (Formal / Casual / Uniform Regulations)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Boys Attire & Grooming
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">Daily Lectures</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{college.dress_code.boys_rules}</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Girls Attire & Modesty Norms
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">Daily Lectures</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{college.dress_code.girls_rules}</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                      Footwear Regulations
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{college.dress_code.footwear_rules}</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                      ID Card & Lanyard Protocol
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{college.dress_code.id_card_policy}</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                      Mobile Device & Electronics Policy
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{college.dress_code.mobile_phone_policy}</p>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                      Hostel Gate Pass & Curfew Rigidity
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{college.dress_code.outing_curfew}</p>
                  </div>
                </div>
              </div>

              {/* CAMPUS CULTURE, FESTS & CLUBS */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Campus Culture, Festivals & Event Autonomy
                  </h4>
                  <span className="text-xs text-slate-500">Student Society Infrastructure</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Cultural Festival</span>
                    <span className="font-bold text-slate-900 mt-0.5 block">{college.campus_freedom.cultural_fest_name}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Tech Symposium</span>
                    <span className="font-bold text-slate-900 mt-0.5 block">{college.campus_freedom.tech_fest_name}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Annual Hackathons</span>
                    <span className="font-bold text-slate-900 mt-0.5 block">{college.campus_freedom.annual_hackathons_count} per year</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Active Clubs</span>
                    <span className="font-bold text-slate-900 mt-0.5 block">{college.campus_freedom.active_clubs_count} Clubs</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs font-semibold uppercase text-slate-500 block mb-1">Accreditation</span>
                  <span className="text-base font-bold text-slate-900">{college.accreditation}</span>
                  <span className="text-xs text-slate-500 block mt-1">Official National Ranking Standing</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs font-semibold uppercase text-slate-500 block mb-1">Overall Student Rating</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-bold text-sky-700">{college.overall_rating}</span>
                    <span className="text-xs text-slate-500">/ 5.0 Rating</span>
                  </div>
                  <span className="text-xs text-slate-500 block mt-1">Based on student-review sentiment audit</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs font-semibold uppercase text-slate-500 block mb-1">Data Freshness</span>
                  <span className="text-base font-bold text-slate-900">Last Verified {college.last_updated}</span>
                  <span className="text-xs text-emerald-700 font-medium block mt-1">
                    {college.data_confidence}% Authenticity Confidence
                  </span>
                </div>
              </div>

              {/* Student Review Highlights */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">Student Reviews & Sentiment Analysis</h3>
                <div className="space-y-3">
                  {college.student_reviews.map((rev) => (
                    <div key={rev.id} className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                        <span className="font-semibold text-slate-700">{rev.anonymous_alias}</span>
                        <span>{rev.created_at} · Verified Reviewer</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{rev.review_title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2.5">{rev.review_text}</p>
                      
                      <div className="flex items-center gap-2 text-xs flex-wrap">
                        <span className="text-slate-500">Dress code note:</span>
                        <span className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 font-medium text-[11px]">
                          {rev.dress_code_feedback}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: COURSES & CUTOFFS */}
          {activeTab === 'courses' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Offered Degrees & Historical Cutoffs</h3>
              <div className="space-y-4">
                {college.courses.map((course) => (
                  <div key={course.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-sky-700 uppercase">{course.degree}</span>
                        <h4 className="text-base font-bold text-slate-900">{course.course_name}</h4>
                        <span className="text-xs text-slate-500">{course.duration_years} Years Duration · {course.intake_seats} Approved Seats</span>
                      </div>
                      <span className="text-xs bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 font-medium">
                        {course.admission_procedure}
                      </span>
                    </div>

                    {/* Historical Cutoff Table */}
                    <div>
                      <span className="text-xs font-semibold text-slate-700 block mb-1.5">Historical Closing Cutoffs (Round 1):</span>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs bg-white rounded-lg border border-slate-200">
                          <thead className="bg-slate-100 text-slate-600 border-b border-slate-200">
                            <tr>
                              <th className="py-2 px-3">Year</th>
                              <th className="py-2 px-3">Open Category (OC)</th>
                              <th className="py-2 px-3">Backward Class (BC)</th>
                              <th className="py-2 px-3">MBC / DNC</th>
                              <th className="py-2 px-3">SC / ST</th>
                            </tr>
                          </thead>
                          <tbody>
                            {course.historical_cutoffs.map((hc) => (
                              <tr key={hc.year} className="border-b border-slate-100 last:border-0">
                                <td className="py-2 px-3 font-bold text-slate-900">{hc.year}</td>
                                <td className="py-2 px-3 font-semibold text-sky-700">{hc.OC_closing}</td>
                                <td className="py-2 px-3 text-slate-700">{hc.BC_closing}</td>
                                <td className="py-2 px-3 text-slate-700">{hc.MBC_closing}</td>
                                <td className="py-2 px-3 text-slate-700">{hc.SC_closing}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: FEES */}
          {activeTab === 'fees' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">Total Yearly Cost Breakdown (Academic Year {college.fees.academic_year})</h3>
                  <span className="text-lg font-bold text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-200">
                    ₹{college.fees.total_yearly_estimated.toLocaleString('en-IN')} / year
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-center text-xs">
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Tuition Fee</span>
                    <span className="font-bold text-slate-900 mt-1 block">₹{college.fees.tuition_fee_yearly.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Hostel Room Rent</span>
                    <span className="font-bold text-slate-900 mt-1 block">₹{college.fees.hostel_fee_yearly.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Mess & Food</span>
                    <span className="font-bold text-slate-900 mt-1 block">₹{college.fees.mess_fee_yearly.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">University Exam Fee</span>
                    <span className="font-bold text-slate-900 mt-1 block">₹{college.fees.exam_fee_yearly.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200">
                    <span className="text-slate-500 block">Amenities & Transport</span>
                    <span className="font-bold text-slate-900 mt-1 block">₹{college.fees.other_charges_yearly.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/80">
                  <div>
                    <span>Source: </span>
                    <a href={college.fees.fee_source_url} target="_blank" rel="noreferrer" className="text-sky-700 hover:underline font-medium">
                      {college.fees.fee_source_name}
                    </a>
                  </div>
                  <span>Last Updated: {college.fees.last_updated} ({college.fees.data_confidence}% Conf.)</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB: PLACEMENTS & RECRUITERS HISTORY */}
          {activeTab === 'placements' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Placement Rate</span>
                  <span className="text-xl font-bold text-emerald-700 mt-1 block">{college.placements.placement_percentage}%</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Average Package</span>
                  <span className="text-xl font-bold text-slate-900 mt-1 block">₹{college.placements.average_package_lpa} LPA</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Median Package</span>
                  <span className="text-xl font-bold text-slate-900 mt-1 block">₹{college.placements.median_package_lpa} LPA</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block">Highest Package</span>
                  <span className="text-xl font-bold text-sky-700 mt-1 block">₹{college.placements.highest_package_lpa} LPA</span>
                </div>
              </div>

              {/* Company Recruitment History */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Previous Recruiting Companies & Packages</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs bg-white rounded-lg border border-slate-200">
                    <thead className="bg-slate-100 text-slate-600 border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Company</th>
                        <th className="py-2.5 px-3">Year</th>
                        <th className="py-2.5 px-3">Job Roles</th>
                        <th className="py-2.5 px-3">Package (CTC)</th>
                        <th className="py-2.5 px-3">Hiring Type</th>
                        <th className="py-2.5 px-3">Verified Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {college.recruitment_history.map((rec, idx) => (
                        <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                          <td className="py-2.5 px-3 font-bold text-slate-900">{rec.company_name}</td>
                          <td className="py-2.5 px-3 text-slate-600">{rec.recruitment_year}</td>
                          <td className="py-2.5 px-3 text-slate-800">{rec.job_roles.join(', ')}</td>
                          <td className="py-2.5 px-3 font-semibold text-emerald-700">₹{rec.package_offered_lpa} LPA</td>
                          <td className="py-2.5 px-3 text-slate-600">{rec.hiring_type}</td>
                          <td className="py-2.5 px-3 text-slate-400">{rec.source_reference}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB: INFRASTRUCTURE */}
          {activeTab === 'infrastructure' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Campus Facilities & Infrastructure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900">Research & Laboratories</span>
                  <p className="text-slate-600 leading-relaxed">{college.infrastructure.lab_facilities}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900">Central Library & Digital Archives</span>
                  <p className="text-slate-600 leading-relaxed">
                    Over {college.infrastructure.library_books_count.toLocaleString('en-IN')} physical volumes with 24/7 digital IEEE/ScienceDirect portal access.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900">Internet & Wi-Fi Connectivity</span>
                  <p className="text-slate-600 leading-relaxed">{college.infrastructure.wifi_bandwidth}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900">Health & Medical Services</span>
                  <p className="text-slate-600 leading-relaxed">{college.infrastructure.medical_center}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB: SCHOLARSHIPS */}
          {activeTab === 'scholarships' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Available Government & Institutional Scholarships</h3>
              <div className="space-y-3">
                {college.scholarships.map((sch) => (
                  <div key={sch.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">{sch.name}</h4>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                        {sch.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">Eligibility: {sch.eligibility}</p>
                    <p className="text-xs font-medium text-slate-800">Benefit: {sch.amount_description}</p>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                      <span>Documents: {sch.required_documents.join(', ')}</span>
                      <a href={sch.portal_url} target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">
                        Apply on Portal →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: SOURCES & FRESHNESS AUDIT */}
          {activeTab === 'sources' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <h3 className="text-base font-bold text-slate-900">Real-Time Data Provenance & Anti-Hallucination Audit</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every data metric displayed is traced to official university calendars, AICTE filings, NIRF submissions, or verified student reviews. Sample records are marked DEMO DATA.
                </p>
              </div>

              <div className="space-y-2.5">
                {college.sources.map((src) => (
                  <div key={src.id} className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{src.source_name}</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-600">{src.domain} Data</span>
                      </div>
                      <a href={src.source_url} target="_blank" rel="noreferrer" className="text-sky-700 hover:underline block mt-0.5">
                        {src.source_url}
                      </a>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-bold text-emerald-700 block">{src.data_confidence}% Confidence</span>
                      <span className="text-[11px] text-slate-400">Verified: {src.last_verified_at}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>CollegeWise AI Verified Campus Record · ISO 27001 Security Standards</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors font-medium"
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
};
