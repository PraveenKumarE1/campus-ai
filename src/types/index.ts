export type StreamType = 
  | 'PCM' 
  | 'PCB' 
  | 'PCMB' 
  | 'Commerce_Maths' 
  | 'Commerce' 
  | 'Arts_Humanities' 
  | 'Vocational';

export type InstitutionType = 
  | 'Government' 
  | 'Autonomous / Govt. Aided' 
  | 'Autonomous / Private' 
  | 'Deemed University' 
  | 'Institute of National Importance';

export type CutoffChance = 'Safe' | 'Moderate' | 'Reach';

export type StrictnessLevel = 
  | 'Strict Formals' 
  | 'Moderate / Smart Casuals' 
  | 'High Freedom / Casuals';

export interface DressCodeDetails {
  strictness_level: StrictnessLevel;
  policy_summary: string;
  uniform_policy: 'Mandatory Formals / Uniform' | 'Smart Casuals & Ethnic' | 'Open Casuals';
  enforcement_frequency: string;
  boys_rules: string;
  girls_rules: string;
  footwear_rules: string;
  id_card_policy: string;
  mobile_phone_policy: string;
  outing_curfew: string;
  review_count: number;
  confidence_level: number; // e.g. 92%
  disclaimer: "Student-review-based indicator";
  freedom_sentiment_breakdown?: {
    satisfied_percentage: number;
    neutral_percentage: number;
    restrictive_percentage: number;
    key_verdict: string;
    aspect_ratings: {
      morning_gate_enforcement: number; // 1 (Relaxed) to 5 (Extremely Strict)
      lab_compliance_checks: number;
      hostel_curfew_rigidity: number;
      hair_grooming_scrutiny: number;
      mobile_device_liberty: number; // 1 (Banned) to 5 (Fully Allowed)
    };
  };
}

export interface CampusFreedomMetrics {
  score: number; // 1.0 (Very Strict) to 10.0 (High Freedom)
  indicator_label: string;
  review_count: number;
  confidence_percentage: number;
  cultural_fest_name: string;
  tech_fest_name: string;
  annual_hackathons_count: number;
  active_clubs_count: number;
  industrial_visits_per_year: number;
}

export interface CourseOffering {
  id: string;
  course_name: string;
  degree: string;
  specialization?: string;
  duration_years: number;
  intake_seats: number;
  admission_procedure: string;
  entrance_exams: string[];
  historical_cutoffs: {
    year: number;
    OC_closing: number;
    BC_closing: number;
    MBC_closing: number;
    SC_closing: number;
  }[];
}

export interface CollegeFeeStructure {
  academic_year: number;
  tuition_fee_yearly: number;
  hostel_fee_yearly: number;
  mess_fee_yearly: number;
  exam_fee_yearly: number;
  other_charges_yearly: number;
  total_yearly_estimated: number;
  fee_source_url: string;
  fee_source_name: string;
  last_updated: string;
  data_confidence: number;
  verification_status: 'verified' | 'pending' | 'conflicting';
  conflict_warning?: string;
}

export interface InfrastructureSpecs {
  classroom_rating: number;
  lab_facilities: string;
  library_books_count: number;
  digital_library: boolean;
  wifi_bandwidth: string;
  hostel_ac_available: boolean;
  canteen_hygiene_rating: number;
  sports_facilities: string[];
  gym_available: boolean;
  bus_transport_routes: number;
  medical_center: string;
}

export interface PlacementSummary {
  academic_year: number;
  placement_percentage: number;
  total_recruiters: number;
  highest_package_lpa: number;
  average_package_lpa: number;
  median_package_lpa: number;
  total_offers: number;
  internship_offers: number;
  report_source_url: string;
  is_official: boolean;
  last_verified: string;
}

export interface RecruiterHistoryItem {
  company_name: string;
  recruitment_year: number;
  job_roles: string[];
  hired_count?: number;
  package_offered_lpa: number;
  hiring_type: 'Full-Time' | 'Internship+PPO';
  source_reference: string;
}

export interface ScholarshipItem {
  id: string;
  name: string;
  type: 'Government' | 'Merit' | 'First Graduate' | 'Need-Based' | 'Institutional';
  eligibility: string;
  amount_description: string;
  yearly_value?: number;
  required_documents: string[];
  portal_url: string;
}

export interface StudentReviewItem {
  id: string;
  anonymous_alias: string;
  review_title: string;
  review_text: string;
  rating_academics: number;
  rating_infrastructure: number;
  rating_campus_life: number;
  rating_hostel_food: number;
  rating_placement: number;
  freedom_rating: number;
  dress_code_feedback: string;
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  sentiment_score: number;
  positive_aspects: string[];
  negative_aspects: string[];
  is_approved: boolean;
  upvotes: number;
  created_at: string;
}

export interface DataSourceItem {
  id: string;
  domain: 'Fees' | 'Cutoffs' | 'Placements' | 'Dress Code' | 'Accreditation' | 'Curriculum';
  source_name: string;
  source_url: string;
  is_official: boolean;
  collected_at: string;
  last_verified_at: string;
  data_confidence: number;
  verification_status: 'verified' | 'pending' | 'conflicting';
  discrepancy_note?: string;
}

export interface College {
  id: string;
  name: string;
  short_code: string;
  slug: string;
  city: string;
  district: string;
  state: 'Tamil Nadu';
  address: string;
  website: string;
  establishment_year: number;
  institution_type: InstitutionType;
  accreditation: string;
  approval_info: string;
  campus_area_acres: number;
  min_eligibility_pct: number;
  overall_rating: number;
  is_demo_data: boolean;
  data_confidence: number;
  last_updated: string;
  
  // Specific Deep Fields
  dress_code: DressCodeDetails;
  campus_freedom: CampusFreedomMetrics;
  courses: CourseOffering[];
  fees: CollegeFeeStructure;
  infrastructure: InfrastructureSpecs;
  placements: PlacementSummary;
  recruitment_history: RecruiterHistoryItem[];
  scholarships: ScholarshipItem[];
  student_reviews: StudentReviewItem[];
  sources: DataSourceItem[];
  
  // Computed for active student
  recommendation_match?: {
    overall_match_score: number;
    eligibility_status: 'Eligible' | 'Conditional' | 'Ineligible';
    cutoff_compatibility: CutoffChance;
    budget_compatibility: 'Within Budget' | 'Moderate Stretch' | 'Above Budget';
    academic_match: number;
    placement_match: number;
    infra_match: number;
    campus_match: number;
    reasons: string[];
  };
}

export interface StudentProfile {
  id?: string;
  twelfth_marks_percentage: number;
  stream: StreamType;
  calculated_cutoff: number; // e.g. TNEA cutoff: Maths (100) + Physics (50) + Chemistry (50) = 200
  subject_marks: {
    maths?: number;
    physics?: number;
    chemistry?: number;
    biology?: number;
    computer_science?: number;
    commerce?: number;
    accountancy?: number;
  };
  preferred_course: string;
  interests: string[];
  skills: string[];
  preferred_location: string;
  max_yearly_budget: number;
  govt_private_preference: 'Any' | 'Government' | 'Autonomous / Govt. Aided' | 'Autonomous / Private';
  hostel_required: boolean;
  max_distance_km: number;
  entrance_exam_scores: {
    TNEA?: number;
    JEE_Main?: number;
    NEET?: number;
  };
  importance_placement: number; // 1 to 5
  importance_campus_life: number; // 1 to 5
  importance_infrastructure: number; // 1 to 5
  campus_vibe_preference: 'Strict' | 'Balanced' | 'High Freedom';
  dress_code_preference: 'Strict Formals' | 'Moderate' | 'Casual / Flexible' | 'Any';
  career_goal: string;
}

export interface CutoffPredictionQuery {
  cutoff: number;
  category: 'OC' | 'BC' | 'BCM' | 'MBC' | 'SC' | 'SCA' | 'ST';
  preferred_district?: string;
  stream?: string;
}

export interface AIRecommendationBreakdown {
  college_id: string;
  college_name: string;
  overall_score: number;
  cutoff_status: CutoffChance;
  dress_code_strictness: StrictnessLevel;
  fees_yearly: number;
  average_package: number;
  reasons: string[];
}
