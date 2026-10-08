import React, { useState } from 'react';
import { StudentProfile, StreamType } from '../types';
import { X, Sparkles, Check, Calculator, ShieldCheck } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onSave: (updated: StudentProfile) => void;
}

export const StudentProfileModal: React.FC<Props> = ({
  isOpen,
  onClose,
  profile,
  onSave
}) => {
  const [formData, setFormData] = useState<StudentProfile>(profile);
  const [activeTab, setActiveTab] = useState<'academics' | 'preferences' | 'career'>('academics');

  if (!isOpen) return null;

  // Auto calculate TNEA cutoff for PCM students: Maths + (Physics/2) + (Chemistry/2)
  const handleSubjectChange = (subject: string, val: number) => {
    const updatedSubjects = {
      ...formData.subject_marks,
      [subject]: val
    };

    let newCutoff = formData.calculated_cutoff;
    if (formData.stream === 'PCM' || formData.stream === 'PCMB') {
      const m = updatedSubjects.maths ?? 0;
      const p = updatedSubjects.physics ?? 0;
      const c = updatedSubjects.chemistry ?? 0;
      newCutoff = Math.min(200, Math.round((m + p / 2 + c / 2) * 100) / 100);
    }

    setFormData({
      ...formData,
      subject_marks: updatedSubjects,
      calculated_cutoff: newCutoff
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-700">Student Intelligence Profile</span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500">12th Standard Graduate</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-0.5">Customize Your Academic & Campus Profile</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center border-b border-slate-200 px-6 bg-white gap-6">
          <button
            onClick={() => setActiveTab('academics')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'academics'
                ? 'border-sky-600 text-sky-700 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            1. 12th Marks & Cutoff
          </button>
          <button
            onClick={() => setActiveTab('preferences')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'preferences'
                ? 'border-sky-600 text-sky-700 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            2. Budget & Dress Code
          </button>
          <button
            onClick={() => setActiveTab('career')}
            className={`py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'career'
                ? 'border-sky-600 text-sky-700 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            3. Priorities & Career Goal
          </button>
        </div>

        <form onSubmit={handleSave}>
          <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
            {activeTab === 'academics' && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      12th Group / Stream
                    </label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value as StreamType })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="PCM">PCM (Physics, Chemistry, Maths)</option>
                      <option value="PCB">PCB (Physics, Chemistry, Biology)</option>
                      <option value="PCMB">PCMB (Physics, Chemistry, Maths, Bio)</option>
                      <option value="Commerce_Maths">Commerce with Business Maths</option>
                      <option value="Commerce">Commerce / Accountancy</option>
                      <option value="Arts_Humanities">Arts / Humanities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Overall 12th Marks Percentage (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="35"
                      max="100"
                      value={formData.twelfth_marks_percentage}
                      onChange={(e) => setFormData({ ...formData, twelfth_marks_percentage: parseFloat(e.target.value) || 0 })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Subject-wise breakdown for TNEA calculation */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-sky-600" />
                      <span className="text-sm font-semibold text-slate-800">Subject Marks (Out of 100)</span>
                    </div>
                    <span className="text-xs text-slate-500">Auto-calculates Tamil Nadu TNEA Cutoff</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Mathematics</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.subject_marks?.maths ?? 95}
                        onChange={(e) => handleSubjectChange('maths', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Physics</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.subject_marks?.physics ?? 92}
                        onChange={(e) => handleSubjectChange('physics', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">Chemistry</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={formData.subject_marks?.chemistry ?? 90}
                        onChange={(e) => handleSubjectChange('chemistry', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                    <span className="text-xs text-slate-600">Calculated Cutoff Formula: M + (P/2) + (C/2)</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-slate-500">Your TNEA Cutoff:</span>
                      <span className="text-lg font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-200">
                        {formData.calculated_cutoff.toFixed(1)} / 200
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Degree / Course
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Computer Science, AI&DS, ECE, MBBS, B.Com"
                      value={formData.preferred_course}
                      onChange={(e) => setFormData({ ...formData, preferred_course: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred District / Location
                    </label>
                    <select
                      value={formData.preferred_location}
                      onChange={(e) => setFormData({ ...formData, preferred_location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="Any in Tamil Nadu">Any in Tamil Nadu</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Coimbatore">Coimbatore</option>
                      <option value="Madurai">Madurai</option>
                      <option value="Tiruchirappalli">Tiruchirappalli</option>
                      <option value="Vellore">Vellore</option>
                      <option value="Salem">Salem</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-5">
                {/* DRESS CODE & CAMPUS FREEDOM PREFERENCE */}
                <div className="p-4 bg-sky-50/50 rounded-xl border border-sky-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-sky-700" />
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">College Dress Code Preference</h4>
                      <p className="text-xs text-slate-500">
                        Tamil Nadu colleges range from strict formal uniforms to liberal open campus attire.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {[
                      {
                        id: 'Any',
                        label: 'No Preference / Open',
                        desc: 'Comfortable with any college dress regulations'
                      },
                      {
                        id: 'Strict Formals',
                        label: 'Strict Formals',
                        desc: 'Prefers disciplined, uniform/formal environment'
                      },
                      {
                        id: 'Casual / Flexible',
                        label: 'Casual / High Freedom',
                        desc: 'Prefers personal autonomy, jeans, casual wear'
                      }
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, dress_code_preference: opt.id as any })}
                        className={`p-3 text-left rounded-lg border transition-all ${
                          formData.dress_code_preference === opt.id
                            ? 'bg-white border-sky-600 shadow-sm ring-1 ring-sky-500'
                            : 'bg-white/80 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-slate-900">{opt.label}</span>
                          {formData.dress_code_preference === opt.id && (
                            <Check className="w-4 h-4 text-sky-600" />
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Maximum Yearly Budget (Tuition + Hostel)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-2.5 text-sm font-semibold text-slate-500">₹</span>
                      <input
                        type="number"
                        step="10000"
                        placeholder="e.g. 200000"
                        value={formData.max_yearly_budget}
                        onChange={(e) => setFormData({ ...formData, max_yearly_budget: parseFloat(e.target.value) || 0 })}
                        className="w-full pl-8 pr-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">
                      Target: ₹{formData.max_yearly_budget.toLocaleString('en-IN')} per academic year
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Institution Type Preference
                    </label>
                    <select
                      value={formData.govt_private_preference}
                      onChange={(e) => setFormData({ ...formData, govt_private_preference: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="Any">Any Institution Type</option>
                      <option value="Government">Government (e.g. CEG, GCT, MMC)</option>
                      <option value="Autonomous / Govt. Aided">Autonomous / Govt. Aided (e.g. PSG Tech, CIT, TCE)</option>
                      <option value="Autonomous / Private">Autonomous / Private (e.g. SSN, Panimalar)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <input
                    type="checkbox"
                    id="hostel_req"
                    checked={formData.hostel_required}
                    onChange={(e) => setFormData({ ...formData, hostel_required: e.target.checked })}
                    className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
                  />
                  <label htmlFor="hostel_req" className="text-sm font-medium text-slate-800 cursor-pointer">
                    I require on-campus hostel accommodation & mess facilities
                  </label>
                </div>
              </div>
            )}

            {activeTab === 'career' && (
              <div className="space-y-5">
                <div className="space-y-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Priority Weightings (1 to 5)</h4>
                  
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-700 mb-1">
                      <span>Importance of Placements & High Average Package</span>
                      <span className="font-bold text-sky-700">{formData.importance_placement} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={formData.importance_placement}
                      onChange={(e) => setFormData({ ...formData, importance_placement: parseInt(e.target.value) })}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-700 mb-1">
                      <span>Importance of Campus Life, Fests & Cultural Clubs</span>
                      <span className="font-bold text-sky-700">{formData.importance_campus_life} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={formData.importance_campus_life}
                      onChange={(e) => setFormData({ ...formData, importance_campus_life: parseInt(e.target.value) })}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-700 mb-1">
                      <span>Importance of Modern Laboratories & Infrastructure</span>
                      <span className="font-bold text-sky-700">{formData.importance_infrastructure} / 5</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={formData.importance_infrastructure}
                      onChange={(e) => setFormData({ ...formData, importance_infrastructure: parseInt(e.target.value) })}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Long-Term Career Goal
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Software Product Developer at Zoho/Google, Civil Services / TNPSC, Core Automotive Engineer, or MS abroad"
                    value={formData.career_goal}
                    onChange={(e) => setFormData({ ...formData, career_goal: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/80">
            <span className="text-xs text-slate-500">
              Data is strictly used for recommendation matching. No sensitive ID is collected.
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Save Profile & Recalculate</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
