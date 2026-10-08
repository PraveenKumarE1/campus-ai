import uuid
from datetime import datetime
from sqlalchemy import (
    Column, String, Text, Integer, Numeric, Boolean, DateTime,
    ForeignKey, JSON
)
from sqlalchemy.dialects.postgresql import UUID, ARRAY
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(150), nullable=False)
    role = Column(String(50), default="student", nullable=False) # 'student', 'admin'
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    profile = relationship("StudentProfile", back_populates="user", uselist=False)
    reviews = relationship("StudentReview", back_populates="user")

class StudentProfile(Base):
    __tablename__ = "student_profiles"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    twelfth_marks_percentage = Column(Numeric(5, 2), nullable=False)
    stream = Column(String(50), nullable=False) # 'PCM', 'PCB', 'PCMB', 'Commerce_Maths', etc.
    calculated_cutoff = Column(Numeric(5, 2), nullable=False)
    subject_marks = Column(JSON, default=dict)
    preferred_course = Column(String(150))
    interests = Column(ARRAY(String), default=list)
    skills = Column(ARRAY(String), default=list)
    preferred_location = Column(String(150))
    max_yearly_budget = Column(Numeric(12, 2))
    govt_private_preference = Column(String(50), default="Any")
    hostel_required = Column(Boolean, default=False)
    max_distance_km = Column(Integer)
    entrance_exam_scores = Column(JSON, default=dict)
    importance_placement = Column(Integer, default=4)
    importance_campus_life = Column(Integer, default=3)
    importance_infrastructure = Column(Integer, default=4)
    campus_vibe_preference = Column(String(50), default="Balanced")
    career_goal = Column(String(255))
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="profile")

class College(Base):
    __tablename__ = "colleges"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False, index=True)
    code = Column(String(50))
    slug = Column(String(255), unique=True, nullable=False, index=True)
    address = Column(Text, nullable=False)
    city = Column(String(100), nullable=False, index=True)
    state = Column(String(100), nullable=False)
    pincode = Column(String(20))
    website = Column(String(255), nullable=False)
    establishment_year = Column(Integer, nullable=False)
    institution_type = Column(String(50), nullable=False) # 'Government', 'Private', 'Autonomous'
    accreditation = Column(String(100))
    approval_info = Column(String(255))
    campus_area_acres = Column(Numeric(6, 2))
    is_demo_data = Column(Boolean, default=True)
    overall_rating = Column(Numeric(3, 2), default=0.0)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    courses = relationship("CollegeCourse", back_populates="college", cascade="all, delete-orphan")
    fees = relationship("CollegeFee", back_populates="college", cascade="all, delete-orphan")
    infrastructure = relationship("CollegeInfrastructure", back_populates="college", uselist=False)
    campus_life = relationship("CampusLifeDetail", back_populates="college", uselist=False)
    placements = relationship("CollegePlacement", back_populates="college", cascade="all, delete-orphan")
    recruitment_history = relationship("RecruitmentHistory", back_populates="college", cascade="all, delete-orphan")
    reviews = relationship("StudentReview", back_populates="college", cascade="all, delete-orphan")
    sources = relationship("CollegeSource", back_populates="college", cascade="all, delete-orphan")
    scholarships = relationship("Scholarship", back_populates="college", cascade="all, delete-orphan")

class CollegeCourse(Base):
    __tablename__ = "college_courses"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=False)
    course_name = Column(String(200), nullable=False)
    degree = Column(String(50), nullable=False)
    specialization = Column(String(150))
    intake_seats = Column(Integer, nullable=False)
    duration_years = Column(Integer, default=4)
    admission_procedure = Column(Text, nullable=False)
    entrance_exams = Column(ARRAY(String), default=list)
    min_twelfth_cutoff = Column(Numeric(5, 2))

    college = relationship("College", back_populates="courses")
    cutoffs = relationship("HistoricalCutoff", back_populates="college_course", cascade="all, delete-orphan")

class HistoricalCutoff(Base):
    __tablename__ = "historical_cutoffs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_course_id = Column(UUID(as_uuid=True), ForeignKey("college_courses.id", ondelete="CASCADE"), nullable=False)
    academic_year = Column(Integer, nullable=False)
    category = Column(String(50), nullable=False) # 'General', 'OBC', 'SC', 'ST'
    round_number = Column(Integer, default=1)
    closing_cutoff = Column(Numeric(6, 2), nullable=False)
    source_url = Column(String(500))
    last_verified_at = Column(DateTime, default=datetime.utcnow)

    college_course = relationship("CollegeCourse", back_populates="cutoffs")

class CollegeFee(Base):
    __tablename__ = "college_fees"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=False)
    course_name = Column(String(200), nullable=False)
    academic_year = Column(Integer, nullable=False)
    tuition_fee_yearly = Column(Numeric(12, 2), nullable=False)
    hostel_fee_yearly = Column(Numeric(12, 2), default=0.0)
    mess_fee_yearly = Column(Numeric(12, 2), default=0.0)
    exam_fee_yearly = Column(Numeric(12, 2), default=0.0)
    other_charges_yearly = Column(Numeric(12, 2), default=0.0)
    total_yearly_estimated = Column(Numeric(12, 2), nullable=False)
    fee_source_url = Column(String(500), nullable=False)
    fee_source_name = Column(String(150), nullable=False)
    data_confidence = Column(Numeric(4, 1), default=95.0)
    is_verified = Column(Boolean, default=True)
    last_updated_at = Column(DateTime, default=datetime.utcnow)

    college = relationship("College", back_populates="fees")

class CollegeInfrastructure(Base):
    __tablename__ = "college_infrastructure"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=False, unique=True)
    classroom_rating = Column(Numeric(3, 2), default=4.0)
    lab_facilities = Column(Text, nullable=False)
    library_books_count = Column(Integer)
    digital_library_access = Column(Boolean, default=True)
    wifi_coverage = Column(String(50), default="Campus-wide Gigabit")
    hostel_capacity_boys = Column(Integer)
    hostel_capacity_girls = Column(Integer)
    hostel_ac_available = Column(Boolean, default=False)
    canteen_hygiene_rating = Column(Numeric(3, 2), default=4.0)
    sports_facilities = Column(ARRAY(String), default=list)
    gym_available = Column(Boolean, default=True)
    transport_bus_routes = Column(Integer, default=0)
    medical_center_hours = Column(String(100), default="24/7 with Ambulance")
    auditorium_capacity = Column(Integer)
    last_verified_at = Column(DateTime, default=datetime.utcnow)

    college = relationship("College", back_populates="infrastructure")

class CampusLifeDetail(Base):
    __tablename__ = "campus_life_details"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=False, unique=True)
    freedom_strictness_score = Column(Numeric(3, 1), nullable=False) # 1.0 (Strict) to 10.0 (High Freedom)
    freedom_confidence_level = Column(Numeric(4, 1), default=88.0)
    freedom_review_count = Column(Integer, default=0)
    curfew_timing_boys = Column(String(50))
    curfew_timing_girls = Column(String(50))
    dress_code_policy = Column(String(150))
    outing_rules = Column(String(255))
    cultural_fest_name = Column(String(150))
    tech_fest_name = Column(String(150))
    active_clubs_count = Column(Integer, default=15)
    annual_hackathons_count = Column(Integer, default=3)
    industrial_visits_per_year = Column(Integer, default=2)

    college = relationship("College", back_populates="campus_life")

class StudentReview(Base):
    __tablename__ = "student_reviews"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=False)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    anonymous_alias = Column(String(100), nullable=False)
    review_title = Column(String(200), nullable=False)
    review_text = Column(Text, nullable=False)
    rating_academics = Column(Numeric(2, 1))
    rating_infrastructure = Column(Numeric(2, 1))
    rating_campus_life = Column(Numeric(2, 1))
    rating_hostel_food = Column(Numeric(2, 1))
    rating_placement = Column(Numeric(2, 1))
    freedom_rating = Column(Numeric(2, 1))
    sentiment = Column(String(20), default="Neutral") # 'Positive', 'Neutral', 'Negative'
    sentiment_score = Column(Numeric(4, 3), default=0.0)
    aspects_positive = Column(ARRAY(String), default=list)
    aspects_negative = Column(ARRAY(String), default=list)
    is_approved = Column(Boolean, default=False)
    upvotes = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow)

    college = relationship("College", back_populates="reviews")
    user = relationship("User", back_populates="reviews")

class CollegePlacement(Base):
    __tablename__ = "college_placements"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=False)
    academic_year = Column(Integer, nullable=False)
    placement_percentage = Column(Numeric(5, 2), nullable=False)
    total_recruiters = Column(Integer, nullable=False)
    highest_package_lpa = Column(Numeric(6, 2), nullable=False)
    average_package_lpa = Column(Numeric(6, 2), nullable=False)
    median_package_lpa = Column(Numeric(6, 2), nullable=False)
    total_offers = Column(Integer)
    internship_offers = Column(Integer)
    report_source_url = Column(String(500), nullable=False)
    is_official_report = Column(Boolean, default=True)
    last_verified_at = Column(DateTime, default=datetime.utcnow)

    college = relationship("College", back_populates="placements")

class RecruitmentHistory(Base):
    __tablename__ = "recruitment_history"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=False)
    company_name = Column(String(200), nullable=False)
    recruitment_year = Column(Integer, nullable=False)
    job_roles = Column(ARRAY(String), default=list)
    hired_count = Column(Integer)
    package_offered_lpa = Column(Numeric(6, 2))
    hiring_type = Column(String(50), default="Full-Time")
    source_reference = Column(String(255))

    college = relationship("College", back_populates="recruitment_history")

class CollegeSource(Base):
    __tablename__ = "college_sources"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=False)
    data_domain = Column(String(100), nullable=False)
    source_name = Column(String(200), nullable=False)
    source_url = Column(String(500), nullable=False)
    is_official = Column(Boolean, default=True)
    collected_at = Column(DateTime, default=datetime.utcnow)
    last_verified_at = Column(DateTime, default=datetime.utcnow)
    data_confidence = Column(Numeric(4, 1), default=95.0)
    verification_status = Column(String(50), default="verified") # 'verified', 'pending', 'conflicting'
    discrepancy_notes = Column(Text, nullable=True)

    college = relationship("College", back_populates="sources")

class Scholarship(Base):
    __tablename__ = "scholarships"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    college_id = Column(UUID(as_uuid=True), ForeignKey("colleges.id", ondelete="CASCADE"), nullable=True)
    name = Column(String(200), nullable=False)
    type = Column(String(50), nullable=False) # 'Government', 'Merit', 'Institutional'
    eligibility_criteria = Column(Text, nullable=False)
    amount_description = Column(String(255), nullable=False)
    amount_yearly = Column(Numeric(12, 2))
    required_documents = Column(ARRAY(String), default=list)
    portal_url = Column(String(500))
    is_active = Column(Boolean, default=True)

    college = relationship("College", back_populates="scholarships")
