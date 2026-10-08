from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict, Any, Optional
from datetime import datetime, timedelta
import uuid

from config import settings
from schemas import (
    UserCreate, UserResponse, Token,
    StudentProfileCreate, StudentProfileResponse,
    CutoffPredictionRequest, CutoffPredictionResult,
    RecommendationRequest, CollegeRecommendationItem,
    ReviewCreate, CareerGuidanceRequest
)
from ml.recommendation_engine import MLRecommendationEngine
from ml.cutoff_predictor import CutoffPredictor
from ml.sentiment_analyzer import ReviewSentimentAnalyzer
from pipeline.data_ingestion import DataIngestionPipeline

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Real-Time College & Career Intelligence Platform API for 12th standard graduates.",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory demo store for FastAPI standalone run / testing
DEMO_COLLEGES = [
    {
        "id": "iitm-chennai",
        "name": "Indian Institute of Technology Madras (IIT Madras)",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "institution_type": "Autonomous / Institute of National Importance",
        "establishment_year": 1959,
        "accreditation": "NIRF #1 Overall & Engineering",
        "approval_info": "Ministry of Education, Govt of India",
        "website": "https://www.iitm.ac.in",
        "min_eligibility_pct": 75.0,
        "avg_closing_cutoff": 195.0,
        "total_yearly_fees": 218000.0,
        "placement_percentage": 92.5,
        "average_package_lpa": 21.4,
        "infrastructure_rating": 4.9,
        "campus_life_rating": 4.8,
        "overall_rating": 4.9,
        "freedom_score": 9.2,
        "freedom_review_count": 312,
        "data_confidence": 98.0,
        "verification_status": "verified",
        "is_demo_data": True
    },
    {
        "id": "ceg-anna-univ",
        "name": "College of Engineering, Guindy (Anna University)",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "institution_type": "Government",
        "establishment_year": 1794,
        "accreditation": "NAAC A++",
        "approval_info": "UGC, AICTE Approved",
        "website": "https://ceg.annauniv.edu",
        "min_eligibility_pct": 50.0,
        "avg_closing_cutoff": 192.5,
        "total_yearly_fees": 55000.0,
        "placement_percentage": 94.0,
        "average_package_lpa": 11.8,
        "infrastructure_rating": 4.5,
        "campus_life_rating": 4.6,
        "overall_rating": 4.7,
        "freedom_score": 8.0,
        "freedom_review_count": 284,
        "data_confidence": 97.0,
        "verification_status": "verified",
        "is_demo_data": True
    },
    {
        "id": "psg-tech-cbe",
        "name": "PSG College of Technology",
        "city": "Coimbatore",
        "state": "Tamil Nadu",
        "institution_type": "Autonomous / Govt. Aided",
        "establishment_year": 1951,
        "accreditation": "NIRF #63, NAAC A",
        "approval_info": "AICTE, Affiliated to Anna University",
        "website": "https://www.psgtech.edu",
        "min_eligibility_pct": 50.0,
        "avg_closing_cutoff": 188.5,
        "total_yearly_fees": 125000.0,
        "placement_percentage": 93.0,
        "average_package_lpa": 10.2,
        "infrastructure_rating": 4.6,
        "campus_life_rating": 4.2,
        "overall_rating": 4.6,
        "freedom_score": 6.8,
        "freedom_review_count": 210,
        "data_confidence": 95.0,
        "verification_status": "verified",
        "is_demo_data": True
    },
    {
        "id": "ssn-chennai",
        "name": "SSN College of Engineering",
        "city": "Kalavakkam, Chennai",
        "state": "Tamil Nadu",
        "institution_type": "Autonomous / Private",
        "establishment_year": 1996,
        "accreditation": "NAAC A++, NIRF #45",
        "approval_info": "AICTE, Affiliated to Anna University",
        "website": "https://www.ssn.edu.in",
        "min_eligibility_pct": 55.0,
        "avg_closing_cutoff": 186.0,
        "total_yearly_fees": 180000.0,
        "placement_percentage": 95.0,
        "average_package_lpa": 10.5,
        "infrastructure_rating": 4.8,
        "campus_life_rating": 4.5,
        "overall_rating": 4.6,
        "freedom_score": 7.5,
        "freedom_review_count": 198,
        "data_confidence": 96.0,
        "verification_status": "verified",
        "is_demo_data": True
    }
]

@app.get("/")
def health_check():
    return {
        "status": "online",
        "service": settings.PROJECT_NAME,
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0"
    }

@app.get("/api/colleges")
def list_colleges():
    return {
        "count": len(DEMO_COLLEGES),
        "results": DEMO_COLLEGES
    }

@app.post("/api/recommendations", response_model=List[CollegeRecommendationItem])
def get_recommendations(req: RecommendationRequest):
    engine = MLRecommendationEngine()
    results = []
    for c in DEMO_COLLEGES:
        score_data = engine.compute_compatibility(req.profile.model_dump(), c)
        results.append(CollegeRecommendationItem(**score_data))
    
    # Sort descending by overall match score
    results.sort(key=lambda x: x.overall_match_score, reverse=True)
    return results[:req.top_k]

@app.post("/api/cutoff/predict", response_model=CutoffPredictionResult)
def predict_cutoff(req: CutoffPredictionRequest):
    # Retrieve historical closing cutoffs for the course/college
    history = [187.0, 185.5, 184.0]
    res = CutoffPredictor.predict_chance(
        student_cutoff=req.twelfth_cutoff,
        historical_cutoffs=history,
        category=req.category,
        course_name=req.course_name or "Computer Science and Engineering",
        college_name="Premier Engineering Institution"
    )
    return CutoffPredictionResult(**res)

@app.post("/api/reviews/analyze")
def analyze_review_text(review: ReviewCreate):
    sentiment_res = ReviewSentimentAnalyzer.analyze(review.review_text)
    return {
        "anonymous_alias": review.anonymous_alias,
        "review_title": review.review_title,
        "ratings": {
            "academics": review.rating_academics,
            "infrastructure": review.rating_infrastructure,
            "campus_life": review.rating_campus_life,
            "freedom": review.freedom_rating
        },
        "nlp_analysis": sentiment_res,
        "status": "APPROVED_FOR_MODERATION"
    }

@app.post("/api/admin/pipeline/trigger")
def trigger_crawler_pipeline(college_id: str):
    res = DataIngestionPipeline.run_ingestion_job(college_id)
    return res
