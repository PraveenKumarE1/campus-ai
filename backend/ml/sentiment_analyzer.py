import re
from typing import Dict, Any, List

class ReviewSentimentAnalyzer:
    """
    NLP Sentiment Analysis & Multi-Aspect Topic Extraction for Student Reviews.
    Ensures zero PII leakage while identifying student consensus across key campus aspects.
    """

    ASPECT_KEYWORDS = {
        "Faculty": ["faculty", "professor", "professors", "teaching", "lecturer", "teachers", "staff", "guidance"],
        "Infrastructure": ["infrastructure", "lab", "labs", "equipment", "library", "wifi", "classroom", "classrooms", "campus", "building"],
        "Hostel & Living": ["hostel", "room", "rooms", "warden", "water", "electricity", "accommodation", "stay"],
        "Food & Mess": ["food", "mess", "canteen", "diet", "meals", "tasty", "hygiene", "cafeteria"],
        "Placement": ["placement", "package", "ctc", "internship", "hiring", "recruiters", "companies", "jobs", "salary"],
        "Campus Freedom": ["strict", "rules", "curfew", "dress code", "freedom", "outing", "permissions", "gate pass", "discipline"],
        "Events & Culture": ["fest", "symposium", "hackathon", "cultural", "clubs", "sports", "annual day", "activities"],
        "Academics": ["academics", "curriculum", "exams", "study", "projects", "syllabus", "attendance", "grading"]
    }

    POSITIVE_WORDS = {
        "excellent", "great", "amazing", "good", "helpful", "supportive", "top", "modern", "well-equipped",
        "high", "lenient", "friendly", "superb", "decent", "impressive", "outstanding", "smooth", "flexible",
        "encouraging", "spacious", "reliable"
    }

    NEGATIVE_WORDS = {
        "strict", "poor", "bad", "terrible", "worst", "unhelpful", "outdated", "suffocating", "rigid",
        "slow", "hectic", "harsh", "disappointing", "limited", "tasteless", "dirty", "restrictive", "lack"
    }

    @classmethod
    def analyze(cls, text: str) -> Dict[str, Any]:
        clean_text = text.lower()
        words = re.findall(r'\b[a-z]{3,}\b', clean_text)
        
        pos_count = sum(1 for w in words if w in cls.POSITIVE_WORDS)
        neg_count = sum(1 for w in words if w in cls.NEGATIVE_WORDS)

        total = pos_count + neg_count
        if total == 0:
            sentiment = "Neutral"
            score = 0.0
        else:
            score = (pos_count - neg_count) / total
            if score > 0.2:
                sentiment = "Positive"
            elif score < -0.2:
                sentiment = "Negative"
            else:
                sentiment = "Neutral"

        # Aspect extraction
        extracted_aspects = []
        positive_aspects = []
        negative_aspects = []

        sentences = re.split(r'[.!?]+', clean_text)
        for sentence in sentences:
            sentence_words = set(re.findall(r'\b[a-z]{3,}\b', sentence))
            s_pos = any(w in cls.POSITIVE_WORDS for w in sentence_words)
            s_neg = any(w in cls.NEGATIVE_WORDS for w in sentence_words)

            for aspect, kws in cls.ASPECT_KEYWORDS.items():
                if any(kw in sentence_words for kw in kws):
                    if aspect not in extracted_aspects:
                        extracted_aspects.append(aspect)
                    if s_pos and not s_neg and aspect not in positive_aspects:
                        positive_aspects.append(aspect)
                    elif s_neg and not s_pos and aspect not in negative_aspects:
                        negative_aspects.append(aspect)

        return {
            "sentiment": sentiment,
            "sentiment_score": round(score, 3),
            "positive_aspects": positive_aspects,
            "negative_aspects": negative_aspects,
            "detected_aspects": extracted_aspects
        }
