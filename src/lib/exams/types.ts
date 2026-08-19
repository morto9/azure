export type QuestionType = "single" | "multi";

export interface Choice {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  choices: Choice[];
  /** IDs of the correct choice(s). Multi-answer questions have more than one. */
  correctChoiceIds: string[];
  explanation: string;
  /** Optional exam objective / skill area this question maps to, for topic breakdowns. */
  topic?: string;
}

export interface Exam {
  slug: string;
  title: string;
  /** Short vendor/exam code shown as a badge, e.g. "AI-102" or "AZ-900". */
  code: string;
  description: string;
  questions: Question[];
}
