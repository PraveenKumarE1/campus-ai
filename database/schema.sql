-- ==============================================================================
-- CollegeWise AI - Normalized PostgreSQL Database Schema
-- Production Schema for Real-Time College & Career Intelligence Platform
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS & ROLES
CREATE TYPE user_role_enum AS ENUM ('student', 'admin', 'moderator');
CREATE TYPE stream_group_enum AS ENUM ('PCM', 'PCB', 'PCMB', 'Commerce_Maths', 'Commerce', 'Arts_Humanities', 'Vocational');
CREATE TYPE verification_status_enum AS ENUM ('verified', 'pending', 'conflicting', 'rejected');
CREATE TYPE admission_chance_enum AS ENUM ('Safe', 'Moderate', 'Reach');
CREATE TYPE sentiment_enum AS ENUM ('Positive', 'Neutral', 'Negative');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    role user_role_enum NOT NULL DEFAULT 'student',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE student_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    twelfth_marks_percentage NUMERIC(5,2) NOT NULL,
    stream stream_group_enum NOT NULL,
    calculated_cutoff NUMERIC(5,2) NOT NULL,
    subject_marks JSONB NOT NULL DEFAULT '{}'::jsonb, -- e.g. {"maths": 95, "physics": 92, "chemistry": 88}
    preferred_course VARCHAR(150),
    interests TEXT[] DEFAULT '{}',
    skills TEXT[] DEFAULT '{}',
    preferred_location VARCHAR(150),
    max_yearly_budget NUMERIC(12,2),
    govt_private_preference VARCHAR(50) DEFAULT 'Any', -- 'Government', 'Private', 'Autonomous', 'Any'
    hostel_required BOOLEAN DEFAULT FALSE,
    max_distance_km INTEGER,
    entrance_exam_scores JSONB DEFAULT '{}'::jsonb, -- e.g. {"JEE_Main": 96.5, "NEET": 580, "TNEA": 192}
    importance_placement INTEGER CHECK (importance_placement BETWEEN 1 AND 5) DEFAULT 4,
    importance_campus_life INTEGER CHECK (importance_campus_life BETWEEN 1 AND 5) DEFAULT 3,
    importance_infrastructure INTEGER CHECK (importance_infrastructure BETWEEN 1 AND 5) DEFAULT 4,
    campus_vibe_preference VARCHAR(50) DEFAULT 'Balanced', -- 'Strict', 'Balanced', 'Flexible'
    career_goal VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_student_profiles_user ON student_profiles(user_id);
CREATE INDEX idx_student_profiles_cutoff ON student_profiles(calculated_cutoff);

-- 2. UNIVERSITIES & COLLEGES
CREATE TABLE universities (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    state VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL DEFAULT 'India',
    website VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE colleges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    university_id UUID REFERENCES universities(id) ON DELETE SET NULL,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(50),
    slug VARCHAR(255) UNIQUE NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(20),
    website VARCHAR(255) NOT NULL,
    establishment_year INTEGER NOT NULL,
    institution_type VARCHAR(50) NOT NULL, -- 'Government', 'Private', 'Autonomous', 'Deemed'
    accreditation VARCHAR(100), -- 'NAAC A++', 'NIRF #1', 'NBA'
    approval_info VARCHAR(255), -- 'AICTE, UGC Approved'
    campus_area_acres NUMERIC(6,2),
    is_demo_data BOOLEAN DEFAULT FALSE,
    overall_rating NUMERIC(3,2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_colleges_city_state ON colleges(city, state);
CREATE INDEX idx_colleges_type ON colleges(institution_type);

-- 3. COURSES & DEPARTMENTS
CREATE TABLE departments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    code VARCHAR(50)
);

CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    department_id UUID REFERENCES departments(id) ON DELETE SET NULL,
    name VARCHAR(200) NOT NULL,
    degree VARCHAR(50) NOT NULL, -- 'B.Tech', 'B.E.', 'MBBS', 'B.Sc', 'B.Com'
    duration_years INTEGER NOT NULL DEFAULT 4,
    eligible_streams stream_group_enum[] NOT NULL
);

CREATE TABLE college_courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    specialization VARCHAR(150),
    intake_seats INTEGER NOT NULL,
    admission_procedure TEXT NOT NULL,
    entrance_exams TEXT[] DEFAULT '{}',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_college_course UNIQUE (college_id, course_id, specialization)
);

-- 4. ELIGIBILITY & CUTOFFS
CREATE TABLE eligibility_criteria (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_course_id UUID NOT NULL REFERENCES college_courses(id) ON DELETE CASCADE,
    min_twelfth_percentage NUMERIC(5,2) NOT NULL,
    required_subjects TEXT[] NOT NULL,
    mandatory_entrance_exam VARCHAR(100),
    min_entrance_score NUMERIC(7,2),
    special_requirements TEXT
);

CREATE TABLE historical_cutoffs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_course_id UUID NOT NULL REFERENCES college_courses(id) ON DELETE CASCADE,
    academic_year INTEGER NOT NULL, -- e.g. 2025, 2024, 2023
    category VARCHAR(50) NOT NULL, -- 'General', 'OBC', 'SC', 'ST', 'EWS'
    round_number INTEGER DEFAULT 1,
    opening_cutoff NUMERIC(6,2),
    closing_cutoff NUMERIC(6,2) NOT NULL,
    source_url VARCHAR(500),
    last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_course_year_cat_round UNIQUE (college_course_id, academic_year, category, round_number)
);

CREATE INDEX idx_cutoffs_course_year ON historical_cutoffs(college_course_id, academic_year);

-- 5. FEES
CREATE TABLE college_fees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_course_id UUID NOT NULL REFERENCES college_courses(id) ON DELETE CASCADE,
    academic_year INTEGER NOT NULL,
    tuition_fee_yearly NUMERIC(12,2) NOT NULL,
    hostel_fee_yearly NUMERIC(12,2) DEFAULT 0.00,
    mess_fee_yearly NUMERIC(12,2) DEFAULT 0.00,
    exam_fee_yearly NUMERIC(12,2) DEFAULT 0.00,
    other_charges_yearly NUMERIC(12,2) DEFAULT 0.00,
    total_yearly_estimated NUMERIC(12,2) NOT NULL,
    fee_source_url VARCHAR(500) NOT NULL,
    fee_source_name VARCHAR(150) NOT NULL,
    data_confidence NUMERIC(4,1) DEFAULT 95.0,
    is_verified BOOLEAN DEFAULT TRUE,
    last_updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. SCHOLARSHIPS
CREATE TABLE scholarships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID REFERENCES colleges(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    type VARCHAR(50) NOT NULL, -- 'Government', 'Merit', 'Need-Based', 'Institutional'
    eligibility_criteria TEXT NOT NULL,
    amount_description VARCHAR(255) NOT NULL,
    amount_yearly NUMERIC(12,2),
    required_documents TEXT[] DEFAULT '{}',
    application_deadline DATE,
    portal_url VARCHAR(500),
    is_active BOOLEAN DEFAULT TRUE
);

-- 7. INFRASTRUCTURE & FACILITIES
CREATE TABLE college_infrastructure (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE UNIQUE,
    classroom_rating NUMERIC(3,2) DEFAULT 4.0,
    lab_facilities TEXT NOT NULL,
    library_books_count INTEGER,
    digital_library_access BOOLEAN DEFAULT TRUE,
    wifi_coverage VARCHAR(50) DEFAULT 'Campus-wide Gigabit',
    hostel_capacity_boys INTEGER,
    hostel_capacity_girls INTEGER,
    hostel_ac_available BOOLEAN DEFAULT FALSE,
    canteen_hygiene_rating NUMERIC(3,2) DEFAULT 4.0,
    sports_facilities TEXT[] DEFAULT '{}',
    gym_available BOOLEAN DEFAULT TRUE,
    transport_bus_routes INTEGER DEFAULT 0,
    medical_center_hours VARCHAR(100) DEFAULT '24/7 with Ambulance',
    auditorium_capacity INTEGER,
    last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. CAMPUS LIFE, CLUBS & STRICTNESS INDICATOR
CREATE TABLE campus_life_details (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE UNIQUE,
    freedom_strictness_score NUMERIC(3,1) NOT NULL, -- 1.0 (Very Strict) to 10.0 (High Freedom)
    freedom_confidence_level NUMERIC(4,1) DEFAULT 88.0,
    freedom_review_count INTEGER DEFAULT 0,
    curfew_timing_boys VARCHAR(50),
    curfew_timing_girls VARCHAR(50),
    dress_code_policy VARCHAR(150),
    outing_rules VARCHAR(255),
    cultural_fest_name VARCHAR(150),
    tech_fest_name VARCHAR(150),
    sports_fest_name VARCHAR(150),
    active_clubs_count INTEGER DEFAULT 15,
    annual_hackathons_count INTEGER DEFAULT 3,
    industrial_visits_per_year INTEGER DEFAULT 2
);

-- 9. REVIEWS & SENTIMENT ANALYSIS
CREATE TABLE student_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    anonymous_alias VARCHAR(100) NOT NULL, -- e.g. "Mechanical Senior '25" (no PII)
    review_title VARCHAR(200) NOT NULL,
    review_text TEXT NOT NULL,
    rating_academics NUMERIC(2,1) CHECK (rating_academics BETWEEN 1 AND 5),
    rating_infrastructure NUMERIC(2,1) CHECK (rating_infrastructure BETWEEN 1 AND 5),
    rating_campus_life NUMERIC(2,1) CHECK (rating_campus_life BETWEEN 1 AND 5),
    rating_hostel_food NUMERIC(2,1) CHECK (rating_hostel_food BETWEEN 1 AND 5),
    rating_placement NUMERIC(2,1) CHECK (rating_placement BETWEEN 1 AND 5),
    freedom_rating NUMERIC(2,1) CHECK (freedom_rating BETWEEN 1 AND 5),
    sentiment sentiment_enum DEFAULT 'Neutral',
    sentiment_score NUMERIC(4,3) DEFAULT 0.000, -- -1.0 to +1.0
    aspects_positive TEXT[] DEFAULT '{}',
    aspects_negative TEXT[] DEFAULT '{}',
    is_approved BOOLEAN DEFAULT FALSE,
    upvotes INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_reviews_college ON student_reviews(college_id);

-- 10. PLACEMENTS & RECRUITMENT HISTORY
CREATE TABLE college_placements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    academic_year INTEGER NOT NULL,
    placement_percentage NUMERIC(5,2) NOT NULL,
    total_recruiters INTEGER NOT NULL,
    highest_package_lpa NUMERIC(6,2) NOT NULL,
    average_package_lpa NUMERIC(6,2) NOT NULL,
    median_package_lpa NUMERIC(6,2) NOT NULL,
    total_offers INTEGER,
    internship_offers INTEGER,
    report_source_url VARCHAR(500) NOT NULL,
    is_official_report BOOLEAN DEFAULT TRUE,
    last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_college_placement_year UNIQUE (college_id, academic_year)
);

CREATE TABLE recruiters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(200) UNIQUE NOT NULL,
    tier VARCHAR(50) DEFAULT 'Tier 1', -- 'Tier 1 Product', 'Tier 2 IT/Core', 'Fintech', etc.
    industry VARCHAR(100)
);

CREATE TABLE recruitment_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    recruiter_id UUID NOT NULL REFERENCES recruiters(id) ON DELETE CASCADE,
    recruitment_year INTEGER NOT NULL,
    job_roles TEXT[] NOT NULL,
    hired_count INTEGER,
    package_offered_lpa NUMERIC(6,2),
    hiring_type VARCHAR(50) DEFAULT 'Full-Time', -- 'Full-Time', 'Internship+PPO', 'Internship'
    source_reference VARCHAR(255)
);

CREATE INDEX idx_recruitment_college_year ON recruitment_history(college_id, recruitment_year);

-- 11. DATA VERIFICATION & SOURCES
CREATE TABLE college_sources (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    data_domain VARCHAR(100) NOT NULL, -- 'Fees', 'Cutoffs', 'Placements', 'Infrastructure', 'Accreditation'
    source_name VARCHAR(200) NOT NULL,
    source_url VARCHAR(500) NOT NULL,
    is_official BOOLEAN DEFAULT TRUE,
    collected_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_verified_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    data_confidence NUMERIC(4,1) DEFAULT 95.0,
    verification_status verification_status_enum DEFAULT 'verified',
    discrepancy_notes TEXT
);

CREATE INDEX idx_sources_college ON college_sources(college_id);

-- 12. SAVED COLLEGES & NOTIFICATIONS
CREATE TABLE saved_colleges (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    college_id UUID NOT NULL REFERENCES colleges(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_user_saved_college UNIQUE (user_id, college_id)
);

CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'Admission_Alert',
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
