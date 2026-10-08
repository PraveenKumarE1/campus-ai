import { CutoffChance } from '../types';

export interface CutoffPredictionResponse {
  courseName: string;
  collegeName: string;
  category: string;
  studentCutoff: number;
  latestClosingCutoff: number;
  historicalRange: string;
  status: CutoffChance;
  probabilityPercentage: number;
  explanation: string;
  disclaimer: string;
}

export function predictAdmissionChance(
  studentCutoff: number,
  closingCutoffs: number[],
  courseName: string = 'Computer Science and Engineering',
  collegeName: string = 'Target College',
  category: string = 'OC'
): CutoffPredictionResponse {
  const latestClosing = closingCutoffs[0] || 185;
  const minHistorical = Math.min(...closingCutoffs);
  const maxHistorical = Math.max(...closingCutoffs);

  const diff = studentCutoff - latestClosing;

  let status: CutoffChance = 'Moderate';
  let probability = 50;
  let explanation = '';

  if (diff >= 3.0) {
    status = 'Safe';
    probability = Math.min(96, Math.round(85 + (diff - 3) * 3));
    explanation = `Your cutoff (${studentCutoff.toFixed(1)}) is comfortably above last year's closing mark (${latestClosing.toFixed(1)}) by +${diff.toFixed(1)} points. High probability of securing a seat in Round 1 counselling.`;
  } else if (diff >= -1.5) {
    status = 'Moderate';
    probability = Math.max(45, Math.min(80, Math.round(65 + diff * 7)));
    explanation = `Your cutoff (${studentCutoff.toFixed(1)}) is in close proximity to the historical closing range (${minHistorical.toFixed(1)} – ${maxHistorical.toFixed(1)}). Competitive chance; keep alternative branches as backup options.`;
  } else {
    status = 'Reach';
    probability = Math.max(15, Math.round(40 - Math.abs(diff) * 5));
    explanation = `Your cutoff is ${Math.abs(diff).toFixed(1)} points below the last closing cutoff (${latestClosing.toFixed(1)}). Aspirational choice; consider later rounds or related specializations.`;
  }

  return {
    courseName,
    collegeName,
    category,
    studentCutoff,
    latestClosingCutoff: latestClosing,
    historicalRange: `${minHistorical.toFixed(1)} – ${maxHistorical.toFixed(1)}`,
    status,
    probabilityPercentage: probability,
    explanation,
    disclaimer: 'Statistical estimate based on past counselling rounds. Official seat allocation depends on annual candidate rank list, seat matrix updates, and reservation rules. Does not guarantee admission.'
  };
}
