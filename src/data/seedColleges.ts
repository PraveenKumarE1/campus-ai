import { College } from '../types';
import { MORE_TAMIL_NADU_COLLEGES } from './moreTamilNaduColleges';

const BASE_SEED_COLLEGES: College[] = [
  {
    id: 'iitm-chennai',
    name: 'Indian Institute of Technology Madras (IIT Madras)',
    short_code: 'IITM',
    slug: 'iit-madras-chennai',
    city: 'Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    address: 'Sardar Patel Road, Beside Adyar Cancer Institute, Guindy, Chennai, Tamil Nadu 600036',
    website: 'https://www.iitm.ac.in',
    establishment_year: 1959,
    institution_type: 'Institute of National Importance',
    accreditation: 'NIRF #1 Overall & Engineering in India (Consecutive Years)',
    approval_info: 'Ministry of Education, Government of India (MoE)',
    campus_area_acres: 630.0,
    min_eligibility_pct: 75.0,
    overall_rating: 4.9,
    is_demo_data: true,
    data_confidence: 99.2,
    last_updated: '04/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'Zero formal dress mandates during regular lectures. Students have full personal autonomy to wear decent casual attire.',
      boys_rules: 'T-shirts, shirts, jeans, shorts allowed in hostels & residential zones. Modest casuals recommended inside academic labs.',
      girls_rules: 'Comfortable casual wear, tops, jeans, kurtas. Full autonomy across hostels and campus grounds.',
      footwear_rules: 'Sandals, sneakers, sports shoes. Closed shoes strictly required only inside chemical and heavy mechanical machinery workshops.',
      id_card_policy: 'Smart RFID Institute ID card required at main security gates and central library.',
      mobile_phone_policy: 'Unrestricted usage campus-wide; silent mode during lecture hours and laboratory experiments.',
      outing_curfew: 'No in-campus movement curfew for hostellers. High freedom of research in 24/7 labs.',
      review_count: 428,
      confidence_level: 97.5,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 9.4,
      indicator_label: 'Exceptional Campus Freedom & Autonomy',
      review_count: 428,
      confidence_percentage: 97.5,
      cultural_fest_name: 'Saarang (Largest student-run cultural festival in South Asia)',
      tech_fest_name: 'Shaastra (ISO 9001:2015 certified technical fest)',
      annual_hackathons_count: 14,
      active_clubs_count: 55,
      industrial_visits_per_year: 5
    },
    courses: [
      {
        id: 'iitm-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 87,
        admission_procedure: 'JoSAA Centralized Counselling based on JEE Advanced All India Rank',
        entrance_exams: ['JEE Advanced'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 148, BC_closing: 62, MBC_closing: 0, SC_closing: 28 }, // JEE Adv Rank
          { year: 2024, OC_closing: 144, BC_closing: 58, MBC_closing: 0, SC_closing: 25 },
          { year: 2023, OC_closing: 175, BC_closing: 70, MBC_closing: 0, SC_closing: 32 }
        ]
      },
      {
        id: 'iitm-ee',
        course_name: 'Electrical Engineering',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 120,
        admission_procedure: 'JoSAA Counselling based on JEE Advanced AIR',
        entrance_exams: ['JEE Advanced'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 850, BC_closing: 410, MBC_closing: 0, SC_closing: 190 },
          { year: 2024, OC_closing: 820, BC_closing: 395, MBC_closing: 0, SC_closing: 180 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 200000.0,
      hostel_fee_yearly: 28000.0,
      mess_fee_yearly: 38000.0,
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 14500.0,
      total_yearly_estimated: 284500.0,
      fee_source_url: 'https://www.iitm.ac.in/academics/fees-structure',
      fee_source_name: 'IIT Madras Official Academic Senate Fee Circular 2026',
      last_updated: '01/10/2026',
      data_confidence: 99.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.9,
      lab_facilities: 'State-of-the-art supercomputing facilities, Robert Bosch Center for Data Science & AI, National Center for Combustion R&D',
      library_books_count: 520000,
      digital_library: true,
      wifi_bandwidth: 'Campus-wide 10 Gbps National Knowledge Network (NKN)',
      hostel_ac_available: true,
      canteen_hygiene_rating: 4.7,
      sports_facilities: ['Olympic size swimming pool', 'Floodlit cricket ground', 'Synthetic athletic track', 'Badminton & Squash indoor courts'],
      gym_available: true,
      bus_transport_routes: 12,
      medical_center: 'Institute Hospital with round-the-clock doctors & 2 ambulances'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 92.8,
      total_recruiters: 320,
      highest_package_lpa: 131.0,
      average_package_lpa: 21.48,
      median_package_lpa: 17.0,
      total_offers: 1612,
      internship_offers: 450,
      report_source_url: 'https://placement.iitm.ac.in/reports/2025',
      is_official: true,
      last_verified: '28/09/2026'
    },
    recruitment_history: [
      { company_name: 'Google', recruitment_year: 2025, job_roles: ['Software Engineer L3', 'Research Scientist'], package_offered_lpa: 48.5, hiring_type: 'Full-Time', source_reference: 'Official Placement Cell Bulletin' },
      { company_name: 'Microsoft', recruitment_year: 2025, job_roles: ['Software Development Engineer'], package_offered_lpa: 44.0, hiring_type: 'Full-Time', source_reference: 'IITM Career Bureau' },
      { company_name: 'Texas Instruments', recruitment_year: 2025, job_roles: ['Analog Design Engineer'], package_offered_lpa: 31.0, hiring_type: 'Full-Time', source_reference: 'Dept of Electrical Engg' },
      { company_name: 'Goldman Sachs', recruitment_year: 2025, job_roles: ['Quantitative Analyst', 'Software Engineer'], package_offered_lpa: 34.0, hiring_type: 'Full-Time', source_reference: 'Placement Portal' }
    ],
    scholarships: [
      {
        id: 'iitm-mcm',
        name: 'Merit-cum-Means (MCM) Scholarship',
        type: 'Government',
        eligibility: 'Parental income < 4.5 Lakhs per annum with CGPA >= 7.0',
        amount_description: 'Full 100% Tuition Fee waiver + Rs 1,000 monthly allowance',
        yearly_value: 200000.0,
        required_documents: ['Income Certificate', '12th Marksheet', 'Aadhaar Card'],
        portal_url: 'https://scholarships.gov.in'
      },
      {
        id: 'iitm-alumni',
        name: 'IIT Madras Heritage Alumni Endowed Award',
        type: 'Institutional',
        eligibility: 'Top 10 percentile academic performance in first year',
        amount_description: 'Rs 1,00,000 one-time grant for equipment/books',
        yearly_value: 100000.0,
        required_documents: ['Grade Sheet', 'Faculty Recommendation'],
        portal_url: 'https://joyofgiving.alumni.iitm.ac.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-iitm-1',
        anonymous_alias: 'Dual Degree CS Senior',
        review_title: 'Unrivaled intellectual freedom, lush deer-filled campus',
        review_text: 'There is zero interference in what you wear or when you step out of your hostel to go to the CFI (Centre for Innovation). The academic workload is rigorous, but professors treat you as independent researchers.',
        rating_academics: 5.0,
        rating_infrastructure: 4.9,
        rating_campus_life: 4.8,
        rating_hostel_food: 4.0,
        rating_placement: 5.0,
        freedom_rating: 5.0,
        dress_code_feedback: 'No dress code enforcement whatsoever. You are free to wear T-shirts and jeans.',
        sentiment: 'Positive',
        sentiment_score: 0.88,
        positive_aspects: ['Campus Freedom', 'Placement', 'Infrastructure', 'Faculty'],
        negative_aspects: ['Hostel & Living'],
        is_approved: true,
        upvotes: 42,
        created_at: '2026-08-14'
      }
    ],
    sources: [
      {
        id: 'src-iitm-1',
        domain: 'Fees',
        source_name: 'Official IIT Madras Registrar Portal',
        source_url: 'https://www.iitm.ac.in/academics/fees',
        is_official: true,
        collected_at: '2026-10-01',
        last_verified_at: '2026-10-04',
        data_confidence: 99.5,
        verification_status: 'verified'
      },
      {
        id: 'src-iitm-2',
        domain: 'Dress Code',
        source_name: 'Student Senate Code of Conduct & Hostels Handbook',
        source_url: 'https://www.iitm.ac.in/campuslife/hostels',
        is_official: true,
        collected_at: '2026-09-20',
        last_verified_at: '2026-10-02',
        data_confidence: 98.0,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'ceg-anna-univ',
    name: 'College of Engineering, Guindy (Anna University)',
    short_code: 'CEG',
    slug: 'ceg-anna-university-chennai',
    city: 'Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    address: '12, Sardar Patel Road, Guindy, Chennai, Tamil Nadu 600025',
    website: 'https://ceg.annauniv.edu',
    establishment_year: 1794,
    institution_type: 'Government',
    accreditation: 'NAAC A++, NIRF #13 Engineering in India',
    approval_info: 'State Government of Tamil Nadu, UGC & AICTE Approved',
    campus_area_acres: 223.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.8,
    is_demo_data: true,
    data_confidence: 98.4,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'Very relaxed and student-friendly. No uniforms or forced formal attire. Neat casual wear is standard throughout.',
      boys_rules: 'Collared T-shirts, regular shirts, jeans, and trousers. Round-neck T-shirts with neutral graphics widely accepted.',
      girls_rules: 'Kurtis, salwar kameez, tops with jeans. No restrictive rules regarding dupattas or hair styling.',
      footwear_rules: 'Shoes or normal sandals. No restrictions for daily lectures.',
      id_card_policy: 'Mandatory Anna University ID card around neck during entry gates and university examinations.',
      mobile_phone_policy: 'Freely allowed outside classes; must remain switched off or silent in lecture halls.',
      outing_curfew: 'Hostel in-time: 8:30 PM for girls (extendable for library permits), relaxed for boys.',
      review_count: 360,
      confidence_level: 95.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 8.6,
      indicator_label: 'High Freedom, Historic Campus Culture',
      review_count: 360,
      confidence_percentage: 95.0,
      cultural_fest_name: 'Agni (Inter-college cultural gala)',
      tech_fest_name: 'Kurukshetra (UNESCO patronized technical fest)',
      annual_hackathons_count: 8,
      active_clubs_count: 38,
      industrial_visits_per_year: 3
    },
    courses: [
      {
        id: 'ceg-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 120,
        admission_procedure: 'TNEA Single Window Counselling based on 12th Maths, Physics, Chemistry (Cutoff out of 200)',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 199.5, BC_closing: 199.0, MBC_closing: 198.0, SC_closing: 193.5 },
          { year: 2024, OC_closing: 199.0, BC_closing: 198.5, MBC_closing: 197.5, SC_closing: 192.0 },
          { year: 2023, OC_closing: 198.5, BC_closing: 198.0, MBC_closing: 197.0, SC_closing: 191.0 }
        ]
      },
      {
        id: 'ceg-ece',
        course_name: 'Electronics and Communication Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 120,
        admission_procedure: 'TNEA Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 198.5, BC_closing: 198.0, MBC_closing: 196.5, SC_closing: 190.5 },
          { year: 2024, OC_closing: 198.0, BC_closing: 197.5, MBC_closing: 196.0, SC_closing: 189.0 }
        ]
      },
      {
        id: 'ceg-mech',
        course_name: 'Mechanical Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 191.0, BC_closing: 188.5, MBC_closing: 184.0, SC_closing: 172.0 },
          { year: 2024, OC_closing: 190.0, BC_closing: 187.0, MBC_closing: 182.5, SC_closing: 170.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 31060.0,
      hostel_fee_yearly: 18500.0,
      mess_fee_yearly: 26000.0,
      exam_fee_yearly: 3500.0,
      other_charges_yearly: 6200.0,
      total_yearly_estimated: 85260.0,
      fee_source_url: 'https://ceg.annauniv.edu/fees_structure.php',
      fee_source_name: 'Anna University Government Regulated Fee Schedule',
      last_updated: '29/09/2026',
      data_confidence: 98.8,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.4,
      lab_facilities: 'Tag Auditorium, Ramanujan Computing Centre (RCC), Aerospace Supersonic Wind Tunnel, Microelectronics fabrication labs',
      library_books_count: 280000,
      digital_library: true,
      wifi_bandwidth: 'Campus-wide WiFi via RCC 1 Gbps lease line',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.1,
      sports_facilities: ['Historic CEG Cricket Ground', 'Tennis courts', 'Gymnasium', 'Football & Hockey grounds'],
      gym_available: true,
      bus_transport_routes: 8,
      medical_center: 'Anna University Health Centre with resident medical officers'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 94.6,
      total_recruiters: 280,
      highest_package_lpa: 44.5,
      average_package_lpa: 11.8,
      median_package_lpa: 9.5,
      total_offers: 1420,
      internship_offers: 380,
      report_source_url: 'https://cuic.annauniv.edu/placement-report-2025',
      is_official: true,
      last_verified: '25/09/2026'
    },
    recruitment_history: [
      { company_name: 'Zoho Corporation', recruitment_year: 2025, job_roles: ['Software Developer', 'Product Designer'], package_offered_lpa: 12.0, hiring_type: 'Full-Time', source_reference: 'CUIC Placement Report' },
      { company_name: 'Caterpillar India', recruitment_year: 2025, job_roles: ['Design Engineer', 'Data Analyst'], package_offered_lpa: 13.5, hiring_type: 'Full-Time', source_reference: 'Mechanical Dept Placement Data' },
      { company_name: 'Amazon', recruitment_year: 2025, job_roles: ['SDE-1'], package_offered_lpa: 36.0, hiring_type: 'Full-Time', source_reference: 'CUIC Statistics' },
      { company_name: 'Larsen & Toubro (L&T)', recruitment_year: 2025, job_roles: ['Graduate Engineer Trainee (GET)'], package_offered_lpa: 7.5, hiring_type: 'Full-Time', source_reference: 'Core Placement Archive' }
    ],
    scholarships: [
      {
        id: 'tn-fg-ceg',
        name: 'Tamil Nadu Government First Graduate Scheme',
        type: 'First Graduate',
        eligibility: 'Student is the first graduate in their direct family (no siblings or parents holding a degree)',
        amount_description: 'Full Tuition Fee concession paid directly by TN State Government',
        yearly_value: 31060.0,
        required_documents: ['First Graduate Certificate from Tahsildar', 'Joint Declaration by Family'],
        portal_url: 'https://tneaonline.org'
      },
      {
        id: 'tn-7point5-ceg',
        name: 'TN Government 7.5% Govt School Reservation Scheme',
        type: 'Government',
        eligibility: 'Students who studied from 6th to 12th in Tamil Nadu Government Schools',
        amount_description: '100% Free Education (Tuition, Hostel, Mess & Books covered)',
        yearly_value: 85260.0,
        required_documents: ['School Bonafide Certificate (6th to 12th)'],
        portal_url: 'https://tneaonline.org'
      }
    ],
    student_reviews: [
      {
        id: 'rev-ceg-1',
        anonymous_alias: 'ECE Final Year Student',
        review_title: 'Unbelievable ROI and relaxed campus atmosphere',
        review_text: 'CEG is one of the oldest engineering colleges in Asia. The dress code is very chill—nobody stops you for wearing jeans or casual shirts. The fees are so minimal that almost any student can afford it, and core company placements like Texas Instruments and Caterpillar are unmatched.',
        rating_academics: 4.8,
        rating_infrastructure: 4.3,
        rating_campus_life: 4.7,
        rating_hostel_food: 3.8,
        rating_placement: 4.9,
        freedom_rating: 4.8,
        dress_code_feedback: 'Dress code is very flexible. Casuals and jeans are standard.',
        sentiment: 'Positive',
        sentiment_score: 0.85,
        positive_aspects: ['Campus Freedom', 'Placement', 'Faculty', 'Events & Culture'],
        negative_aspects: ['Hostel & Living'],
        is_approved: true,
        upvotes: 38,
        created_at: '2026-09-02'
      }
    ],
    sources: [
      {
        id: 'src-ceg-1',
        domain: 'Fees',
        source_name: 'Centre for Admissions, Anna University Official Notification',
        source_url: 'https://cfa.annauniv.edu',
        is_official: true,
        collected_at: '2026-09-28',
        last_verified_at: '2026-10-03',
        data_confidence: 99.0,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'psg-tech-cbe',
    name: 'PSG College of Technology (PSG Tech)',
    short_code: 'PSG Tech',
    slug: 'psg-college-of-technology-coimbatore',
    city: 'Coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    address: 'Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004',
    website: 'https://www.psgtech.edu',
    establishment_year: 1951,
    institution_type: 'Autonomous / Govt. Aided',
    accreditation: 'NIRF #63, NAAC A Grade, NBA Accredited Programmes',
    approval_info: 'AICTE Approved, Affiliated to Anna University',
    campus_area_acres: 45.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.7,
    is_demo_data: true,
    data_confidence: 97.6,
    last_updated: '02/10/2026',
    dress_code: {
      strictness_level: 'Moderate / Smart Casuals',
      policy_summary: 'Semi-formal and decent smart casuals required during lecture hours. Strictly no torn jeans or sleevless tops.',
      boys_rules: 'Formal or neat casual shirts/collared polo t-shirts paired with standard trousers or jeans. Tucked-in shirts preferred on formal lab/presentation days.',
      girls_rules: 'Salwar kameez with dupatta, or decent long kurtis with jeans/leggings. Modern ethnic wear common.',
      footwear_rules: 'Shoes or formal sandals. Closed footwear strictly mandated in machine shops and heavy electrical labs.',
      id_card_policy: 'Lanyard with RFID ID card strictly inspected by security at Peelamedu gate.',
      mobile_phone_policy: 'Usage restricted inside classrooms and seminar halls; allowed in library lounge and student food courts.',
      outing_curfew: 'Hostel in-time: 7:30 PM for first years, 8:00 PM for seniors with automated biometric logging.',
      review_count: 310,
      confidence_level: 93.5,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 6.9,
      indicator_label: 'Balanced & Industry-Driven Culture',
      review_count: 310,
      confidence_percentage: 93.5,
      cultural_fest_name: 'Intrams (Annual Cultural Extravaganza)',
      tech_fest_name: 'Kriya (Global Technical Symposium of PSG Tech)',
      annual_hackathons_count: 7,
      active_clubs_count: 42,
      industrial_visits_per_year: 6
    },
    courses: [
      {
        id: 'psg-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 120,
        admission_procedure: 'TNEA Single Window Counselling / Management Quota for Self-Supporting courses',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 198.0, BC_closing: 197.0, MBC_closing: 194.5, SC_closing: 187.0 },
          { year: 2024, OC_closing: 197.5, BC_closing: 196.5, MBC_closing: 193.5, SC_closing: 185.0 }
        ]
      },
      {
        id: 'psg-robo',
        course_name: 'Robotics and Automation Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 60,
        admission_procedure: 'TNEA Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 194.5, BC_closing: 192.0, MBC_closing: 188.0, SC_closing: 178.0 },
          { year: 2024, OC_closing: 193.5, BC_closing: 191.0, MBC_closing: 186.5, SC_closing: 176.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 95000.0,
      hostel_fee_yearly: 42000.0,
      mess_fee_yearly: 36000.0,
      exam_fee_yearly: 4500.0,
      other_charges_yearly: 18000.0,
      total_yearly_estimated: 195500.0,
      fee_source_url: 'https://www.psgtech.edu/admissions.php',
      fee_source_name: 'PSG Tech Academic Fee Schedule (Aided/SS Mix)',
      last_updated: '26/09/2026',
      data_confidence: 97.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.6,
      lab_facilities: 'PSG Industrial Institute embedded in campus, Festo Pneumatics Centre, Siemens PLM Centre of Excellence',
      library_books_count: 245000,
      digital_library: true,
      wifi_bandwidth: 'Campus-wide WiFi 1 Gbps backbone',
      hostel_ac_available: true,
      canteen_hygiene_rating: 4.5,
      sports_facilities: ['Indoor basketball stadium', 'Synthetic tennis court', 'PSG Sports Complex grounds'],
      gym_available: true,
      bus_transport_routes: 15,
      medical_center: 'PSG Hospital nearby with priority student care and health clinic'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 93.8,
      total_recruiters: 290,
      highest_package_lpa: 38.0,
      average_package_lpa: 10.4,
      median_package_lpa: 8.8,
      total_offers: 1520,
      internship_offers: 410,
      report_source_url: 'https://www.psgtech.edu/placements.php',
      is_official: true,
      last_verified: '22/09/2026'
    },
    recruitment_history: [
      { company_name: 'Robert Bosch India', recruitment_year: 2025, job_roles: ['Embedded Systems Engineer', 'Controls Trainee'], package_offered_lpa: 11.5, hiring_type: 'Full-Time', source_reference: 'PSG Placement Brochure' },
      { company_name: 'Microsoft', recruitment_year: 2025, job_roles: ['Software Engineer'], package_offered_lpa: 38.0, hiring_type: 'Full-Time', source_reference: 'CSE Dept Records' },
      { company_name: 'Qualcomm', recruitment_year: 2025, job_roles: ['Hardware Design Trainee'], package_offered_lpa: 22.0, hiring_type: 'Full-Time', source_reference: 'ECE Placement Bulletin' },
      { company_name: 'Zoho', recruitment_year: 2025, job_roles: ['Member Technical Staff'], package_offered_lpa: 9.5, hiring_type: 'Full-Time', source_reference: 'Placement Cell' }
    ],
    scholarships: [
      {
        id: 'psg-trust-aid',
        name: 'PSG & Sons Charities Merit-cum-Need Bursary',
        type: 'Institutional',
        eligibility: 'Deserving engineering students with annual parental income below 3 LPA',
        amount_description: '50% Tuition Fee remission + Hostel grant',
        yearly_value: 65000.0,
        required_documents: ['Income Proof', 'Semester GPA'],
        portal_url: 'https://www.psgtech.edu'
      }
    ],
    student_reviews: [
      {
        id: 'rev-psg-1',
        anonymous_alias: 'PSG Tech Mechanical Junior',
        review_title: 'Industry exposure like no other college in South India',
        review_text: 'The best thing about PSG Tech is that you learn right alongside PSG Foundry and CNC workshops. Dress code is balanced—you cannot wear tattered jeans or slippers, but neat smart casuals are completely fine. Strictness is moderate; you have good freedom in the evenings.',
        rating_academics: 4.8,
        rating_infrastructure: 4.7,
        rating_campus_life: 4.2,
        rating_hostel_food: 4.2,
        rating_placement: 4.9,
        freedom_rating: 3.8,
        dress_code_feedback: 'Smart casuals allowed. No round necks or slippers during lab hours.',
        sentiment: 'Positive',
        sentiment_score: 0.81,
        positive_aspects: ['Placement', 'Infrastructure', 'Academics'],
        negative_aspects: ['Rules'],
        is_approved: true,
        upvotes: 29,
        created_at: '2026-08-20'
      }
    ],
    sources: [
      {
        id: 'src-psg-1',
        domain: 'Fees',
        source_name: 'PSG Tech Official Website & TNEA Information Booklet',
        source_url: 'https://www.psgtech.edu',
        is_official: true,
        collected_at: '2026-09-25',
        last_verified_at: '2026-10-02',
        data_confidence: 97.5,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'panimalar-engg-chennai',
    name: 'Panimalar Engineering College',
    short_code: 'PEC',
    slug: 'panimalar-engineering-college-chennai',
    city: 'Poonamallee, Chennai',
    district: 'Thiruvallur',
    state: 'Tamil Nadu',
    address: 'Bangalore Trunk Road, Varadharajapuram, Nazrathpettai, Poonamallee, Chennai, Tamil Nadu 600123',
    website: 'https://panimalar.ac.in',
    establishment_year: 2000,
    institution_type: 'Autonomous / Private',
    accreditation: 'NAAC A Grade, NBA Accredited Departments',
    approval_info: 'AICTE Approved, Affiliated to Anna University',
    campus_area_acres: 55.0,
    min_eligibility_pct: 45.0,
    overall_rating: 4.2,
    is_demo_data: true,
    data_confidence: 96.0,
    last_updated: '01/10/2026',
    dress_code: {
      strictness_level: 'Strict Formals',
      policy_summary: 'Strict formal attire enforced. Formal dress codes are systematically checked at campus entrance buses and department gates.',
      boys_rules: 'Full-sleeve or half-sleeve plain formal shirts tucked neatly into formal trousers. Black/brown formal leather belt. Clean shaven look required. Strictly NO jeans, NO t-shirts, NO cargo pants.',
      girls_rules: 'Traditional Salwar Kameez with mandatory dupatta pinned tightly on both shoulders. Hair must be neatly tied/plaited. Strictly NO jeans, leggings, or western tops.',
      footwear_rules: 'Polished formal black or brown leather shoes for boys with black socks. Cut shoes or formal strapped sandals for girls. Strictly NO sneakers, crocs, or slippers.',
      id_card_policy: 'ID card with official Panimalar badge ribbon must be worn at all times from boarding the college bus until disembarking.',
      mobile_phone_policy: 'Mobile phones are strictly prohibited during college hours inside academic blocks. Confiscation policies apply if used during classes.',
      outing_curfew: 'Highly monitored hostel movement. Hostellers require prior written warden and parental approval for outings.',
      review_count: 275,
      confidence_level: 96.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 3.2,
      indicator_label: 'Structured & Strict Discipline Culture',
      review_count: 275,
      confidence_percentage: 96.0,
      cultural_fest_name: 'Panimalar Youth Cultural Day',
      tech_fest_name: 'National Technical Symposiums (Departmental)',
      annual_hackathons_count: 3,
      active_clubs_count: 14,
      industrial_visits_per_year: 2
    },
    courses: [
      {
        id: 'pec-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 300,
        admission_procedure: 'TNEA Single Window Counselling / Consortium Management Quota',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 172.5, BC_closing: 168.0, MBC_closing: 161.0, SC_closing: 142.0 },
          { year: 2024, OC_closing: 170.0, BC_closing: 165.5, MBC_closing: 158.0, SC_closing: 139.0 }
        ]
      },
      {
        id: 'pec-it',
        course_name: 'Information Technology',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 169.0, BC_closing: 163.5, MBC_closing: 156.0, SC_closing: 136.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 125000.0,
      hostel_fee_yearly: 45000.0,
      mess_fee_yearly: 42000.0, // Known for lavish hot meals & mess food
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 24000.0, // Bus transport included for day scholars
      total_yearly_estimated: 240000.0,
      fee_source_url: 'https://panimalar.ac.in/admission.php',
      fee_source_name: 'Panimalar Institutional Fee Circular & Transport Policy',
      last_updated: '27/09/2026',
      data_confidence: 95.5,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.3,
      lab_facilities: 'Air-conditioned central computing centres, robotics labs, modern CAD/CAM suites',
      library_books_count: 110000,
      digital_library: true,
      wifi_bandwidth: 'Campus LAN connection with firewall filters',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.8, // Famous for top-tier hygienic non-veg/veg mess food
      sports_facilities: ['Cricket ground', 'Volleyball courts', 'Indoor sports complex'],
      gym_available: true,
      bus_transport_routes: 65, // Massive fleet of college buses across Chennai
      medical_center: 'On-campus medical clinic with ambulance service'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 91.2,
      total_recruiters: 145,
      highest_package_lpa: 22.0,
      average_package_lpa: 5.8,
      median_package_lpa: 4.8,
      total_offers: 1180,
      internship_offers: 190,
      report_source_url: 'https://panimalar.ac.in/placements.php',
      is_official: true,
      last_verified: '24/09/2026'
    },
    recruitment_history: [
      { company_name: 'TCS (Tata Consultancy Services)', recruitment_year: 2025, job_roles: ['Ninja Trainee', 'Digital Developer'], package_offered_lpa: 7.2, hiring_type: 'Full-Time', source_reference: 'Placement Records' },
      { company_name: 'Cognizant (CTS)', recruitment_year: 2025, job_roles: ['Programmer Analyst Trainee'], package_offered_lpa: 5.5, hiring_type: 'Full-Time', source_reference: 'Panimalar CDC' },
      { company_name: 'Wipro', recruitment_year: 2025, job_roles: ['Project Engineer'], package_offered_lpa: 6.5, hiring_type: 'Full-Time', source_reference: 'CDC Bulletin' },
      { company_name: 'Zoho', recruitment_year: 2025, job_roles: ['Software Developer'], package_offered_lpa: 8.5, hiring_type: 'Full-Time', source_reference: 'Panimalar Placements' }
    ],
    scholarships: [
      {
        id: 'panimalar-merit',
        name: 'Panimalar Academic Excellence Cash Award',
        type: 'Merit',
        eligibility: 'Rank holders in Anna University semester exams',
        amount_description: 'Cash prizes of Rs 25,000 to Rs 50,000 per semester',
        yearly_value: 50000.0,
        required_documents: ['University Grade Card'],
        portal_url: 'https://panimalar.ac.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-pec-1',
        anonymous_alias: 'CSE Alumnus 2025',
        review_title: 'Strict dress code and heavy discipline, but outstanding mess food and decent mass placements',
        review_text: 'If you are looking for free campus life, Panimalar is very strict. Boys must wear formal tucked shirts with formal shoes and be clean shaven every single day. Girls must wear salwar with pinned dupatta. On the positive side, the mess food is arguably the best of any college in Tamil Nadu, and bus transport covers all corners of Chennai.',
        rating_academics: 4.1,
        rating_infrastructure: 4.4,
        rating_campus_life: 2.8,
        rating_hostel_food: 4.9,
        rating_placement: 4.3,
        freedom_rating: 1.8,
        dress_code_feedback: 'Very strict formals only. No jeans, no t-shirts, daily morning checking at gate.',
        sentiment: 'Neutral',
        sentiment_score: -0.05,
        positive_aspects: ['Food & Mess', 'Infrastructure', 'Placement'],
        negative_aspects: ['Campus Freedom', 'Rules'],
        is_approved: true,
        upvotes: 56,
        created_at: '2026-07-19'
      }
    ],
    sources: [
      {
        id: 'src-pec-1',
        domain: 'Dress Code',
        source_name: 'Panimalar Code of Conduct and Student Rules Guidebook',
        source_url: 'https://panimalar.ac.in/rules-and-regulations.php',
        is_official: true,
        collected_at: '2026-09-18',
        last_verified_at: '2026-10-01',
        data_confidence: 96.0,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'ssn-chennai',
    name: 'Sri Sivasubramaniya Nadar College of Engineering (SSN)',
    short_code: 'SSN',
    slug: 'ssn-college-of-engineering-chennai',
    city: 'Kalavakkam, Chennai',
    district: 'Chengalpattu',
    state: 'Tamil Nadu',
    address: 'Old Mahabalipuram Road (OMR), Rajiv Gandhi Salai, Kalavakkam, Chennai, Tamil Nadu 603110',
    website: 'https://www.ssn.edu.in',
    establishment_year: 1996,
    institution_type: 'Autonomous / Private',
    accreditation: 'NAAC A++ Grade (CGPA 3.61/4), NIRF #45 Engineering in India',
    approval_info: 'AICTE Approved, Affiliated to Anna University (Shiv Nadar Foundation)',
    campus_area_acres: 250.0,
    min_eligibility_pct: 55.0,
    overall_rating: 4.8,
    is_demo_data: true,
    data_confidence: 98.0,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'Moderate / Smart Casuals',
      policy_summary: 'Decent smart casuals allowed. Clean and respectful campus environment without overly rigid dress policing.',
      boys_rules: 'Collared shirts, polo t-shirts, jeans, and formal trousers. Round-neck t-shirts allowed during non-lab hours.',
      girls_rules: 'Kurtas, tops with jeans, salwar kameez. Dupatta requirement is relaxed during general hours.',
      footwear_rules: 'Shoes or formal sandals. Closed shoes mandatory in laboratories.',
      id_card_policy: 'ID card mandatory at campus security gate and central library turnstiles.',
      mobile_phone_policy: 'Permitted in campus public spaces, food courts, and Wi-Fi commons; silent in lectures.',
      outing_curfew: 'Hostel in-time: 8:00 PM for girls, 8:30 PM for boys. Extended library permissions until 10:00 PM.',
      review_count: 320,
      confidence_level: 95.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 7.8,
      indicator_label: 'Balanced Autonomy & Vibrant Tech Community',
      review_count: 320,
      confidence_percentage: 95.0,
      cultural_fest_name: 'Instincts (One of Chennai’s largest private college fests)',
      tech_fest_name: 'Invente (Multi-disciplinary national technical fest)',
      annual_hackathons_count: 9,
      active_clubs_count: 35,
      industrial_visits_per_year: 4
    },
    courses: [
      {
        id: 'ssn-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Single Window Counselling / SSN Merit Entrance & Interview',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 196.5, BC_closing: 195.0, MBC_closing: 192.5, SC_closing: 183.0 },
          { year: 2024, OC_closing: 195.5, BC_closing: 194.0, MBC_closing: 191.0, SC_closing: 181.0 }
        ]
      },
      {
        id: 'ssn-ece',
        course_name: 'Electronics and Communication Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Counselling / Merit Quota',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 194.0, BC_closing: 192.5, MBC_closing: 189.5, SC_closing: 178.5 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 140000.0,
      hostel_fee_yearly: 55000.0,
      mess_fee_yearly: 44000.0,
      exam_fee_yearly: 5000.0,
      other_charges_yearly: 22000.0,
      total_yearly_estimated: 266000.0,
      fee_source_url: 'https://www.ssn.edu.in/college-of-engineering/admissions/fees-structure/',
      fee_source_name: 'SSN Official Tuition and Hostel Fee Bulletin',
      last_updated: '29/09/2026',
      data_confidence: 98.2,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.8,
      lab_facilities: 'Shiv Nadar Research Centre, Centre for Healthcare Technologies, Apple Mac computing labs, Texas Instruments DSP lab',
      library_books_count: 140000,
      digital_library: true,
      wifi_bandwidth: 'Campus-wide Gigabit Wi-Fi connectivity',
      hostel_ac_available: true,
      canteen_hygiene_rating: 4.6,
      sports_facilities: ['Turf cricket ground with floodlights', 'Synthetic tennis complex', 'Basketball & Badminton courts', 'Modern gymnasium'],
      gym_available: true,
      bus_transport_routes: 40,
      medical_center: 'Health centre with on-duty physicians & nurse'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 95.4,
      total_recruiters: 220,
      highest_package_lpa: 42.0,
      average_package_lpa: 10.8,
      median_package_lpa: 9.0,
      total_offers: 1350,
      internship_offers: 320,
      report_source_url: 'https://www.ssn.edu.in/placements/placement-statistics/',
      is_official: true,
      last_verified: '26/09/2026'
    },
    recruitment_history: [
      { company_name: 'Motorq', recruitment_year: 2025, job_roles: ['Software Engineer'], package_offered_lpa: 42.0, hiring_type: 'Full-Time', source_reference: 'SSN Placement Report' },
      { company_name: 'Citi Bank', recruitment_year: 2025, job_roles: ['Analyst - Technology'], package_offered_lpa: 14.5, hiring_type: 'Full-Time', source_reference: 'Placement Cell Records' },
      { company_name: 'Amazon', recruitment_year: 2025, job_roles: ['Software Development Engineer'], package_offered_lpa: 34.0, hiring_type: 'Full-Time', source_reference: 'Career Guidance Cell' },
      { company_name: 'Zoho Corporation', recruitment_year: 2025, job_roles: ['Software Engineer'], package_offered_lpa: 10.0, hiring_type: 'Full-Time', source_reference: 'SSN CDC' }
    ],
    scholarships: [
      {
        id: 'ssn-rural-scholarship',
        name: 'SSN Rural Talent Scholarship',
        type: 'Need-Based',
        eligibility: 'Toppers of Tamil Nadu rural government schools',
        amount_description: '100% Free Education with complete waiver of tuition, hostel, and laptop grant',
        yearly_value: 266000.0,
        required_documents: ['12th Marksheet', 'Rural School Certificate'],
        portal_url: 'https://www.ssn.edu.in/scholarships'
      },
      {
        id: 'ssn-merit-scholarship',
        name: 'SSN Merit Scholarship Scheme',
        type: 'Merit',
        eligibility: 'Cutoff > 198.0 in 12th standard',
        amount_description: 'Full tuition fee waiver for all four years (conditional on maintaining 8.5 CGPA)',
        yearly_value: 140000.0,
        required_documents: ['TNEA Rank Certificate'],
        portal_url: 'https://www.ssn.edu.in/scholarships'
      }
    ],
    student_reviews: [
      {
        id: 'rev-ssn-1',
        anonymous_alias: 'SSN IT Final Year',
        review_title: 'Premier infrastructure and green peaceful campus along OMR',
        review_text: 'SSN strikes the ideal balance between discipline and freedom. The dress code is moderate—you can wear casual polo t-shirts and jeans without trouble. Research funding from Shiv Nadar Trust is generous, and high-paying software companies come in large numbers.',
        rating_academics: 4.8,
        rating_infrastructure: 4.9,
        rating_campus_life: 4.5,
        rating_hostel_food: 4.2,
        rating_placement: 4.9,
        freedom_rating: 4.2,
        dress_code_feedback: 'Smart casuals permitted. Decent polo shirts and jeans are completely acceptable.',
        sentiment: 'Positive',
        sentiment_score: 0.89,
        positive_aspects: ['Infrastructure', 'Placement', 'Campus Freedom', 'Events & Culture'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 45,
        created_at: '2026-09-08'
      }
    ],
    sources: [
      {
        id: 'src-ssn-1',
        domain: 'Fees',
        source_name: 'SSN Official Admissions Circular',
        source_url: 'https://www.ssn.edu.in',
        is_official: true,
        collected_at: '2026-09-29',
        last_verified_at: '2026-10-03',
        data_confidence: 98.5,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'st-josephs-chennai',
    name: "St. Joseph's College of Engineering",
    short_code: 'SJCE',
    slug: 'st-josephs-college-of-engineering-chennai',
    city: 'OMR, Chennai',
    district: 'Kanchipuram',
    state: 'Tamil Nadu',
    address: 'Jeppiaar Nagar, Old Mahabalipuram Road (OMR), Semmancheri, Chennai, Tamil Nadu 600119',
    website: 'https://stjosephs.ac.in',
    establishment_year: 1994,
    institution_type: 'Autonomous / Private',
    accreditation: 'NAAC A+ Grade, NBA Accredited Programmes',
    approval_info: 'AICTE Approved, Affiliated to Anna University',
    campus_area_acres: 42.0,
    min_eligibility_pct: 45.0,
    overall_rating: 4.3,
    is_demo_data: true,
    data_confidence: 96.5,
    last_updated: '02/10/2026',
    dress_code: {
      strictness_level: 'Strict Formals',
      policy_summary: 'Strict formal attire strictly implemented across all departments. Daily visual inspection at college gates.',
      boys_rules: 'Tucked-in formal plain shirts, formal trousers with leather belts, shaved beards/clean groom. No jeans or t-shirts.',
      girls_rules: 'Salwar Kameez with pinned dupatta on both shoulders. Modest attire mandatory.',
      footwear_rules: 'Formal black or brown shoes with socks for boys. Closed formal sandals/shoes for girls.',
      id_card_policy: 'ID card around the neck strictly required from entry gate till leaving campus.',
      mobile_phone_policy: 'Mobile phones are not permitted to be used in academic blocks during college hours.',
      outing_curfew: 'Strict hostel timings; entry after 7:00 PM requires specific permission.',
      review_count: 240,
      confidence_level: 95.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 3.5,
      indicator_label: 'Structured & Strict Discipline Culture',
      review_count: 240,
      confidence_percentage: 95.0,
      cultural_fest_name: 'Visai (Inter-collegiate cultural festival)',
      tech_fest_name: 'Departmental National Technical Symposiums',
      annual_hackathons_count: 4,
      active_clubs_count: 18,
      industrial_visits_per_year: 3
    },
    courses: [
      {
        id: 'sjce-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Single Window Counselling / Consortium Management Quota',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 181.5, BC_closing: 177.0, MBC_closing: 171.0, SC_closing: 154.0 },
          { year: 2024, OC_closing: 179.5, BC_closing: 175.0, MBC_closing: 168.0, SC_closing: 151.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 130000.0,
      hostel_fee_yearly: 48000.0,
      mess_fee_yearly: 40000.0, // High quality non-veg/veg food included
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 26000.0,
      total_yearly_estimated: 248000.0,
      fee_source_url: 'https://stjosephs.ac.in/fees',
      fee_source_name: "St. Joseph's Institutional Fee Structure & Food Care",
      last_updated: '28/09/2026',
      data_confidence: 96.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.4,
      lab_facilities: 'Specialized Apple iOS developer lab, AI & Big Data lab, mechanical machining centre',
      library_books_count: 125000,
      digital_library: true,
      wifi_bandwidth: 'Campus intranet & filtered Wi-Fi',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.8,
      sports_facilities: ['Cricket nets', 'Basketball court', 'Athletic ground'],
      gym_available: true,
      bus_transport_routes: 52,
      medical_center: 'Medical center with round-the-clock nursing staff'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 92.5,
      total_recruiters: 160,
      highest_package_lpa: 24.0,
      average_package_lpa: 6.2,
      median_package_lpa: 5.0,
      total_offers: 1240,
      internship_offers: 220,
      report_source_url: 'https://stjosephs.ac.in/placement.php',
      is_official: true,
      last_verified: '25/09/2026'
    },
    recruitment_history: [
      { company_name: 'Cognizant', recruitment_year: 2025, job_roles: ['Programmer Analyst'], package_offered_lpa: 6.0, hiring_type: 'Full-Time', source_reference: 'Placement Cell Records' },
      { company_name: 'TCS', recruitment_year: 2025, job_roles: ['Ninja / Digital'], package_offered_lpa: 7.0, hiring_type: 'Full-Time', source_reference: 'SJCE Placement' },
      { company_name: 'Zoho', recruitment_year: 2025, job_roles: ['Software Engineer'], package_offered_lpa: 8.5, hiring_type: 'Full-Time', source_reference: 'CDC' }
    ],
    scholarships: [
      {
        id: 'sjce-merit',
        name: "St. Joseph's Merit Cash Incentive",
        type: 'Merit',
        eligibility: 'CGPA > 9.0 in Anna University examinations',
        amount_description: 'Cash prize of Rs 50,000 per academic year',
        yearly_value: 50000.0,
        required_documents: ['Semester Grade Sheet'],
        portal_url: 'https://stjosephs.ac.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-sjce-1',
        anonymous_alias: 'ECE Alumnus 2025',
        review_title: 'Strict environment and formal dress rules, but great food and dependable placements',
        review_text: "You must come in formal shirts tucked in with polished shoes. Beards are checked strictly. However, the college provides complimentary morning tea, snacks, and top-tier lunch in the mess, and day scholars have smooth bus transport. Placements in IT mass recruiters and core companies are solid.",
        rating_academics: 4.3,
        rating_infrastructure: 4.4,
        rating_campus_life: 2.9,
        rating_hostel_food: 4.8,
        rating_placement: 4.4,
        freedom_rating: 1.9,
        dress_code_feedback: 'Strict formals. Checked every morning at the bus stop and main gate.',
        sentiment: 'Neutral',
        sentiment_score: 0.02,
        positive_aspects: ['Food & Mess', 'Placement', 'Infrastructure'],
        negative_aspects: ['Rules', 'Campus Freedom'],
        is_approved: true,
        upvotes: 34,
        created_at: '2026-08-11'
      }
    ],
    sources: [
      {
        id: 'src-sjce-1',
        domain: 'Dress Code',
        source_name: 'College Student Handbook & Campus Protocol',
        source_url: 'https://stjosephs.ac.in',
        is_official: true,
        collected_at: '2026-09-15',
        last_verified_at: '2026-10-02',
        data_confidence: 96.5,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'cit-coimbatore',
    name: 'Coimbatore Institute of Technology (CIT)',
    short_code: 'CIT',
    slug: 'coimbatore-institute-of-technology',
    city: 'Coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    address: 'Civil Aerodrome Post, Peelamedu, Coimbatore, Tamil Nadu 641014',
    website: 'https://www.cit.edu.in',
    establishment_year: 1956,
    institution_type: 'Autonomous / Govt. Aided',
    accreditation: 'NAAC A Grade, NIRF Top 100 Engineering',
    approval_info: 'AICTE Approved, Affiliated to Anna University',
    campus_area_acres: 25.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.6,
    is_demo_data: true,
    data_confidence: 97.2,
    last_updated: '02/10/2026',
    dress_code: {
      strictness_level: 'Moderate / Smart Casuals',
      policy_summary: 'Moderate and student-friendly. Semi-formals or decent casual shirts/pants allowed during regular hours.',
      boys_rules: 'Collared shirts or polo t-shirts with jeans or trousers. Closed shoes required for lab workshops.',
      girls_rules: 'Salwar kameez or kurtas with jeans/leggings. No rigid restrictions during cultural events.',
      footwear_rules: 'Shoes or formal sandals. Safety boots mandated only in civil/mechanical workshops.',
      id_card_policy: 'ID card mandatory around the neck at entry points.',
      mobile_phone_policy: 'Permitted in student zones, canteen, and library corridor.',
      outing_curfew: 'Hostel in-time: 7:30 PM for girls, 8:30 PM for boys.',
      review_count: 220,
      confidence_level: 93.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 7.2,
      indicator_label: 'Balanced Autonomy & Strong Technical Legacy',
      review_count: 220,
      confidence_percentage: 93.0,
      cultural_fest_name: 'Muthamizh Mandram & Interface',
      tech_fest_name: 'Cyberfest & MechFiesta',
      annual_hackathons_count: 5,
      active_clubs_count: 28,
      industrial_visits_per_year: 4
    },
    courses: [
      {
        id: 'cit-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 120,
        admission_procedure: 'TNEA Single Window Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 195.5, BC_closing: 194.0, MBC_closing: 190.0, SC_closing: 180.0 },
          { year: 2024, OC_closing: 194.5, BC_closing: 193.0, MBC_closing: 188.5, SC_closing: 178.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 45000.0,
      hostel_fee_yearly: 26000.0,
      mess_fee_yearly: 32000.0,
      exam_fee_yearly: 3500.0,
      other_charges_yearly: 12000.0,
      total_yearly_estimated: 118500.0,
      fee_source_url: 'https://www.cit.edu.in/fees',
      fee_source_name: 'CIT Government Aided Fee Schedule',
      last_updated: '28/09/2026',
      data_confidence: 97.5,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.4,
      lab_facilities: 'Texas Instruments lab, AI & Cloud Computing lab, CAD lab',
      library_books_count: 130000,
      digital_library: true,
      wifi_bandwidth: 'Campus Wi-Fi 500 Mbps connection',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.2,
      sports_facilities: ['Cricket ground', 'Basketball court', 'Table tennis hall'],
      gym_available: true,
      bus_transport_routes: 10,
      medical_center: 'Resident doctor on duty during college hours'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 92.0,
      total_recruiters: 170,
      highest_package_lpa: 33.0,
      average_package_lpa: 8.9,
      median_package_lpa: 7.5,
      total_offers: 890,
      internship_offers: 210,
      report_source_url: 'https://www.cit.edu.in/placements',
      is_official: true,
      last_verified: '23/09/2026'
    },
    recruitment_history: [
      { company_name: 'DE Shaw & Co', recruitment_year: 2025, job_roles: ['Software Engineer'], package_offered_lpa: 33.0, hiring_type: 'Full-Time', source_reference: 'CIT CDC' },
      { company_name: 'Bosch', recruitment_year: 2025, job_roles: ['Associate Software Engineer'], package_offered_lpa: 9.0, hiring_type: 'Full-Time', source_reference: 'Placement Records' },
      { company_name: 'Zoho', recruitment_year: 2025, job_roles: ['Software Developer'], package_offered_lpa: 8.5, hiring_type: 'Full-Time', source_reference: 'CIT Placement' }
    ],
    scholarships: [
      {
        id: 'cit-aided-govt',
        name: 'TN Government Post-Matric Scholarship',
        type: 'Government',
        eligibility: 'Eligible BC/MBC/SC students as per TN state rules',
        amount_description: 'Full tuition fee reimbursement',
        yearly_value: 45000.0,
        required_documents: ['Community Certificate', 'Income Certificate'],
        portal_url: 'https://tneaonline.org'
      }
    ],
    student_reviews: [
      {
        id: 'rev-cit-1',
        anonymous_alias: 'CIT Mechanical Alumnus',
        review_title: 'Premier Coimbatore college with great faculty and friendly vibe',
        review_text: 'CIT provides an excellent engineering grounding without unnecessary micromanagement. Dress code is sensible and moderate—no one harasses you as long as you wear decent shirts and jeans. Placements for core and IT branches are reliable.',
        rating_academics: 4.7,
        rating_infrastructure: 4.3,
        rating_campus_life: 4.3,
        rating_hostel_food: 3.9,
        rating_placement: 4.7,
        freedom_rating: 4.0,
        dress_code_feedback: 'Moderate smart casuals. Casual shirts and pants are standard.',
        sentiment: 'Positive',
        sentiment_score: 0.79,
        positive_aspects: ['Placement', 'Faculty', 'Academics'],
        negative_aspects: ['Hostel & Living'],
        is_approved: true,
        upvotes: 27,
        created_at: '2026-08-28'
      }
    ],
    sources: [
      {
        id: 'src-cit-1',
        domain: 'Fees',
        source_name: 'CIT Peelamedu Official Admission Portal',
        source_url: 'https://www.cit.edu.in',
        is_official: true,
        collected_at: '2026-09-20',
        last_verified_at: '2026-10-02',
        data_confidence: 97.2,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'tce-madurai',
    name: 'Thiagarajar College of Engineering (TCE)',
    short_code: 'TCE',
    slug: 'thiagarajar-college-of-engineering-madurai',
    city: 'Madurai',
    district: 'Madurai',
    state: 'Tamil Nadu',
    address: 'Thiruparankundram, Madurai, Tamil Nadu 625015',
    website: 'https://www.tce.edu',
    establishment_year: 1957,
    institution_type: 'Autonomous / Govt. Aided',
    accreditation: 'NAAC A+ Grade, NIRF Top 85 Engineering in India',
    approval_info: 'AICTE Approved, Affiliated to Anna University',
    campus_area_acres: 143.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.7,
    is_demo_data: true,
    data_confidence: 97.8,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'Moderate / Smart Casuals',
      policy_summary: 'Decent formal or semi-formal clothing expected. Modest student culture rooted in temple city heritage.',
      boys_rules: 'Neat shirts and formal pants or jeans. Collared polo t-shirts permitted on non-lab days.',
      girls_rules: 'Salwar kameez or kurtas with modest fitting. Pinned dupatta preferred in academic blocks.',
      footwear_rules: 'Shoes or formal sandals. Closed footwear strictly mandated in electrical high-voltage and mechanical laboratories.',
      id_card_policy: 'Smart ID card compulsory at Thiruparankundram entry gate.',
      mobile_phone_policy: 'Restricted in classrooms; permitted in campus open spaces and canteen.',
      outing_curfew: 'Hostel in-time: 7:00 PM for girls, 8:00 PM for boys.',
      review_count: 250,
      confidence_level: 94.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 6.8,
      indicator_label: 'Moderate Discipline, Rich Alumni Community',
      review_count: 250,
      confidence_percentage: 94.0,
      cultural_fest_name: 'Yugam TCE Inter-College Cultural',
      tech_fest_name: 'Techfest TCE & National Symposiums',
      annual_hackathons_count: 6,
      active_clubs_count: 30,
      industrial_visits_per_year: 4
    },
    courses: [
      {
        id: 'tce-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 120,
        admission_procedure: 'TNEA Single Window Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 196.0, BC_closing: 194.5, MBC_closing: 191.0, SC_closing: 182.0 },
          { year: 2024, OC_closing: 195.0, BC_closing: 193.5, MBC_closing: 189.5, SC_closing: 180.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 42000.0,
      hostel_fee_yearly: 24000.0,
      mess_fee_yearly: 30000.0,
      exam_fee_yearly: 3500.0,
      other_charges_yearly: 11000.0,
      total_yearly_estimated: 110500.0,
      fee_source_url: 'https://www.tce.edu/admissions',
      fee_source_name: 'TCE Madurai Official Govt-Aided Fee Structure',
      last_updated: '29/09/2026',
      data_confidence: 98.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.5,
      lab_facilities: 'High-voltage engineering research lab, Honeywell Centre of Excellence, Cisco Networking Academy',
      library_books_count: 160000,
      digital_library: true,
      wifi_bandwidth: 'Campus Wi-Fi 1 Gbps connection',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.4,
      sports_facilities: ['Spacious athletic grounds', 'Badminton complex', 'Volleyball courts'],
      gym_available: true,
      bus_transport_routes: 12,
      medical_center: 'TCE Health Centre with emergency vehicle'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 93.4,
      total_recruiters: 180,
      highest_package_lpa: 32.0,
      average_package_lpa: 9.1,
      median_package_lpa: 7.8,
      total_offers: 980,
      internship_offers: 260,
      report_source_url: 'https://www.tce.edu/placements',
      is_official: true,
      last_verified: '27/09/2026'
    },
    recruitment_history: [
      { company_name: 'Honeywell', recruitment_year: 2025, job_roles: ['Software Engineer', 'Embedded Trainee'], package_offered_lpa: 10.5, hiring_type: 'Full-Time', source_reference: 'TCE Placement Cell' },
      { company_name: 'Zoho Corporation', recruitment_year: 2025, job_roles: ['Software Developer'], package_offered_lpa: 8.5, hiring_type: 'Full-Time', source_reference: 'TCE Records' },
      { company_name: 'L&T Technology Services', recruitment_year: 2025, job_roles: ['GET'], package_offered_lpa: 6.5, hiring_type: 'Full-Time', source_reference: 'Placement Brochure' }
    ],
    scholarships: [
      {
        id: 'tce-alumni-endowment',
        name: 'TCE Global Alumni Endowed Scholarship',
        type: 'Need-Based',
        eligibility: 'Meritorious students with financial distress',
        amount_description: 'Full tuition fee reimbursement & textbook subsidy',
        yearly_value: 42000.0,
        required_documents: ['Income Proof', 'Marksheet'],
        portal_url: 'https://alumni.tce.edu'
      }
    ],
    student_reviews: [
      {
        id: 'rev-tce-1',
        anonymous_alias: 'TCE EEE Senior',
        review_title: 'Premier institution of South Tamil Nadu with top-notch placements',
        review_text: 'TCE has a storied legacy. Located near Thiruparankundram hills, the atmosphere is serene. Dress code is balanced—no over-the-top rules, but students dress respectfully. Fees are very low because it is government-aided, and top companies recruit enthusiastically.',
        rating_academics: 4.8,
        rating_infrastructure: 4.5,
        rating_campus_life: 4.2,
        rating_hostel_food: 4.1,
        rating_placement: 4.8,
        freedom_rating: 3.7,
        dress_code_feedback: 'Moderate semi-formals and jeans. Respectful attire expected.',
        sentiment: 'Positive',
        sentiment_score: 0.83,
        positive_aspects: ['Academics', 'Placement', 'Infrastructure'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 31,
        created_at: '2026-08-16'
      }
    ],
    sources: [
      {
        id: 'src-tce-1',
        domain: 'Fees',
        source_name: 'TCE Official Academic Senate Portal',
        source_url: 'https://www.tce.edu',
        is_official: true,
        collected_at: '2026-09-24',
        last_verified_at: '2026-10-03',
        data_confidence: 98.0,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'vit-vellore',
    name: 'Vellore Institute of Technology (VIT Vellore)',
    short_code: 'VIT',
    slug: 'vellore-institute-of-technology-vellore',
    city: 'Katpadi, Vellore',
    district: 'Vellore',
    state: 'Tamil Nadu',
    address: 'Near Katpadi Junction, Vellore, Tamil Nadu 632014',
    website: 'https://vit.ac.in',
    establishment_year: 1984,
    institution_type: 'Deemed University',
    accreditation: 'NAAC A++ Grade, NIRF #11 Engineering in India, QS World Ranked',
    approval_info: 'UGC Recognized Deemed to be University, Institution of Eminence tag',
    campus_area_acres: 372.0,
    min_eligibility_pct: 60.0,
    overall_rating: 4.7,
    is_demo_data: true,
    data_confidence: 97.5,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'High freedom during non-academic hours. Decent casual wear permitted during classes; students enjoy autonomy in hostels.',
      boys_rules: 'T-shirts, shirts, jeans, and casual pants during lectures. Shorts and tracks allowed in hostels, food courts, and sports grounds.',
      girls_rules: 'Tops, jeans, kurtis, western casuals allowed. High dress autonomy across the 372-acre campus.',
      footwear_rules: 'Sandals, sneakers, sports shoes. Closed shoes required only in chemistry and fabrication labs.',
      id_card_policy: 'Smart RFID card required for automated turnstile gate entry and biometric mess access.',
      mobile_phone_policy: 'Unrestricted across campus; silent in classrooms.',
      outing_curfew: 'Hostel in-time: 8:30 PM (Biometric exit/entry monitoring through VTOP portal).',
      review_count: 510,
      confidence_level: 96.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 8.5,
      indicator_label: 'Cosmopolitan Campus with High Personal Freedom',
      review_count: 510,
      confidence_percentage: 96.0,
      cultural_fest_name: 'Riviera (International sports and cultural carnival)',
      tech_fest_name: 'graVITas (International technical symposium)',
      annual_hackathons_count: 18,
      active_clubs_count: 90,
      industrial_visits_per_year: 5
    },
    courses: [
      {
        id: 'vit-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 1200,
        admission_procedure: 'VITEEE Entrance Examination (Categorized Fee Structure Category 1 to 5)',
        entrance_exams: ['VITEEE'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 7500, BC_closing: 0, MBC_closing: 0, SC_closing: 0 }, // Rank in VITEEE for Cat 1
          { year: 2024, OC_closing: 7000, BC_closing: 0, MBC_closing: 0, SC_closing: 0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 198000.0, // Category 1 standard fee
      hostel_fee_yearly: 62000.0,
      mess_fee_yearly: 48000.0, // Multi-cuisine: Special/Non-veg/Veg mess options
      exam_fee_yearly: 6000.0,
      other_charges_yearly: 18000.0,
      total_yearly_estimated: 332000.0,
      fee_source_url: 'https://vit.ac.in/fees',
      fee_source_name: 'VIT Official VITEEE B.Tech Category-1 Fee Schedule',
      last_updated: '01/10/2026',
      data_confidence: 97.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.8,
      lab_facilities: 'Technology Tower, Smart Classrooms, IBM Big Data lab, Nvidia AI GPU computing cluster',
      library_books_count: 320000,
      digital_library: true,
      wifi_bandwidth: 'Campus-wide WiFi high-speed network',
      hostel_ac_available: true,
      canteen_hygiene_rating: 4.6,
      sports_facilities: ['Indoor swimming pool', 'Multi-sport indoor stadium', 'Turf grounds', 'Squash & Tennis courts'],
      gym_available: true,
      bus_transport_routes: 25,
      medical_center: 'VIT Health Centre with round-the-clock doctors & pharmacy'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 91.5,
      total_recruiters: 850,
      highest_package_lpa: 102.0,
      average_package_lpa: 9.9,
      median_package_lpa: 8.2,
      total_offers: 12500,
      internship_offers: 3800,
      report_source_url: 'https://vit.ac.in/placements',
      is_official: true,
      last_verified: '28/09/2026'
    },
    recruitment_history: [
      { company_name: 'Motorq', recruitment_year: 2025, job_roles: ['Software Development Engineer'], package_offered_lpa: 102.0, hiring_type: 'Full-Time', source_reference: 'VIT Placement Bulletin' },
      { company_name: 'Microsoft', recruitment_year: 2025, job_roles: ['SDE-1'], package_offered_lpa: 44.0, hiring_type: 'Full-Time', source_reference: 'VIT Career Development Centre' },
      { company_name: 'Amazon', recruitment_year: 2025, job_roles: ['Cloud Support Associate', 'SDE'], package_offered_lpa: 32.0, hiring_type: 'Full-Time', source_reference: 'VIT CDC' },
      { company_name: 'TCS Digital', recruitment_year: 2025, job_roles: ['Digital Developer'], package_offered_lpa: 7.5, hiring_type: 'Full-Time', source_reference: 'Placement Records' }
    ],
    scholarships: [
      {
        id: 'vit-gv-merit',
        name: 'VIT STARS Scheme (Support The Advancement of Rural Students)',
        type: 'First Graduate',
        eligibility: 'Top rural students from each district of Tamil Nadu',
        amount_description: '100% Free Tuition, Free AC Hostel & Food waiver',
        yearly_value: 332000.0,
        required_documents: ['District Rank Certificate', 'Rural School Proof'],
        portal_url: 'https://vit.ac.in/stars'
      }
    ],
    student_reviews: [
      {
        id: 'rev-vit-1',
        anonymous_alias: 'VIT CS Sophomore',
        review_title: 'Unbelievable diversity, modern campus life, and liberal dress code',
        review_text: 'VIT gives you true cosmopolitan exposure with students from every Indian state and 50+ countries. Dress code is very relaxed—you can wear normal t-shirts and jeans everywhere. Biometric hostel timings are monitored via VTOP app, but in-campus life during Riviera fest is electric.',
        rating_academics: 4.6,
        rating_infrastructure: 4.9,
        rating_campus_life: 4.8,
        rating_hostel_food: 4.2,
        rating_placement: 4.7,
        freedom_rating: 4.5,
        dress_code_feedback: 'Casual dress code allowed. Jeans, t-shirts, kurtis freely worn.',
        sentiment: 'Positive',
        sentiment_score: 0.86,
        positive_aspects: ['Campus Freedom', 'Infrastructure', 'Events & Culture', 'Placement'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 62,
        created_at: '2026-09-04'
      }
    ],
    sources: [
      {
        id: 'src-vit-1',
        domain: 'Fees',
        source_name: 'VIT Official Admissions Handbook',
        source_url: 'https://vit.ac.in',
        is_official: true,
        collected_at: '2026-09-22',
        last_verified_at: '2026-10-03',
        data_confidence: 97.5,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'sairam-engg-chennai',
    name: 'Sri Sairam Engineering College',
    short_code: 'SEC',
    slug: 'sri-sairam-engineering-college-chennai',
    city: 'West Tambaram, Chennai',
    district: 'Kanchipuram',
    state: 'Tamil Nadu',
    address: 'Sai Leo Nagar, West Tambaram, Chennai, Tamil Nadu 600044',
    website: 'https://sairam.edu.in',
    establishment_year: 1995,
    institution_type: 'Autonomous / Private',
    accreditation: 'NAAC A+ Grade, NBA Accredited Programmes',
    approval_info: 'AICTE Approved, Affiliated to Anna University',
    campus_area_acres: 48.0,
    min_eligibility_pct: 45.0,
    overall_rating: 4.2,
    is_demo_data: true,
    data_confidence: 95.8,
    last_updated: '01/10/2026',
    dress_code: {
      strictness_level: 'Strict Formals',
      policy_summary: 'Strict formal attire strictly expected. Clean appearance, trimmed hair, and ID badges checked at morning bus queues.',
      boys_rules: 'Tucked-in formal shirts, formal trousers, belt, clean-shaven look. Strictly NO jeans, t-shirts, or casual sneakers.',
      girls_rules: 'Salwar Kameez with properly pinned dupatta on both sides. Modest attire strictly maintained.',
      footwear_rules: 'Polished black or brown formal shoes with socks for boys. Formal cut shoes/sandals for girls.',
      id_card_policy: 'ID card around the neck strictly required upon entering college buses and throughout campus.',
      mobile_phone_policy: 'Phones must be switched off inside academic areas during lecture hours.',
      outing_curfew: 'Hostel out-passes closely regulated; parental confirmation required.',
      review_count: 215,
      confidence_level: 95.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 3.4,
      indicator_label: 'Structured & Disciplined Campus Culture',
      review_count: 215,
      confidence_percentage: 95.0,
      cultural_fest_name: 'Sai Fest (Inter-Collegiate Cultural Celebration)',
      tech_fest_name: 'National Technical Symposiums (Dept-wise)',
      annual_hackathons_count: 4,
      active_clubs_count: 16,
      industrial_visits_per_year: 3
    },
    courses: [
      {
        id: 'sec-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Single Window Counselling / Management Quota',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 178.0, BC_closing: 173.5, MBC_closing: 167.0, SC_closing: 148.0 },
          { year: 2024, OC_closing: 176.0, BC_closing: 171.0, MBC_closing: 164.0, SC_closing: 144.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 125000.0,
      hostel_fee_yearly: 44000.0,
      mess_fee_yearly: 38000.0,
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 22000.0,
      total_yearly_estimated: 233000.0,
      fee_source_url: 'https://sairam.edu.in/admissions',
      fee_source_name: 'Sairam Institutional Fee Structure & Transport Circular',
      last_updated: '27/09/2026',
      data_confidence: 95.8,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.4,
      lab_facilities: 'Sai Leo Innovation Centre, Cisco Networking lab, Autodesk CAD suites',
      library_books_count: 115000,
      digital_library: true,
      wifi_bandwidth: 'Campus intranet connection',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.5,
      sports_facilities: ['Cricket nets', 'Basketball court', 'Volleyball court'],
      gym_available: true,
      bus_transport_routes: 55,
      medical_center: 'Dispensary with resident medical nurse and on-call physician'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 91.8,
      total_recruiters: 155,
      highest_package_lpa: 21.0,
      average_package_lpa: 5.9,
      median_package_lpa: 4.8,
      total_offers: 1120,
      internship_offers: 180,
      report_source_url: 'https://sairam.edu.in/placements',
      is_official: true,
      last_verified: '24/09/2026'
    },
    recruitment_history: [
      { company_name: 'TCS', recruitment_year: 2025, job_roles: ['System Engineer Trainee'], package_offered_lpa: 7.0, hiring_type: 'Full-Time', source_reference: 'Sairam Placement Cell' },
      { company_name: 'Zoho', recruitment_year: 2025, job_roles: ['Software Developer'], package_offered_lpa: 8.5, hiring_type: 'Full-Time', source_reference: 'Placement Records' },
      { company_name: 'Accenture', recruitment_year: 2025, job_roles: ['Associate Software Engineer'], package_offered_lpa: 6.5, hiring_type: 'Full-Time', source_reference: 'CDC Bulletin' }
    ],
    scholarships: [
      {
        id: 'sairam-trust-aid',
        name: 'Leo Muthu Educational Trust Merit Scholarship',
        type: 'Merit',
        eligibility: 'Cutoff > 185.0 in 12th standard TNEA counselling',
        amount_description: '50% Tuition Fee concession',
        yearly_value: 62500.0,
        required_documents: ['12th Marksheet', 'Allotment Order'],
        portal_url: 'https://sairam.edu.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-sairam-1',
        anonymous_alias: 'CSE Senior 2025',
        review_title: 'Disciplined atmosphere with good bus connectivity and IT placements',
        review_text: 'Sairam has strict rules regarding dress code. You must wear formal tucked shirts and polished shoes, and beards must be shaved. Cell phones must be kept inside bags during classes. However, training for campus placements starts from 2nd year and bus transport covers all of Chennai.',
        rating_academics: 4.3,
        rating_infrastructure: 4.4,
        rating_campus_life: 3.0,
        rating_hostel_food: 4.4,
        rating_placement: 4.4,
        freedom_rating: 2.1,
        dress_code_feedback: 'Strict formals. Checked every morning at the gate.',
        sentiment: 'Neutral',
        sentiment_score: 0.05,
        positive_aspects: ['Placement', 'Infrastructure', 'Food & Mess'],
        negative_aspects: ['Rules', 'Campus Freedom'],
        is_approved: true,
        upvotes: 28,
        created_at: '2026-08-05'
      }
    ],
    sources: [
      {
        id: 'src-sairam-1',
        domain: 'Dress Code',
        source_name: 'Sairam Student Regulations & Safety Handbook',
        source_url: 'https://sairam.edu.in',
        is_official: true,
        collected_at: '2026-09-19',
        last_verified_at: '2026-10-01',
        data_confidence: 95.8,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'loyola-chennai',
    name: 'Loyola College (Autonomous)',
    short_code: 'Loyola',
    slug: 'loyola-college-chennai',
    city: 'Nungambakkam, Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    address: 'Sterling Road, Nungambakkam, Chennai, Tamil Nadu 600034',
    website: 'https://www.loyolacollege.edu',
    establishment_year: 1925,
    institution_type: 'Autonomous / Govt. Aided',
    accreditation: 'NIRF #7 Colleges in India, NAAC A++ Grade (CGPA 3.70)',
    approval_info: 'UGC College of Excellence tag, Affiliated to University of Madras',
    campus_area_acres: 96.0,
    min_eligibility_pct: 60.0,
    overall_rating: 4.9,
    is_demo_data: true,
    data_confidence: 98.6,
    last_updated: '04/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'Very liberal and dignified campus atmosphere. Students are encouraged to develop personal expression with decent casual attire.',
      boys_rules: 'T-shirts, shirts, jeans, casual trousers allowed. No forced uniform or formal tie policies.',
      girls_rules: 'Tops, jeans, kurtas, comfortable casual wear. Respectful personal autonomy supported.',
      footwear_rules: 'Sandals, shoes, sneakers allowed everywhere.',
      id_card_policy: 'ID card mandatory at Sterling road main entrance gate.',
      mobile_phone_policy: 'Freely allowed on campus; silent during lecture sessions.',
      outing_curfew: 'Hostel in-time: 8:30 PM with library permits available.',
      review_count: 380,
      confidence_level: 96.5,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 9.1,
      indicator_label: 'Exceptional Freedom, Debate & Cultural Heritage',
      review_count: 380,
      confidence_percentage: 96.5,
      cultural_fest_name: 'Ovations (Premier inter-collegiate cultural fest of South India)',
      tech_fest_name: 'Computel & Science Expos',
      annual_hackathons_count: 5,
      active_clubs_count: 45,
      industrial_visits_per_year: 4
    },
    courses: [
      {
        id: 'loyola-bcom',
        course_name: 'Commerce (B.Com General)',
        degree: 'B.Com',
        duration_years: 3,
        intake_seats: 250,
        admission_procedure: 'Merit-based admission on 12th Commerce & Accountancy marks',
        entrance_exams: ['12th Merit'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 197.0, BC_closing: 194.0, MBC_closing: 190.0, SC_closing: 182.0 },
          { year: 2024, OC_closing: 196.0, BC_closing: 193.0, MBC_closing: 189.0, SC_closing: 180.0 }
        ]
      },
      {
        id: 'loyola-bsc-cs',
        course_name: 'Computer Science (B.Sc)',
        degree: 'B.Sc',
        duration_years: 3,
        intake_seats: 100,
        admission_procedure: 'Merit-based on 12th Maths and Computer Science marks',
        entrance_exams: ['12th Merit'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 194.0, BC_closing: 191.0, MBC_closing: 186.0, SC_closing: 175.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 38000.0, // Shift 1 (Aided)
      hostel_fee_yearly: 28000.0,
      mess_fee_yearly: 32000.0,
      exam_fee_yearly: 3000.0,
      other_charges_yearly: 7500.0,
      total_yearly_estimated: 108500.0,
      fee_source_url: 'https://www.loyolacollege.edu/admissions/feestructure',
      fee_source_name: 'Loyola College Official Fee Schedule (Shift 1 & Shift 2)',
      last_updated: '02/10/2026',
      data_confidence: 98.6,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.7,
      lab_facilities: 'Entomology Research Institute (ERI), LIFE Research Centre, modern multimedia suites',
      library_books_count: 220000,
      digital_library: true,
      wifi_bandwidth: 'Campus-wide WiFi network',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.5,
      sports_facilities: ['Historic Loyola Pavilion', 'Cricket ground', 'Synthetic tennis court', 'Basketball court'],
      gym_available: true,
      bus_transport_routes: 0, // Central Chennai location right next to Nungambakkam railway station
      medical_center: 'Loyola Health Centre with medical staff'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 89.0,
      total_recruiters: 130,
      highest_package_lpa: 21.5,
      average_package_lpa: 7.2,
      median_package_lpa: 6.0,
      total_offers: 780,
      internship_offers: 220,
      report_source_url: 'https://www.loyolacollege.edu/placement',
      is_official: true,
      last_verified: '26/09/2026'
    },
    recruitment_history: [
      { company_name: 'Goldman Sachs', recruitment_year: 2025, job_roles: ['Operations Analyst'], package_offered_lpa: 14.5, hiring_type: 'Full-Time', source_reference: 'Loyola Placement Bureau' },
      { company_name: 'Deloitte', recruitment_year: 2025, job_roles: ['Audit & Assurance Trainee'], package_offered_lpa: 7.5, hiring_type: 'Full-Time', source_reference: 'Placement Records' },
      { company_name: 'McKinsey & Company', recruitment_year: 2025, job_roles: ['Junior Research Analyst'], package_offered_lpa: 12.0, hiring_type: 'Full-Time', source_reference: 'Loyola Placements' }
    ],
    scholarships: [
      {
        id: 'loyola-jesuit-aid',
        name: 'Loyola Jesuit Management Midday Meals & Fee Waiver',
        type: 'Need-Based',
        eligibility: 'Economically marginalized students and first-generation learners',
        amount_description: 'Full/Partial Tuition Fee waiver + Free Daily Midday Meals',
        yearly_value: 38000.0,
        required_documents: ['Parish/Panchayat Recommendation', 'Income Proof'],
        portal_url: 'https://www.loyolacollege.edu/scholarships'
      }
    ],
    student_reviews: [
      {
        id: 'rev-loyola-1',
        anonymous_alias: 'B.Com Senior',
        review_title: 'Unmatched cultural spirit, liberal atmosphere and top commerce placements',
        review_text: 'Loyola is an emotion in Chennai. There is complete freedom regarding dress code—you can wear casual shirts and jeans without anyone breathing down your neck. The Ovations cultural fest is legendary, and companies like Goldman Sachs and Deloitte hire commerce students aggressively.',
        rating_academics: 4.9,
        rating_infrastructure: 4.6,
        rating_campus_life: 5.0,
        rating_hostel_food: 4.2,
        rating_placement: 4.8,
        freedom_rating: 4.9,
        dress_code_feedback: 'High freedom. Casual wear, t-shirts, and jeans freely accepted.',
        sentiment: 'Positive',
        sentiment_score: 0.92,
        positive_aspects: ['Campus Freedom', 'Events & Culture', 'Placement', 'Academics'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 49,
        created_at: '2026-09-12'
      }
    ],
    sources: [
      {
        id: 'src-loyola-1',
        domain: 'Dress Code',
        source_name: 'Loyola College Calendar & Student Charter',
        source_url: 'https://www.loyolacollege.edu',
        is_official: true,
        collected_at: '2026-09-28',
        last_verified_at: '2026-10-04',
        data_confidence: 98.6,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'mmc-chennai',
    name: 'Madras Medical College (MMC)',
    short_code: 'MMC',
    slug: 'madras-medical-college-chennai',
    city: 'Park Town, Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    address: 'EVR Periyar Salai, Park Town, Chennai, Tamil Nadu 600003',
    website: 'https://www.mmc.ac.in',
    establishment_year: 1835,
    institution_type: 'Government',
    accreditation: 'NMC Recognized, NIRF #12 Medical in India, Affiliated to TN Dr. M.G.R. Medical University',
    approval_info: 'National Medical Commission (NMC), Govt of Tamil Nadu Health Dept',
    campus_area_acres: 28.0,
    min_eligibility_pct: 60.0,
    overall_rating: 4.9,
    is_demo_data: true,
    data_confidence: 99.0,
    last_updated: '04/10/2026',
    dress_code: {
      strictness_level: 'Moderate / Smart Casuals',
      policy_summary: 'Clinical professional dress code. White doctor apron mandatory during hospital postings and clinical wards.',
      boys_rules: 'Formal or neat collared shirts and trousers with clean white doctor lab coat in hospital wards. Jeans permitted during non-clinical lecture hours.',
      girls_rules: 'Salwar kameez or modest formal tops with knee-length white doctor apron and stethoscope.',
      footwear_rules: 'Formal shoes or non-slip closed footwear mandatory inside operation theatres and emergency wards.',
      id_card_policy: 'Hospital badge & MMC Student Medical ID mandatory at Rajiv Gandhi General Hospital wards.',
      mobile_phone_policy: 'Strictly silent in patient wards and ICU; allowed for clinical reference apps like Medscape.',
      outing_curfew: 'Flexible due to 24/7 medical intern rotations and casualty shifts.',
      review_count: 290,
      confidence_level: 96.0,
      disclaimer: 'Student-review-based indicator'
    },
    campus_freedom: {
      score: 7.9,
      indicator_label: 'Clinical Autonomy with High Academic Responsibility',
      review_count: 290,
      confidence_percentage: 96.0,
      cultural_fest_name: 'Revival (Historic All-India Medical College Fest)',
      tech_fest_name: 'EMCON & Mediquiz National Medical Symposia',
      annual_hackathons_count: 3,
      active_clubs_count: 22,
      industrial_visits_per_year: 8
    },
    courses: [
      {
        id: 'mmc-mbbs',
        course_name: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
        degree: 'MBBS',
        duration_years: 5,
        intake_seats: 250,
        admission_procedure: 'NEET-UG All India Quota (MCC) & Tamil Nadu State Medical Selection Counselling',
        entrance_exams: ['NEET-UG'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 688, BC_closing: 672, MBC_closing: 660, SC_closing: 595 }, // NEET marks
          { year: 2024, OC_closing: 682, BC_closing: 668, MBC_closing: 654, SC_closing: 588 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 18073.0, // Subsidized TN Govt Medical College fee
      hostel_fee_yearly: 14000.0,
      mess_fee_yearly: 28000.0,
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 4500.0,
      total_yearly_estimated: 68573.0,
      fee_source_url: 'https://tnmedicalselection.net',
      fee_source_name: 'Directorate of Medical Education (DME) Tamil Nadu Govt Fee Circular',
      last_updated: '30/09/2026',
      data_confidence: 99.2,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.6,
      lab_facilities: 'Rajiv Gandhi Government General Hospital (RGGGH - 3,000+ bedded hospital), advanced anatomy dissection theatres, pathology labs',
      library_books_count: 180000,
      digital_library: true,
      wifi_bandwidth: 'Campus Wi-Fi at library and academic wings',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.1,
      sports_facilities: ['Grounds near Central station', 'Badminton court', 'Table tennis'],
      gym_available: true,
      bus_transport_routes: 0, // Centrally situated next to Chennai Central Railway Station
      medical_center: 'Premier Government General Hospital (RGGGH) with tertiary trauma care'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 100.0, // 100% internship & clinical placement
      total_recruiters: 60,
      highest_package_lpa: 18.0,
      average_package_lpa: 12.0,
      median_package_lpa: 11.0,
      total_offers: 250,
      internship_offers: 250,
      report_source_url: 'https://www.mmc.ac.in',
      is_official: true,
      last_verified: '29/09/2026'
    },
    recruitment_history: [
      { company_name: 'Rajiv Gandhi Govt General Hospital (CRRI Internship)', recruitment_year: 2025, job_roles: ['Junior Resident / Compulsory Rotatory Intern'], package_offered_lpa: 3.5, hiring_type: 'Full-Time', source_reference: 'Govt CRRI Stipend Circular' },
      { company_name: 'Apollo Hospitals', recruitment_year: 2025, job_roles: ['Junior Medical Officer'], package_offered_lpa: 14.0, hiring_type: 'Full-Time', source_reference: 'Hospital Recruitment' }
    ],
    scholarships: [
      {
        id: 'mmc-tn-govt-stipend',
        name: 'TN Government CRRI Compulsory Rotatory Intern Stipend',
        type: 'Government',
        eligibility: 'All final year MBBS students during compulsory clinical rotational internship',
        amount_description: 'Rs 25,000 monthly stipend paid directly by Tamil Nadu Government',
        yearly_value: 300000.0,
        required_documents: ['CRRI Registration Order'],
        portal_url: 'https://tnhealth.tn.gov.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-mmc-1',
        anonymous_alias: 'CRRI Medical Intern',
        review_title: 'Unparalleled clinical case exposure at Asia’s third oldest medical college',
        review_text: 'MMC treats thousands of patients daily at RGGGH. The clinical exposure you get is unmatched anywhere in India. Dress code is standard medical: white aprons over clean formal/casual attire. You are treated as a doctor from day one.',
        rating_academics: 5.0,
        rating_infrastructure: 4.4,
        rating_campus_life: 4.3,
        rating_hostel_food: 3.7,
        rating_placement: 5.0,
        freedom_rating: 4.2,
        dress_code_feedback: 'Professional doctor apron required in wards. Normal decent clothes underneath.',
        sentiment: 'Positive',
        sentiment_score: 0.88,
        positive_aspects: ['Academics', 'Placement', 'Campus Freedom'],
        negative_aspects: ['Hostel & Living'],
        is_approved: true,
        upvotes: 39,
        created_at: '2026-09-15'
      }
    ],
    sources: [
      {
        id: 'src-mmc-1',
        domain: 'Fees',
        source_name: 'TN Medical Selection Official Information Bulletin',
        source_url: 'https://tnmedicalselection.net',
        is_official: true,
        collected_at: '2026-09-30',
        last_verified_at: '2026-10-04',
        data_confidence: 99.5,
        verification_status: 'verified'
      }
    ]
  }
];

export const SEED_COLLEGES: College[] = [...BASE_SEED_COLLEGES, ...MORE_TAMIL_NADU_COLLEGES];
