export type QuestionType = "single" | "multi";

export interface Choice {
  id: string;
  text: string;
}

/** A static image under `public/`, with its intrinsic size for `next/image`. */
export interface QuestionImage {
  src: string;
  width: number;
  height: number;
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
  /**
   * Exhibits shown with the question — e.g. the exam's "Answer Area" with its
   * dropdowns, or a table the question refers to.
   */
  images?: QuestionImage[];
  /** The source's answer key, revealed only once the answer has been checked. */
  answerImage?: QuestionImage;
  /**
   * Set when the choices are grouped or sequential (e.g. one option per
   * dropdown, or ordered steps) and so must stay in their authored order.
   */
  keepChoiceOrder?: boolean;
}

export interface Exam {
  slug: string;
  title: string;
  /** Short vendor/exam code shown as a badge, e.g. "AI-102" or "AZ-900". */
  code: string;
  description: string;
  questions: Question[];
}
