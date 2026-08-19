# Azure Certification Practice

A practice quiz app for Azure certification exams — starting with the
**Azure AI App and Agent Developer Associate** exam, with **Azure
Fundamentals (AZ-900)** included to prove out multi-exam support.

## Features

- **Practice mode** — instant per-question feedback with explanations.
- **Exam simulation mode** — timed, no feedback until you finish.
- Single- and multi-answer questions.
- Results screen with a topic-by-topic breakdown and full answer review.
- Attempt history saved to `localStorage` (no account/backend required).
- Built to support any number of exams — add a new one without touching the UI.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding an exam

1. Create `src/lib/exams/data/<slug>.ts` exporting an `Exam` object
   (see `src/lib/exams/types.ts` for the shape, and the existing files
   for examples).
2. Register it in `src/lib/exams/index.ts`.

Each `Question` has a `type` of `"single"` or `"multi"`, an array of
`choices`, the `correctChoiceIds`, an `explanation` shown after
grading, and an optional `topic` used for the results breakdown.

## Content status

The seed exams currently ship with a small starter set of questions
(enough to exercise every feature) — expand each exam's data file with
a full question bank before relying on this for serious exam prep.

## Tech stack

Next.js (App Router) + React + TypeScript + Tailwind CSS. No backend —
state lives in the browser for the duration of a session, with attempt
history persisted to `localStorage`.

---

Not affiliated with or endorsed by Microsoft. Practice questions are
for study purposes and are not real exam questions.
