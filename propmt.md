You are a senior full-stack engineer and UX designer. Build a complete, production-ready web application called "[SITE NAME]", a WASSCE past-questions practice and mock-exam platform for Senior High School students in Ghana. Deliver working code, not just a description.

## 1. Goal
Students practise WAEC-style questions in exam conditions, get instant results, and see their weak areas. The platform must discourage and detect cheating during timed exams.

## 2. Tech stack (use this unless you have a strong reason to change it)
- Frontend: Next.js (App Router) + TypeScript + Tailwind CSS
- Backend: Next.js API routes / server actions
- Database: PostgreSQL with Prisma ORM
- Auth: email + password (hashed with bcrypt or argon2), session or JWT, role-based access (student, admin)
- Math rendering: KaTeX
- Deployment-ready for Vercel + a hosted Postgres (e.g., Neon or Supabase)
- Mobile-first, lightweight, and usable on slow connections (most users are on phones)

## 3. Subjects
Core Mathematics, English Language, Integrated Science, Social Studies.

## 4. Question types (follow WASSCE format)
- Objective (Paper 1 style): multiple choice with options A to D, one correct answer, auto-marked instantly.
- Subjective/theory (Paper 2 style): essay, structured, and calculation questions with sub-parts (a), (b), (c) and marks per part.
  - Marking approach: after submission, show the examiner's marking scheme / model answer next to the student's answer so they can self-mark each part, and record their self-awarded marks.
  - Optional: AI-assisted grading of theory answers via an LLM API, clearly labelled as "estimated score". Make it configurable and off by default.
- Each question has: subject, topic, year/source label, difficulty, marks, explanation, and optional image/diagram.

## 5. Exam modes
- Practice mode: untimed, choose subject and topic, see the answer and explanation immediately after each question.
- Mock exam mode: timed, full-paper simulation (e.g., 40 objective questions in 1 hour for each subject; theory paper timed separately), no answers shown until submission.
- Auto-submit when the timer ends. Save progress so a refresh or network drop doesn't lose answers (autosave every few seconds to the server, with local fallback).

## 6. Instant results
- Objective: score, percentage, and WASSCE grade (A1 to F9) computed immediately on submission.
- Show per-question review: the student's answer, the correct answer, and an explanation.
- Performance dashboard: score history chart, accuracy by topic, weakest topics, time spent per question.
- For theory papers: combine the self-marked/AI-estimated score with the objective score for an overall estimate.

## 7. Anti-cheating system (mock exam mode)
Implement as many of these as are practical, log every event with a timestamp, and store them with the attempt:
- Detect tab switching and window blur (Page Visibility API + blur/focus events)
- Require fullscreen mode and detect when the student exits it
- Disable right-click, copy, cut, paste, text selection, and print shortcuts inside the exam
- Randomise question order and option order per student so answers can't be shared
- Server-side timer as the source of truth (the client timer is only for display)
- Allow only one active session per student per exam; flag a second login
- Flag suspicious behaviour: abnormally fast answers, answer patterns identical to another student's, long idle gaps followed by bursts
- Warning system: first violations show a warning; after a set number (configurable, e.g., 3), the exam auto-submits and is flagged
- Optional (off by default, privacy-respecting): periodic webcam snapshots with student consent
- Each attempt gets an "integrity score" and a flag status (Clean / Review / Flagged), visible to admins with the full event log
- Be honest in the UI and docs: browser-based proctoring can deter and detect, but cannot make cheating impossible.

## 8. Admin panel
- Add/edit/delete questions (with LaTeX math input and image upload), bulk import via CSV/JSON
- Manage subjects, topics, exams, and time limits
- View all students, attempts, scores, and flagged attempts with event logs
- Analytics: average scores per subject, hardest questions

## 9. Content
- Seed the database with 10 to 15 sample questions per subject (objective and theory) in the WASSCE style, with explanations. Write original questions modelled on the WAEC syllabus and format; do not copy copyrighted past papers verbatim. Make the admin panel easy to add real past questions later.

## 10. Non-functional requirements
- Security: input validation, rate limiting on auth, CSRF protection, never send correct answers to the client before submission, protect admin routes
- Accessibility and clean, friendly UI suitable for teenagers; light/dark mode
- Clear folder structure, environment variable setup, and a README with setup, database migration, seeding, and deployment steps

## 11. How to respond
1. Start with a short architecture overview and the database schema.
2. Then give the full code file by file, with file paths.
3. Finish with setup and run instructions, and a list of suggested future improvements.
If the response is too long for one message, continue in order and tell me which part comes next.