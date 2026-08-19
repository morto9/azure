import type { Exam } from "../types";

/**
 * Seed content only — a small starter set demonstrating that the engine
 * supports more than one exam track. Expand before relying on it for study.
 */
export const az900: Exam = {
  slug: "az-900",
  title: "Azure Fundamentals",
  code: "AZ-900",
  description:
    "Foundational knowledge of cloud concepts and core Azure services, workloads, security, privacy, pricing, and support.",
  questions: [
    {
      id: "az900-1",
      type: "single",
      topic: "Cloud Concepts",
      prompt: "Which cloud service model gives you the most control over the underlying operating system?",
      choices: [
        { id: "a", text: "Software as a Service (SaaS)" },
        { id: "b", text: "Platform as a Service (PaaS)" },
        { id: "c", text: "Infrastructure as a Service (IaaS)" },
        { id: "d", text: "Function as a Service (FaaS)" },
      ],
      correctChoiceIds: ["c"],
      explanation:
        "IaaS provides virtualized compute resources, including the OS, giving the customer the most control compared to PaaS or SaaS, which abstract more of the stack away.",
    },
    {
      id: "az900-2",
      type: "single",
      topic: "Core Azure Services",
      prompt: "Which Azure service is used to logically group related resources for management, billing, and access control?",
      choices: [
        { id: "a", text: "Resource group" },
        { id: "b", text: "Availability zone" },
        { id: "c", text: "Azure Policy" },
        { id: "d", text: "Management certificate" },
      ],
      correctChoiceIds: ["a"],
      explanation:
        "A resource group is a container that holds related resources for an Azure solution, used for lifecycle management, access control, and billing grouping.",
    },
    {
      id: "az900-3",
      type: "multi",
      topic: "Cloud Concepts",
      prompt: "Which of the following are benefits commonly associated with cloud computing? (Select all that apply.)",
      choices: [
        { id: "a", text: "Elastic scalability" },
        { id: "b", text: "Pay-as-you-go pricing" },
        { id: "c", text: "Guaranteed zero cost for compute" },
        { id: "d", text: "Global reach / regional deployment" },
      ],
      correctChoiceIds: ["a", "b", "d"],
      explanation:
        "Cloud computing is commonly associated with elasticity, consumption-based pricing, and the ability to deploy globally across regions. It does not eliminate cost — you pay for what you provision and use.",
    },
    {
      id: "az900-4",
      type: "single",
      topic: "Security, Privacy & Compliance",
      prompt: "Which Azure feature provides a centralized way to enforce organizational rules on which resource types and configurations can be deployed?",
      choices: [
        { id: "a", text: "Azure Policy" },
        { id: "b", text: "Azure Monitor" },
        { id: "c", text: "Azure Advisor" },
        { id: "d", text: "Azure Service Health" },
      ],
      correctChoiceIds: ["a"],
      explanation:
        "Azure Policy evaluates resources against defined rules and can deny, audit, or modify non-compliant resources, enforcing organizational standards.",
    },
    {
      id: "az900-5",
      type: "single",
      topic: "Pricing & Support",
      prompt: "Which Azure tool helps you estimate the monthly cost of a proposed set of Azure resources before deploying them?",
      choices: [
        { id: "a", text: "Azure Pricing Calculator" },
        { id: "b", text: "Azure Cost Management + Billing" },
        { id: "c", text: "Azure Service Health" },
        { id: "d", text: "Azure Advisor" },
      ],
      correctChoiceIds: ["a"],
      explanation:
        "The Azure Pricing Calculator lets you configure resources and see an estimated cost before you deploy anything, whereas Cost Management + Billing tracks actual spend after deployment.",
    },
    {
      id: "az900-6",
      type: "single",
      topic: "Core Azure Services",
      prompt: "What is the primary purpose of an Azure Availability Zone?",
      choices: [
        { id: "a", text: "To provide physically separate datacenters within a region for high availability" },
        { id: "b", text: "To group billing across subscriptions" },
        { id: "c", text: "To restrict which users can sign in to the Azure portal" },
        { id: "d", text: "To provide a content delivery network" },
      ],
      correctChoiceIds: ["a"],
      explanation:
        "Availability zones are physically separate locations within an Azure region, each with independent power, cooling, and networking, used to protect applications from datacenter-level failures.",
    },
  ],
};
