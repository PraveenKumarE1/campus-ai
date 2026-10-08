import { College } from '../types';

export const MORE_TAMIL_NADU_COLLEGES: College[] = [
  {
    id: 'mit-anna-univ',
    name: 'Madras Institute of Technology (MIT, Anna University)',
    short_code: 'MIT',
    slug: 'mit-anna-university-chromepet',
    city: 'Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    address: 'MIT Road, Chromepet, Chennai, Tamil Nadu 600044',
    website: 'https://mitindia.edu',
    establishment_year: 1949,
    institution_type: 'Government',
    accreditation: 'NAAC A++, NIRF Ranked with Anna University (Top 15)',
    approval_info: 'Anna University Chennai, UGC & AICTE Approved',
    campus_area_acres: 55.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.8,
    is_demo_data: true,
    data_confidence: 98.8,
    last_updated: '04/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'Very liberal academic atmosphere with high student autonomy. No uniform. Casual clothes allowed throughout lectures.',
      uniform_policy: 'Open Casuals',
      enforcement_frequency: 'Safety check only inside aerospace wind tunnels and mechanical foundry',
      boys_rules: 'Jeans, regular T-shirts, casual shirts. Shorts allowed in hostels and campus grounds during evenings.',
      girls_rules: 'Kurtis, tops, jeans, western and traditional casuals with full personal choice.',
      footwear_rules: 'Normal sandals, sneakers. Workshop boots only for mechanical workshops.',
      id_card_policy: 'Anna University RFID ID card required at main Chromepet gate and digital library.',
      mobile_phone_policy: 'Unrestricted on campus; silent mode during classroom sessions.',
      outing_curfew: 'Hostel closing time: 8:30 PM (extendable for aerospace lab projects with HOD token).',
      review_count: 310,
      confidence_level: 96.0,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 91,
        neutral_percentage: 7,
        restrictive_percentage: 2,
        key_verdict: 'High student autonomy. Famous as Dr. APJ Abdul Kalam’s alma mater with unmatched aerospace culture.',
        aspect_ratings: {
          morning_gate_enforcement: 1.2,
          lab_compliance_checks: 4.0,
          hostel_curfew_rigidity: 2.2,
          hair_grooming_scrutiny: 1.0,
          mobile_device_liberty: 4.8
        }
      }
    },
    campus_freedom: {
      score: 8.8,
      indicator_label: 'Exceptional Freedom, Research Heavy',
      review_count: 310,
      confidence_percentage: 96.0,
      cultural_fest_name: 'Mitafest (One of Tamil Nadu’s oldest inter-collegiate cultural fests)',
      tech_fest_name: 'Sivaranjani & Carte Blanche',
      annual_hackathons_count: 9,
      active_clubs_count: 32,
      industrial_visits_per_year: 4
    },
    courses: [
      {
        id: 'mit-aero',
        course_name: 'Aeronautical Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 60,
        admission_procedure: 'TNEA Single Window Counselling based on 12th PCM Cutoff',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 198.5, BC_closing: 197.5, MBC_closing: 196.0, SC_closing: 189.5 },
          { year: 2024, OC_closing: 198.0, BC_closing: 197.0, MBC_closing: 195.5, SC_closing: 188.0 },
          { year: 2023, OC_closing: 197.5, BC_closing: 196.5, MBC_closing: 194.5, SC_closing: 186.5 }
        ]
      },
      {
        id: 'mit-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 90,
        admission_procedure: 'TNEA Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 199.25, BC_closing: 198.75, MBC_closing: 197.5, SC_closing: 192.0 },
          { year: 2024, OC_closing: 198.75, BC_closing: 198.25, MBC_closing: 197.0, SC_closing: 191.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 35000.0,
      hostel_fee_yearly: 22000.0,
      mess_fee_yearly: 32000.0,
      exam_fee_yearly: 3000.0,
      other_charges_yearly: 6000.0,
      total_yearly_estimated: 98000.0,
      fee_source_url: 'https://mitindia.edu/admissions/fees',
      fee_source_name: 'Anna University MIT Campus Official Fee Regulation 2026',
      last_updated: '02/10/2026',
      data_confidence: 99.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.6,
      lab_facilities: 'Dr. APJ Abdul Kalam Aerospace Hangar, Wind Tunnel complex, Robotics lab, Avionics flight simulator',
      library_books_count: 125000,
      digital_library: true,
      wifi_bandwidth: 'Gigabit campus-wide network',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.4,
      sports_facilities: ['Cricket field', 'Basketball court', 'Volleyball complex', 'Indoor badminton hall'],
      gym_available: true,
      bus_transport_routes: 0,
      medical_center: 'Anna University Health Centre Chromepet Branch'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 94.2,
      total_recruiters: 190,
      highest_package_lpa: 42.0,
      average_package_lpa: 11.2,
      median_package_lpa: 9.8,
      total_offers: 840,
      internship_offers: 220,
      report_source_url: 'https://mitindia.edu/placement',
      is_official: true,
      last_verified: '30/09/2026'
    },
    recruitment_history: [
      { company_name: 'Boeing India', recruitment_year: 2025, job_roles: ['Aerospace Systems Engineer'], package_offered_lpa: 22.0, hiring_type: 'Full-Time', source_reference: 'Aero Dept Board' },
      { company_name: 'Microsoft', recruitment_year: 2025, job_roles: ['Software Development Engineer'], package_offered_lpa: 42.0, hiring_type: 'Full-Time', source_reference: 'CUIC Anna University' },
      { company_name: 'Cisco', recruitment_year: 2025, job_roles: ['Network Software Engineer'], package_offered_lpa: 18.5, hiring_type: 'Full-Time', source_reference: 'Campus Placement Desk' }
    ],
    scholarships: [
      {
        id: 'mit-fg-scheme',
        name: 'Tamil Nadu First Graduate Tuition Waiver',
        type: 'Government',
        eligibility: 'First member of family to attend collegiate degree via TNEA',
        amount_description: 'Full 100% Tuition Fee Waiver (Rs 25,000 / year)',
        yearly_value: 25000.0,
        required_documents: ['First Graduate Certificate from Tahsildar'],
        portal_url: 'https://tneaonline.org'
      }
    ],
    student_reviews: [
      {
        id: 'rev-mit-1',
        anonymous_alias: 'Final Year Aero Student',
        review_title: 'Unbelievable flight & research heritage with zero bureaucratic dress policing',
        review_text: 'MIT has supreme campus vibe. You walk around aircraft hangars where Dr. Kalam studied. Dress code is totally relaxed – jeans and t-shirts. Only in workshops they check leather shoes for safety.',
        rating_academics: 4.9,
        rating_infrastructure: 4.6,
        rating_campus_life: 4.7,
        rating_hostel_food: 4.1,
        rating_placement: 4.8,
        freedom_rating: 4.8,
        dress_code_feedback: 'Casual wear accepted. High personal freedom.',
        sentiment: 'Positive',
        sentiment_score: 0.92,
        positive_aspects: ['Campus Freedom', 'Academics', 'Placement'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 45,
        created_at: '2026-09-18'
      }
    ],
    sources: [
      {
        id: 'src-mit-1',
        domain: 'Fees & Admission',
        source_name: 'Anna University Official TNEA Bulletin 2026',
        source_url: 'https://tneaonline.org',
        is_official: true,
        collected_at: '2026-09-28',
        last_verified_at: '2026-10-04',
        data_confidence: 99.2,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'nit-trichy',
    name: 'National Institute of Technology, Tiruchirappalli (NIT Trichy / NITT)',
    short_code: 'NITT',
    slug: 'nit-trichy-tiruchirappalli',
    city: 'Tiruchirappalli',
    district: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    address: 'Tanjore Main Road, National Highway 67, Near Thuvakudi, Tiruchirappalli, Tamil Nadu 620015',
    website: 'https://www.nitt.edu',
    establishment_year: 1964,
    institution_type: 'Institute of National Importance',
    accreditation: 'NIRF #9 Engineering in India (Ranked #1 among all NITs)',
    approval_info: 'Ministry of Education, Government of India (MoE)',
    campus_area_acres: 800.0,
    min_eligibility_pct: 75.0,
    overall_rating: 4.9,
    is_demo_data: true,
    data_confidence: 99.4,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'Full autonomy and adult student culture. Zero dress codes or uniform enforcement. Complete freedom across massive 800-acre campus.',
      uniform_policy: 'Open Casuals',
      enforcement_frequency: 'Zero Gate Checks · Safety precautions inside machine shops only',
      boys_rules: 'T-shirts, shorts, casual trousers, tracksuits inside campus. Decent casuals for lectures.',
      girls_rules: 'Any respectful casual clothes, tops, jeans, kurtas, hoodies. Full liberty across department wings.',
      footwear_rules: 'Sneakers, sandals, flip-flops outside labs. Closed footwear required for chemical/foundry labs.',
      id_card_policy: 'NITT Smart Card with barcode for Orion lecture hall complexes and library.',
      mobile_phone_policy: 'Unrestricted usage campus-wide.',
      outing_curfew: 'No daytime curfew; late night movement within campus permitted for 24/7 central library & Octagon computing center.',
      review_count: 512,
      confidence_level: 98.2,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 95,
        neutral_percentage: 4,
        restrictive_percentage: 1,
        key_verdict: 'Highest freedom score in Central Tamil Nadu. Cosmopolitan all-India student crowd with zero micromanagement.',
        aspect_ratings: {
          morning_gate_enforcement: 1.0,
          lab_compliance_checks: 3.5,
          hostel_curfew_rigidity: 1.5,
          hair_grooming_scrutiny: 1.0,
          mobile_device_liberty: 5.0
        }
      }
    },
    campus_freedom: {
      score: 9.6,
      indicator_label: 'Top-Tier National Freedom & Vibrant Campus',
      review_count: 512,
      confidence_percentage: 98.2,
      cultural_fest_name: 'Festember (National level inter-collegiate cultural fest with 15,000+ footfall)',
      tech_fest_name: 'Pragyan (ISO 9001 & 20121 certified techno-managerial fest)',
      annual_hackathons_count: 16,
      active_clubs_count: 60,
      industrial_visits_per_year: 6
    },
    courses: [
      {
        id: 'nitt-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 120,
        admission_procedure: 'JoSAA / CSAB Counselling based on JEE Main All India Rank',
        entrance_exams: ['JEE Main'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 1520, BC_closing: 480, MBC_closing: 0, SC_closing: 210 }, // JEE Main AIR Home State
          { year: 2024, OC_closing: 1480, BC_closing: 450, MBC_closing: 0, SC_closing: 195 }
        ]
      },
      {
        id: 'nitt-ece',
        course_name: 'Electronics and Communication Engineering',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 110,
        admission_procedure: 'JoSAA Counselling based on JEE Main Rank',
        entrance_exams: ['JEE Main'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 3800, BC_closing: 1100, MBC_closing: 0, SC_closing: 540 },
          { year: 2024, OC_closing: 3650, BC_closing: 1050, MBC_closing: 0, SC_closing: 510 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 125000.0,
      hostel_fee_yearly: 26000.0,
      mess_fee_yearly: 38000.0,
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 16500.0,
      total_yearly_estimated: 209500.0,
      fee_source_url: 'https://www.nitt.edu/home/academics/fees',
      fee_source_name: 'NIT Trichy Senate Academic Fee Circular 2026',
      last_updated: '01/10/2026',
      data_confidence: 99.2,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.9,
      lab_facilities: 'Octagon Computer Centre, Siemens Centre of Excellence in Manufacturing, High Performance Computing (HPC) Clusters',
      library_books_count: 450000,
      digital_library: true,
      wifi_bandwidth: 'Campus-wide gigabit Wi-Fi across hostels and Orion lectures',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.6,
      sports_facilities: ['Synthetic athletics stadium', 'Floodlit swimming pool', 'Indoor sports complex', 'Cricket stadium'],
      gym_available: true,
      bus_transport_routes: 8,
      medical_center: 'NITT Hospital with full-time resident physicians and 24/7 ambulance'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 93.6,
      total_recruiters: 285,
      highest_package_lpa: 58.0,
      average_package_lpa: 17.8,
      median_package_lpa: 15.2,
      total_offers: 1350,
      internship_offers: 380,
      report_source_url: 'https://www.nitt.edu/home/academics/placement',
      is_official: true,
      last_verified: '29/09/2026'
    },
    recruitment_history: [
      { company_name: 'Uber', recruitment_year: 2025, job_roles: ['Software Engineer II'], package_offered_lpa: 54.0, hiring_type: 'Full-Time', source_reference: 'NITT Training and Placement Office' },
      { company_name: 'Qualcomm', recruitment_year: 2025, job_roles: ['Hardware Systems Engineer'], package_offered_lpa: 28.5, hiring_type: 'Full-Time', source_reference: 'ECE Dept Records' },
      { company_name: 'Amazon', recruitment_year: 2025, job_roles: ['SDE-1'], package_offered_lpa: 44.0, hiring_type: 'Full-Time', source_reference: 'NITT Official Brochure' }
    ],
    scholarships: [
      {
        id: 'nitt-fee-remission',
        name: 'MoE Central Full Fee Remission',
        type: 'Government',
        eligibility: 'SC/ST/PwD students (100% waiver) & Family income < 1 LPA (100% waiver)',
        amount_description: 'Full 100% Tuition Fee waiver (Rs 1,25,000 / year)',
        yearly_value: 125000.0,
        required_documents: ['Income Certificate', 'Category Certificate'],
        portal_url: 'https://scholarships.gov.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-nitt-1',
        anonymous_alias: 'B.Tech CSE Resident',
        review_title: 'True freedom, mindblowing peer group from every corner of India',
        review_text: 'NITT offers freedom comparable to old IITs. You are never judged for what you wear. Cycle culture across 800 acres, late night maggi joints, Octagon lab open 24 hours. Phenomenal placement statistics.',
        rating_academics: 4.9,
        rating_infrastructure: 4.8,
        rating_campus_life: 4.9,
        rating_hostel_food: 4.2,
        rating_placement: 5.0,
        freedom_rating: 5.0,
        dress_code_feedback: 'Completely relaxed. No uniform, casual attire anytime.',
        sentiment: 'Positive',
        sentiment_score: 0.95,
        positive_aspects: ['Campus Freedom', 'Placement', 'Faculty', 'Student Culture'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 68,
        created_at: '2026-09-12'
      }
    ],
    sources: [
      {
        id: 'src-nitt-1',
        domain: 'Fees & Placement',
        source_name: 'NITT Official Senate Annual Report 2025-26',
        source_url: 'https://www.nitt.edu',
        is_official: true,
        collected_at: '2026-10-02',
        last_verified_at: '2026-10-04',
        data_confidence: 99.6,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'sastra-thanjavur',
    name: 'Shanmugha Arts, Science, Technology & Research Academy (SASTRA Deemed University)',
    short_code: 'SASTRA',
    slug: 'sastra-university-thanjavur',
    city: 'Thanjavur',
    district: 'Thanjavur',
    state: 'Tamil Nadu',
    address: 'Tirumalaisamudram, Thanjavur, Tamil Nadu 613401',
    website: 'https://www.sastra.edu',
    establishment_year: 1984,
    institution_type: 'Deemed University',
    accreditation: 'NAAC A++, NIRF Ranked Top 25 University in India',
    approval_info: 'UGC Deemed to be University, AICTE Approved',
    campus_area_acres: 232.0,
    min_eligibility_pct: 60.0,
    overall_rating: 4.6,
    is_demo_data: true,
    data_confidence: 98.0,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'Moderate / Smart Casuals',
      policy_summary: 'Neat and dignified attire encouraged. No uniforms, but respectful campus dressing with emphasis on traditional values.',
      uniform_policy: 'Smart Casuals & Ethnic',
      enforcement_frequency: 'Classroom entrances and exam hall verifications',
      boys_rules: 'Collared shirts, formal or smart polo T-shirts, regular trousers or dark jeans. Torn/faded jeans discouraged.',
      girls_rules: 'Salwar kameez with dupatta, traditional kurtis with leggings/jeans. Modest ethnic and smart casuals preferred.',
      footwear_rules: 'Decent shoes or strapped sandals.',
      id_card_policy: 'Smart chip ID card must be worn visibly with neck lanyard inside academic zones.',
      mobile_phone_policy: 'Strictly prohibited during lectures; allowed in hostel and food courts.',
      outing_curfew: 'Hostel closing time: 7:00 PM for girls, 8:30 PM for boys. Gate pass system via parent SMS authentication.',
      review_count: 290,
      confidence_level: 94.0,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 72,
        neutral_percentage: 20,
        restrictive_percentage: 8,
        key_verdict: 'Academically disciplined environment with high placement records. Balanced balance between cultural ethos and modern education.',
        aspect_ratings: {
          morning_gate_enforcement: 2.8,
          lab_compliance_checks: 4.2,
          hostel_curfew_rigidity: 3.8,
          hair_grooming_scrutiny: 2.5,
          mobile_device_liberty: 3.2
        }
      }
    },
    campus_freedom: {
      score: 7.2,
      indicator_label: 'Balanced Academic Discipline & Cultural Heritage',
      review_count: 290,
      confidence_percentage: 94.0,
      cultural_fest_name: 'Kuruksastra (Major university cultural showcase)',
      tech_fest_name: 'Daksh (Annual national technological fest)',
      annual_hackathons_count: 7,
      active_clubs_count: 26,
      industrial_visits_per_year: 3
    },
    courses: [
      {
        id: 'sastra-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 300,
        admission_procedure: 'SASTRA Stream 1 (70% seats: JEE Main + +2 Marks) / Stream 2 (30% seats: +2 Aggregate)',
        entrance_exams: ['JEE Main', '12th Board Marks'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 98.2, BC_closing: 97.4, MBC_closing: 96.0, SC_closing: 92.0 },
          { year: 2024, OC_closing: 97.8, BC_closing: 96.9, MBC_closing: 95.5, SC_closing: 91.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 165000.0,
      hostel_fee_yearly: 32000.0,
      mess_fee_yearly: 36000.0,
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 12000.0,
      total_yearly_estimated: 249000.0,
      fee_source_url: 'https://www.sastra.edu/admissions',
      fee_source_name: 'SASTRA Deemed University Official Fee Portal 2026',
      last_updated: '29/09/2026',
      data_confidence: 98.5,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.7,
      lab_facilities: 'TIFAC-CORE in Industrial Biotechnology, VLSI Design Lab, Cognizant Cloud Lab, 3D Prototyping Centre',
      library_books_count: 260000,
      digital_library: true,
      wifi_bandwidth: 'Campus Wi-Fi across academic zones',
      hostel_ac_available: true,
      canteen_hygiene_rating: 4.5,
      sports_facilities: ['Indoor badminton stadium', 'Synthetic tennis courts', 'Cricket grounds', 'Table tennis'],
      gym_available: true,
      bus_transport_routes: 25,
      medical_center: 'Vaidyanatha Arogya Bhavan 24/7 Clinic'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 89.4,
      total_recruiters: 175,
      highest_package_lpa: 36.0,
      average_package_lpa: 8.8,
      median_package_lpa: 7.5,
      total_offers: 2200,
      internship_offers: 410,
      report_source_url: 'https://www.sastra.edu/placements',
      is_official: true,
      last_verified: '01/10/2026'
    },
    recruitment_history: [
      { company_name: 'Tata Consultancy Services (TCS Digital)', recruitment_year: 2025, job_roles: ['Digital Software Engineer', 'Ninja Developer'], package_offered_lpa: 9.0, hiring_type: 'Full-Time', source_reference: 'Placement Cell' },
      { company_name: 'Amazon', recruitment_year: 2025, job_roles: ['Software Development Engineer'], package_offered_lpa: 34.0, hiring_type: 'Full-Time', source_reference: 'SASTRA Placement Records' }
    ],
    scholarships: [
      {
        id: 'sastra-desh-videsh',
        name: 'Dean’s Merit Scholarship',
        type: 'Institutional',
        eligibility: 'Top 3 rankers in each branch per semester',
        amount_description: 'Full semester fee waiver',
        yearly_value: 82500.0,
        required_documents: ['Semester Grade Transcript'],
        portal_url: 'https://www.sastra.edu'
      }
    ],
    student_reviews: [
      {
        id: 'rev-sastra-1',
        anonymous_alias: 'ECE Junior',
        review_title: 'Top-tier academics, disciplined hostel life, solid placements',
        review_text: 'SASTRA has high academic standards and professors are very qualified. Dress code expects decent collared shirts/kurtis, nothing extreme. Hostel curfew is on time. Placement record for CS/IT/ECE is among the best in Tamil Nadu.',
        rating_academics: 4.8,
        rating_infrastructure: 4.7,
        rating_campus_life: 4.0,
        rating_hostel_food: 4.2,
        rating_placement: 4.7,
        freedom_rating: 3.7,
        dress_code_feedback: 'Smart casuals/formals expected. Moderate discipline.',
        sentiment: 'Positive',
        sentiment_score: 0.81,
        positive_aspects: ['Academics', 'Placement', 'Infrastructure'],
        negative_aspects: ['Hostel & Living'],
        is_approved: true,
        upvotes: 38,
        created_at: '2026-09-22'
      }
    ],
    sources: [
      {
        id: 'src-sastra-1',
        domain: 'Fees & Placement',
        source_name: 'SASTRA Official Admissions Handbook 2026',
        source_url: 'https://www.sastra.edu',
        is_official: true,
        collected_at: '2026-10-01',
        last_verified_at: '2026-10-04',
        data_confidence: 98.2,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'kct-coimbatore',
    name: 'Kumaraguru College of Technology (KCT Coimbatore)',
    short_code: 'KCT',
    slug: 'kumaraguru-college-of-technology-coimbatore',
    city: 'Coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    address: 'Athipalayam Road, Chinnavedampatti, Coimbatore, Tamil Nadu 641049',
    website: 'https://www.kct.ac.in',
    establishment_year: 1984,
    institution_type: 'Autonomous / Private',
    accreditation: 'NAAC A++, NBA Accredited Programs, NIRF Ranked',
    approval_info: 'Anna University Chennai Autonomous, AICTE Approved',
    campus_area_acres: 156.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.7,
    is_demo_data: true,
    data_confidence: 97.9,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'Moderate / Smart Casuals',
      policy_summary: 'Modern, corporate-like student dress culture. Neat casuals, collared t-shirts, and jeans allowed on normal days; formals for placement drives.',
      uniform_policy: 'Smart Casuals & Ethnic',
      enforcement_frequency: 'Laboratory sessions & Corporate placement drive days',
      boys_rules: 'Collared polo t-shirts, shirts, clean jeans or chinos. Clean appearance.',
      girls_rules: 'Kurtis with jeans/leggings, smart western casual tops. Modern campus culture.',
      footwear_rules: 'Sneakers, strapped sandals, shoes.',
      id_card_policy: 'Smart biometric ID card worn inside campus gate and Forge innovation centre.',
      mobile_phone_policy: 'Freely allowed outside classes; laptops encouraged across open study hubs.',
      outing_curfew: 'Hostel in-time: 8:00 PM for girls, 8:45 PM for boys. Relaxed for Garage hackathon nights.',
      review_count: 340,
      confidence_level: 95.5,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 82,
        neutral_percentage: 13,
        restrictive_percentage: 5,
        key_verdict: 'Vibrant student startup ecosystem (KCT Garage & Forge accelerator). High student engagement with clubs.',
        aspect_ratings: {
          morning_gate_enforcement: 2.1,
          lab_compliance_checks: 4.0,
          hostel_curfew_rigidity: 3.1,
          hair_grooming_scrutiny: 1.8,
          mobile_device_liberty: 4.3
        }
      }
    },
    campus_freedom: {
      score: 8.2,
      indicator_label: 'Vibrant Innovation & Balanced Autonomy',
      review_count: 340,
      confidence_percentage: 95.5,
      cultural_fest_name: 'Yugam (One of South India’s largest inter-college youth festivals)',
      tech_fest_name: 'KCT Yugam Hackathons & Motor-sports conclaves',
      annual_hackathons_count: 11,
      active_clubs_count: 45,
      industrial_visits_per_year: 4
    },
    courses: [
      {
        id: 'kct-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Single Window Counselling / Management Merit',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 194.0, BC_closing: 192.5, MBC_closing: 189.0, SC_closing: 178.0 },
          { year: 2024, OC_closing: 193.0, BC_closing: 191.5, MBC_closing: 187.5, SC_closing: 176.0 }
        ]
      },
      {
        id: 'kct-mech',
        course_name: 'Mechanical Engineering (Automotive & Robotics focus)',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 120,
        admission_procedure: 'TNEA Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 178.5, BC_closing: 173.0, MBC_closing: 165.0, SC_closing: 148.0 },
          { year: 2024, OC_closing: 176.0, BC_closing: 170.5, MBC_closing: 162.0, SC_closing: 145.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 95000.0,
      hostel_fee_yearly: 42000.0,
      mess_fee_yearly: 44000.0,
      exam_fee_yearly: 5000.0,
      other_charges_yearly: 18000.0,
      total_yearly_estimated: 204000.0,
      fee_source_url: 'https://www.kct.ac.in/admissions/fees',
      fee_source_name: 'KCT Autonomous Fee Regulation Committee 2026',
      last_updated: '02/10/2026',
      data_confidence: 98.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.8,
      lab_facilities: 'FORGE Innovation Accelerator, KCT Garage (Baja/Formula student workshop), BOSCH Joint Training Centre, Siemens Mechatronics Lab',
      library_books_count: 110000,
      digital_library: true,
      wifi_bandwidth: 'Campus wide Wi-Fi enabled with 1 Gbps lease line',
      hostel_ac_available: true,
      canteen_hygiene_rating: 4.7,
      sports_facilities: ['Synthetic tennis courts', 'Floodlit hockey turf', 'Olympic gym', 'Cricket turf'],
      gym_available: true,
      bus_transport_routes: 40,
      medical_center: 'Kumaraguru Aruljothi Health Centre with 24/7 doctors'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 91.5,
      total_recruiters: 210,
      highest_package_lpa: 32.0,
      average_package_lpa: 7.6,
      median_package_lpa: 6.8,
      total_offers: 1240,
      internship_offers: 310,
      report_source_url: 'https://www.kct.ac.in/placements',
      is_official: true,
      last_verified: '28/09/2026'
    },
    recruitment_history: [
      { company_name: 'Bosch Global Software', recruitment_year: 2025, job_roles: ['Associate Software Engineer'], package_offered_lpa: 8.5, hiring_type: 'Full-Time', source_reference: 'Placement Cell Records' },
      { company_name: 'Cisco Systems', recruitment_year: 2025, job_roles: ['Software Consulting Engineer'], package_offered_lpa: 17.5, hiring_type: 'Full-Time', source_reference: 'KCT Official Report' }
    ],
    scholarships: [
      {
        id: 'kct-mahatma-gandhi',
        name: 'Mahatma Gandhi Merit Scholarship',
        type: 'Institutional',
        eligibility: 'Merit scholars scoring above 8.5 CGPA each academic year',
        amount_description: 'Rs 10,000 annual cash award to over 700 students',
        yearly_value: 10000.0,
        required_documents: ['Grade Transcript'],
        portal_url: 'https://www.kct.ac.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-kct-1',
        anonymous_alias: 'Final Year Mechatronics Student',
        review_title: 'Unbelievable innovation hub and festival culture (Yugam is legendary)',
        review_text: 'KCT strikes the sweet spot in Coimbatore. Unlike extremely rigid colleges, you can wear neat jeans, t-shirts and enjoy campus life. KCT Garage is open late night if you build formula student cars.',
        rating_academics: 4.6,
        rating_infrastructure: 4.9,
        rating_campus_life: 4.8,
        rating_hostel_food: 4.5,
        rating_placement: 4.6,
        freedom_rating: 4.4,
        dress_code_feedback: 'Smart casuals allowed. Respectful polo t-shirts and jeans.',
        sentiment: 'Positive',
        sentiment_score: 0.91,
        positive_aspects: ['Campus Freedom', 'Infrastructure', 'Events & Fests'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 52,
        created_at: '2026-09-20'
      }
    ],
    sources: [
      {
        id: 'src-kct-1',
        domain: 'Fees & Admission',
        source_name: 'KCT Official Annual Bulletin 2026',
        source_url: 'https://www.kct.ac.in',
        is_official: true,
        collected_at: '2026-10-01',
        last_verified_at: '2026-10-04',
        data_confidence: 98.4,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'gct-coimbatore',
    name: 'Government College of Technology (GCT Coimbatore)',
    short_code: 'GCT',
    slug: 'government-college-of-technology-coimbatore',
    city: 'Coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    address: 'Thadagam Road, Coimbatore, Tamil Nadu 641013',
    website: 'https://gct.ac.in',
    establishment_year: 1945,
    institution_type: 'Government',
    accreditation: 'NAAC A, NBA Accredited, Historic Premier Govt Institution',
    approval_info: 'Directorate of Technical Education (DOTE) Tamil Nadu, AICTE Approved',
    campus_area_acres: 110.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.7,
    is_demo_data: true,
    data_confidence: 98.6,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'Typical government college atmosphere with high personal freedom. Zero uniform mandates, no dress policing.',
      uniform_policy: 'Open Casuals',
      enforcement_frequency: 'Safety shoes inside heavy workshops only',
      boys_rules: 'Normal shirts, t-shirts, jeans, trousers. Decent casual attire.',
      girls_rules: 'Salwar, kurtis, jeans, tops. No restrictive codes.',
      footwear_rules: 'Sandals or normal shoes allowed throughout.',
      id_card_policy: 'GCT College ID required during exams and main gate vehicle passes.',
      mobile_phone_policy: 'Freely used on campus; silent mode during class hours.',
      outing_curfew: 'Hostel in-time: 8:00 PM for girls (extendable for symposium preparations). Very relaxed for boys.',
      review_count: 275,
      confidence_level: 96.0,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 92,
        neutral_percentage: 6,
        restrictive_percentage: 2,
        key_verdict: 'High student autonomy with premier return-on-investment (extremely low government fees).',
        aspect_ratings: {
          morning_gate_enforcement: 1.1,
          lab_compliance_checks: 3.8,
          hostel_curfew_rigidity: 2.3,
          hair_grooming_scrutiny: 1.0,
          mobile_device_liberty: 4.7
        }
      }
    },
    campus_freedom: {
      score: 8.7,
      indicator_label: 'High Personal Freedom, Top Govt ROI',
      review_count: 275,
      confidence_percentage: 96.0,
      cultural_fest_name: 'Muthamizh Vizha & Sangamam',
      tech_fest_name: 'Infoquest & Technotrance',
      annual_hackathons_count: 6,
      active_clubs_count: 28,
      industrial_visits_per_year: 3
    },
    courses: [
      {
        id: 'gct-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 60,
        admission_procedure: 'TNEA Single Window Counselling based on 12th PCM Cutoff',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 196.5, BC_closing: 195.5, MBC_closing: 193.0, SC_closing: 185.0 },
          { year: 2024, OC_closing: 195.5, BC_closing: 194.5, MBC_closing: 192.0, SC_closing: 183.5 }
        ]
      },
      {
        id: 'gct-ece',
        course_name: 'Electronics and Communication Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 60,
        admission_procedure: 'TNEA Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 195.0, BC_closing: 193.5, MBC_closing: 191.0, SC_closing: 182.0 },
          { year: 2024, OC_closing: 194.0, BC_closing: 192.5, MBC_closing: 189.5, SC_closing: 180.5 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 18500.0,
      hostel_fee_yearly: 16000.0,
      mess_fee_yearly: 26000.0,
      exam_fee_yearly: 2500.0,
      other_charges_yearly: 4500.0,
      total_yearly_estimated: 67500.0,
      fee_source_url: 'https://gct.ac.in/fees',
      fee_source_name: 'Tamil Nadu Government DOTE Prescribed Fee Structure 2026',
      last_updated: '02/10/2026',
      data_confidence: 99.4,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.4,
      lab_facilities: 'Siemens Centre of Excellence, CAD/CAM Centre, High Voltage Engineering lab',
      library_books_count: 140000,
      digital_library: true,
      wifi_bandwidth: 'Campus Wi-Fi connectivity',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.2,
      sports_facilities: ['Cricket grounds', 'Volleyball arena', 'Athletics track', 'Table tennis'],
      gym_available: true,
      bus_transport_routes: 0,
      medical_center: 'Government Health Dispensary'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 88.6,
      total_recruiters: 140,
      highest_package_lpa: 28.0,
      average_package_lpa: 7.4,
      median_package_lpa: 6.5,
      total_offers: 580,
      internship_offers: 140,
      report_source_url: 'https://gct.ac.in/placement',
      is_official: true,
      last_verified: '29/09/2026'
    },
    recruitment_history: [
      { company_name: 'Zoho Corporation', recruitment_year: 2025, job_roles: ['Software Developer'], package_offered_lpa: 8.4, hiring_type: 'Full-Time', source_reference: 'GCT Placement Cell' },
      { company_name: 'Texas Instruments', recruitment_year: 2025, job_roles: ['Embedded Systems Intern / Trainee'], package_offered_lpa: 19.0, hiring_type: 'Full-Time', source_reference: 'ECE Dept Records' }
    ],
    scholarships: [
      {
        id: 'gct-bc-mbc-postmatric',
        name: 'TN Government BC/MBC Post-Matric Scholarship',
        type: 'Government',
        eligibility: 'All BC/MBC students admitted through TNEA Single Window with family income < 2.5 LPA',
        amount_description: 'Full tuition fee reimbursement + annual maintenance allowance',
        yearly_value: 18500.0,
        required_documents: ['Community Certificate', 'Income Certificate'],
        portal_url: 'https://bcmbcmw.tn.gov.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-gct-1',
        anonymous_alias: 'Third Year CSE Student',
        review_title: 'True freedom, negligible fee structure, strong alumni network',
        review_text: 'For less than 70k a year including hostel and mess, GCT provides top level engineering education. Absolutely no strict dress restrictions. Highly supportive faculty and great peer circle.',
        rating_academics: 4.7,
        rating_infrastructure: 4.3,
        rating_campus_life: 4.6,
        rating_hostel_food: 4.0,
        rating_placement: 4.6,
        freedom_rating: 4.8,
        dress_code_feedback: 'Completely casual. Zero restrictions.',
        sentiment: 'Positive',
        sentiment_score: 0.90,
        positive_aspects: ['Campus Freedom', 'Value for Money', 'Academics'],
        negative_aspects: ['Infrastructure'],
        is_approved: true,
        upvotes: 41,
        created_at: '2026-09-21'
      }
    ],
    sources: [
      {
        id: 'src-gct-1',
        domain: 'Fees & Admission',
        source_name: 'DOTE Tamil Nadu Official Government Gazette 2026',
        source_url: 'https://gct.ac.in',
        is_official: true,
        collected_at: '2026-10-01',
        last_verified_at: '2026-10-04',
        data_confidence: 99.2,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'srm-kattankulathur',
    name: 'SRM Institute of Science and Technology (SRMIST Kattankulathur)',
    short_code: 'SRM',
    slug: 'srm-institute-of-science-and-technology-kattankulathur',
    city: 'Chengalpattu',
    district: 'Chengalpattu',
    state: 'Tamil Nadu',
    address: 'SRM Nagar, Kattankulathur, Chengalpattu District, Tamil Nadu 603203',
    website: 'https://www.srmist.edu.in',
    establishment_year: 1985,
    institution_type: 'Deemed University',
    accreditation: 'NAAC A++, Category 1 University, NIRF Top 20 Overall in India',
    approval_info: 'UGC Deemed University, AICTE, ABET Accredited Engineering Programs',
    campus_area_acres: 250.0,
    min_eligibility_pct: 60.0,
    overall_rating: 4.7,
    is_demo_data: true,
    data_confidence: 98.4,
    last_updated: '04/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'Ultra-modern cosmopolitan freedom. Casual clothing freely permitted across campus, cafes, and departments. Zero uniform mandates.',
      uniform_policy: 'Open Casuals',
      enforcement_frequency: 'Zero Gate Checks · Professional formals requested only during campus interview days',
      boys_rules: 'T-shirts, jeans, shorts allowed in hostels, gym, and food courts. Decent casual wear in classes.',
      girls_rules: 'Western and ethnic casuals, tops, jeans, dresses, kurtis. Unrestricted personal choice.',
      footwear_rules: 'Sneakers, sandals, loafers, crocs.',
      id_card_policy: 'SRM Digital RFID smart card required for turnstiles at University building and Central Library.',
      mobile_phone_policy: 'High-speed 5G connectivity; laptops and tablets widely used in classrooms.',
      outing_curfew: 'Hostel curfew: 9:00 PM with biometric punch in. High internal freedom within SRM town ecosystem.',
      review_count: 580,
      confidence_level: 97.2,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 94,
        neutral_percentage: 4,
        restrictive_percentage: 2,
        key_verdict: 'Cosmopolitan campus with students from all Indian states and 50+ countries. Extremely high student autonomy.',
        aspect_ratings: {
          morning_gate_enforcement: 1.0,
          lab_compliance_checks: 3.6,
          hostel_curfew_rigidity: 2.1,
          hair_grooming_scrutiny: 1.0,
          mobile_device_liberty: 5.0
        }
      }
    },
    campus_freedom: {
      score: 9.3,
      indicator_label: 'Cosmopolitan Global Freedom & Massive Cultural Fests',
      review_count: 580,
      confidence_percentage: 97.2,
      cultural_fest_name: 'Milan (National cultural fest featuring Bollywood & International artists)',
      tech_fest_name: 'Aaruush (National techno-management extravaganza)',
      annual_hackathons_count: 18,
      active_clubs_count: 70,
      industrial_visits_per_year: 5
    },
    courses: [
      {
        id: 'srm-cse-core',
        course_name: 'Computer Science and Engineering (Core & Specializations)',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 1200,
        admission_procedure: 'SRMJEEE All India Entrance Exam / Direct NRI / International Merit',
        entrance_exams: ['SRMJEEE'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 95.0, BC_closing: 92.0, MBC_closing: 90.0, SC_closing: 85.0 }, // Board marks / SRMJEEE Rank < 5000
          { year: 2024, OC_closing: 94.0, BC_closing: 91.0, MBC_closing: 88.5, SC_closing: 83.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 450000.0,
      hostel_fee_yearly: 95000.0,
      mess_fee_yearly: 65000.0,
      exam_fee_yearly: 6000.0,
      other_charges_yearly: 25000.0,
      total_yearly_estimated: 641000.0,
      fee_source_url: 'https://www.srmist.edu.in/admission-fee',
      fee_source_name: 'SRMIST Official Academic Bulletin 2026',
      last_updated: '01/10/2026',
      data_confidence: 99.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.9,
      lab_facilities: 'Next-Gen AI & Robotics Lab, SRM-Siemens COE, Supercomputing cluster, Biometric gene sequencing lab',
      library_books_count: 320000,
      digital_library: true,
      wifi_bandwidth: 'Campus-wide multi-gigabit Wi-Fi 6',
      hostel_ac_available: true,
      canteen_hygiene_rating: 4.8,
      sports_facilities: ['Indoor air-conditioned stadium', 'Olympic athletic track', 'Swimming pool', 'Cricket ground'],
      gym_available: true,
      bus_transport_routes: 65,
      medical_center: 'SRM Medical College Hospital and Research Centre (1,200 bed super-speciality on campus)'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 91.2,
      total_recruiters: 720,
      highest_package_lpa: 57.0,
      average_package_lpa: 9.2,
      median_package_lpa: 7.8,
      total_offers: 6800,
      internship_offers: 1850,
      report_source_url: 'https://www.srmist.edu.in/placement',
      is_official: true,
      last_verified: '30/09/2026'
    },
    recruitment_history: [
      { company_name: 'Microsoft', recruitment_year: 2025, job_roles: ['Software Engineer'], package_offered_lpa: 45.0, hiring_type: 'Full-Time', source_reference: 'SRM Placement Directorate' },
      { company_name: 'JP Morgan Chase', recruitment_year: 2025, job_roles: ['Software Associate Analyst'], package_offered_lpa: 19.5, hiring_type: 'Full-Time', source_reference: 'SRM Placement Reports' },
      { company_name: 'Amazon', recruitment_year: 2025, job_roles: ['Cloud Support Associate / SDE'], package_offered_lpa: 32.0, hiring_type: 'Full-Time', source_reference: 'Placement Records' }
    ],
    scholarships: [
      {
        id: 'srm-founder-scholarship',
        name: 'SRM Founder’s Merit Scholarship',
        type: 'Institutional',
        eligibility: 'Top 100 rankers in SRMJEEE or state 12th board toppers',
        amount_description: 'Full 100% Tuition Fee waiver + free hostel & mess accommodation',
        yearly_value: 550000.0,
        required_documents: ['Board Merit Certificate', 'SRMJEEE Rank Card'],
        portal_url: 'https://www.srmist.edu.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-srm-1',
        anonymous_alias: 'SRM B.Tech Senior',
        review_title: 'Unbelievable campus scale, total wardrobe freedom, international crowd',
        review_text: 'SRM Kattankulathur is literally its own city on GST road. You have Subway, Starbucks, high-speed Wi-Fi, and complete freedom to wear whatever you want. Placements are massive if you keep your CGPA above 8.5.',
        rating_academics: 4.6,
        rating_infrastructure: 5.0,
        rating_campus_life: 5.0,
        rating_hostel_food: 4.4,
        rating_placement: 4.7,
        freedom_rating: 4.9,
        dress_code_feedback: 'Zero uniform. Modern casual attire accepted universally.',
        sentiment: 'Positive',
        sentiment_score: 0.94,
        positive_aspects: ['Campus Freedom', 'Infrastructure', 'Events & Fests'],
        negative_aspects: ['Fees & Living Cost'],
        is_approved: true,
        upvotes: 62,
        created_at: '2026-09-17'
      }
    ],
    sources: [
      {
        id: 'src-srm-1',
        domain: 'Fees & Placement',
        source_name: 'SRMIST Official Senate Admissions Prospectus 2026',
        source_url: 'https://www.srmist.edu.in',
        is_official: true,
        collected_at: '2026-10-02',
        last_verified_at: '2026-10-04',
        data_confidence: 98.8,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'rec-thandalam-chennai',
    name: 'Rajalakshmi Engineering College (REC Chennai, Thandalam)',
    short_code: 'REC',
    slug: 'rajalakshmi-engineering-college-thandalam-chennai',
    city: 'Chennai',
    district: 'Kanchipuram',
    state: 'Tamil Nadu',
    address: 'Rajalakshmi Nagar, Thandalam, NH4 Chennai-Bangalore Highway, Tamil Nadu 602105',
    website: 'https://www.rajalakshmi.org',
    establishment_year: 1997,
    institution_type: 'Autonomous / Private',
    accreditation: 'NAAC A++, NBA Tier-1 Accredited, NIRF Engineering Ranked Top 100',
    approval_info: 'Anna University Autonomous, AICTE Approved',
    campus_area_acres: 85.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.6,
    is_demo_data: true,
    data_confidence: 97.8,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'Strict Formals',
      policy_summary: 'Strict formal dress code policy enforced daily. Clean tucked-in formal shirts for boys, salwar kameez with pinned dupatta for girls. Strict gate checks.',
      uniform_policy: 'Mandatory Formals / Uniform',
      enforcement_frequency: 'Every Morning Main Gate Checkpoint & College Bus Boarding',
      boys_rules: 'Formal shirts strictly tucked in with black/brown leather belt. Formal dark trousers. Clean shaven look mandated. T-shirts and jeans strictly banned during lecture hours.',
      girls_rules: 'Salwar kameez or formal churidar with dupatta pinned neatly on both shoulders. Jeans, leggings, sleeveless tops prohibited.',
      footwear_rules: 'Formal leather shoes for boys. Decent strapped sandals or shoes for girls.',
      id_card_policy: 'College ID card must be worn around neck with college ribbon lanyard at all times.',
      mobile_phone_policy: 'Strictly prohibited on academic corridors and classrooms; confiscated if seen.',
      outing_curfew: 'Hostel curfew: 6:30 PM for girls, 7:30 PM for boys. Outing permitted only on alternate weekends with parent permission letter.',
      review_count: 360,
      confidence_level: 96.0,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 24,
        neutral_percentage: 36,
        restrictive_percentage: 40,
        key_verdict: 'Strict adherence to formal dress discipline, morning corridor checks, and bus discipline. Solid placements compensating for strict lifestyle.',
        aspect_ratings: {
          morning_gate_enforcement: 4.8,
          lab_compliance_checks: 5.0,
          hostel_curfew_rigidity: 4.7,
          hair_grooming_scrutiny: 4.6,
          mobile_device_liberty: 1.4
        }
      }
    },
    campus_freedom: {
      score: 5.4,
      indicator_label: 'High Administrative Discipline & Strict Formals',
      review_count: 360,
      confidence_percentage: 96.0,
      cultural_fest_name: 'Recharge (Annual inter-collegiate cultural fest)',
      tech_fest_name: 'Dravid & Tech-Conclave',
      annual_hackathons_count: 7,
      active_clubs_count: 24,
      industrial_visits_per_year: 3
    },
    courses: [
      {
        id: 'rec-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 240,
        admission_procedure: 'TNEA Single Window Counselling / Consortium Management Quota',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 191.5, BC_closing: 189.5, MBC_closing: 185.0, SC_closing: 172.0 },
          { year: 2024, OC_closing: 190.0, BC_closing: 188.0, MBC_closing: 183.0, SC_closing: 170.0 }
        ]
      },
      {
        id: 'rec-ai-ds',
        course_name: 'Artificial Intelligence and Data Science',
        degree: 'B.Tech',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Counselling',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 190.0, BC_closing: 188.0, MBC_closing: 183.5, SC_closing: 170.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 85000.0,
      hostel_fee_yearly: 45000.0,
      mess_fee_yearly: 42000.0,
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 22000.0,
      total_yearly_estimated: 198000.0,
      fee_source_url: 'https://www.rajalakshmi.org/admissions-fees.php',
      fee_source_name: 'REC Autonomous Fee Circular 2026',
      last_updated: '28/09/2026',
      data_confidence: 98.2,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.7,
      lab_facilities: 'Apple Authorized Training Center, NVIDIA Deep Learning lab, Bosch Automotive Training Center',
      library_books_count: 120000,
      digital_library: true,
      wifi_bandwidth: 'Campus Wi-Fi with firewall filters',
      hostel_ac_available: true,
      canteen_hygiene_rating: 4.4,
      sports_facilities: ['Cricket nets', 'Basketball court', 'Badminton courts', 'Table tennis'],
      gym_available: true,
      bus_transport_routes: 80,
      medical_center: 'Rajalakshmi Health Centre on campus'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 92.4,
      total_recruiters: 225,
      highest_package_lpa: 31.0,
      average_package_lpa: 6.8,
      median_package_lpa: 5.8,
      total_offers: 1680,
      internship_offers: 420,
      report_source_url: 'https://www.rajalakshmi.org/placement-record.php',
      is_official: true,
      last_verified: '02/10/2026'
    },
    recruitment_history: [
      { company_name: 'Cognizant', recruitment_year: 2025, job_roles: ['GenC Next Software Engineer'], package_offered_lpa: 7.2, hiring_type: 'Full-Time', source_reference: 'Placement Bulletin' },
      { company_name: 'Virtusa', recruitment_year: 2025, job_roles: ['Associate Software Engineer'], package_offered_lpa: 6.5, hiring_type: 'Full-Time', source_reference: 'REC Training Dept' }
    ],
    scholarships: [
      {
        id: 'rec-merit-scholarship',
        name: 'Rajalakshmi Educational Trust Merit Award',
        type: 'Institutional',
        eligibility: '12th Cutoff > 195/200 entering REC',
        amount_description: '50% Tuition Fee Concession',
        yearly_value: 42500.0,
        required_documents: ['12th Marksheet', 'TNEA Allotment Order'],
        portal_url: 'https://www.rajalakshmi.org'
      }
    ],
    student_reviews: [
      {
        id: 'rev-rec-1',
        anonymous_alias: 'REC CSE Alum',
        review_title: 'Strict daily uniform and gate check, but excellent placement record',
        review_text: 'Be prepared for strict rules: tucked in shirts, shaven face, no jeans, no phones. Staff will check at the gate every single morning. However, they train you vigorously for placements and almost everyone gets placed.',
        rating_academics: 4.7,
        rating_infrastructure: 4.6,
        rating_campus_life: 3.5,
        rating_hostel_food: 4.0,
        rating_placement: 4.8,
        freedom_rating: 2.8,
        dress_code_feedback: 'Strict formals mandatory. Morning inspections.',
        sentiment: 'Neutral',
        sentiment_score: 0.52,
        positive_aspects: ['Placement', 'Academics'],
        negative_aspects: ['Rules & Freedom', 'Grooming Inspection'],
        is_approved: true,
        upvotes: 49,
        created_at: '2026-09-14'
      }
    ],
    sources: [
      {
        id: 'src-rec-1',
        domain: 'Fees & Dress Code',
        source_name: 'Rajalakshmi Engineering College Student Handbook 2026',
        source_url: 'https://www.rajalakshmi.org',
        is_official: true,
        collected_at: '2026-09-29',
        last_verified_at: '2026-10-03',
        data_confidence: 97.8,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'cmc-vellore',
    name: 'Christian Medical College (CMC Vellore)',
    short_code: 'CMC',
    slug: 'christian-medical-college-vellore',
    city: 'Vellore',
    district: 'Vellore',
    state: 'Tamil Nadu',
    address: 'Ida Scudder Road, Vellore, Tamil Nadu 632004',
    website: 'https://www.cmch-vellore.edu',
    establishment_year: 1900,
    institution_type: 'Autonomous / Private',
    accreditation: 'NIRF #3 Medical in India (Premier Healthcare Landmark in Asia)',
    approval_info: 'National Medical Commission (NMC), Tamil Nadu Dr. M.G.R. Medical University',
    campus_area_acres: 200.0,
    min_eligibility_pct: 60.0,
    overall_rating: 4.9,
    is_demo_data: true,
    data_confidence: 99.5,
    last_updated: '04/10/2026',
    dress_code: {
      strictness_level: 'Moderate / Smart Casuals',
      policy_summary: 'Clinical medical professionalism. Clean professional attire with medical apron in hospital wards and dissection halls. Respectful casuals in residential quarters.',
      uniform_policy: 'Smart Casuals & Ethnic',
      enforcement_frequency: 'Hospital rounds, clinical wards, and outpatient clinics',
      boys_rules: 'Formal shirts, trousers, clinical doctor apron with CMC badge. Hair groomed.',
      girls_rules: 'Salwar suits or formal shirts/trousers with clinical white coat. Hair tied back for clinical hygiene.',
      footwear_rules: 'Closed comfortable leather/clinical shoes for long ward rounds.',
      id_card_policy: 'CMC Hospital Staff / Medical Student ID card required everywhere.',
      mobile_phone_policy: 'Allowed; silent mode during patient ward rounds.',
      outing_curfew: 'Hostel timings tailored for medical emergency on-call duty shifts.',
      review_count: 220,
      confidence_level: 98.0,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 88,
        neutral_percentage: 10,
        restrictive_percentage: 2,
        key_verdict: 'Deep spirit of compassionate healing and clinical ethics. Students are treated with high mutual respect by world-renowned doctors.',
        aspect_ratings: {
          morning_gate_enforcement: 1.8,
          lab_compliance_checks: 4.9,
          hostel_curfew_rigidity: 2.4,
          hair_grooming_scrutiny: 2.2,
          mobile_device_liberty: 4.5
        }
      }
    },
    campus_freedom: {
      score: 8.5,
      indicator_label: 'Elite Medical Calling & Compassionate Community',
      review_count: 220,
      confidence_percentage: 98.0,
      cultural_fest_name: 'Pegasus (National Inter-medical collegiate festival)',
      tech_fest_name: 'CMC Bioethics & Research Symposium',
      annual_hackathons_count: 4,
      active_clubs_count: 22,
      industrial_visits_per_year: 8
    },
    courses: [
      {
        id: 'cmc-mbbs',
        course_name: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
        degree: 'MBBS',
        duration_years: 5.5,
        intake_seats: 100,
        admission_procedure: 'NEET UG All India Counselling via DGHS & TN Selection Committee',
        entrance_exams: ['NEET UG'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 685, BC_closing: 672, MBC_closing: 660, SC_closing: 615 }, // NEET marks out of 720
          { year: 2024, OC_closing: 680, BC_closing: 668, MBC_closing: 655, SC_closing: 608 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 52000.0, // Subsidized philanthropic mission fee
      hostel_fee_yearly: 28000.0,
      mess_fee_yearly: 36000.0,
      exam_fee_yearly: 4000.0,
      other_charges_yearly: 14000.0,
      total_yearly_estimated: 134000.0,
      fee_source_url: 'https://admissions.cmcvellore.ac.in',
      fee_source_name: 'CMC Vellore Official MBBS Prospectus 2026',
      last_updated: '30/09/2026',
      data_confidence: 99.6,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.9,
      lab_facilities: 'State-of-the-art Clinical Simulation Lab, 3,000-bed tertiary hospital, Advanced robotic surgery theater, Bone marrow transplant unit',
      library_books_count: 180000,
      digital_library: true,
      wifi_bandwidth: 'Campus medical network',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.8,
      sports_facilities: ['Cricket grounds', 'Basketball courts', 'Swimming pool', 'Tennis complex'],
      gym_available: true,
      bus_transport_routes: 12,
      medical_center: 'Christian Medical College Main Hospital Vellore'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 100.0,
      total_recruiters: 50,
      highest_package_lpa: 24.0,
      average_package_lpa: 14.5,
      median_package_lpa: 13.0,
      total_offers: 100,
      internship_offers: 100,
      report_source_url: 'https://www.cmch-vellore.edu',
      is_official: true,
      last_verified: '02/10/2026'
    },
    recruitment_history: [
      { company_name: 'CMC Vellore Residency Program', recruitment_year: 2025, job_roles: ['Junior Resident Doctor / CRRI'], package_offered_lpa: 12.0, hiring_type: 'Full-Time', source_reference: 'CMC Medical Directorate' },
      { company_name: 'NHS UK / Royal College Fellowship Track', recruitment_year: 2025, job_roles: ['Clinical Fellow'], package_offered_lpa: 36.0, hiring_type: 'Full-Time', source_reference: 'Alumni Affairs' }
    ],
    scholarships: [
      {
        id: 'cmc-service-scholarship',
        name: 'CMC Benevolent Need-based Scholarship',
        type: 'Institutional',
        eligibility: 'All admitted MBBS candidates based on financial need',
        amount_description: 'Full tuition & living cost support on service commitment',
        yearly_value: 100000.0,
        required_documents: ['Income Assessment Statement'],
        portal_url: 'https://admissions.cmcvellore.ac.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-cmc-1',
        anonymous_alias: 'Final Year MBBS Candidate',
        review_title: 'Most transformative medical training in India with legendary doctor mentors',
        review_text: 'CMC is not just a college; it is a life calling. Fees are extraordinarily subsidized because of its Christian healing mission. Dress code is pure clinical dignity (aprons and clean clothes). The clinical exposure you gain here makes you a doctor ready for any hospital on Earth.',
        rating_academics: 5.0,
        rating_infrastructure: 4.9,
        rating_campus_life: 4.7,
        rating_hostel_food: 4.3,
        rating_placement: 5.0,
        freedom_rating: 4.5,
        dress_code_feedback: 'Clinical doctor formals with apron in hospital. Normal clothes in college.',
        sentiment: 'Positive',
        sentiment_score: 0.98,
        positive_aspects: ['Academics', 'Mentorship', 'Clinical Exposure', 'Value for Money'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 74,
        created_at: '2026-09-19'
      }
    ],
    sources: [
      {
        id: 'src-cmc-1',
        domain: 'Fees & Admission',
        source_name: 'Christian Medical College Official Council Bulletin 2026',
        source_url: 'https://admissions.cmcvellore.ac.in',
        is_official: true,
        collected_at: '2026-10-02',
        last_verified_at: '2026-10-04',
        data_confidence: 99.6,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'mcc-tambaram',
    name: 'Madras Christian College (MCC Tambaram, Chennai)',
    short_code: 'MCC',
    slug: 'madras-christian-college-tambaram-chennai',
    city: 'Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    address: 'Velachery Main Road, East Tambaram, Chennai, Tamil Nadu 600059',
    website: 'https://mcc.edu.in',
    establishment_year: 1837,
    institution_type: 'Autonomous / Govt. Aided',
    accreditation: 'NAAC A++, College of Excellence by UGC, NIRF Top 15 Colleges in India',
    approval_info: 'University of Madras Affiliated Autonomous, UGC Approved',
    campus_area_acres: 320.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.8,
    is_demo_data: true,
    data_confidence: 98.6,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'High Freedom / Casuals',
      policy_summary: 'Unmatched student freedom, historical liberal arts culture. Sprawling 320-acre lush scrub forest campus with total dress autonomy. Zero uniform mandates.',
      uniform_policy: 'Open Casuals',
      enforcement_frequency: 'Zero Gate Checks · Completely relaxed environment',
      boys_rules: 'T-shirts, casual shirts, jeans, kurtas, shorts allowed across vast campus trails and residential halls.',
      girls_rules: 'Full autonomy to wear modern western casuals, kurtis, tops, jeans, sarees. Zero moral policing.',
      footwear_rules: 'Sneakers, sandals, slippers allowed freely.',
      id_card_policy: 'MCC Student ID required at main Tambaram gate and Miller Memorial Library.',
      mobile_phone_policy: 'Freely used everywhere; respectful silent mode in lecture chambers.',
      outing_curfew: 'Relaxed hall (hostel) culture with traditional autonomy and inter-hall camaraderie.',
      review_count: 410,
      confidence_level: 97.4,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 96,
        neutral_percentage: 3,
        restrictive_percentage: 1,
        key_verdict: 'Highest student freedom amongst Arts & Science institutions in Tamil Nadu. Lush natural bio-diversity with deer and peacocks.',
        aspect_ratings: {
          morning_gate_enforcement: 1.0,
          lab_compliance_checks: 2.8,
          hostel_curfew_rigidity: 1.6,
          hair_grooming_scrutiny: 1.0,
          mobile_device_liberty: 5.0
        }
      }
    },
    campus_freedom: {
      score: 9.7,
      indicator_label: 'Historic Liberal Arts Heritage & Maximum Campus Freedom',
      review_count: 410,
      confidence_percentage: 97.4,
      cultural_fest_name: 'DeepWoods (Legendary cultural fest in South India with rock concerts)',
      tech_fest_name: 'Octagon & Genesis',
      annual_hackathons_count: 8,
      active_clubs_count: 50,
      industrial_visits_per_year: 4
    },
    courses: [
      {
        id: 'mcc-bcom',
        course_name: 'Bachelor of Commerce (B.Com General / Accounting & Finance)',
        degree: 'B.Com',
        duration_years: 3,
        intake_seats: 140,
        admission_procedure: 'Direct Merit List based on 12th Board Marks (Commerce + Accountancy + Business Maths / Economics)',
        entrance_exams: ['12th Board Marks'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 98.5, BC_closing: 97.0, MBC_closing: 94.5, SC_closing: 89.0 },
          { year: 2024, OC_closing: 98.0, BC_closing: 96.5, MBC_closing: 93.5, SC_closing: 88.0 }
        ]
      },
      {
        id: 'mcc-bsc-cs',
        course_name: 'B.Sc Computer Science & Data Analytics',
        degree: 'B.Sc.',
        duration_years: 3,
        intake_seats: 60,
        admission_procedure: 'Merit List on 12th Maths + CS / Science Marks',
        entrance_exams: ['12th Board Marks'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 97.0, BC_closing: 95.5, MBC_closing: 92.0, SC_closing: 86.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 42000.0,
      hostel_fee_yearly: 26000.0,
      mess_fee_yearly: 34000.0,
      exam_fee_yearly: 3000.0,
      other_charges_yearly: 8000.0,
      total_yearly_estimated: 113000.0,
      fee_source_url: 'https://mcc.edu.in/admissions/fees',
      fee_source_name: 'MCC Official Prospectus 2026',
      last_updated: '01/10/2026',
      data_confidence: 98.8,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.7,
      lab_facilities: 'Miller Memorial Library with 200,000 volumes, Scrub Jungle Biodiversity Lab, Botany Herbarium, Media Studio',
      library_books_count: 210000,
      digital_library: true,
      wifi_bandwidth: 'Campus Wi-Fi across halls and academic wings',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.6,
      sports_facilities: ['Historic Anderson sports grounds', 'Cricket pitch', 'Basketball court', 'Boxing ring'],
      gym_available: true,
      bus_transport_routes: 0,
      medical_center: 'MCC Dispensary with resident doctor'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 86.5,
      total_recruiters: 130,
      highest_package_lpa: 16.0,
      average_package_lpa: 6.5,
      median_package_lpa: 5.6,
      total_offers: 820,
      internship_offers: 260,
      report_source_url: 'https://mcc.edu.in/placement',
      is_official: true,
      last_verified: '29/09/2026'
    },
    recruitment_history: [
      { company_name: 'Deloitte India', recruitment_year: 2025, job_roles: ['Tax Associate', 'Audit Analyst'], package_offered_lpa: 7.5, hiring_type: 'Full-Time', source_reference: 'MCC Career Guidance Bureau' },
      { company_name: 'Goldman Sachs', recruitment_year: 2025, job_roles: ['Operations Analyst'], package_offered_lpa: 14.0, hiring_type: 'Full-Time', source_reference: 'Placement Desk' }
    ],
    scholarships: [
      {
        id: 'mcc-miller-endowment',
        name: 'William Miller Centennial Endowment Award',
        type: 'Institutional',
        eligibility: 'Merit-cum-means scholars with distinction in commerce or sciences',
        amount_description: 'Full tuition fee waiver',
        yearly_value: 42000.0,
        required_documents: ['Grade Transcript', 'Income Certificate'],
        portal_url: 'https://mcc.edu.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-mcc-1',
        anonymous_alias: 'B.Com Final Year Resident',
        review_title: 'Unrivaled 320-acre scrub forest, total freedom, DeepWoods festival is magic',
        review_text: 'MCC gives you the best college life in Chennai hands down. Zero dress code restrictions. You can wear whatever you want, hang out under huge banyan trees, see deer grazing right outside your lecture hall, and learn from brilliant professors.',
        rating_academics: 4.8,
        rating_infrastructure: 4.8,
        rating_campus_life: 5.0,
        rating_hostel_food: 4.2,
        rating_placement: 4.6,
        freedom_rating: 5.0,
        dress_code_feedback: 'Open casuals. Total personal wardrobe freedom.',
        sentiment: 'Positive',
        sentiment_score: 0.97,
        positive_aspects: ['Campus Freedom', 'Campus Life', 'Events & Fests', 'Heritage'],
        negative_aspects: [],
        is_approved: true,
        upvotes: 65,
        created_at: '2026-09-18'
      }
    ],
    sources: [
      {
        id: 'src-mcc-1',
        domain: 'Fees & Admission',
        source_name: 'Madras Christian College Official Prospectus 2026',
        source_url: 'https://mcc.edu.in',
        is_official: true,
        collected_at: '2026-10-01',
        last_verified_at: '2026-10-04',
        data_confidence: 99.0,
        verification_status: 'verified'
      }
    ]
  },

  {
    id: 'mepco-sivakasi',
    name: 'Mepco Schlenk Engineering College (MSEC Sivakasi / Virudhunagar)',
    short_code: 'MEPCO',
    slug: 'mepco-schlenk-engineering-college-sivakasi',
    city: 'Sivakasi',
    district: 'Virudhunagar',
    state: 'Tamil Nadu',
    address: 'Mepco Engineering College Post, Sivakasi, Virudhunagar District, Tamil Nadu 626005',
    website: 'https://www.mepcoeng.ac.in',
    establishment_year: 1984,
    institution_type: 'Autonomous / Private',
    accreditation: 'NAAC A, NBA Accredited, Renowned Academic Discipline in South TN',
    approval_info: 'Anna University Autonomous, AICTE Approved',
    campus_area_acres: 120.0,
    min_eligibility_pct: 50.0,
    overall_rating: 4.5,
    is_demo_data: true,
    data_confidence: 97.6,
    last_updated: '03/10/2026',
    dress_code: {
      strictness_level: 'Strict Formals',
      policy_summary: 'Rigorous discipline and formal dress code. Tucked-in formal shirts for boys, neatly pinned salwar with dupatta for girls. Punctuality and grooming strictly supervised.',
      uniform_policy: 'Mandatory Formals / Uniform',
      enforcement_frequency: 'Daily morning corridor and gate inspection',
      boys_rules: 'Tucked-in formal shirts, dark formal trousers, clean haircut, clean shaven. Strictly no t-shirts, cargo pants, or jeans.',
      girls_rules: 'Salwar kameez with dupatta pinned on both shoulders. Strict hair braiding/pinning required.',
      footwear_rules: 'Formal leather shoes mandatory for boys. Closed sandals for girls.',
      id_card_policy: 'College ID card with clip lanyard compulsory inside campus.',
      mobile_phone_policy: 'Strictly prohibited on academic premises; safe deposit in hostel lockers.',
      outing_curfew: 'Hostel closing time: 6:30 PM. Outings permitted only with verified parental authorization.',
      review_count: 280,
      confidence_level: 95.2,
      disclaimer: 'Student-review-based indicator',
      freedom_sentiment_breakdown: {
        satisfied_percentage: 28,
        neutral_percentage: 34,
        restrictive_percentage: 38,
        key_verdict: 'Known as the epitome of Southern Tamil Nadu engineering discipline. Exceptional university academic results and rigorous study environment.',
        aspect_ratings: {
          morning_gate_enforcement: 4.9,
          lab_compliance_checks: 5.0,
          hostel_curfew_rigidity: 4.8,
          hair_grooming_scrutiny: 4.7,
          mobile_device_liberty: 1.2
        }
      }
    },
    campus_freedom: {
      score: 5.2,
      indicator_label: 'Rigorous Academic Discipline & High Exam Results',
      review_count: 280,
      confidence_percentage: 95.2,
      cultural_fest_name: 'Mepco Spark & Fine Arts',
      tech_fest_name: 'Gyan Mitra & Technofeast',
      annual_hackathons_count: 5,
      active_clubs_count: 20,
      industrial_visits_per_year: 3
    },
    courses: [
      {
        id: 'mepco-cse',
        course_name: 'Computer Science and Engineering',
        degree: 'B.E.',
        duration_years: 4,
        intake_seats: 180,
        admission_procedure: 'TNEA Single Window Counselling / Consortium Merit',
        entrance_exams: ['TNEA Cutoff'],
        historical_cutoffs: [
          { year: 2025, OC_closing: 186.5, BC_closing: 184.0, MBC_closing: 178.5, SC_closing: 165.0 },
          { year: 2024, OC_closing: 185.0, BC_closing: 182.5, MBC_closing: 177.0, SC_closing: 162.0 }
        ]
      }
    ],
    fees: {
      academic_year: 2026,
      tuition_fee_yearly: 75000.0,
      hostel_fee_yearly: 38000.0,
      mess_fee_yearly: 39000.0,
      exam_fee_yearly: 3500.0,
      other_charges_yearly: 14500.0,
      total_yearly_estimated: 170000.0,
      fee_source_url: 'https://www.mepcoeng.ac.in/fees',
      fee_source_name: 'MSEC Autonomous Fee Bulletin 2026',
      last_updated: '29/09/2026',
      data_confidence: 98.0,
      verification_status: 'verified'
    },
    infrastructure: {
      classroom_rating: 4.6,
      lab_facilities: 'High-voltage engineering laboratory, Industrial Automation COE, Texas Instruments Embedded Lab',
      library_books_count: 115000,
      digital_library: true,
      wifi_bandwidth: 'Campus Wi-Fi with firewall',
      hostel_ac_available: false,
      canteen_hygiene_rating: 4.5,
      sports_facilities: ['Cricket stadium', 'Basketball court', 'Gym', 'Indoor shuttle badminton'],
      gym_available: true,
      bus_transport_routes: 35,
      medical_center: 'Mepco Health Centre with resident doctor'
    },
    placements: {
      academic_year: 2025,
      placement_percentage: 89.2,
      total_recruiters: 160,
      highest_package_lpa: 22.0,
      average_package_lpa: 6.2,
      median_package_lpa: 5.4,
      total_offers: 980,
      internship_offers: 210,
      report_source_url: 'https://www.mepcoeng.ac.in/placement',
      is_official: true,
      last_verified: '01/10/2026'
    },
    recruitment_history: [
      { company_name: 'Zoho Corporation', recruitment_year: 2025, job_roles: ['Technical Support / Software Developer'], package_offered_lpa: 7.8, hiring_type: 'Full-Time', source_reference: 'Placement Cell' },
      { company_name: 'TCS', recruitment_year: 2025, job_roles: ['Systems Engineer'], package_offered_lpa: 7.0, hiring_type: 'Full-Time', source_reference: 'MSEC Placement Office' }
    ],
    scholarships: [
      {
        id: 'mepco-merit-scheme',
        name: 'Mepco Alumni Endowment Merit Scholarship',
        type: 'Institutional',
        eligibility: 'Top 5% students in each branch each year',
        amount_description: 'Rs 25,000 annual scholarship award',
        yearly_value: 25000.0,
        required_documents: ['Semester Grade Sheet'],
        portal_url: 'https://www.mepcoeng.ac.in'
      }
    ],
    student_reviews: [
      {
        id: 'rev-mepco-1',
        anonymous_alias: 'Third Year ECE Student',
        review_title: 'Uncompromising discipline and high university ranks',
        review_text: 'If you want pure study discipline without any distractions, Mepco is the choice. Morning uniform check is real: tucked shirts and clean shaved. In return, the lab training and university exam scores are among the best in Tamil Nadu.',
        rating_academics: 4.8,
        rating_infrastructure: 4.5,
        rating_campus_life: 3.4,
        rating_hostel_food: 4.2,
        rating_placement: 4.5,
        freedom_rating: 2.6,
        dress_code_feedback: 'Strict formals mandatory. Regular hair and grooming checks.',
        sentiment: 'Neutral',
        sentiment_score: 0.54,
        positive_aspects: ['Academics', 'Placement', 'Discipline'],
        negative_aspects: ['Strict Rules', 'Mobile Restrictions'],
        is_approved: true,
        upvotes: 37,
        created_at: '2026-09-15'
      }
    ],
    sources: [
      {
        id: 'src-mepco-1',
        domain: 'Fees & Rules',
        source_name: 'Mepco Schlenk Engineering College Prospectus 2026',
        source_url: 'https://www.mepcoeng.ac.in',
        is_official: true,
        collected_at: '2026-10-01',
        last_verified_at: '2026-10-04',
        data_confidence: 97.6,
        verification_status: 'verified'
      }
    ]
  }
];
