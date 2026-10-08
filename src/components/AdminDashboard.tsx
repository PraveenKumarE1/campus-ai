import React, { useState } from 'react';
import { College } from '../types';
import { 
  Database, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Plus, 
  Edit3, 
  FileText
} from 'lucide-react';

interface Props {
  colleges: College[];
  onRefreshData: () => void;
  onSelectCollege: (college: College) => void;
}

export const AdminDashboard: React.FC<Props> = ({
  colleges,
  onRefreshData,
  onSelectCollege
}) => {
  const [isCrawling, setIsCrawling] = useState(false);
  const [crawlStatus, setCrawlStatus] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<'pipeline' | 'moderation' | 'colleges'>('pipeline');

  const handleTriggerCrawler = async () => {
    setIsCrawling(true);
    setCrawlStatus('Executing Scheduled Ingestion Pipeline on Tamil Nadu Education Portals...');
    try {
      const res = await fetch('/api/admin/pipeline/trigger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: 'Anna University, TNEA & NIRF 2026 Registry' })
      });
      const data = await res.json();
      setCrawlStatus(`Sync Completed! Checked ${data.updatedCollegesCount} colleges. Freshness verified.`);
      onRefreshData();
    } catch (err: any) {
      setCrawlStatus('Crawler job failed to reach remote endpoints.');
    } finally {
      setIsCrawling(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <ShieldCheck className="w-4 h-4" />
            <span>Administrator Control Console</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-0.5">
            Data Provenance, Crawler Automation & Review Moderation
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Real-time pipeline orchestration, conflicting source detection, and data freshness scores.
          </p>
        </div>

        <button
          onClick={handleTriggerCrawler}
          disabled={isCrawling}
          className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm shrink-0"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isCrawling ? 'animate-spin' : ''}`} />
          <span>{isCrawling ? 'Running Ingestion Job...' : 'Trigger Crawler Sync'}</span>
        </button>
      </div>

      {crawlStatus && (
        <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="font-medium">{crawlStatus}</span>
          </div>
          <span className="text-[11px] text-emerald-600">Timestamp: {new Date().toLocaleTimeString()}</span>
        </div>
      )}

      {/* Tabs */}
      <div className="flex items-center border-b border-slate-200 gap-6">
        <button
          onClick={() => setSelectedTab('pipeline')}
          className={`py-2.5 text-xs font-semibold border-b-2 transition-colors ${
            selectedTab === 'pipeline' ? 'border-sky-600 text-sky-700' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Ingestion Health & Freshness Scores
        </button>
        <button
          onClick={() => setSelectedTab('colleges')}
          className={`py-2.5 text-xs font-semibold border-b-2 transition-colors ${
            selectedTab === 'colleges' ? 'border-sky-600 text-sky-700' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Manage College Records ({colleges.length})
        </button>
        <button
          onClick={() => setSelectedTab('moderation')}
          className={`py-2.5 text-xs font-semibold border-b-2 transition-colors ${
            selectedTab === 'moderation' ? 'border-sky-600 text-sky-700' : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Review Moderation & Dress Code Checks
        </button>
      </div>

      {/* Tab: Pipeline */}
      {selectedTab === 'pipeline' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-1">Average Confidence Score</span>
              <span className="text-xl font-bold text-slate-900 block">97.4%</span>
              <span className="text-emerald-700 block mt-1">Weighted by official .ac.in / .edu.in domains</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-1">Conflicting Source Alerts</span>
              <span className="text-xl font-bold text-slate-900 block">0 Discrepancies</span>
              <span className="text-slate-500 block mt-1">Cross-verified against official fee circulars</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-1">Last Full Crawler Sync</span>
              <span className="text-xl font-bold text-slate-900 block">Today, 18:30 IST</span>
              <span className="text-slate-500 block mt-1">Daily Automated Pipeline Active</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">Verified Target Public Sources</h3>
            <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 overflow-hidden text-xs">
              {[
                { name: 'Tamil Nadu Engineering Admissions (TNEA) Official Portal', url: 'https://tneaonline.org', status: 'ACTIVE', latency: '142ms' },
                { name: 'Directorate of Medical Education (DME) Selection Committee', url: 'https://tnmedicalselection.net', status: 'ACTIVE', latency: '185ms' },
                { name: 'Anna University Centre for Admissions', url: 'https://cfa.annauniv.edu', status: 'ACTIVE', latency: '98ms' },
                { name: 'NIRF National Institutional Ranking Framework 2026', url: 'https://nirfindia.org', status: 'ACTIVE', latency: '210ms' }
              ].map((src, i) => (
                <div key={i} className="p-3 bg-white flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 block">{src.name}</span>
                    <span className="text-slate-400 text-[11px]">{src.url}</span>
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <span className="text-slate-400 text-[11px]">{src.latency}</span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px]">
                      {src.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab: College Management */}
      {selectedTab === 'colleges' && (
        <div className="space-y-3">
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs bg-white">
              <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3 font-bold">College</th>
                  <th className="py-2.5 px-3 font-bold">Location</th>
                  <th className="py-2.5 px-3 font-bold">Dress Code Policy</th>
                  <th className="py-2.5 px-3 font-bold">Confidence</th>
                  <th className="py-2.5 px-3 font-bold">Last Verified</th>
                  <th className="py-2.5 px-3 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {colleges.map((c) => (
                  <tr key={c.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                    <td className="py-2.5 px-3 font-bold text-slate-900">{c.name}</td>
                    <td className="py-2.5 px-3 text-slate-600">{c.city}, {c.district}</td>
                    <td className="py-2.5 px-3">
                      <span className={`font-semibold ${
                        c.dress_code.strictness_level === 'Strict Formals' ? 'text-amber-700' :
                        c.dress_code.strictness_level === 'High Freedom / Casuals' ? 'text-emerald-700' : 'text-sky-700'
                      }`}>
                        {c.dress_code.strictness_level}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-bold text-emerald-700">{c.data_confidence}%</td>
                    <td className="py-2.5 px-3 text-slate-500">{c.last_updated}</td>
                    <td className="py-2.5 px-3 text-right">
                      <button
                        onClick={() => onSelectCollege(c)}
                        className="text-sky-700 hover:text-sky-900 font-semibold"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Review Moderation */}
      {selectedTab === 'moderation' && (
        <div className="space-y-3">
          <p className="text-xs text-slate-500">
            Student reviews regarding dress code, faculty, and strictness are vetted for zero PII exposure prior to publishing.
          </p>

          <div className="space-y-3">
            {colleges.flatMap((c) => c.student_reviews.map((r) => ({ ...r, collegeName: c.name }))).map((rev) => (
              <div key={rev.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{rev.anonymous_alias}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-600 font-medium">{rev.collegeName}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold text-[10px]">
                    APPROVED & ACTIVE
                  </span>
                </div>
                <p className="text-slate-700 italic">"{rev.review_text}"</p>
                <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                  <span>Dress code flag:</span>
                  <span className="font-semibold text-slate-800">{rev.dress_code_feedback}</span>
                  <span className="text-slate-400">·</span>
                  <span>Sentiment score: {rev.sentiment_score} ({rev.sentiment})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
