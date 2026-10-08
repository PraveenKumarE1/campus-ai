export interface SentimentAnalysisResult {
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  score: number;
  positiveAspects: string[];
  negativeAspects: string[];
  dressCodeMention: boolean;
}

const POSITIVE_LEXICON = new Set([
  'excellent', 'great', 'amazing', 'good', 'helpful', 'supportive', 'top', 'modern',
  'high', 'lenient', 'friendly', 'superb', 'impressive', 'outstanding', 'smooth', 'flexible',
  'encouraging', 'reliable', 'delicious', 'clean', 'spacious'
]);

const NEGATIVE_LEXICON = new Set([
  'strict', 'poor', 'bad', 'terrible', 'worst', 'unhelpful', 'outdated', 'suffocating',
  'rigid', 'slow', 'hectic', 'harsh', 'disappointing', 'limited', 'tasteless', 'dirty',
  'restrictive', 'punishment', 'confiscated', 'penalized'
]);

export function analyzeReviewSentiment(text: string): SentimentAnalysisResult {
  const lower = text.toLowerCase();
  const words = lower.match(/\b[a-z]{3,}\b/g) || [];

  let posCount = 0;
  let negCount = 0;

  for (const w of words) {
    if (POSITIVE_LEXICON.has(w)) posCount++;
    if (NEGATIVE_LEXICON.has(w)) negCount++;
  }

  const total = posCount + negCount;
  let score = 0;
  let sentiment: 'Positive' | 'Neutral' | 'Negative' = 'Neutral';

  if (total > 0) {
    score = (posCount - negCount) / total;
    if (score > 0.15) sentiment = 'Positive';
    else if (score < -0.15) sentiment = 'Negative';
  }

  const positiveAspects: string[] = [];
  const negativeAspects: string[] = [];

  if (/faculty|professor|teaching|staff/.test(lower)) {
    if (score >= 0) positiveAspects.push('Faculty');
    else negativeAspects.push('Faculty');
  }

  if (/infrastructure|lab|equipment|library|campus|building/.test(lower)) {
    if (score >= 0) positiveAspects.push('Infrastructure');
    else negativeAspects.push('Infrastructure');
  }

  if (/placement|package|ctc|hiring|job|salary|zoho|tcs/.test(lower)) {
    if (score >= 0) positiveAspects.push('Placement');
    else negativeAspects.push('Placement');
  }

  if (/food|mess|canteen|meals|lunch/.test(lower)) {
    if (score >= 0) positiveAspects.push('Food & Mess');
    else negativeAspects.push('Food & Mess');
  }

  if (/strict|dress code|uniform|shoes|beard|shave|rules|curfew|timing/.test(lower)) {
    negativeAspects.push('Campus Rules & Strictness');
  } else if (/freedom|flexible|casual|chill|no restriction/.test(lower)) {
    positiveAspects.push('Campus Freedom');
  }

  return {
    sentiment,
    score: Math.round(score * 100) / 100,
    positiveAspects,
    negativeAspects,
    dressCodeMention: /dress code|formal|uniform|jeans|t-shirt|salwar|dupatta|shoes/.test(lower)
  };
}
