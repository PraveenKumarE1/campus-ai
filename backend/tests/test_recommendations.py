import pytest
from ml.recommendation_engine import MLRecommendationEngine

def test_recommendation_engine_eligibility():
    engine = MLRecommendationEngine()
    profile = {
        "twelfth_marks_percentage": 45.0, # Below 50%
        "calculated_cutoff": 140.0,
        "max_yearly_budget": 200000.0,
        "importance_placement": 4,
        "importance_infrastructure": 3,
        "importance_campus_life": 3,
        "campus_vibe_preference": "Balanced"
    }
    college = {
        "id": "test-clg",
        "name": "Test Engineering College",
        "city": "Chennai",
        "state": "TN",
        "institution_type": "Private",
        "min_eligibility_pct": 50.0,
        "avg_closing_cutoff": 160.0,
        "total_yearly_fees": 120000.0,
        "placement_percentage": 88.0,
        "average_package_lpa": 6.5,
        "infrastructure_rating": 4.0,
        "campus_life_rating": 4.0,
        "overall_rating": 4.0,
        "freedom_score": 7.0
    }
    result = engine.compute_compatibility(profile, college)
    assert result["eligibility_status"] == "Ineligible"
    assert "below college minimum eligibility" in result["recommendation_reasons"][0]

def test_recommendation_engine_safe_cutoff():
    engine = MLRecommendationEngine()
    profile = {
        "twelfth_marks_percentage": 96.0,
        "calculated_cutoff": 196.0,
        "max_yearly_budget": 300000.0,
        "importance_placement": 5,
        "importance_infrastructure": 4,
        "importance_campus_life": 4,
        "campus_vibe_preference": "Balanced"
    }
    college = {
        "id": "test-clg-2",
        "name": "Test Top College",
        "city": "Chennai",
        "state": "TN",
        "institution_type": "Government",
        "min_eligibility_pct": 50.0,
        "avg_closing_cutoff": 190.0,
        "total_yearly_fees": 50000.0,
        "placement_percentage": 95.0,
        "average_package_lpa": 12.0,
        "infrastructure_rating": 4.7,
        "campus_life_rating": 4.5,
        "overall_rating": 4.8,
        "freedom_score": 8.5
    }
    result = engine.compute_compatibility(profile, college)
    assert result["eligibility_status"] == "Eligible"
    assert result["cutoff_compatibility"] == "Safe"
    assert result["budget_compatibility"] == "Within Budget"
    assert result["overall_match_score"] >= 90.0
