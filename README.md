# CollegeWise AI – Real-Time College & Career Intelligence Platform

**CollegeWise AI** is an advanced, production-grade intelligence platform engineered for higher secondary (12th standard) graduates in Tamil Nadu and across India. It assists students in choosing the right courses, calculating admission chances against historical cutoffs, reviewing verified fee structures, and discovering student-review-based **Dress Code & Campus Strictness Indicators**.

---

## 🌟 Key Capabilities

1. **Student Academic Profiling & Auto-Cutoff Calculation**
   - 12th percentage, stream (PCM, PCB, PCMB, Commerce, Arts), subject-wise marks.
   - Automatic Tamil Nadu TNEA cutoff computation: $\text{Cutoff} = \text{Maths} + \frac{\text{Physics}}{2} + \frac{\text{Chemistry}}{2}$ (out of 200).
   - Sliders for maximum yearly budget, placement importance, campus life priority, and infrastructure preference.

2. **Dress Code Policy & Campus Freedom Indicator**
   - Detailed breakdown for every college:
     - Strictness Level: **Strict Formals**, **Moderate / Smart Casuals**, **High Freedom / Casuals**.
     - Boys' dress code, girls' dress code, footwear rules, ID card policy, mobile phone rules, and hostel curfew timings.
   - **Important Compliance Notice:** Clearly labeled as:
     `Student-review-based indicator` with review count and confidence percentage.

3. **Real-Time / Fresh Data Verification Pipeline**
   - Periodically scans official university websites, NIRF filings, state counselling boards (TNEA, DME), and verified student reviews.
   - Every metric tracks:
     - `source_url`
     - `source_name`
     - `collected_at`
     - `last_verified_at`
     - `data_confidence`
     - `verification_status`
   - Explicitly marks sample records as **DEMO DATA** and triggers conflicting-source warnings if discrepant third-party figures are detected.

4. **Multi-Attribute ML Recommendation Engine**
   - Ranks colleges based on eligibility, cutoff compatibility, fee affordability, placement percentage, average CTC, infrastructure rating, and dress code alignment.

5. **Historical Cutoff Prediction (Safe / Moderate / Reach)**
   - Statistical analysis across 3-year historical closing cutoffs by category (OC, BC, BCM, MBC, SC, ST).
   - Clear advisory: historical trends only; does not guarantee admission.

6. **Interactive 3D Campus Spatial Simulator**
   - 60 FPS Canvas WebGL spatial simulator rendering 3D buildings, academic wings, research labs, hostels, and sports pavilions.
   - Real-time 360° mouse drag rotation and day/night illumination toggle.

7. **Side-by-Side College Comparison (2 to 5 Colleges)**
   - Matrix comparison of fees, cutoffs, placements, companies, infrastructure, and dress code policies.

8. **AI Career Navigation Assistant**
   - Powered by Gemini (`gemini-3.8-flash`) server-side integration.
   - Generates customized guidance, 4-year progression roadmaps, and scholarships (e.g. TN First Graduate 100% waiver, 7.5% government school quota).

9. **Admin Control Console**
   - Real-time crawler job orchestration.
   - Source verification logs and review moderation queue.

---

## 📁 Repository Structure

```
├── .env.example                       # Environment secrets definition
├── Dockerfile                         # Node full-stack production container
├── docker-compose.yml                 # Multi-container PostgreSQL + Backend + Web setup
├── database/
│   └── schema.sql                     # Normalized PostgreSQL database schema
├── backend/                           # Python FastAPI & ML microservice
│   ├── config.py                      # Application settings
│   ├── database.py                    # SQLAlchemy connection engine
│   ├── models.py                      # SQLAlchemy ORM models
│   ├── schemas.py                     # Pydantic validation schemas
│   ├── main.py                        # FastAPI endpoints & OpenAPI docs
│   ├── requirements.txt               # Python dependencies
│   ├── Dockerfile                     # Python backend container
│   ├── ml/
│   │   ├── recommendation_engine.py   # Multi-attribute ML scoring
│   │   ├── cutoff_predictor.py        # Statistical admission classifier
│   │   └── sentiment_analyzer.py      # Review NLP sentiment & aspects
│   ├── pipeline/
│   │   └── data_ingestion.py          # Scheduled crawler & source verification
│   └── tests/
│       └── test_recommendations.py    # Pytest test suite
├── server.ts                          # Node.js + Express full-stack server with Vite
├── src/
│   ├── types/                         # TypeScript interfaces
│   ├── data/
│   │   └── seedColleges.ts            # Detailed Tamil Nadu colleges dataset
│   ├── services/
│   │   ├── recommendationEngine.ts    # ML compatibility algorithm
│   │   ├── cutoffPredictor.ts         # Cutoff probability calculator
│   │   └── sentimentClassifier.ts     # Review aspect classifier
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── CollegeCard.tsx
│   │   ├── CollegeDetailModal.tsx
│   │   ├── CollegeComparison.tsx
│   │   ├── StudentProfileModal.tsx
│   │   ├── CutoffPredictorTool.tsx
│   │   ├── AICareerGuidance.tsx
│   │   ├── Campus3DVisualizer.tsx
│   │   ├── AdminDashboard.tsx
│   │   └── Footer.tsx
│   ├── App.tsx                        # Main application container
│   ├── main.tsx                       # React DOM entry point
│   └── index.css                      # Tailwind CSS v4 styling
```

---

## 🚀 Quickstart & Setup

### 1. Prerequisites
- Node.js $\ge$ 20.x
- Python $\ge$ 3.10 (optional for backend microservice)
- PostgreSQL $\ge$ 15 (optional for database persistence)

### 2. Running Full-Stack Dev Server (Immediate Preview)
```bash
# 1. Install dependencies
npm install

# 2. Run dev server (Express backend + Vite frontend on port 3000)
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Running with Docker Compose
```bash
docker-compose up --build
```
This spins up:
- PostgreSQL database on port `5432` with preloaded schema `database/schema.sql`.
- Python FastAPI ML backend on port `8000`.
- React frontend & Express server on port `3000`.

---

## 🔒 Security & Privacy Commitments
- **Zero Sensitive Identity Collection:** No Aadhaar number, PAN, or government credentials requested.
- **Review Anonymity:** Students are assigned neutral aliases (e.g. *Mechanical Senior '25*) without leaking student roll numbers or emails.
- **Server-Side AI Secrets:** `GEMINI_API_KEY` is exclusively handled on server routes and never sent to browser bundles.
