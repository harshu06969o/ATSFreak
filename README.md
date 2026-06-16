# ATSFreak — Resume Evaluation & Optimization Engine

ATSFreak is a backend-heavy intelligence platform that parses resumes, evaluates candidate alignment against job descriptions, and provides actionable data-driven insights.

## 🚀 Core Capabilities
- **Automated Resume Parsing:** Uses `pdf-parse` to ingest multi-page resumes and extracts structural data.
- **Semantic Evaluation:** Gemini 3.0 Flash analyzes the gap between resume skills and job requirements.
- **Memory-Optimized Pipeline:** Implements in-memory `multer` storage to eliminate disk I/O bottlenecks during file uploads.
- **Diagnostic Dashboard:** Visualizes keyword density and skill gaps to provide candidates with actionable feedback.

## 🛠️ Tech Stack
- **Core:** Node.js, Express.js
- **Parsing:** pdf-parse, Regex heuristics
- **Intelligence:** Google Gemini 3.0 Flash
- **Security:** JWT Auth, HTTP-only cookies, MongoDB token blacklist

## ⚙️ Engineering Highlights
- **Fault-Tolerant Pipelines:** Strict `Zod` validation enforces a deterministic response structure from the LLM, eliminating parsing crashes.
- **Asset Optimization:** Generates optimized, ATS-friendly resumes using headless print profiles, ensuring perfect structure retention.
- **Memory Management:** Limits payload ingestion to 3MB using buffer streams, preventing server-side memory exhaustion.

## ⚙️ Setup
1. Clone the repo: `git clone https://github.com/harshu06969o/ATSFreak`
2. Install dependencies: `npm install`
3. Configure `.env` with API Keys.
4. Start evaluation engine: `npm start`
