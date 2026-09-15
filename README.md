# Azure Certification Practice

A practice quiz app for Azure certification exams: **Azure AI App and
Agent Developer Associate (AI-103)**, **Azure Administrator Associate
(AZ-104)**, and a starter set for **Azure Fundamentals (AZ-900)**.

## Features

- **Practice mode** — instant per-question feedback with explanations.
- **Exam simulation mode** — timed, no feedback until you finish.
- Single- and multi-answer questions, with the exam's own artwork for
  HOTSPOT/drag-and-drop questions: the answer area is shown with the
  question, and the source's answer key only after you check your answer.
- Questions run in the exam's own order by default (so case-study
  follow-ups stay together), starting wherever you like in the bank —
  or shuffled, if you prefer.
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

- **Azure AI App and Agent Developer Associate (AI-103)**: all 135
  source questions, numbered and ordered exactly as the source, converted
  from a community exam-question archive (ExamTopics) and re-explained
  against real Azure/Microsoft Foundry product behavior. HOTSPOT and
  drag-and-drop questions keep the exam's artwork (see `public/exam-images/`)
  and present their dropdowns/targets as one grouped multi-select, so each
  source question stays a single question. Two questions (`ai103-86` and
  `ai103-112`) had no answer key at all in the source, so their answers are
  reasoned rather than sourced; their explanations say so. One
  (`ai103-133`) is graded against documented Azure behavior rather than the
  source's key, which is wrong — its explanation calls that out.
  **Note:** this content is sourced from leaked/community exam dumps,
  which typically violates the Microsoft certification agreement's
  content-sharing terms — keep this private and don't redistribute it.
- **Azure Administrator Associate (AZ-104)**: 299 questions, same
  treatment as AI-103 above (also from ExamTopics, same content-sharing
  caveat applies). The source's full bank has 606 questions; roughly
  half are excluded here because they were unanswerable as extracted —
  213 HOTSPOT/drag-and-drop questions whose answer key only ever existed
  as an image not present in this source, plus 93 more whose prompt
  depends on a table/exhibit the source export dropped entirely. Both
  were left out rather than guessed at.
- **Azure Fundamentals (AZ-900)**: a small starter set (6 questions),
  enough to exercise every feature — expand before relying on it for
  real exam prep.

## Tech stack

Next.js (App Router) + React + TypeScript + Tailwind CSS. No backend —
state lives in the browser for the duration of a session, with attempt
history persisted to `localStorage`.

---

Not affiliated with or endorsed by Microsoft. For personal study use only.
