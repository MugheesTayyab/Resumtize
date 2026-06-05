<div align="center">

# 🚀 Resumtize

### The AI-Powered Resume Optimization & Tailoring Engine

**Created by [Mughees](https://github.com/MugheesKundi)**

[💡 How it Works](#-how-it-works) ✦ [🛠️ Tech Stack](#-tech-stack) ✦ [📦 Installation](#-installation) ✦ [🐳 Docker Setup](#-docker-setup)

---

Create perfectly tailored resumes for each job application with advanced AI-powered suggestions. Resumtize runs locally with Ollama or connects seamlessly to your cloud LLM provider of choice.

</div>

<br>

## 💡 How It Works

Resumtize automates the tedious process of aligning your resume to specific job descriptions to help you bypass Applicant Tracking Systems (ATS) and catch recruiter attention.

1. **Upload your Master Resume** (PDF or DOCX format)
2. **Paste the Target Job Description**
3. **Analyze & Score**: Review keyword matches, alignment scoring, and gaps
4. **AI-Powered Tailoring**: Apply smart, context-aware resume adjustments (light nudging, keyword enhancement, or full tailoring)
5. **Cover Letter & Outreach**: Automatically generate custom cover letters and LinkedIn outreach messages
6. **Export**: Preview and download high-quality, ATS-optimized PDFs with modern templates

---

## ✨ Key Features

- **Double-Pass AI Tailoring**: Uses state-of-the-art LLMs to refine resume experience bullets while preserving factual truth.
- **ATS Keyword Highlighter**: Visually highlights matching keywords in yellow and identifies missing requirements.
- **Visual Resume Builder**: Reorder sections via drag-and-drop, add custom sections (awards, volunteer work), and fine-tune templates.
- **Cover Letter & Cold Outreach Generator**: Automatically crafts custom job application documents.
- **Multi-Language UI**: Fully localized user interface supporting English, Spanish, Japanese, Portuguese (Brazilian), and Chinese.
- **Flexible Print Controls**: PDF output adjusts base font size, margins, and section gaps dynamically.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | Next.js 16, React 19, TypeScript | Modern, high-performance web framework |
| **Styling** | Tailwind CSS 4, Jost & Playfair Display | Sleek, geometric, dark/yellow design system |
| **Backend** | FastAPI, Python 3.13+, LiteLLM | Fast asynchronous API and LLM translation |
| **Database** | TinyDB | Minimalist JSON-based document store |
| **PDF Rendering** | Playwright (Headless Chromium) | High-fidelity print-to-PDF engine |

---

## 📦 Installation

Follow these instructions to set up and run Resumtize locally.

### Prerequisites
Make sure you have the following installed on your machine:
- **Python** (3.13+)
- **Node.js** (22+)
- **uv** (Fast Python package manager) — [Install uv](https://docs.astral.sh/uv/getting-started/installation/)

### Step-by-Step Setup

#### 1. Clone the repository
```bash
git clone https://github.com/MugheesKundi/Resumtize.git
cd Resumtize
```

#### 2. Run the Backend
```bash
cd apps/backend
cp .env.example .env   # Configure your API keys here
uv sync                 # Automatically sync dependencies
uv run app              # Run the FastAPI server
```

#### 3. Run the Frontend
In a separate terminal:
```bash
cd apps/frontend
npm install            # Install Node packages
npm run dev            # Launch Next.js dev server
```

Open your browser and navigate to **[http://localhost:3000](http://localhost:3000)**. Go to **Settings** to select and configure your LLM provider.

---

## 🤖 Supported AI Providers

Resumtize leverages **LiteLLM** to support local or cloud models:
- **Ollama** (Run models like Llama 3 or Mistral locally for free)
- **OpenAI** (GPT-4o, GPT-4o-mini)
- **Google Gemini** (Gemini 2.5 Flash / Pro)
- **Anthropic Claude** (Claude 3.5 Sonnet / Haiku)
- **DeepSeek** (DeepSeek Chat / Coder)
- **OpenRouter** (For unified cloud endpoint access)

---

## 🐳 Docker Setup

Resumtize can be run inside a single Docker container. Build and run it on port `3000`:

```bash
docker run --name resumtize \
  -p 3000:3000 \
  -v resumtize-data:/app/backend/data \
  ghcr.io/mugheeskundi/resumtize:latest
```

*Note: If connecting to Ollama from inside the Docker container, configure the Ollama endpoint URL to `http://host.docker.internal:11434`.*

---

## 🚀 Deploying to Vercel & Production

Resumtize is built as a split-architecture application:
1. **Frontend**: Next.js (React 19, Tailwind 4)
2. **Backend**: FastAPI (Python 3.13)

For production, you deploy the frontend to **Vercel** and the backend API to a Python hosting provider (such as **Railway**, **Render**, **Fly.io**, or **DigitalOcean**).

### Step 1: Deploy the Backend API
Deploy the FastAPI backend first (located in `apps/backend`):
- **Root Directory**: `apps/backend`
- **Build/Install Command**: `uv sync` or `pip install -r requirements.txt`
- **Start Command**: `python -m app` (or `uvicorn app.main:app --host 0.0.0.0 --port $PORT`)
- **Environment Variables**: Configure your LLM API keys (e.g. `OPENAI_API_KEY`, `GEMINI_API_KEY`, etc.) and set `FRONTEND_BASE_URL` to your Vercel URL once deployed to configure CORS.

### Step 2: Deploy the Frontend to Vercel
Link your GitHub repository to Vercel and configure the project settings as follows:
- **Framework Preset**: `Next.js`
- **Root Directory**: `apps/frontend`
- **Build & Development Settings**: Keep defaults (Vercel will build it automatically).
- **Environment Variables**:
  - `BACKEND_ORIGIN`: Set this to your deployed Backend API URL (e.g. `https://resumtize-api.onrender.com`). Next.js will route your backend traffic dynamically.

---

## 📄 License

This project is licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.
