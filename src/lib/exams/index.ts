import type { Exam } from "./types";
import { azureAiAppAgentAssociate } from "./data/azure-ai-app-agent-associate";
import { az104 } from "./data/az-104";
import { az900 } from "./data/az-900";

const registry: Exam[] = [azureAiAppAgentAssociate, az104, az900];

export function getExams(): Exam[] {
  return registry;
}

export function getExam(slug: string): Exam | undefined {
  return registry.find((exam) => exam.slug === slug);
}
