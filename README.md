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

- **Azure AI App and Agent Developer Associate (AI-103)**: 178 questions,
  converted from a community exam-question archive (ExamTopics) and
  re-explained against real Azure/Microsoft Foundry product behavior.
  HOTSPOT and drag-and-drop source questions were converted into this
  app's single/multi-select format, which sometimes splits one source
  question into several entries (ids like `ai103-6-a`, `ai103-6-b`).
  **Note:** this content is sourced from leaked/community exam dumps,
  which typically violates the Microsoft certification agreement's
  content-sharing terms — keep this private and don't redistribute it.
- **Azure Fundamentals (AZ-900)**: a small starter set (6 questions),
  enough to exercise every feature — expand before relying on it for
  real exam prep.

## Tech stack

Next.js (App Router) + React + TypeScript + Tailwind CSS. No backend —
state lives in the browser for the duration of a session, with attempt
history persisted to `localStorage`.

---

Not affiliated with or endorsed by Microsoft. For personal study use only.
