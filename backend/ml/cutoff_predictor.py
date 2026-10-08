import math
from typing import Dict, Any, List

class CutoffPredictor:
    """
    Historical Cutoff Analyzer and Admission Chance Predictor.
    Calculates statistical probability based on 3-year cutoff bounds and variance.
    Strictly notes: Historical trends only; does NOT guarantee admission.
    """

    @staticmethod
    def predict_chance(
        student_cutoff: float,
        historical_cutoffs: List[float],
        category: str = "General",
        course_name: str = "Computer Science and Engineering",
        college_name: str = "Premier Institute"
    ) -> Dict[str, Any]:
        """
        Input:
            student_cutoff: e.g. 187.5
            historical_cutoffs: [188.0, 186.5, 185.0]
        Output:
            Safe / Moderate / Reach classification with probability curve
        """
        if not historical_cutoffs:
            historical_cutoffs = [185.0, 186.0, 187.0]

        mean_cutoff = sum(historical_cutoffs) / len(historical_cutoffs)
        min_cutoff = min(historical_cutoffs)
        max_cutoff = max(historical_cutoffs)

        # Standard deviation approximation
        variance = sum((x - mean_cutoff) ** 2 for x in historical_cutoffs) / max(1, len(historical_cutoffs))
        std_dev = max(1.2, math.sqrt(variance))

        # Z-score: higher student cutoff yields positive z-score
        z = (student_cutoff - mean_cutoff) / std_dev

        # Cumulative distribution approximation (logistic function)
        probability = 1.0 / (1.0 + math.exp(-1.7 * z))
        probability_pct = round(probability * 100.0, 1)

        # Category logic
        diff_from_latest = student_cutoff - historical_cutoffs[0]

        if diff_from_latest >= 2.5:
            chance = "Safe"
            notes = f"Your cutoff ({student_cutoff}) is {diff_from_latest:.1f} points above last year's closing ({historical_cutoffs[0]}). High likelihood in Round 1."
        elif diff_from_latest >= -1.5:
            chance = "Moderate"
            notes = f"Your cutoff ({student_cutoff}) is right around the historical closing mark ({min_cutoff} - {max_cutoff}). Highly competitive for Round 1/2."
        else:
            chance = "Reach"
            notes = f"Your cutoff is {abs(diff_from_latest):.1f} points below recent closing mark ({historical_cutoffs[0]}). Consider as an aspirational choice."

        return {
            "course_name": course_name,
            "college_name": college_name,
            "student_cutoff": student_cutoff,
            "closing_cutoff_latest": historical_cutoffs[0],
            "historical_range": f"{min_cutoff:.1f} – {max_cutoff:.1f}",
            "category": category,
            "chance": chance,
            "admission_probability_pct": probability_pct,
            "analysis_notes": notes,
            "disclaimer": "Historical trends only. Seat allocation depends on annual applicant pool, seat matrix changes, and official counselling rounds."
        }
