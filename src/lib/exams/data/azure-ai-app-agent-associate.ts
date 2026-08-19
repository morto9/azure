import type { Exam } from "../types";

/**
 * Seed content only. This is a small starter set covering major skill areas
 * of the exam so the quiz engine can be exercised end to end — expand this
 * array with real bank questions before relying on it for serious study.
 */
export const azureAiAppAgentAssociate: Exam = {
  slug: "azure-ai-app-agent-associate",
  title: "Azure AI App and Agent Developer Associate",
  code: "AI-102",
  description:
    "Design and implement Azure AI solutions using Azure AI Foundry, Azure OpenAI, and Azure AI services — including agents, language, vision, speech, document intelligence, and responsible AI controls.",
  questions: [
    {
      id: "aiaa-1",
      type: "single",
      topic: "Azure AI Foundry & Agents",
      prompt:
        "You are building an agent in Azure AI Foundry that needs to call an external weather API while answering user questions. Which feature should you configure on the agent to enable this?",
      choices: [
        { id: "a", text: "A custom function tool (function calling)" },
        { id: "b", text: "A fine-tuned model deployment" },
        { id: "c", text: "Content filtering thresholds" },
        { id: "d", text: "A system message with the API documentation pasted in" },
      ],
      correctChoiceIds: ["a"],
      explanation:
        "Agents call out to external systems through tools. Defining a function tool (function calling) lets the model decide when to invoke your weather API and pass it structured arguments, rather than relying on the model to 'know' the answer from a prompt.",
    },
    {
      id: "aiaa-2",
      type: "single",
      topic: "Azure OpenAI",
      prompt:
        "You need to reduce the chance that an Azure OpenAI chat model invents facts not present in your company's internal documents. Which approach directly addresses this?",
      choices: [
        { id: "a", text: "Increase the temperature parameter" },
        { id: "b", text: "Implement retrieval-augmented generation (RAG) with your document index" },
        { id: "c", text: "Increase max_tokens" },
        { id: "d", text: "Switch to a larger context window model only" },
      ],
      correctChoiceIds: ["b"],
      explanation:
        "RAG grounds model responses in retrieved, authoritative content (e.g. via Azure AI Search) instead of relying purely on parametric knowledge, which is the standard mitigation for hallucination on domain-specific facts.",
    },
    {
      id: "aiaa-3",
      type: "multi",
      topic: "Responsible AI",
      prompt:
        "Which of the following are capabilities of Azure AI Content Safety? (Select all that apply.)",
      choices: [
        { id: "a", text: "Detecting hate, violence, sexual, and self-harm content in text" },
        { id: "b", text: "Detecting jailbreak / prompt injection attempts" },
        { id: "c", text: "Automatically fine-tuning a model on your data" },
        { id: "d", text: "Moderating image content for harmful categories" },
      ],
      correctChoiceIds: ["a", "b", "d"],
      explanation:
        "Azure AI Content Safety provides text and image moderation across harm categories, plus prompt shields to detect jailbreak and indirect prompt injection attacks. Fine-tuning is unrelated — that's part of Azure OpenAI / Azure AI Foundry model customization.",
    },
    {
      id: "aiaa-4",
      type: "single",
      topic: "Azure AI Vision",
      prompt:
        "Which Azure AI service should you use to extract printed and handwritten text from scanned images at scale?",
      choices: [
        { id: "a", text: "Azure AI Vision — Read/OCR" },
        { id: "b", text: "Azure AI Language — Key phrase extraction" },
        { id: "c", text: "Azure AI Speech — Speech to text" },
        { id: "d", text: "Azure AI Content Safety" },
      ],
      correctChoiceIds: ["a"],
      explanation:
        "The Read (OCR) capability of Azure AI Vision is designed to extract printed and handwritten text from images and documents, including at scale via async batch operations.",
    },
    {
      id: "aiaa-5",
      type: "single",
      topic: "Azure AI Document Intelligence",
      prompt:
        "You need to extract structured field data (vendor name, total, line items) from invoices in many different layouts. Which is the best starting point?",
      choices: [
        { id: "a", text: "A custom neural document model trained on your labeled invoices" },
        { id: "b", text: "The prebuilt invoice model in Azure AI Document Intelligence" },
        { id: "c", text: "Azure AI Vision Read API only" },
        { id: "d", text: "Azure AI Language custom text classification" },
      ],
      correctChoiceIds: ["b"],
      explanation:
        "Azure AI Document Intelligence ships a prebuilt invoice model already trained to recognize common invoice fields across varied layouts, which is a far faster starting point than training a custom model from scratch.",
    },
    {
      id: "aiaa-6",
      type: "single",
      topic: "Security & Governance",
      prompt:
        "Your organization requires that calls from your app to Azure OpenAI never traverse the public internet. Which combination of features should you implement?",
      choices: [
        { id: "a", text: "API key rotation only" },
        { id: "b", text: "Private endpoints with a virtual network, and disable public network access on the resource" },
        { id: "c", text: "Content filtering policies" },
        { id: "d", text: "A higher pricing tier" },
      ],
      correctChoiceIds: ["b"],
      explanation:
        "Private Link/private endpoints bring the Azure OpenAI resource's traffic onto your virtual network, and disabling public network access ensures the resource can't be reached over the public internet at all.",
    },
    {
      id: "aiaa-7",
      type: "single",
      topic: "Azure AI Language",
      prompt:
        "Which Azure AI Language feature would you use to identify people, locations, and organizations mentioned in free-text customer support tickets?",
      choices: [
        { id: "a", text: "Named Entity Recognition (NER)" },
        { id: "b", text: "Sentiment analysis" },
        { id: "c", text: "Language detection" },
        { id: "d", text: "Text summarization" },
      ],
      correctChoiceIds: ["a"],
      explanation:
        "Named Entity Recognition identifies and categorizes entities such as people, locations, organizations, and dates within unstructured text.",
    },
    {
      id: "aiaa-8",
      type: "single",
      topic: "Azure AI Foundry & Agents",
      prompt:
        "In Azure AI Foundry, what is the primary purpose of the tracing/observability tooling when developing an agent?",
      choices: [
        { id: "a", text: "To inspect each step of an agent's run — tool calls, retrieved context, and model responses — for debugging and evaluation" },
        { id: "b", text: "To automatically translate the agent's responses into other languages" },
        { id: "c", text: "To encrypt data at rest for the underlying storage account" },
        { id: "d", text: "To provision compute quota for model deployments" },
      ],
      correctChoiceIds: ["a"],
      explanation:
        "Tracing lets developers see the full execution path of an agent run — which tools were invoked, what context was retrieved, and what the model produced at each step — which is essential for debugging and evaluating agent behavior.",
    },
  ],
};
