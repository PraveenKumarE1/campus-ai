import React from 'react';
import { ShieldCheck, Info, FileCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-white font-extrabold text-base tracking-tight">CollegeWise AI</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-900/60 text-sky-300 font-bold border border-sky-700/60">
                Tamil Nadu Intelligence
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-lg">
              The premier real-time intelligence and AI recommendation system for 12th standard graduates in Tamil Nadu. We aggregate, verify, and monitor verified fee structures, historical cutoffs, placement histories, and student-review-based dress code indicators.
            </p>
            <div className="flex items-center gap-2 text-slate-300 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Strict Data Integrity: No fabricated statistics. Sample records marked DEMO DATA.</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Coverage & Districts</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Chennai Metropolitan Region</li>
              <li>Coimbatore & Peelamedu Hub</li>
              <li>Madurai & Thiruparankundram</li>
              <li>Tiruchirappalli (NIT / Central Zone)</li>
              <li>Vellore & Thanjavur Deemed Universities</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Safety & Data Ethics</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Zero Aadhaar or PAN Collection</li>
              <li>Student Anonymity Protected in Reviews</li>
              <li>TNEA 2026 Reservation Rules Aligned</li>
              <li>Regular Automated Crawler Verification</li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 flex items-start gap-3 text-[11px] leading-relaxed text-slate-400">
          <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Advisory & Disclaimer:</strong> CollegeWise AI is an independent student decision platform. Admission probabilities (Safe/Moderate/Reach) are calculated through statistical regression of past counselling data and do not guarantee admission or seat allotment. Dress code strictness and campus freedom metrics are strictly labeled as student-review-based indicators and reflect aggregated experiences from verified alumni and students.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-900 text-[11px] text-slate-500">
          <span>© 2026 CollegeWise AI Platform. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-slate-400 cursor-pointer">Counselling Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
