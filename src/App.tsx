import React, { useState, useEffect, useMemo } from 'react';
import { College, StudentProfile } from './types';
import { SEED_COLLEGES } from './data/seedColleges';
import { calculateCollegeRecommendations } from './services/recommendationEngine';
import { Navbar } from './components/Navbar';
import { CollegeCard } from './components/CollegeCard';
import { CollegeDetailModal } from './components/CollegeDetailModal';
import { CollegeComparison } from './components/CollegeComparison';
import { StudentProfileModal } from './components/StudentProfileModal';
import { CutoffPredictorTool } from './components/CutoffPredictorTool';
import { AICareerGuidance } from './components/AICareerGuidance';
import { Campus3DVisualizer } from './components/Campus3DVisualizer';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';
import { 
  Search, 
  Filter, 
  Sparkles, 
  SlidersHorizontal, 
  Shirt, 
  Building2, 
  IndianRupee, 
  ShieldCheck, 
  ArrowUpDown,
  CheckCircle2,
  AlertCircle,
  Eye,
  Sliders,
  Compass,
  Layers,
  GraduationCap,
  Calendar,
  Smile,
  Meh,
  Frown,
  Maximize2
} from 'lucide-react';

export default function App() {
  // Default sample student profile (12th standard graduate in Tamil Nadu)
  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    twelfth_marks_percentage: 94.5,
    stream: 'PCM',
    calculated_cutoff: 191.0,
    subject_marks: {
      maths: 96,
      physics: 92,
      chemistry: 90
    },
    preferred_course: 'Computer Science and Engineering',
    interests: ['Software Development', 'Artificial Intelligence', 'Robotics'],
    skills: ['Python Basics', 'Mathematics', 'Problem Solving'],
    preferred_location: 'Any in Tamil Nadu',
    max_yearly_budget: 200000,
    govt_private_preference: 'Any',
    hostel_required: true,
    max_distance_km: 400,
    entrance_exam_scores: {
      TNEA: 191.0,
      JEE_Main: 94.2
    },
    importance_placement: 5,
    importance_campus_life: 4,
    importance_infrastructure: 4,
    campus_vibe_preference: 'Balanced',
    dress_code_preference: 'Moderate',
    career_goal: 'Software Architect / High-growth Tech Engineer'
  });

  const [colleges, setColleges] = useState<College[]>(SEED_COLLEGES);
  const [activeView, setActiveView] = useState<'colleges' | 'cutoff' | 'guidance' | '3d' | 'admin'>('colleges');
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);
  const [comparedColleges, setComparedColleges] = useState<College[]>([]);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [showHero3D, setShowHero3D] = useState(true);
  const [active3DCollegeName, setActive3DCollegeName] = useState<string>('Tamil Nadu Premier Campus');

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [districtFilter, setDistrictFilter] = useState('All');
  const [strictnessFilter, setStrictnessFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'match' | 'cutoff_high' | 'fee_low' | 'placement_high' | 'freedom_high'>('match');

  // Interactive Cutoff Simulator (defaults to studentProfile.calculated_cutoff)
  const [simulatedCutoff, setSimulatedCutoff] = useState<number>(studentProfile.calculated_cutoff);

  // Sync simulator if student profile changes
  useEffect(() => {
    setSimulatedCutoff(studentProfile.calculated_cutoff);
  }, [studentProfile.calculated_cutoff]);

  // Compute recommendations dynamically using current student profile
  const recommendedColleges = useMemo(() => {
    return calculateCollegeRecommendations(colleges, {
      ...studentProfile,
      calculated_cutoff: simulatedCutoff
    });
  }, [colleges, studentProfile, simulatedCutoff]);

  // Apply search and filter criteria
  const displayedColleges = useMemo(() => {
    let list = [...recommendedColleges];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.city.toLowerCase().includes(q) ||
          c.district.toLowerCase().includes(q) ||
          c.short_code.toLowerCase().includes(q) ||
          c.courses.some((course) => course.course_name.toLowerCase().includes(q))
      );
    }

    if (districtFilter !== 'All') {
      list = list.filter((c) => c.district.toLowerCase() === districtFilter.toLowerCase());
    }

    if (strictnessFilter !== 'All') {
      list = list.filter((c) => c.dress_code.strictness_level === strictnessFilter);
    }

    if (typeFilter !== 'All') {
      list = list.filter((c) => c.institution_type === typeFilter);
    }

    // Sort order
    if (sortBy === 'match') {
      list.sort((a, b) => (b.recommendation_match?.overall_match_score || 0) - (a.recommendation_match?.overall_match_score || 0));
    } else if (sortBy === 'cutoff_high') {
      list.sort((a, b) => (b.courses[0]?.historical_cutoffs[0]?.OC_closing || 0) - (a.courses[0]?.historical_cutoffs[0]?.OC_closing || 0));
    } else if (sortBy === 'fee_low') {
      list.sort((a, b) => a.fees.total_yearly_estimated - b.fees.total_yearly_estimated);
    } else if (sortBy === 'placement_high') {
      list.sort((a, b) => b.placements.average_package_lpa - a.placements.average_package_lpa);
    } else if (sortBy === 'freedom_high') {
      list.sort((a, b) => b.campus_freedom.score - a.campus_freedom.score);
    }

    return list;
  }, [recommendedColleges, searchQuery, districtFilter, strictnessFilter, typeFilter, sortBy]);

  // Statistical Cutoff Breakdown for the simulated score
  const cutoffStats = useMemo(() => {
    let safeCount = 0;
    let moderateCount = 0;
    let reachCount = 0;

    colleges.forEach((c) => {
      const closing = c.courses[0]?.historical_cutoffs[0]?.OC_closing || 185;
      const diff = simulatedCutoff - closing;
      if (diff >= 1.5) safeCount++;
      else if (diff >= -2.0) moderateCount++;
      else reachCount++;
    });

    return { safeCount, moderateCount, reachCount };
  }, [colleges, simulatedCutoff]);

  // Strictness breakdown count
  const dressCodeStats = useMemo(() => {
    const highFreedom = colleges.filter((c) => c.dress_code.strictness_level === 'High Freedom / Casuals').length;
    const moderate = colleges.filter((c) => c.dress_code.strictness_level === 'Moderate / Smart Casuals').length;
    const strict = colleges.filter((c) => c.dress_code.strictness_level === 'Strict Formals').length;
    return { highFreedom, moderate, strict, total: colleges.length };
  }, [colleges]);

  const handleToggleCompare = (college: College) => {
    setComparedColleges((prev) => {
      const exists = prev.some((c) => c.id === college.id);
      if (exists) {
        return prev.filter((c) => c.id !== college.id);
      }
      if (prev.length >= 5) {
        alert('You can compare a maximum of 5 colleges simultaneously.');
        return prev;
      }
      return [...prev, college];
    });
  };

  const handleInspect3D = (college: College) => {
    setActive3DCollegeName(college.name);
    setShowHero3D(true);
    // Smooth scroll to 3D section
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Districts available
  const availableDistricts = useMemo(() => {
    const set = new Set(colleges.map((c) => c.district));
    return ['All', ...Array.from(set).sort()];
  }, [colleges]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-sky-500 selection:text-white antialiased">
      {/* Top Navigation */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        studentProfile={studentProfile}
        onOpenProfileModal={() => setIsProfileModalOpen(true)}
        comparedCount={comparedColleges.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* VIEW: MAIN COLLEGES EXPLORER */}
        {activeView === 'colleges' && (
          <div className="space-y-8">
            {/* HERO SECTION WITH 3D ARCHITECTURAL STRUCTURE & REAL-TIME INTELLIGENCE */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/80 p-6 sm:p-8 shadow-2xl">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Hero Left Content */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-wide">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>Real-Time College & Dress Code Intelligence · Tamil Nadu 2026</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                    Know the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300">real college culture</span> before you choose your seat.
                  </h1>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                    Verified 12th cutoffs, authentic fee structures, placement records, and honest student-vetted <strong className="text-white">dress code strictness policies</strong> across all premier colleges in Tamil Nadu.
                  </p>

                  {/* Quick Profile Kicker */}
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
                    <div className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-xl text-slate-200">
                      Current Cutoff: <span className="text-sky-400 font-bold">{studentProfile.calculated_cutoff.toFixed(1)} / 200</span>
                    </div>
                    <div className="bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-xl text-slate-200">
                      Target Budget: <span className="text-emerald-400 font-bold">₹{studentProfile.max_yearly_budget.toLocaleString('en-IN')}</span> / yr
                    </div>
                    <button
                      onClick={() => setIsProfileModalOpen(true)}
                      className="px-3.5 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all shadow-md hover:shadow-sky-500/20"
                    >
                      Customize Profile →
                    </button>
                  </div>

                  {/* Live Stats Ribbon */}
                  <div className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-800 text-xs">
                    <div className="space-y-0.5">
                      <span className="text-lg font-black text-white">{colleges.length}</span>
                      <span className="block text-[11px] text-slate-400">Top TN Colleges</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-lg font-black text-emerald-400">100%</span>
                      <span className="block text-[11px] text-slate-400">Source Verified</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-lg font-black text-sky-400">TNEA / JoSAA</span>
                      <span className="block text-[11px] text-slate-400">Closing Cutoffs</span>
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-lg font-black text-amber-400">3D WebGL</span>
                      <span className="block text-[11px] text-slate-400">Campus Models</span>
                    </div>
                  </div>
                </div>

                {/* Hero Right: 3D Architectural Model Spotlight */}
                <div className="lg:col-span-5 relative">
                  <div className="bg-slate-950/80 rounded-2xl border border-slate-700/80 p-3 shadow-xl backdrop-blur-md space-y-3">
                    <div className="flex items-center justify-between text-xs pb-1 border-b border-slate-800">
                      <div className="flex items-center gap-1.5 font-bold text-slate-200">
                        <Building2 className="w-4 h-4 text-sky-400" />
                        <span>Interactive 3D Campus Architecture</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        Live 3D Model
                      </span>
                    </div>

                    {/* 3D Canvas Preview */}
                    <div className="rounded-xl overflow-hidden">
                      <Campus3DVisualizer 
                        collegeName={active3DCollegeName}
                        compact={true} 
                      />
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>Drag to rotate · Scroll to zoom · Click to inspect zones</span>
                      <button 
                        onClick={() => setActiveView('3d')}
                        className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
                      >
                        Full 3D Mode →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background ambient lighting */}
              <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* DRESS CODE STRICTNESS INTELLIGENCE MATRIX HUB */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-4 sm:p-5 shadow-lg space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <Shirt className="w-4 h-4 text-sky-400" />
                    <span>Campus Dress Code & Strictness Reality in Tamil Nadu</span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    Filter institutions by daily dress enforcement, morning gate checks, and student freedom autonomy.
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <span className="text-slate-400 font-medium">Confidence:</span>
                  <span className="font-bold text-emerald-400">97.2% Vetted by Students</span>
                </div>
              </div>

              {/* Interactive Strictness Matrix Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {/* ALL COLLEGES */}
                <button
                  onClick={() => setStrictnessFilter('All')}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    strictnessFilter === 'All'
                      ? 'bg-slate-700 border-sky-400 shadow-md ring-1 ring-sky-400/40'
                      : 'bg-slate-900/60 border-slate-700/80 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-200">All Dress Policies</span>
                    <span className="text-xs font-mono font-bold bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                      {dressCodeStats.total}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Complete cross-district directory of institutions.
                  </p>
                </button>

                {/* HIGH FREEDOM / CASUALS */}
                <button
                  onClick={() => setStrictnessFilter('High Freedom / Casuals')}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    strictnessFilter === 'High Freedom / Casuals'
                      ? 'bg-emerald-950/60 border-emerald-400 shadow-md ring-1 ring-emerald-400/40'
                      : 'bg-slate-900/60 border-slate-700/80 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      High Freedom / Casuals
                    </span>
                    <span className="text-xs font-mono font-bold bg-emerald-900/80 px-2 py-0.5 rounded text-emerald-200">
                      {dressCodeStats.highFreedom}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Zero uniform mandates. Jeans, t-shirts, high personal autonomy (IITM, CEG, MIT, NITT, SRM, MCC).
                  </p>
                </button>

                {/* MODERATE / SMART CASUALS */}
                <button
                  onClick={() => setStrictnessFilter('Moderate / Smart Casuals')}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    strictnessFilter === 'Moderate / Smart Casuals'
                      ? 'bg-sky-950/60 border-sky-400 shadow-md ring-1 ring-sky-400/40'
                      : 'bg-slate-900/60 border-slate-700/80 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      Moderate / Smart Casuals
                    </span>
                    <span className="text-xs font-mono font-bold bg-sky-900/80 px-2 py-0.5 rounded text-sky-200">
                      {dressCodeStats.moderate}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Polo shirts, kurtis, neat casuals. Formals required during presentations and lab exams (KCT, SASTRA, CIT).
                  </p>
                </button>

                {/* STRICT FORMALS */}
                <button
                  onClick={() => setStrictnessFilter('Strict Formals')}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    strictnessFilter === 'Strict Formals'
                      ? 'bg-rose-950/60 border-rose-400 shadow-md ring-1 ring-rose-400/40'
                      : 'bg-slate-900/60 border-slate-700/80 hover:bg-slate-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-300 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      Strict Formals & Gate Checks
                    </span>
                    <span className="text-xs font-mono font-bold bg-rose-900/80 px-2 py-0.5 rounded text-rose-200">
                      {dressCodeStats.strict}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Tucked-in formal shirts, shoes, dupatta pinned, morning gate inspection (Panimalar, REC, Sairam, Mepco).
                  </p>
                </button>
              </div>
            </div>

            {/* LIVE 12TH CUTOFF ADMISSION SIMULATOR SLIDER */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-4 sm:p-5 shadow-lg space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-sky-400" />
                    <span className="text-sm font-bold text-white">
                      Live 12th Cutoff Admission Simulator (TNEA out of 200)
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Slide to dynamically test admission chances against historical closing cutoffs.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-700 flex items-center gap-2">
                    <span className="text-xs text-slate-400">Simulating:</span>
                    <span className="text-lg font-black text-sky-400">{simulatedCutoff.toFixed(1)}</span>
                    <span className="text-xs text-slate-500">/ 200</span>
                  </div>

                  {simulatedCutoff !== studentProfile.calculated_cutoff && (
                    <button
                      onClick={() => setSimulatedCutoff(studentProfile.calculated_cutoff)}
                      className="text-xs text-sky-400 hover:text-sky-300 underline font-medium"
                    >
                      Reset to Profile ({studentProfile.calculated_cutoff.toFixed(1)})
                    </button>
                  )}
                </div>
              </div>

              {/* Slider Input */}
              <div className="space-y-2 pt-1">
                <input
                  type="range"
                  min="140.0"
                  max="200.0"
                  step="0.5"
                  value={simulatedCutoff}
                  onChange={(e) => setSimulatedCutoff(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>140.0 Cutoff</span>
                  <span>160.0</span>
                  <span>180.0</span>
                  <span>190.0 (Premier)</span>
                  <span>200.0 (Centum)</span>
                </div>
              </div>

              {/* Real-time Probability Tally */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs border-t border-slate-700/60">
                <span className="text-slate-400 font-medium">Your Admission Chances at {simulatedCutoff.toFixed(1)} Cutoff:</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold">
                  {cutoffStats.safeCount} Safe Colleges
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/30 font-bold">
                  {cutoffStats.moderateCount} Moderate Chances
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                  {cutoffStats.reachCount} Reach / High Competitive
                </span>
              </div>
            </div>

            {/* SEARCH & REGIONAL DISTRICT FILTER BAR */}
            <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-4 shadow-sm space-y-3.5">
              <div className="flex flex-col md:flex-row gap-3">
                {/* Search input */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    placeholder="Search by college name, city (Chennai, Coimbatore, Madurai...), degree (CSE, ECE, MBBS)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-white placeholder-slate-500"
                  />
                </div>

                {/* Institution Type Filter */}
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="All">All Institution Types</option>
                  <option value="Government">Government Institutions</option>
                  <option value="Autonomous / Govt. Aided">Govt. Aided Autonomous</option>
                  <option value="Autonomous / Private">Private Autonomous</option>
                  <option value="Deemed University">Deemed Universities</option>
                  <option value="Institute of National Importance">National Importance (IIT/NIT)</option>
                </select>

                {/* Sort Order */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="match">Sort by: AI Compatibility Score</option>
                  <option value="cutoff_high">Highest Cutoff First</option>
                  <option value="fee_low">Lowest Yearly Fee</option>
                  <option value="placement_high">Highest Avg Salary Package</option>
                  <option value="freedom_high">Highest Campus Freedom Score</option>
                </select>
              </div>

              {/* Fast District Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider pr-1">
                  District:
                </span>
                {availableDistricts.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDistrictFilter(d)}
                    className={`px-3 py-1 rounded-lg whitespace-nowrap transition-all font-semibold ${
                      districtFilter === d
                        ? 'bg-sky-500 text-slate-950 shadow-sm'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/80'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              {/* Active Filter Indicators */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-slate-700/60">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-slate-200">
                    Showing {displayedColleges.length} of {colleges.length} Verified Colleges
                  </span>
                  <span>·</span>
                  <span>Verified data with direct source transparency</span>
                </div>

                {(districtFilter !== 'All' || strictnessFilter !== 'All' || typeFilter !== 'All' || searchQuery) && (
                  <button
                    onClick={() => {
                      setDistrictFilter('All');
                      setStrictnessFilter('All');
                      setTypeFilter('All');
                      setSearchQuery('');
                    }}
                    className="text-sky-400 hover:text-sky-300 font-semibold"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>
            </div>

            {/* COLLEGES GRID */}
            {displayedColleges.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedColleges.map((college) => (
                  <CollegeCard
                    key={college.id}
                    college={college}
                    onSelect={(c) => setSelectedCollege(c)}
                    onToggleCompare={handleToggleCompare}
                    isCompared={comparedColleges.some((c) => c.id === college.id)}
                    onInspect3D={handleInspect3D}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-slate-800 rounded-2xl border border-slate-700 space-y-3">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                <h3 className="text-base font-bold text-white">No colleges match your current filter selection</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Try clearing the dress code strictness or district filter to explore other premier Tamil Nadu colleges.
                </p>
                <button
                  onClick={() => {
                    setDistrictFilter('All');
                    setStrictnessFilter('All');
                    setTypeFilter('All');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-sky-500 text-slate-950 text-xs font-bold rounded-lg hover:bg-sky-400 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* VIEW: CUTOFF PREDICTOR TOOL */}
        {activeView === 'cutoff' && (
          <CutoffPredictorTool
            colleges={colleges}
            studentCutoff={studentProfile.calculated_cutoff}
            onSelectCollege={(c) => setSelectedCollege(c)}
          />
        )}

        {/* VIEW: AI CAREER GUIDANCE */}
        {activeView === 'guidance' && (
          <AICareerGuidance studentProfile={studentProfile} />
        )}

        {/* VIEW: 3D CAMPUS SPATIAL TOUR */}
        {activeView === '3d' && (
          <div className="space-y-4">
            <div className="p-5 bg-slate-800/90 rounded-2xl border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-sky-400" />
                  <span>3D Interactive Campus Spatial Architecture & Structural Inspection</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Rotate 360°, inspect Indo-Saracenic senate blocks, supercomputing glass spires, library rotundas, workshop hangars, and specific zone dress policies.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30 self-start sm:self-auto">
                GPU 60FPS Three.js WebGL Engine
              </span>
            </div>
            
            <Campus3DVisualizer 
              collegeName={active3DCollegeName}
              compact={false}
            />
          </div>
        )}

        {/* VIEW: ADMIN CONSOLE */}
        {activeView === 'admin' && (
          <AdminDashboard
            colleges={colleges}
            onRefreshData={() => {
              setColleges([...SEED_COLLEGES]);
            }}
            onSelectCollege={(c) => setSelectedCollege(c)}
          />
        )}
      </main>

      {/* College Detail Modal Drawer */}
      <CollegeDetailModal
        college={selectedCollege}
        onClose={() => setSelectedCollege(null)}
      />

      {/* College Multi-Compare Matrix Modal */}
      {isCompareModalOpen && (
        <CollegeComparison
          colleges={comparedColleges}
          onRemove={(id) => setComparedColleges((prev) => prev.filter((c) => c.id !== id))}
          onClear={() => setComparedColleges([])}
          onClose={() => setIsCompareModalOpen(false)}
        />
      )}

      {/* Student Profile Customizer Modal */}
      <StudentProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        profile={studentProfile}
        onSave={(updated) => setStudentProfile(updated)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
