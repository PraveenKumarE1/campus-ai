import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Calculator, 
  Compass, 
  ShieldCheck, 
  Scale, 
  User, 
  Building2
} from 'lucide-react';
import { StudentProfile } from '../types';

interface Props {
  activeView: 'colleges' | 'cutoff' | 'guidance' | '3d' | 'admin';
  setActiveView: (view: 'colleges' | 'cutoff' | 'guidance' | '3d' | 'admin') => void;
  studentProfile: StudentProfile;
  onOpenProfileModal: () => void;
  comparedCount: number;
  onOpenCompare: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeView,
  setActiveView,
  studentProfile,
  onOpenProfileModal,
  comparedCount,
  onOpenCompare
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div 
          onClick={() => setActiveView('colleges')}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-slate-950 flex items-center justify-center font-black shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-extrabold text-white tracking-tight">CollegeWise AI</span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 bg-sky-500/10 text-sky-400 font-bold text-[10px] rounded-full border border-sky-400/30">
                TN 2026
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block leading-none">
              Tamil Nadu College & Career Intelligence
            </span>
          </div>
        </div>

        {/* Primary Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-semibold">
          <button
            onClick={() => setActiveView('colleges')}
            className={`px-3 py-2 rounded-xl transition-all ${
              activeView === 'colleges'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Explore Colleges
          </button>

          <button
            onClick={() => setActiveView('cutoff')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
              activeView === 'cutoff'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-sky-400" />
            <span>Cutoff Predictor</span>
          </button>

          <button
            onClick={() => setActiveView('guidance')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
              activeView === 'guidance'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI Career Guidance</span>
          </button>

          <button
            onClick={() => setActiveView('3d')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
              activeView === '3d'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>3D Campus Tour</span>
          </button>

          <button
            onClick={() => setActiveView('admin')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all ${
              activeView === 'admin'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>Admin Data Hub</span>
          </button>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2.5">
          {/* Compare Button */}
          {comparedCount > 0 && (
            <button
              onClick={onOpenCompare}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-500/20 text-sky-300 border border-sky-500/40 hover:bg-sky-500/30 rounded-xl text-xs font-bold transition-all animate-pulse"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Compare ({comparedCount})</span>
            </button>
          )}

          {/* Student Profile Pill */}
          <button
            onClick={onOpenProfileModal}
            className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs font-medium transition-all shadow-sm"
          >
            <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <User className="w-3.5 h-3.5" />
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <span className="block text-[10px] text-slate-400">Active Profile</span>
              <span className="font-bold text-sky-300">
                {studentProfile.calculated_cutoff.toFixed(1)} / 200 Cutoff
              </span>
            </div>
            <span className="hidden sm:inline-block ml-1 text-slate-400 hover:text-white text-[11px]">Edit →</span>
          </button>
        </div>
      </div>

      {/* Mobile Submenu Bar */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-800/80 py-2 px-2 bg-slate-950 text-[11px] font-semibold text-slate-400 overflow-x-auto">
        <button
          onClick={() => setActiveView('colleges')}
          className={`px-2 py-1 rounded-lg ${activeView === 'colleges' ? 'text-sky-300 font-bold bg-slate-800' : ''}`}
        >
          Colleges
        </button>
        <button
          onClick={() => setActiveView('cutoff')}
          className={`px-2 py-1 rounded-lg ${activeView === 'cutoff' ? 'text-sky-300 font-bold bg-slate-800' : ''}`}
        >
          Predictor
        </button>
        <button
          onClick={() => setActiveView('guidance')}
          className={`px-2 py-1 rounded-lg ${activeView === 'guidance' ? 'text-sky-300 font-bold bg-slate-800' : ''}`}
        >
          Career AI
        </button>
        <button
          onClick={() => setActiveView('3d')}
          className={`px-2 py-1 rounded-lg ${activeView === '3d' ? 'text-sky-300 font-bold bg-slate-800' : ''}`}
        >
          3D Tour
        </button>
        <button
          onClick={() => setActiveView('admin')}
          className={`px-2 py-1 rounded-lg ${activeView === 'admin' ? 'text-sky-300 font-bold bg-slate-800' : ''}`}
        >
          Admin
        </button>
      </div>
    </header>
  );
};
