from typing import List, Optional, Dict, Any
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from uuid import UUID

class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    role: str = "student"

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: UUID
    is_active: bool
    created_at: datetime
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse

class StudentProfileCreate(BaseModel):
    twelfth_marks_percentage: float = Field(..., ge=35.0, le=100.0)
    stream: str # PCM, PCB, PCMB, Commerce_Maths, etc.
    calculated_cutoff: float = Field(..., ge=0.0, le=200.0)
    subject_marks: Dict[str, float] = Field(default_factory=dict)
    preferred_course: Optional[str] = None
    interests: List[str] = Field(default_factory=list)
    skills: List[str] = Field(default_factory=list)
    preferred_location: Optional[str] = None
    max_yearly_budget: Optional[float] = None
    govt_private_preference: str = "Any"
    hostel_required: bool = False
    max_distance_km: Optional[int] = None
    entrance_exam_scores: Dict[str, float] = Field(default_factory=dict)
    importance_placement: int = Field(4, ge=1, le=5)
    importance_campus_life: int = Field(3, ge=1, le=5)
    importance_infrastructure: int = Field(4, ge=1, le=5)
    campus_vibe_preference: str = "Balanced"
    career_goal: Optional[str] = None

class StudentProfileResponse(StudentProfileCreate):
    id: UUID
    user_id: UUID
    created_at: datetime
    class Config:
        from_attributes = True

class CutoffPredictionRequest(BaseModel):
    twelfth_cutoff: float
    category: str = "General"
    stream: str = "PCM"
    college_id: Optional[UUID] = None
    course_name: Optional[str] = None

class CutoffPredictionResult(BaseModel):
    course_name: str
    college_name: str
    student_cutoff: float
    closing_cutoff_latest: float
    historical_range: str
    category: str
    chance: str # "Safe", "Moderate", "Reach"
    admission_probability_pct: float
    analysis_notes: str
    disclaimer: str = "Historical trends only. Does not guarantee admission or seat allotment."

class RecommendationRequest(BaseModel):
    profile: StudentProfileCreate
    top_k: int = 10

class CollegeRecommendationItem(BaseModel):
    college_id: str
    college_name: str
    city: str
    state: str
    institution_type: str
    overall_match_score: float
    eligibility_status: str # "Eligible", "Conditional", "Ineligible"
    cutoff_compatibility: str # "Safe", "Moderate", "Reach"
    budget_compatibility: str # "Within Budget", "Moderate Stretch", "Above Budget"
    academic_match_score: float
    placement_match_score: float
    infrastructure_score: float
    campus_life_score: float
    student_satisfaction_score: float
    freedom_score: float
    freedom_indicator: str
    total_yearly_fees: float
    average_package_lpa: float
    recommendation_reasons: List[str]
    verification_status: str
    data_confidence: float

class ReviewCreate(BaseModel):
    college_id: UUID
    review_title: str
    review_text: str
    rating_academics: float = Field(..., ge=1, le=5)
    rating_infrastructure: float = Field(..., ge=1, le=5)
    rating_campus_life: float = Field(..., ge=1, le=5)
    rating_hostel_food: float = Field(..., ge=1, le=5)
    rating_placement: float = Field(..., ge=1, le=5)
    freedom_rating: float = Field(..., ge=1, le=5)
    anonymous_alias: str

class CareerGuidanceRequest(BaseModel):
    query: str
    twelfth_marks: Optional[float] = None
    cutoff: Optional[float] = None
    stream: Optional[str] = None
    interests: List[str] = Field(default_factory=list)
    career_goal: Optional[str] = None
