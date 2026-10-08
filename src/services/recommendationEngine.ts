import { College, StudentProfile, CutoffChance } from '../types';

export function calculateCollegeRecommendations(
  colleges: College[],
  profile: StudentProfile
): College[] {
  return colleges.map((college) => {
    const reasons: string[] = [];

    // 1. Eligibility Check
    let eligibilityStatus: 'Eligible' | 'Conditional' | 'Ineligible' = 'Eligible';
    if (profile.twelfth_marks_percentage < college.min_eligibility_pct) {
      eligibilityStatus = 'Ineligible';
      reasons.push(`12th marks (${profile.twelfth_marks_percentage}%) below college minimum (${college.min_eligibility_pct}%).`);
    } else {
      reasons.push(`Meets academic eligibility criteria (${college.min_eligibility_pct}% required).`);
    }

    // 2. Cutoff Compatibility
    let cutoffCompatibility: CutoffChance = 'Moderate';
    let cutoffScore = 75;
    
    // Check primary course closing cutoff
    const primaryCourse = college.courses[0];
    const latestCutoffObj = primaryCourse?.historical_cutoffs[0];
    const closingCutoff = latestCutoffObj?.OC_closing || 185;

    const cutoffDiff = profile.calculated_cutoff - closingCutoff;
    if (cutoffDiff >= 2.5) {
      cutoffCompatibility = 'Safe';
      cutoffScore = 98;
      reasons.push(`Cutoff (${profile.calculated_cutoff.toFixed(1)}) is comfortably above closing cutoff (${closingCutoff.toFixed(1)}).`);
    } else if (cutoffDiff >= -2.0) {
      cutoffCompatibility = 'Moderate';
      cutoffScore = 80 + (cutoffDiff + 2.0) * 4;
      reasons.push(`Cutoff (${profile.calculated_cutoff.toFixed(1)}) is right around the closing threshold (${closingCutoff.toFixed(1)}).`);
    } else {
      cutoffCompatibility = 'Reach';
      cutoffScore = Math.max(30, 65 - Math.abs(cutoffDiff) * 5);
      reasons.push(`Aspirant/Reach college: closing cutoff was ${closingCutoff.toFixed(1)}.`);
    }

    // 3. Budget Compatibility
    let budgetCompatibility: 'Within Budget' | 'Moderate Stretch' | 'Above Budget' = 'Within Budget';
    let budgetScore = 90;
    const totalFees = college.fees.total_yearly_estimated;

    if (!profile.max_yearly_budget || profile.max_yearly_budget <= 0) {
      budgetCompatibility = 'Within Budget';
      budgetScore = 90;
    } else if (totalFees <= profile.max_yearly_budget) {
      budgetCompatibility = 'Within Budget';
      budgetScore = 98;
      reasons.push(`Yearly cost (₹${totalFees.toLocaleString('en-IN')}) is within your ₹${profile.max_yearly_budget.toLocaleString('en-IN')} budget.`);
    } else if (totalFees <= profile.max_yearly_budget * 1.25) {
      budgetCompatibility = 'Moderate Stretch';
      budgetScore = 72;
      reasons.push(`Yearly cost is slightly above your target budget; scholarships are available.`);
    } else {
      budgetCompatibility = 'Above Budget';
      budgetScore = Math.max(25, 60 - ((totalFees - profile.max_yearly_budget) / profile.max_yearly_budget) * 40);
      reasons.push(`Fee exceeds target budget. Check First Graduate or institutional aid.`);
    }

    // 4. Dress Code & Strictness Alignment
    let dressCodeMatch = 85;
    if (profile.dress_code_preference === 'Strict Formals') {
      if (college.dress_code.strictness_level === 'Strict Formals') {
        dressCodeMatch = 100;
        reasons.push(`Matches your preference for formal, disciplined dress code.`);
      } else {
        dressCodeMatch = 65;
      }
    } else if (profile.dress_code_preference === 'Casual / Flexible') {
      if (college.dress_code.strictness_level === 'High Freedom / Casuals') {
        dressCodeMatch = 100;
        reasons.push(`Matches your preference for relaxed casual attire and personal autonomy.`);
      } else if (college.dress_code.strictness_level === 'Strict Formals') {
        dressCodeMatch = 40;
        reasons.push(`Note: College enforces strict formal dress code, differing from your casual preference.`);
      } else {
        dressCodeMatch = 75;
      }
    }

    // 5. Placement Matching
    const placementRatio = (college.placements.placement_percentage / 100.0) * 0.6 + 
      Math.min(1.0, college.placements.average_package_lpa / 20.0) * 0.4;
    const placementMatch = Math.round(placementRatio * 100);
    if (placementMatch >= 88) {
      reasons.push(`Strong placement record: ${college.placements.placement_percentage}% placed, avg ₹${college.placements.average_package_lpa} LPA.`);
    }

    // 6. Infrastructure Matching
    const infraMatch = Math.round((college.infrastructure.classroom_rating / 5.0) * 100);

    // 7. Campus Life Matching
    const campusMatch = Math.round((college.campus_freedom.score / 10.0) * 100);

    // Weighted composite
    const wPlacement = (profile.importance_placement / 5.0) * 0.25;
    const wCutoff = 0.25;
    const wBudget = 0.15;
    const wCampus = (profile.importance_campus_life / 5.0) * 0.15;
    const wInfra = (profile.importance_infrastructure / 5.0) * 0.10;
    const wDress = 0.10;

    const totalWeight = wPlacement + wCutoff + wBudget + wCampus + wInfra + wDress;
    const compositeScore = (
      placementMatch * wPlacement +
      cutoffScore * wCutoff +
      budgetScore * wBudget +
      campusMatch * wCampus +
      infraMatch * wInfra +
      dressCodeMatch * wDress
    ) / totalWeight;

    const overallScore = Math.min(99, Math.max(35, Math.round(compositeScore)));

    return {
      ...college,
      recommendation_match: {
        overall_match_score: overallScore,
        eligibility_status: eligibilityStatus,
        cutoff_compatibility: cutoffCompatibility,
        budget_compatibility: budgetCompatibility,
        academic_match: Math.round(profile.twelfth_marks_percentage),
        placement_match: placementMatch,
        infra_match: infraMatch,
        campus_match: campusMatch,
        reasons: reasons.slice(0, 4)
      }
    };
  }).sort((a, b) => (b.recommendation_match?.overall_match_score || 0) - (a.recommendation_match?.overall_match_score || 0));
}
