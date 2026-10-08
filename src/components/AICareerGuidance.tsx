import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { Sparkles, Send, Compass, BookOpen, Award, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  studentProfile: StudentProfile;
}

export const AICareerGuidance: React.FC<Props> = ({ studentProfile }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const samplePrompts = [
    `I like maths and coding with cutoff ${studentProfile.calculated_cutoff.toFixed(1)}. Which Tamil Nadu college should I target?`,
    'I want to join core mechanical or electronics in Coimbatore with good campus freedom.',
    'What are the best IT and software placement options under ₹1.5 Lakhs yearly fee?',
    'I am confused between CSE in tier-2 college vs Core branch in CEG Anna University.'
  ];

  const handleAsk = async (userQuery: string) => {
    const q = userQuery || query;
    if (!q) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/career-guidance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          studentProfile
        })
      });

      if (!response.ok) throw new Error('Failed to fetch guidance');
      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
      {/* Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-700">
          <Sparkles className="w-4 h-4" />
          <span>AI Career Counselor & Path Roadmap</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 mt-0.5">
          Intelligent College & Career Navigation Assistant
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Specialized in higher secondary graduates exploring engineering, technology, commerce, and science in Tamil Nadu.
        </p>
      </div>

      {/* Query Bar */}
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask anything: 'I like math and electronics, cutoff 192. What are my best choices in Chennai/Coimbatore?'"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk(query)}
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            onClick={() => handleAsk(query)}
            disabled={isLoading || !query.trim()}
            className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white text-sm font-medium rounded-xl transition-colors shrink-0"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Thinking...</span>
              </span>
            ) : (
              <>
                <span>Consult AI</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Quick Suggestion Prompts */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 font-medium">Quick Prompts:</span>
          {samplePrompts.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQuery(p);
                handleAsk(p);
              }}
              className="text-left text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
            >
              "{p}"
            </button>
          ))}
        </div>
      </div>

      {/* Result Display */}
      {result && (
        <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200 space-y-6 animate-fadeIn">
          {/* Main Answer Prose */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">Expert Guidance Evaluation</h3>
            <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">{result.answer}</p>
          </div>

          {/* Recommended Courses & Recommended Colleges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 block">Recommended Courses</span>
              <div className="space-y-2">
                {result.recommendedCourses?.map((c: any, i: number) => (
                  <div key={i} className="text-xs space-y-0.5 pb-2 border-b border-slate-100 last:border-0">
                    <span className="font-bold text-slate-900 block">{c.name}</span>
                    <span className="text-slate-600 block">{c.reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 block">Target Tamil Nadu Colleges</span>
              <div className="space-y-2">
                {result.recommendedColleges?.map((c: any, i: number) => (
                  <div key={i} className="text-xs space-y-0.5 pb-2 border-b border-slate-100 last:border-0">
                    <span className="font-bold text-slate-900 block">{c.name}</span>
                    <span className="text-slate-600 block">{c.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career 4-Year Roadmap Progression */}
          {result.careerRoadmap && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Recommended 4-Year Progression Plan</h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                {result.careerRoadmap.map((item: any, idx: number) => (
                  <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1">
                    <span className="font-bold text-sky-700 block">{item.step}</span>
                    <p className="text-slate-700 leading-snug">{item.goal}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills to Learn */}
          {result.skillsToLearn && (
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-semibold text-slate-700">Recommended Skills to Build:</span>
              {result.skillsToLearn.map((skill: string, idx: number) => (
                <span key={idx} className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-800 font-medium">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
