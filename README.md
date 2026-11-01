# Passco SHS

Passco SHS is a WASSCE practice and mock-exam platform tailored for Senior High School students in Ghana. The prototype includes a student practice view, timed exam simulation, anti-cheating monitoring, performance dashboard, and admin content management layout.

## Architecture overview

- Frontend: static HTML, CSS, and JavaScript for a lightweight mobile-first experience
- Data model: structured question objects and exam attempts stored in a future PostgreSQL + Prisma layer
- Exam logic: objective questions, theory responses, auto-save, timer handling, integrity checks, and review mode
- Admin workflow: question management, subject control, and analytics-ready data

## Database schema

```sql
-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT CHECK (role IN ('student', 'admin')) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Subjects
CREATE TABLE subjects (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

-- Topics
CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  subject_id INTEGER REFERENCES subjects(id),
  name TEXT NOT NULL
);

-- Questions
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  subject_id INTEGER REFERENCES subjects(id),
  topic_id INTEGER REFERENCES topics(id),
  type TEXT CHECK (type IN ('objective', 'theory')) NOT NULL,
  prompt TEXT NOT NULL,
  options JSONB,
  correct_answer TEXT,
  marks INTEGER NOT NULL,
  difficulty TEXT,
  explanation TEXT,
  year_label TEXT,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Exam attempts
CREATE TABLE exam_attempts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  subject_id INTEGER REFERENCES subjects(id),
  mode TEXT CHECK (mode IN ('practice', 'mock')) NOT NULL,
  started_at TIMESTAMP DEFAULT NOW(),
  submitted_at TIMESTAMP,
  score INTEGER,
  percentage NUMERIC,
  integrity_score INTEGER,
  flag_status TEXT CHECK (flag_status IN ('Clean', 'Review', 'Flagged'))
);

-- Event logs
CREATE TABLE exam_event_logs (
  id SERIAL PRIMARY KEY,
  attempt_id INTEGER REFERENCES exam_attempts(id),
  event_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Local setup

1. Open the project folder in a browser or serve it with a local static server.
2. From the project root, run:

   python -m http.server 8000

3. Visit http://localhost:8000

## Features included in this prototype

- Subject practice for core mathematics, English, science, and social studies
- Objective and theory question flow
- Timed mock exam simulation
- Student dashboard with score and topic analytics
- Admin panel mock data for question review and management
- Integrity monitoring events such as tab switching and right-click blocking

## Suggested future improvements

- Add real authentication with JWT or sessions
- Integrate PostgreSQL + Prisma and seed WASSCE-style question data
- Add full CSV/JSON bulk import for admin content management
- Introduce server-side timers and secure exam session locking
- Add AI-assisted theory grading behind a configurable flag
- Deploy to Vercel or a Node/Next.js hosting stack with environment variables
