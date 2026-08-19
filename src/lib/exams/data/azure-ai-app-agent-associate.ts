import type { Exam } from "../types";

/**
 * Sourced from a community exam-question archive (ExamTopics) for personal
 * study use, cross-checked and re-explained against real Azure / Microsoft
 * Foundry product behavior. HOTSPOT and drag-and-drop source questions were
 * converted into this app's single/multi-select format, which sometimes
 * splits one source question into several entries (ids like "ai103-6-a").
 */
export const azureAiAppAgentAssociate: Exam = {
  slug: "azure-ai-app-agent-associate",
  title: "Azure AI App and Agent Developer Associate",
  code: "AI-103",
  description:
    "Design and implement Azure AI solutions using Microsoft Foundry, Azure OpenAI, and Azure AI services — including agents, language, vision, speech, document intelligence, and responsible AI controls.",
  questions: [
  {
    "id": "ai103-1-a",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that builds, deploys, and manages generative AI and agent-based solutions using Microsoft Foundry, and uses Microsoft Entra ID for identity, authentication, and authorization. Two teams are involved: Agent1Dev Team (optimizes and maintains AI solutions) and Agent1Test Team (validates solutions before deployment). The Foundry deployment has two projects: Project1 hosts a customer-support agent, Agent1, which uses a base model deployment, has no safety evaluation pipeline, no tool-invocation approval workflow, and no conversation memory configured, and runs in an EU region; Project2 hosts an in-progress video generation model for the marketing department. Product data lives in Blob Storage account storage1 as PDF product sheets (specs, features, support info). Known problems: Agent1 only has general product knowledge and doesn't use the storage1 product sheets; a recent chat's sentiment analysis hasn't been processed yet; and finance must manually reconcile vendor invoices (which have tables, logos, and varied layouts) against contract terms. Planned changes: add an invoice-processing solution that evaluates both layout and text; standardize/update Agent1's base model version for consistency; let Agent1 retrieve product-sheet details via a new indexing pipeline supporting semantic and vector search; and finish the video creation solution. Technical requirements: Agent1's model deployment must scale dynamically for variable traffic without reserved throughput; indexing must support semantic/vector search; responses must be relevant, complete, and accurate; the model version must stay consistent; and data must stay in the EU. Security/compliance requirements: no API keys for Foundry model access; least-privilege access; Entra ID authentication for developers; Project1 access assigned via security groups SC_Agent1_Dev and SC_Agent1_Test; Agent1 must never leak customer data even if such data is accidentally added to storage1; and Agent1 must be protected against malicious instructions hidden in images within product sheets. Business requirements: Agent1 must retain conversation context/memory across interactions for a personalized experience, and must only answer questions about Contoso's own products.\n\nYou need to configure the model deployment for Agent1 to meet the technical requirements. Which deployment type should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Standard"
      },
      {
        "id": "b",
        "text": "Global Standard"
      },
      {
        "id": "c",
        "text": "Global Provisioned"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The requirement that data processed by the model stay within the EU rules out the Global offerings, which route requests across regions. A regional Standard deployment keeps processing tied to the EU region while still billing pay-as-you-go without reserved capacity."
  },
  {
    "id": "ai103-1-b",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that builds, deploys, and manages generative AI and agent-based solutions using Microsoft Foundry, and uses Microsoft Entra ID for identity, authentication, and authorization. Two teams are involved: Agent1Dev Team (optimizes and maintains AI solutions) and Agent1Test Team (validates solutions before deployment). The Foundry deployment has two projects: Project1 hosts a customer-support agent, Agent1, which uses a base model deployment, has no safety evaluation pipeline, no tool-invocation approval workflow, and no conversation memory configured, and runs in an EU region; Project2 hosts an in-progress video generation model for the marketing department. Product data lives in Blob Storage account storage1 as PDF product sheets (specs, features, support info). Known problems: Agent1 only has general product knowledge and doesn't use the storage1 product sheets; a recent chat's sentiment analysis hasn't been processed yet; and finance must manually reconcile vendor invoices (which have tables, logos, and varied layouts) against contract terms. Planned changes: add an invoice-processing solution that evaluates both layout and text; standardize/update Agent1's base model version for consistency; let Agent1 retrieve product-sheet details via a new indexing pipeline supporting semantic and vector search; and finish the video creation solution. Technical requirements: Agent1's model deployment must scale dynamically for variable traffic without reserved throughput; indexing must support semantic/vector search; responses must be relevant, complete, and accurate; the model version must stay consistent; and data must stay in the EU. Security/compliance requirements: no API keys for Foundry model access; least-privilege access; Entra ID authentication for developers; Project1 access assigned via security groups SC_Agent1_Dev and SC_Agent1_Test; Agent1 must never leak customer data even if such data is accidentally added to storage1; and Agent1 must be protected against malicious instructions hidden in images within product sheets. Business requirements: Agent1 must retain conversation context/memory across interactions for a personalized experience, and must only answer questions about Contoso's own products.\n\nYou need to configure the model deployment for Agent1 to meet the technical requirements. Which version update policy should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Once the current version expires"
      },
      {
        "id": "b",
        "text": "Opt out of automatic model version upgrades"
      },
      {
        "id": "c",
        "text": "Upgrade once a new default version becomes available"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Agent1's model version must remain consistent to guarantee stable responses, so automatic version upgrades must be disabled. Opting out prevents Microsoft from silently moving the deployment to a new default or retiring version on its own schedule."
  },
  {
    "id": "ai103-2",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that\nbuilds, deploys, and manages generative AI and agent-based solutions using\nMicrosoft Foundry, and uses Microsoft Entra ID for identity, authentication,\nand authorization. Two teams are involved: Agent1Dev Team (optimizes and\nmaintains AI solutions) and Agent1Test Team (validates solutions before\ndeployment). The Foundry deployment has two projects: Project1 hosts a\ncustomer-support agent, Agent1, which uses a base model deployment, has no\nsafety evaluation pipeline, no tool-invocation approval workflow, and no\nconversation memory configured, and runs in an EU region; Project2 hosts an\nin-progress video generation model for the marketing department. Product\ndata lives in Blob Storage account storage1 as PDF product sheets (specs,\nfeatures, support info). Known problems: Agent1 only has general product\nknowledge and doesn't use the storage1 product sheets; a recent chat's\nsentiment analysis hasn't been processed yet; and finance must manually\nreconcile vendor invoices (which have tables, logos, and varied layouts)\nagainst contract terms. Planned changes: add an invoice-processing solution\nthat evaluates both layout and text; standardize/update Agent1's base model\nversion for consistency; let Agent1 retrieve product-sheet details via a\nnew indexing pipeline supporting semantic and vector search; and finish the\nvideo creation solution. Technical requirements: Agent1's model deployment\nmust scale dynamically for variable traffic without reserved throughput;\nindexing must support semantic/vector search; responses must be relevant,\ncomplete, and accurate; the model version must stay consistent; and data\nmust stay in the EU. Security/compliance requirements: no API keys for\nFoundry model access; least-privilege access; Entra ID authentication for\ndevelopers; Project1 access assigned via security groups SC_Agent1_Dev and\nSC_Agent1_Test; Agent1 must never leak customer data even if such data is\naccidentally added to storage1; and Agent1 must be protected against\nmalicious instructions hidden in images within product sheets. Business\nrequirements: Agent1 must retain conversation context/memory across\ninteractions for a personalized experience, and must only answer questions\nabout Contoso's own products.\n\nYou need to configure Agent1 to meet the security and compliance requirements.\n\nWhat should you use?",
    "choices": [
      {
        "id": "a",
        "text": "self-harm content filtering"
      },
      {
        "id": "b",
        "text": "prompt shields"
      },
      {
        "id": "c",
        "text": "Personally identifiable information (PII) Detection"
      },
      {
        "id": "d",
        "text": "violence content filtering"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure AI Content Safety's PII detection capability identifies (and can redact) personal or customer data in agent inputs and outputs, which directly satisfies the \"Agent1 must never reveal customer information\" requirement. Prompt Shields instead protects against injected instructions, and the self-harm/violence filters target unrelated harmful-content categories, not data leakage."
  },
  {
    "id": "ai103-3",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You are planning a Microsoft Foundry project named Project1 that will contain multiple agents. Each agent will access the same Azure AI Search resource.\n\nYou need to recommend a solution to centrally manage the Azure AI Search credentials within Project1. The solution must be implemented across all the agents.\n\nWhat should you recommend?",
    "choices": [
      {
        "id": "a",
        "text": "Enable role-based access control (RBAC) for the Azure AI Search resource."
      },
      {
        "id": "b",
        "text": "Disable key-based access control on the Azure AI Search resource."
      },
      {
        "id": "c",
        "text": "Add a connection to the Azure AI Search resource."
      },
      {
        "id": "d",
        "text": "Create a managed private endpoint that connects to the Azure AI Search resource."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A Foundry project connection stores the Azure AI Search endpoint and credentials once, and every agent in the project references that shared connection, giving centralized credential management with no per-agent duplication. RBAC and disabling key auth are good hardening steps but don't centralize the reference itself, and a private endpoint only addresses network isolation."
  },
  {
    "id": "ai103-4",
    "type": "multi",
    "topic": "Observability & Evaluation",
    "prompt": "Your company is piloting a customer support agent in a Microsoft Foundry project named Project1. Project1 is connected to an existing Application Insights resource, and the company's support team reviews runs in the Traces tab.\n\nThe Foundry Agent Service is configured to: retrieve the Application Insights connection string via project_client.telemetry.get_application_insights_connection_string(), and call configure_azure_monitor(connection_string=...) to enable telemetry.\n\nA separate LangChain service is configured to use OpenTelemetry: it uses AzureAIOpenTelemetryTracer(connection_string=..., enable_content_recording=False), and passes the tracer via config={\"callbacks\":[azure_tracer]}.\n\nCompany policy requires: telemetry from LangChain and OpenTelemetry must be distinguishable within the same Application Insights resource; secrets and credentials must NOT be stored in prompts, tool arguments, or span attributes.\n\nFor each statement, select whether it is true.",
    "choices": [
      {
        "id": "a",
        "text": "The LangChain service will appear in Traces without configuring a tracer."
      },
      {
        "id": "b",
        "text": "Setting different OTEL_SERVICE_NAME values separates the services in Application Insights."
      },
      {
        "id": "c",
        "text": "When using enable_content_recording=False, prompts and tool data will be captured in the telemetry."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Configuring Azure Monitor telemetry for the Foundry Agent Service does not automatically instrument a separate LangChain process, so it needs its own tracer to appear in Traces. Distinct OTEL_SERVICE_NAME values populate cloud_RoleName, letting you filter each service's telemetry in the same Application Insights resource, while enable_content_recording=False redacts message content and tool arguments rather than capturing them."
  },
  {
    "id": "ai103-5-a",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a Microsoft Foundry project that processes procurement documents submitted by suppliers. You need to implement two pipelines by using Azure Content Understanding in Foundry Tools: Pipeline1 must support cost-effective, high-volume processing of standalone PDF invoices, and Pipeline2 must support cross-document validation using multi-step reasoning and reference data. How should you configure Pipeline1?",
    "choices": [
      {
        "id": "a",
        "text": "Multi-file task in pro mode"
      },
      {
        "id": "b",
        "text": "Multi-file task in standard mode"
      },
      {
        "id": "c",
        "text": "Single-file task in pro mode"
      },
      {
        "id": "d",
        "text": "Single-file task in standard mode"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Standard mode is built for extracting structured data from individual documents without cross-file analysis, making single-file standard mode the cost-effective, high-volume choice for standalone invoices."
  },
  {
    "id": "ai103-5-b",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a Microsoft Foundry project that processes procurement documents submitted by suppliers. You need to implement two pipelines by using Azure Content Understanding in Foundry Tools: Pipeline1 must support cost-effective, high-volume processing of standalone PDF invoices, and Pipeline2 must support cross-document validation using multi-step reasoning and reference data. How should you configure Pipeline2?",
    "choices": [
      {
        "id": "a",
        "text": "Multi-file task in pro mode"
      },
      {
        "id": "b",
        "text": "Multi-file task in standard mode"
      },
      {
        "id": "c",
        "text": "Single-file task in pro mode"
      },
      {
        "id": "d",
        "text": "Single-file task in standard mode"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Pro mode is designed for advanced scenarios that need multi-step reasoning and cross-file analysis, including validating documents against reference data — exactly what cross-document validation with multiple input files requires."
  },
  {
    "id": "ai103-6-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Python application named App1 that integrates with a Microsoft Foundry project named Project1. App1 must authenticate by using a Microsoft Entra managed identity and send prompts to a deployed model by using the Azure OpenAI Responses API.\n\n```python\nfrom azure.identity import DefaultAzureCredential\nfrom azure.ai.projects import AIProjectClient\n\ncredential = ____()\n\nproject_client = AIProjectClient(\n    endpoint=\"https://contosoai.services.ai.azure.com/api/projects/project1\",\n    credential=credential,\n)\n```\n\nWhich value completes the credential assignment?",
    "choices": [
      {
        "id": "a",
        "text": "AzureKeyCredential"
      },
      {
        "id": "b",
        "text": "ClientSecretCredential"
      },
      {
        "id": "c",
        "text": "DefaultAzureCredential"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A managed identity is consumed through DefaultAzureCredential, which automatically discovers and uses the identity assigned to the compute the app runs on. AzureKeyCredential requires an API key and ClientSecretCredential requires an explicit service-principal client secret, neither of which is a managed identity."
  },
  {
    "id": "ai103-6-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Python application named App1 that integrates with a Microsoft Foundry project named Project1. App1 must authenticate by using a Microsoft Entra managed identity (credential = DefaultAzureCredential()) and send prompts to a deployed model by using the Azure OpenAI Responses API.\n\n```python\nwith project_client.get_openai_client() as openai_client:\n    response = openai_client.responses.____(\n        model=\"trail-guide-chat\",\n        input=\"Create a 3-day hiking itinerary near Seattle.\",\n    )\n    print(response.output_text)\n```\n\nWhich method completes the call to send the prompt?",
    "choices": [
      {
        "id": "a",
        "text": "compact"
      },
      {
        "id": "b",
        "text": "create"
      },
      {
        "id": "c",
        "text": "retrieve"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Responses API sends a new prompt to the model with responses.create(); retrieve() fetches an existing response by ID and compact() is not a send operation."
  },
  {
    "id": "ai103-7-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains a workflow for a customer support triage process, with an Ask a question node that stores user responses in a local variable named Var01. You need a Power Fx if/else condition expression that ensures Var01 contains a value. Which expression should you use?",
    "choices": [
      {
        "id": "a",
        "text": "IsBlank(Local.Var01)"
      },
      {
        "id": "b",
        "text": "IsEmpty(Local.Var01)"
      },
      {
        "id": "c",
        "text": "Not(IsBlank(Local.Var01))"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "IsBlank() tests whether a variable is null or blank, so wrapping it in Not() gives a condition that is true only when Var01 actually contains a value. IsEmpty() checks whether a table or collection has no records, which doesn't apply to a scalar variable like Var01."
  },
  {
    "id": "ai103-7-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains a workflow for a customer support triage process, with an Ask a question node that stores user responses in a local variable named Var01. You need a Power Fx Send message expression that returns the stored user response in uppercase. Which expression should you use?",
    "choices": [
      {
        "id": "a",
        "text": "{Local.Var01}"
      },
      {
        "id": "b",
        "text": "{Upper(Local.Var01)}"
      },
      {
        "id": "c",
        "text": "{Upper(Var01)}"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Upper() converts text to uppercase, and Local.Var01 is the correct scoped reference to the workflow's local variable, so {Upper(Local.Var01)} returns the stored response in uppercase."
  },
  {
    "id": "ai103-8-a",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have a Microsoft Foundry project that contains a customer support agent built with the Foundry Agent Service. The agent uploads user-provided screenshots to Azure Storage through a ticketing tool and receives a blob URL for additional reasoning. You need to use image moderation during agent runs and prevent harmful content from being returned during runs. How should you configure the Content Safety guardrails?",
    "choices": [
      {
        "id": "a",
        "text": "Select Tool call and set Action to Block."
      },
      {
        "id": "b",
        "text": "Select User input and Output and set Action to Annotate."
      },
      {
        "id": "c",
        "text": "Select User input and Tool response and set Action to Annotate."
      },
      {
        "id": "d",
        "text": "Select User input, Output, Tool response, and Tool call and set Action to Block."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Preventing harmful content requires the Block action, since Annotate only labels content without stopping it. Covering only the tool call would leave harmful content in the user's input, the tool's response, or the agent's final output unguarded, so all four intervention points must be included."
  },
  {
    "id": "ai103-8-b",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have a Microsoft Foundry project that contains a customer support agent built with the Foundry Agent Service. The agent uploads user-provided screenshots to Azure Storage through a ticketing tool and receives a blob URL for additional reasoning. Azure AI Content Safety must access the images by using the blob URL, and the solution must follow the principle of least privilege. What storage access should you configure for Content Safety?",
    "choices": [
      {
        "id": "a",
        "text": "Storage account access keys"
      },
      {
        "id": "b",
        "text": "A user-assigned identity that is assigned the Storage Queue Data Contributor role"
      },
      {
        "id": "c",
        "text": "A system-assigned managed identity that is assigned the Storage Blob Data Reader role"
      },
      {
        "id": "d",
        "text": "A system-assigned managed identity that is assigned the Storage Blob Data Contributor role"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Content Safety only needs to read the screenshot blobs to moderate them, so a system-assigned managed identity with Storage Blob Data Reader satisfies least privilege. Contributor grants unnecessary write and delete permissions, access keys bypass Entra identity entirely, and Queue Data Contributor is the wrong resource type."
  },
  {
    "id": "ai103-9",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains three agents.\n\nYou need to orchestrate the agents to ensure that the customer requests meet the following requirements:\n- Support a deterministic, step-based process that uses conditional branching and shared state across the agents.\n- Optionally trigger a ticket action based on the triage result.\n- The solution must minimize development effort.\n\nWhat should you include in the solution?",
    "choices": [
      {
        "id": "a",
        "text": "a workflow"
      },
      {
        "id": "b",
        "text": "threads and runs without a workflow"
      },
      {
        "id": "c",
        "text": "a multi-agent group chat session"
      },
      {
        "id": "d",
        "text": "separate agent runs coordinated in the application code"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Microsoft Foundry Agent Service workflows provide deterministic, step-based orchestration with conditional branching and shared state across agents, plus optional follow-on actions, all with a declarative low-effort authoring model. Threads/runs or custom application code require you to build that branching and state logic yourself, and a group-chat pattern is non-deterministic conversational collaboration."
  },
  {
    "id": "ai103-10",
    "type": "single",
    "topic": "Azure AI Speech",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent uses Azure Speech in Foundry Tools.\n\nYou fine-tune a baseline speech to text model for the en-us locale and publish the model.\n\nThe agent calls the Speech to text REST API and returns an error message indicating that the project ID is invalid.\n\nYou need to set the project property to the correct ID.\n\nTo what should you set the project property?",
    "choices": [
      {
        "id": "a",
        "text": "the project URL"
      },
      {
        "id": "b",
        "text": "the custom speech project ID"
      },
      {
        "id": "c",
        "text": "the project ID"
      },
      {
        "id": "d",
        "text": "the custom speech endpoint URL"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "When calling the Speech-to-Text REST API against a fine-tuned Custom Speech model, the `project` property must be set to the GUID of the Custom Speech project that owns the model, not the generic Foundry project ID or a URL. There are effectively two \"projects\" in play (the Foundry project and the Custom Speech project), and the API expects the latter."
  },
  {
    "id": "ai103-11-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent named PaymentAgent, which includes a function tool that issues customer refunds through an external API. You are creating a workflow in YAML and need the workflow to pause for human approval before continuing with the refund step.\n\n```yaml\nsteps:\n  - id: propose_refund\n    type: agent\n    agent: PaymentAgent\n  - id: approval\n    type: ____\n  - id: execute_refund\n    type: agent\n    agent: PaymentAgent\n    condition: ____\n```\n\nWhich step type should the approval step use?",
    "choices": [
      {
        "id": "a",
        "text": "ask_question"
      },
      {
        "id": "b",
        "text": "basic_chat"
      },
      {
        "id": "c",
        "text": "data_transformation"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "An ask_question step pauses the workflow to collect an explicit response — here, a human approver's decision — before execution continues, which is exactly the human-in-the-loop pause the scenario requires."
  },
  {
    "id": "ai103-11-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent named PaymentAgent, which includes a function tool that issues customer refunds through an external API. You are creating a workflow in YAML and need the workflow to continue with the refund step only after approval is granted.\n\n```yaml\nsteps:\n  - id: propose_refund\n    type: agent\n    agent: PaymentAgent\n  - id: approval\n    type: ask_question\n  - id: execute_refund\n    type: agent\n    agent: PaymentAgent\n    condition: ____\n```\n\nWhich condition should gate the execute_refund step?",
    "choices": [
      {
        "id": "a",
        "text": "approval == \"approved\""
      },
      {
        "id": "b",
        "text": "propose_refund.output != null"
      },
      {
        "id": "c",
        "text": "true"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The refund step must run only after the human explicitly grants approval, so the condition needs to check the approval step's captured response against \"approved\" rather than just checking that a prior step produced output."
  },
  {
    "id": "ai103-12",
    "type": "single",
    "topic": "Azure AI Speech",
    "prompt": "You have an Azure Speech in Foundry Tools resource that hosts a custom speech to text model deployed to a custom endpoint. An agent uses the endpoint to perform real-time speech recognition.\n\nYou are approaching the expiration date of the custom speech to text model.\n\nWhat is the expected behavior when the model expires?",
    "choices": [
      {
        "id": "a",
        "text": "Speech recognition requests will return a 4xx error until a new custom model is deployed."
      },
      {
        "id": "b",
        "text": "Speech recognition requests will continue to use the expired custom model until the model is removed manually."
      },
      {
        "id": "c",
        "text": "Speech recognition requests will fall back to the most recent base model for the same locale."
      },
      {
        "id": "d",
        "text": "The custom model will be deleted automatically when the model expires."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Per the documented Custom Speech model and endpoint lifecycle, when a deployed custom model passes its expiration date the endpoint keeps serving requests by automatically falling back to the latest base model for that locale, rather than erroring out, silently continuing to use the expired model, or auto-deleting it."
  },
  {
    "id": "ai103-13",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a Microsoft Foundry project that contains a model deployment.\n\nYou have an application that calls the deployment by using the Azure OpenAI v1 API and DefaultAzureCredential.\n\nThe developers at your company receive HTTP 403 errors when they send inference requests, even after running az login.\n\nYou need to ensure that the developers can perform model inference. The solution must follow the principle of least privilege.\n\nWhich role-based access control (RBAC) role should you assign to the developers?",
    "choices": [
      {
        "id": "a",
        "text": "Cognitive Services User"
      },
      {
        "id": "b",
        "text": "Cognitive Services OpenAI User"
      },
      {
        "id": "c",
        "text": "Contributor"
      },
      {
        "id": "d",
        "text": "Cognitive Services Data Reader"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Cognitive Services OpenAI User grants the data-plane permission needed to call inference (chat/completions) endpoints on an Azure OpenAI/Foundry deployment, which is the minimum role that resolves a 403 despite successful Entra authentication. Cognitive Services User covers non-OpenAI cognitive services, Contributor is an over-privileged control-plane role, and Data Reader doesn't grant inference rights."
  },
  {
    "id": "ai103-14",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol (MCP) tool that queries a knowledge base stored in Azure AI Search.\n\nSome agent runs return answers from the base model without invoking the knowledge base, which results in responses without grounded citations.\n\nYou are provided with a code snippet that runs the agent.\n\nYou need to add the correct tool_choice parameter to the code to deterministically force the agent to invoke the MCP tool on each run.\n\nWhat should you add?",
    "choices": [
      {
        "id": "a",
        "text": "tool_choice={“required”}"
      },
      {
        "id": "b",
        "text": "tool_choice={“auto”}"
      },
      {
        "id": "c",
        "text": "tool_choice={“type”:“knowledge_base”}"
      },
      {
        "id": "d",
        "text": "tool_choice ={“type”:“mcp”}"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Since the agent has only one registered tool (the MCP knowledge-base tool), setting tool_choice to \"required\" forces the model to call a tool on every run instead of answering directly from parametric knowledge, which guarantees the MCP tool is invoked and citations are grounded. \"auto\" leaves the decision to the model (the current bug), and the other listed values aren't valid tool_choice targets for this scenario."
  },
  {
    "id": "ai103-15-a",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a customer support agent grounded in internal documentation. After a recent update, users report that some answers are unsupported by retrieved documents. Which observability signal should you use to evaluate this issue?",
    "choices": [
      {
        "id": "a",
        "text": "Groundedness evaluation metrics"
      },
      {
        "id": "b",
        "text": "Latency breakdown traces"
      },
      {
        "id": "c",
        "text": "Risk and safety metrics"
      },
      {
        "id": "d",
        "text": "Token usage analytics"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Answers that aren't supported by the retrieved documents are a groundedness problem, and groundedness evaluation metrics directly measure how well a response is backed by its retrieved context."
  },
  {
    "id": "ai103-15-b",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a customer support agent grounded in internal documentation. After a recent update, a small number of responses are flagged for policy violations. Which observability signal should you use to evaluate this issue?",
    "choices": [
      {
        "id": "a",
        "text": "Groundedness evaluation metrics"
      },
      {
        "id": "b",
        "text": "Latency breakdown traces"
      },
      {
        "id": "c",
        "text": "Risk and safety metrics"
      },
      {
        "id": "d",
        "text": "Token usage analytics"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Responses flagged for policy violations map to content risk, which risk and safety evaluators are specifically designed to measure, unlike groundedness, latency, or token metrics."
  },
  {
    "id": "ai103-16",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project named Project1 that contains an agent. The agent uses an OpenAPI 3.0 specification to call an external weather service.\n\nThe weather service requires a key to be passed in an HTTP header. The key value is stored as a connection in Project1.\n\nYou need to ensure that the key value from the connection is included automatically whenever the OpenAPI tool is invoked.\n\nWhat should you configure in the OpenAPI specification?",
    "choices": [
      {
        "id": "a",
        "text": "a header parameter defined for each operation"
      },
      {
        "id": "b",
        "text": "an Azure Key Vault connection"
      },
      {
        "id": "c",
        "text": "an API key security scheme"
      },
      {
        "id": "d",
        "text": "a Bearer token security scheme"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "When the OpenAPI specification declares an apiKey security scheme in a header, the Foundry OpenAPI tool automatically injects the key from the linked project connection on every call. Defining a header parameter per operation would require passing the value manually, Key Vault connections aren't an OpenAPI construct, and a Bearer scheme is meant for OAuth/JWT tokens rather than a static API key."
  },
  {
    "id": "ai103-17",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project that serves a high-volume chat app.\n\nMost requests are simple FAQs, but some require advanced reasoning.\n\nYou need to reduce costs and latency for common queries, without degrading the quality of the responses to complex questions.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Route all the requests to a smaller model."
      },
      {
        "id": "b",
        "text": "Use a model cascade that routes the requests to different models."
      },
      {
        "id": "c",
        "text": "Increase the value of the max_tokens parameter for all the requests."
      },
      {
        "id": "d",
        "text": "Route all the requests to the most capable model."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A model cascade (model routing) sends simple, high-volume FAQ traffic to a small/cheap model and escalates only queries that need deeper reasoning to a more capable model, cutting average cost and latency without sacrificing quality on hard questions. Routing everything to one tier in either direction, or raising max_tokens, doesn't achieve that balance."
  },
  {
    "id": "ai103-18-a",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains an internal Q&A agent. Users report an increase in \"No relevant information found\" responses and periodic HTTP 429 rate limit exceeded errors during peak hours. You need to identify whether each issue is caused by model unavailability, resource limits, or inference failures. Which metrics should you enable?",
    "choices": [
      {
        "id": "a",
        "text": "Model Availability Rate and Provisioned Utilization"
      },
      {
        "id": "b",
        "text": "Only Tokens Cache Match Rate"
      },
      {
        "id": "c",
        "text": "Only Total Requests filtered to status code 200"
      },
      {
        "id": "d",
        "text": "Time To Response and Total Tokens"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Model Availability Rate surfaces whether the model itself is unavailable, and Provisioned Utilization shows whether the deployment is hitting its throughput ceiling, together explaining both the missing-answer pattern and the 429 rate-limit errors during peak hours."
  },
  {
    "id": "ai103-18-b",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains an internal Q&A agent. Users report an increase in \"No relevant information found\" responses and periodic HTTP 429 rate limit exceeded errors during peak hours. You need to identify whether each issue is caused by model unavailability, resource limits, or inference failures. Which diagnostic log category should you collect?",
    "choices": [
      {
        "id": "a",
        "text": "AllMetrics"
      },
      {
        "id": "b",
        "text": "audit"
      },
      {
        "id": "c",
        "text": "RequestResponse"
      },
      {
        "id": "d",
        "text": "trace"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The RequestResponse diagnostic log category captures individual inference call details, including failure and throttling responses, letting you correlate specific requests with 429 errors or inference failures — something aggregate metrics logs can't do."
  },
  {
    "id": "ai103-19",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a high-traffic agent.\n\nAfter a recent update, operational costs increase significantly.\n\nMonitoring confirms that the volume of user traffic to the agent remains unchanged.\n\nYou suspect that changes to the request or response characteristics are causing the increase. You need to identify whether the additional costs are driven by the model input size, the model output size, or expanded tool usage.\n\nWhich observability capability should you use?",
    "choices": [
      {
        "id": "a",
        "text": "latency"
      },
      {
        "id": "b",
        "text": "evaluation metrics"
      },
      {
        "id": "c",
        "text": "run success rate"
      },
      {
        "id": "d",
        "text": "token usage"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Token usage telemetry breaks down consumption by input tokens, output tokens, and tool-call tokens per request, which is exactly what's needed to attribute a cost increase (with flat traffic) to bigger prompts, longer completions, or more tool invocations. Latency, evaluation metrics, and run success rate don't attribute cost to those components."
  },
  {
    "id": "ai103-20-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent using tools to retrieve internal content and call external APIs; the agent is currently configured to let the model decide when to call tools. You need to publish the agent for a compliance workflow where each run must include a retrieval step before generating a response. What should you set tool_choice to?",
    "choices": [
      {
        "id": "a",
        "text": "auto"
      },
      {
        "id": "b",
        "text": "none"
      },
      {
        "id": "c",
        "text": "required"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Setting tool_choice to required forces the model to invoke a tool on every run instead of letting it decide, guaranteeing the mandatory retrieval step; auto leaves the choice to the model and none disables tool calls entirely."
  },
  {
    "id": "ai103-20-b",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a Microsoft Foundry project that contains an agent using tools to retrieve internal content and call external APIs. You need to publish the agent for a compliance workflow so that tool calls authenticate by using the published agent's own identity, isolated from other project resources, with support for audit tracing. How should you configure the tool to authenticate?",
    "choices": [
      {
        "id": "a",
        "text": "Storing API keys in prompts"
      },
      {
        "id": "b",
        "text": "Using the shared project agent identity"
      },
      {
        "id": "c",
        "text": "Using a distinct agent identity bound to the client application"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A distinct agent identity bound to the client app is isolated from other project resources and auditable to that specific published agent, satisfying the requirement for an identity that is the agent's own. Storing keys in prompts is a security violation, and a shared project identity isn't isolated per agent."
  },
  {
    "id": "ai103-21",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project named Project1 that contains the following: an OpenAPI tool that calls an external API, and a project connection named Connection1 that stores the API key of the external API.\n\nWhen an agent calls the OpenAPI tool, the API returns a 401 unauthorized error, and traces show that the API key header is NOT being sent.\n\nYou need to ensure that the OpenAPI tool automatically includes the API key from Connection1 on all requests.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller."
      },
      {
        "id": "b",
        "text": "Add the API key header manually to the OpenAPI specification."
      },
      {
        "id": "c",
        "text": "Configure the tool to use the default connection of Project1."
      },
      {
        "id": "d",
        "text": "Connect the tool to Connection1."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The 401 with a missing key header means the tool simply isn't bound to the connection holding the key, so explicitly connecting the OpenAPI tool to Connection1 makes Foundry inject the stored key automatically on every request. Identity passthrough sends an Entra token instead of the API key, hardcoding the header manually defeats the purpose of the connection, and there's no guarantee the \"default\" project connection is actually Connection1."
  },
  {
    "id": "ai103-22",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a customer support agent. The agent calls an internal knowledge API tool before generating responses.\n\nUsers report the following issues:\n- Some requests take more than 15 seconds to complete.\n- Some responses are incorrect, even when the knowledge API returns the expected data.\n\nYou need to inspect individual agent runs to view the ordered sequence of large language model (LLM) calls, tool invocations, and timing information.\n\nWhich observability capability should you use?",
    "choices": [
      {
        "id": "a",
        "text": "token usage"
      },
      {
        "id": "b",
        "text": "monitoring"
      },
      {
        "id": "c",
        "text": "safety metrics"
      },
      {
        "id": "d",
        "text": "tracing"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Tracing captures the ordered sequence of spans within a single agent run - LLM calls, tool invocations, and their timing - which is exactly what's needed to diagnose both the slow requests and the cases where correct tool data still produced a wrong answer. Token usage, monitoring, and safety metrics are aggregate signals rather than per-run execution detail."
  },
  {
    "id": "ai103-23",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return.\n\nYou have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses. You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model. You need to implement controls to mitigate the risk.\n\nSolution: You configure a prompt shield for user prompts.\n\nDoes this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The described risk is malicious instructions hidden in image-extracted text reaching the model - an indirect, document-style prompt injection. Prompt Shields scoped only to user prompts screens the text the user typed directly, not third-party content pulled from an uploaded image, so it doesn't mitigate this particular risk."
  },
  {
    "id": "ai103-24",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return.\n\nYou have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses. You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model. You need to implement controls to mitigate the risk.\n\nSolution: You configure image moderation to block unsafe content before processing the images.\n\nDoes this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Image moderation classifies and blocks harmful visual content (violence, adult content, etc.) but does not inspect extracted text for embedded instructions, so it does nothing to stop the model from being manipulated by hidden text inside an otherwise visually unremarkable image."
  },
  {
    "id": "ai103-25",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return.\n\nYou have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses. You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model. You need to implement controls to mitigate the risk.\n\nSolution: You configure a prompt shield for documents.\n\nDoes this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Prompt Shields for Documents analyzes third-party content - including OCR/extracted text pulled from an uploaded image - for embedded instructions attempting to hijack the model. That's precisely the indirect prompt-injection risk described here (the \"unsafe images\" are unsafe because of the hidden instructions they carry), so enabling this shield for documents does meet the goal."
  },
  {
    "id": "ai103-26",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return.\n\nYou have a multimodal AI generative model that accepts image uploads and uses extracted image text to generate responses. You discover that users can upload unsafe images and embed hidden instructions into images to manipulate the model. You need to implement controls to mitigate the risk.\n\nSolution: You configure protected material detection.\n\nDoes this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Protected material detection flags model output that matches known copyrighted text, code, or lyrics; it has no relationship to detecting harmful image content or hidden instructions embedded in images, so it does not address the described risk at all."
  },
  {
    "id": "ai103-27",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that\nbuilds, deploys, and manages generative AI and agent-based solutions using\nMicrosoft Foundry, and uses Microsoft Entra ID for identity, authentication,\nand authorization. Two teams are involved: Agent1Dev Team (optimizes and\nmaintains AI solutions) and Agent1Test Team (validates solutions before\ndeployment). The Foundry deployment has two projects: Project1 hosts a\ncustomer-support agent, Agent1, which uses a base model deployment, has no\nsafety evaluation pipeline, no tool-invocation approval workflow, and no\nconversation memory configured, and runs in an EU region; Project2 hosts an\nin-progress video generation model for the marketing department. Product\ndata lives in Blob Storage account storage1 as PDF product sheets (specs,\nfeatures, support info). Known problems: Agent1 only has general product\nknowledge and doesn't use the storage1 product sheets; a recent chat's\nsentiment analysis hasn't been processed yet; and finance must manually\nreconcile vendor invoices (which have tables, logos, and varied layouts)\nagainst contract terms. Planned changes: add an invoice-processing solution\nthat evaluates both layout and text; standardize/update Agent1's base model\nversion for consistency; let Agent1 retrieve product-sheet details via a\nnew indexing pipeline supporting semantic and vector search; and finish the\nvideo creation solution. Technical requirements: Agent1's model deployment\nmust scale dynamically for variable traffic without reserved throughput;\nindexing must support semantic/vector search; responses must be relevant,\ncomplete, and accurate; the model version must stay consistent; and data\nmust stay in the EU. Security/compliance requirements: no API keys for\nFoundry model access; least-privilege access; Entra ID authentication for\ndevelopers; Project1 access assigned via security groups SC_Agent1_Dev and\nSC_Agent1_Test; Agent1 must never leak customer data even if such data is\naccidentally added to storage1; and Agent1 must be protected against\nmalicious instructions hidden in images within product sheets. Business\nrequirements: Agent1 must retain conversation context/memory across\ninteractions for a personalized experience, and must only answer questions\nabout Contoso's own products.\n\nYou need to recommend a solution to assess the responses generated by Agent1 when the agent uses the product information stored in storage1. The solution must meet the technical requirements.\n\nWhat should you include in the recommendation?",
    "choices": [
      {
        "id": "a",
        "text": "a Retrieval Augmented Generation (RAG) evaluator"
      },
      {
        "id": "b",
        "text": "a custom guardrail"
      },
      {
        "id": "c",
        "text": "model fine-tuning"
      },
      {
        "id": "d",
        "text": "a groundedness evaluator"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The technical requirement calls for responses that are \"relevant, complete, and accurate\" when grounded in retrieved product-sheet content - exactly what a groundedness evaluator measures, since it checks whether a response is faithfully supported by the retrieved source data. A custom guardrail enforces policy rather than measuring accuracy, and fine-tuning changes the model rather than assessing existing responses."
  },
  {
    "id": "ai103-28",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that\nbuilds, deploys, and manages generative AI and agent-based solutions using\nMicrosoft Foundry, and uses Microsoft Entra ID for identity, authentication,\nand authorization. Two teams are involved: Agent1Dev Team (optimizes and\nmaintains AI solutions) and Agent1Test Team (validates solutions before\ndeployment). The Foundry deployment has two projects: Project1 hosts a\ncustomer-support agent, Agent1, which uses a base model deployment, has no\nsafety evaluation pipeline, no tool-invocation approval workflow, and no\nconversation memory configured, and runs in an EU region; Project2 hosts an\nin-progress video generation model for the marketing department. Product\ndata lives in Blob Storage account storage1 as PDF product sheets (specs,\nfeatures, support info). Known problems: Agent1 only has general product\nknowledge and doesn't use the storage1 product sheets; a recent chat's\nsentiment analysis hasn't been processed yet; and finance must manually\nreconcile vendor invoices (which have tables, logos, and varied layouts)\nagainst contract terms. Planned changes: add an invoice-processing solution\nthat evaluates both layout and text; standardize/update Agent1's base model\nversion for consistency; let Agent1 retrieve product-sheet details via a\nnew indexing pipeline supporting semantic and vector search; and finish the\nvideo creation solution. Technical requirements: Agent1's model deployment\nmust scale dynamically for variable traffic without reserved throughput;\nindexing must support semantic/vector search; responses must be relevant,\ncomplete, and accurate; the model version must stay consistent; and data\nmust stay in the EU. Security/compliance requirements: no API keys for\nFoundry model access; least-privilege access; Entra ID authentication for\ndevelopers; Project1 access assigned via security groups SC_Agent1_Dev and\nSC_Agent1_Test; Agent1 must never leak customer data even if such data is\naccidentally added to storage1; and Agent1 must be protected against\nmalicious instructions hidden in images within product sheets. Business\nrequirements: Agent1 must retain conversation context/memory across\ninteractions for a personalized experience, and must only answer questions\nabout Contoso's own products.\n\nYou need to configure Agent1 to answer customer questions about only the Contoso products. The solution must meet the business requirements.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Modify the system message instructions."
      },
      {
        "id": "b",
        "text": "Add few-shot examples."
      },
      {
        "id": "c",
        "text": "Apply top-p sampling."
      },
      {
        "id": "d",
        "text": "Increase the value of the temperature parameter."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Constraining an agent to a defined topic scope (only Contoso's own products) is a behavior/grounding instruction that belongs in the system message, since it deterministically shapes what the model will and won't discuss. Few-shot examples influence style more than hard scope boundaries, and top-p/temperature control randomness, not topical restriction."
  },
  {
    "id": "ai103-29",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project.\n\nYou plan to build a customer support solution that contains an agent. The solution must meet the following requirements:\n- Provide accurate, context-aware responses grounded in internal product documentation stored in Azure AI Search.\n- Require deep, multi-step reasoning across long contexts.\n- Generate detailed natural language responses.\n\nWhich type of model should you use to power the agent?",
    "choices": [
      {
        "id": "a",
        "text": "a multimodal model"
      },
      {
        "id": "b",
        "text": "a small language model (SLM)"
      },
      {
        "id": "c",
        "text": "a key phrase extraction model"
      },
      {
        "id": "d",
        "text": "a large language model (LLM)"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Deep multi-step reasoning across long, retrieved context combined with detailed natural-language generation is squarely the strength of a large language model. A small language model trades that reasoning depth for lower cost/latency, a multimodal model adds image/audio handling that isn't required here, and key phrase extraction is a narrow classical NLP task rather than a generative reasoner."
  },
  {
    "id": "ai103-30-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains a deployed ticket-triage agent. You discover that sometimes the agent responds without calling any tools, even when a tool is required. You need to ensure the agent calls a tool during execution.\n\n```python\nrun_payload = {\n    \"assistant_id\": agent_id,\n    ____: ____,\n    \"metadata\": {\n        \"scenario\": \"ticket-triage\"\n    }\n}\n```\n\nWhich value should be the key in this entry?",
    "choices": [
      {
        "id": "a",
        "text": "\"auto\""
      },
      {
        "id": "b",
        "text": "\"required\""
      },
      {
        "id": "c",
        "text": "\"response_format\""
      },
      {
        "id": "d",
        "text": "\"tool_choice\""
      },
      {
        "id": "e",
        "text": "\"tools\""
      },
      {
        "id": "f",
        "text": "\"type\""
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The run_payload key that controls whether a tool must be invoked is \"tool_choice\"; \"tools\" instead names which tools are available, not whether one must be used."
  },
  {
    "id": "ai103-30-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains a deployed ticket-triage agent. You discover that sometimes the agent responds without calling any tools, even when a tool is required. You need to ensure the agent calls a tool during execution.\n\n```python\nrun_payload = {\n    \"assistant_id\": agent_id,\n    \"tool_choice\": ____,\n    \"metadata\": {\n        \"scenario\": \"ticket-triage\"\n    }\n}\n```\n\nWhich value should be assigned to \"tool_choice\"?",
    "choices": [
      {
        "id": "a",
        "text": "\"auto\""
      },
      {
        "id": "b",
        "text": "\"required\""
      },
      {
        "id": "c",
        "text": "\"response_format\""
      },
      {
        "id": "d",
        "text": "\"tool_choice\""
      },
      {
        "id": "e",
        "text": "\"tools\""
      },
      {
        "id": "f",
        "text": "\"type\""
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Setting \"tool_choice\" to \"required\" forces the agent to invoke a tool on every run instead of allowing it to skip tool use, which directly fixes the observed behavior."
  },
  {
    "id": "ai103-31",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You are building a web app named App1 that generates responses by using a model deployed to a Microsoft Foundry project named Project1.\n\nBefore sending the prompts to the model, App1 must retrieve documents by using Azure AI Search.\n\nYou need to integrate Project1 and App1. The solution must meet the following requirements:\n- Multiple client applications must use the same search configuration.\n- A security policy must prevent key-based authentication.\n- Administrative effort must be minimized.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per application."
      },
      {
        "id": "b",
        "text": "Configure an Azure AI Search connection in Project1 and reference the connection in each application."
      },
      {
        "id": "c",
        "text": "Call Azure AI Search directly from each application by using Microsoft Entra authentication."
      },
      {
        "id": "d",
        "text": "Enable a managed identity for each application and call Azure AI Search directly."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Configuring a single Azure AI Search connection at the Project1 level, referenced by every client application, gives all apps the same search configuration from one place, and Foundry connections support Microsoft Entra (keyless) authentication - satisfying the no-key-auth policy with minimal administrative overhead. Per-app custom HTTP configuration or direct calls from each application duplicate setup and effort."
  },
  {
    "id": "ai103-32-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent used by financial analysts. You need the agent to access up-to-date information from public websites. Which tool should you use for this requirement?",
    "choices": [
      {
        "id": "a",
        "text": "Code interpreter"
      },
      {
        "id": "b",
        "text": "Computer use"
      },
      {
        "id": "c",
        "text": "File search"
      },
      {
        "id": "d",
        "text": "Grounding with Bing Search"
      },
      {
        "id": "e",
        "text": "Microsoft Fabric"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Grounding with Bing Search is the Foundry Agent Service tool built to pull current, public web information into an agent's responses."
  },
  {
    "id": "ai103-32-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent used by financial analysts. You need the agent to perform calculations during conversations. Which tool should you use for this requirement?",
    "choices": [
      {
        "id": "a",
        "text": "Code interpreter"
      },
      {
        "id": "b",
        "text": "Computer use"
      },
      {
        "id": "c",
        "text": "File search"
      },
      {
        "id": "d",
        "text": "Grounding with Bing Search"
      },
      {
        "id": "e",
        "text": "Microsoft Fabric"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Code interpreter gives the agent a sandboxed execution environment to run code and perform calculations mid-conversation."
  },
  {
    "id": "ai103-32-c",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent used by financial analysts. You need the agent to retrieve information from documents uploaded directly to the agent. Which tool should you use for this requirement?",
    "choices": [
      {
        "id": "a",
        "text": "Code interpreter"
      },
      {
        "id": "b",
        "text": "Computer use"
      },
      {
        "id": "c",
        "text": "File search"
      },
      {
        "id": "d",
        "text": "Grounding with Bing Search"
      },
      {
        "id": "e",
        "text": "Microsoft Fabric"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "File search retrieves relevant content from documents that were uploaded directly to the agent, unlike Azure AI Search which targets a pre-built external index."
  },
  {
    "id": "ai103-33",
    "type": "multi",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a prompt agent used by a customer support web app.\n\nThe agent is invoked from a Python service that does NOT run in the Foundry portal.\n\nYou need to implement end-to-end tracing to capture latency breakdowns and exceptions across agent runs.\n\nWhich two components can you use? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "a Log Analytics workspace"
      },
      {
        "id": "b",
        "text": "Application Insights"
      },
      {
        "id": "c",
        "text": "OpenTelemetry"
      },
      {
        "id": "d",
        "text": "the Azure Monitor Agent"
      },
      {
        "id": "e",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctChoiceIds": [
      "b",
      "c"
    ],
    "explanation": "For an agent invoked from external application code outside the Foundry portal, instrumenting the service with OpenTelemetry produces the distributed trace spans, and sending those traces to Application Insights gives a queryable end-to-end view of latency and exceptions. A Log Analytics workspace is just the storage backing Application Insights rather than a tracing mechanism, and Azure Monitor Agent/Sentinel aren't used for application-level agent tracing."
  },
  {
    "id": "ai103-34",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a customer support agent that uses the Microsoft Foundry Agent Service.\n\nSometimes, customers return to a session days later to continue the same support case, and the agent must resume with the full historical context. The agent must provide the following:\n- Multi-turn continuity within the session\n- Cross-session continuity for the same case\n- Access to the full interaction history, including user messages, agent messages, tool calls, and tool outputs\n\nYou need to ensure that the agent automatically reloads the complete history on each new turn.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent requests."
      },
      {
        "id": "b",
        "text": "Persist only the final model response stored in the client application and prepend the response to future prompts."
      },
      {
        "id": "c",
        "text": "Enable memory summarization on the agent definition to persist the context automatically."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Storing and re-supplying a Foundry Agent Service conversation (thread) ID lets the service reload the complete server-side interaction history - user and agent messages, tool calls, and tool outputs - on every new turn, giving both within-session and cross-session continuity. Keeping only the final response loses tool history, and memory summarization condenses context rather than preserving and reloading it in full."
  },
  {
    "id": "ai103-35-a",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project that contains a deployed chat model. A Python service sends API requests to the model and is integrated with an automated validation system that compares generated outputs against approved response patterns. Stakeholders report that small wording differences are causing validation mismatches. You need to update the request parameters to improve output stability while maximizing reasoning quality.\n\n```python\nmessage = client.messages.create(\n    model=\"deployment-name\",\n    messages=[{\"role\": \"user\", \"content\": \"Summarize the release notes in 3 bullet points.\"}],\n    max_tokens=800,\n    temperature=____,\n    thinking={\"type\": \"enabled\"},\n    output_config={\"effort\": \"high\"}\n)\n```\n\nWhich value should temperature be set to?",
    "choices": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "1"
      },
      {
        "id": "c",
        "text": "2"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Temperature controls output randomness, and setting it to 0 minimizes wording variation between calls, directly addressing the validation mismatches caused by small phrasing differences."
  },
  {
    "id": "ai103-35-b",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project that contains a deployed chat model. A Python service sends API requests to the model and is integrated with an automated validation system that compares generated outputs against approved response patterns. Stakeholders report that small wording differences are causing validation mismatches. You need to update the request parameters to improve output stability while maximizing reasoning quality.\n\n```python\nmessage = client.messages.create(\n    model=\"deployment-name\",\n    messages=[{\"role\": \"user\", \"content\": \"Summarize the release notes in 3 bullet points.\"}],\n    max_tokens=800,\n    temperature=0,\n    thinking={\"type\": \"enabled\"},\n    output_config={\"effort\": ____}\n)\n```\n\nWhich value should effort be set to?",
    "choices": [
      {
        "id": "a",
        "text": "\"high\""
      },
      {
        "id": "b",
        "text": "\"low\""
      },
      {
        "id": "c",
        "text": "\"medium\""
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The reasoning effort parameter controls how much internal reasoning the model applies before responding, and \"high\" maximizes reasoning quality as required."
  },
  {
    "id": "ai103-36",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have a chat app in a Microsoft Foundry project and an Azure AI Search vectorized index.\n\nYou need to connect to the index to meet the following requirements:\n- Complex questions must retrieve information from multiple chunks.\n- Multi-turn conversations must influence retrieval planning.\n- Retrievals must run in parallel to reduce latency.\n\nWhich retrieval approach should you use?",
    "choices": [
      {
        "id": "a",
        "text": "iterative retrieval"
      },
      {
        "id": "b",
        "text": "agentic Retrieval Augmented Generation (RAG)"
      },
      {
        "id": "c",
        "text": "chain of thought"
      },
      {
        "id": "d",
        "text": "classic Retrieval Augmented Generation (RAG)"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Agentic retrieval in Azure AI Search decomposes a complex question into sub-queries spanning multiple chunks, uses conversation history to plan what to retrieve next, and issues those sub-queries in parallel to keep latency down - matching all three requirements. Classic RAG issues a single retrieval pass, iterative retrieval is sequential rather than parallel, and chain-of-thought is a prompting technique, not a retrieval architecture."
  },
  {
    "id": "ai103-37-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You need to recommend a plan to create a customer support agent by using the Microsoft Foundry Agent Service. The agent must retain user preferences across multiple conversations. Which Foundry capability should you recommend for this requirement?",
    "choices": [
      {
        "id": "a",
        "text": "Agent memory that uses persistent storage"
      },
      {
        "id": "b",
        "text": "Conversation history"
      },
      {
        "id": "c",
        "text": "Orchestration-managed session context"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Retaining preferences across separate conversations requires memory backed by persistent storage; plain conversation history and orchestration session context are both scoped to a single session and reset afterward."
  },
  {
    "id": "ai103-37-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You need to recommend a plan to create a customer support agent by using the Microsoft Foundry Agent Service. The agent must enable users to provide contextual grounding by directly uploading documents during a chat. Which Foundry capability should you recommend for this requirement?",
    "choices": [
      {
        "id": "a",
        "text": "Azure AI Search tool"
      },
      {
        "id": "b",
        "text": "Code interpreter tool"
      },
      {
        "id": "c",
        "text": "File search tool"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The File search tool lets users ground the conversation by uploading documents directly during chat, whereas the Azure AI Search tool targets a pre-built index and code interpreter is for computation."
  },
  {
    "id": "ai103-38",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.\n\nYou need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Add a retry evaluation before the responses are returned."
      },
      {
        "id": "b",
        "text": "Decrease the value of the max_tokens parameter."
      },
      {
        "id": "c",
        "text": "Switch to Retrieval Augmented Generation (RAG)."
      },
      {
        "id": "d",
        "text": "Replace the model with a smaller deployment."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Because the fix must live in application code before the response is returned, the right approach is a post-generation check - an evaluation/retry pass that scores the draft response and regenerates it if judged incomplete. Shrinking max_tokens or swapping to a smaller model would reduce completeness rather than improve it, and switching to RAG changes retrieval rather than adding the requested in-code completeness check."
  },
  {
    "id": "ai103-39",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a customer support agent built by using the Microsoft Foundry Agent Service. The agent calls an Azure OpenAI model deployment.\n\nDuring load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error.\n\nYou need to handle throttling to reduce call failures and improve reliability under load. The solution must remain within the service and model limits.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Create a new thread and retry the calls immediately."
      },
      {
        "id": "b",
        "text": "Reduce the number of registered tools."
      },
      {
        "id": "c",
        "text": "Implement a retry policy that uses exponential backoff and jitter."
      },
      {
        "id": "d",
        "text": "Spit uploaded content into smaller files."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The standard way to handle intermittent HTTP 429s while staying within service and model rate limits is a retry policy using exponential backoff with jitter, which spaces retries out so they don't pile up and re-trigger throttling. Retrying immediately makes the problem worse, and reducing tools or splitting files doesn't address a rate-limit error."
  },
  {
    "id": "ai103-40-a",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains an agent, and you use a GitHub Actions workflow for CI/CD. You need to configure the workflow to automatically evaluate the agent when a pull request is created. Which authentication method should the workflow use to sign in to Azure?",
    "choices": [
      {
        "id": "a",
        "text": "A personal access token (PAT)"
      },
      {
        "id": "b",
        "text": "A user-assigned managed identity"
      },
      {
        "id": "c",
        "text": "An Azure Login action that uses OpenID Connect (OIDC)"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "GitHub Actions should authenticate to Azure using the Azure Login action with OIDC federated credentials, which avoids storing long-lived secrets like PATs; managed identity isn't applicable to GitHub-hosted runners this way."
  },
  {
    "id": "ai103-40-b",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains an agent, and you use a GitHub Actions workflow for CI/CD. You need the workflow to prevent branches from merging if the evaluation results do NOT meet the defined thresholds. How should you configure the workflow step when thresholds are not met?",
    "choices": [
      {
        "id": "a",
        "text": "Lock the target branch"
      },
      {
        "id": "b",
        "text": "Send an alert"
      },
      {
        "id": "c",
        "text": "Fail"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Making the step Fail causes the PR check to fail, which is what actually blocks the branch from merging; sending an alert or locking the branch doesn't gate the merge through the PR check itself."
  },
  {
    "id": "ai103-41",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return.\n\nYou have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.\n\nSolution: You increase the value of the max_tokens parameter.\n\nDoes this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The clauses are already present in the retrieved content but get dropped during generation, so the failure is one of selection/faithfulness rather than output truncation. Raising max_tokens only gives the model more room to write; it doesn't force inclusion of specific required clauses."
  },
  {
    "id": "ai103-42",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return.\n\nYou have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.\n\nSolution: You add a reflection pass that regenerates the response if the required clauses are missing.\n\nDoes this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "A reflection pass that checks the draft response for the required clauses and regenerates it when they're missing is a self-correcting loop that directly enforces completeness before the response is returned, so it does meet the stated goal."
  },
  {
    "id": "ai103-43",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return.\n\nYou have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.\n\nSolution: You increase the value of the temperature parameter.\n\nDoes this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Raising temperature increases the randomness of the model's token choices; it has no mechanism for ensuring specific required regulatory clauses are retained, and can make omissions less predictable rather than more reliable, so it does not meet the goal."
  },
  {
    "id": "ai103-44",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "Note: This section contains one or more sets of questions with the same scenario and problem. Each question presents a unique solution to the problem. You must determine whether the solution meets the stated goals. More than one solution in the set might solve the problem. It is also possible that none of the solutions in the set solve the problem. After you answer a question in this section, you will NOT be able to return.\n\nYou have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents. Users report that some responses omit required regulatory clauses, even when the clauses are present in the retrieved content. You need to improve response completeness.\n\nSolution: You run an evaluation flow that scores responses for completeness and blocks responses that fall below a defined threshold.\n\nDoes this meet the goal?",
    "choices": [
      {
        "id": "a",
        "text": "Yes"
      },
      {
        "id": "b",
        "text": "No"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "An evaluation flow that scores completeness and blocks sub-threshold responses only prevents a bad response from reaching the user - it detects the problem but doesn't fix, regenerate, or add the missing clauses, so on its own it doesn't improve completeness, just gates it."
  },
  {
    "id": "ai103-45",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You are creating an image-editing workflow in a Microsoft Foundry project.\n\nThe workflow must meet the following requirements:\n- Ensure that background objects can be removed by applying a mask-based inpainting edit.\n- Preserve the original lighting and style of the edited images.\n- Use the built-in image editing controls, NOT a custom model.\n\nYou need to ensure that image edits apply exclusively inside the masked area.\n\nHow should you configure the workflow?",
    "choices": [
      {
        "id": "a",
        "text": "Set generation mode to image_variation and provide the original image as a reference."
      },
      {
        "id": "b",
        "text": "Enable text_to_image mode and a prompt describing the desired background removal."
      },
      {
        "id": "c",
        "text": "Enable image_to_image mode and a high-strength value to regenerate the full image based on the prompt."
      },
      {
        "id": "d",
        "text": "Enable mask_inpainting and supply both the input image and a mask indicating which part of the image to modify."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Editing strictly inside a masked region while leaving the rest of the image untouched is exactly what mask-based inpainting is designed for, and it requires both the source image and a mask defining the editable area. Image variation and text-to-image regenerate broadly, and a high-strength image-to-image pass regenerates the whole image rather than confining changes to a masked region."
  },
  {
    "id": "ai103-46",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You have a Microsoft Foundry project that generates product marketing images from text prompts.\n\nAfter publishing several images, the legal team at your company identifies a competitor’s logo on a sign in the background of an image.\n\nYou need to remove only the logo, while preserving the rest of the image.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Apply a mask-based inpainting edit to the part of the image that contains the logo."
      },
      {
        "id": "b",
        "text": "Increase the prompt guidance strength."
      },
      {
        "id": "c",
        "text": "Modify the original prompt to exclude brand names."
      },
      {
        "id": "d",
        "text": "Rerun the prompt by using a different random seed."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "To surgically remove one element (the competitor logo) while preserving everything else, mask-based inpainting targeted at just that region is the appropriate tool. Changing the prompt, guidance strength, or random seed all risk regenerating the entire image rather than editing a single localized area."
  },
  {
    "id": "ai103-47",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a Microsoft Foundry project that contains an agent.\n\nThe agent ingests scanned PDF vendor invoices that contain tables and embedded QR codes.\n\nThe agent must preserve the PDF layout in the extracted output to ensure that downstream processing can reference sections and tables.\n\nYou plan to call Azure Content Understanding in Foundry Tools.\n\nYou need to extract content and layout elements and detect QR codes without requiring a language model deployment.\n\nWhich built-in analyzer should you use?",
    "choices": [
      {
        "id": "a",
        "text": "prebuilt-documentFieldSchema"
      },
      {
        "id": "b",
        "text": "prebuilt-read"
      },
      {
        "id": "c",
        "text": "prebuilt-documentSearch"
      },
      {
        "id": "d",
        "text": "prebuilt-layout"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The prebuilt-layout analyzer extracts text, tables, and structural layout elements and also detects barcodes/QR codes, all without requiring a separate LLM deployment. prebuilt-read only performs OCR text extraction without layout/table structure, and the other two option names aren't real built-in analyzers for this purpose."
  },
  {
    "id": "ai103-48",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You have a Microsoft Foundry project that contains an agent and an image generation model deployment.\n\nThe agent generates original images from user-supplied product photos.\n\nYou need to ensure that the generated images maintain the product identity and visual characteristics of the provided photo.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Set the input_fidelity parameter to high."
      },
      {
        "id": "b",
        "text": "Apply a groundedness detection filter."
      },
      {
        "id": "c",
        "text": "Include a prompt and input image in the request."
      },
      {
        "id": "d",
        "text": "Decrease the value of the temperature parameter."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The input_fidelity parameter on Foundry's image generation/editing models controls how closely the output preserves details from a supplied reference image, so setting it to high is the documented way to retain a product's identity and visual characteristics. A groundedness filter and temperature apply to text generation quality, and simply including the image without raising fidelity doesn't guarantee identity preservation."
  },
  {
    "id": "ai103-49-a",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have a Microsoft Foundry project that contains an agent accepting user-uploaded screenshots and using a multimodal chat model. Some screenshots contain potentially malicious embedded text. You need to prevent a prompt injection attack. How should you configure the prompt shields action for document attacks?",
    "choices": [
      {
        "id": "a",
        "text": "Disable the shield."
      },
      {
        "id": "b",
        "text": "Set action to block."
      },
      {
        "id": "c",
        "text": "Set action to annotate."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "To actually prevent a prompt injection carried by embedded text in an image, the document-attack shield action must be set to block; annotate only flags the content without stopping it."
  },
  {
    "id": "ai103-49-b",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have a Microsoft Foundry project that contains an agent accepting user-uploaded screenshots and using a multimodal chat model. Some screenshots contain potentially malicious embedded text. You need to ensure that third-party content is treated as lower trust. What additional mitigation should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Enable Spotlighting."
      },
      {
        "id": "b",
        "text": "Create a custom blocklist."
      },
      {
        "id": "c",
        "text": "Use optical character recognition (OCR) to extract the text from the images first."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Spotlighting is the Prompt Shields capability that explicitly marks third-party or externally-sourced content as lower trust, which is what the requirement calls for; a custom blocklist or an OCR pre-step don't provide that trust-provenance separation."
  },
  {
    "id": "ai103-50",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You are deploying a support agent that enables users to upload photos.\n\nYou need to automatically classify uploaded images for harmful content. The solution must block content based on severity levels.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry Tools."
      },
      {
        "id": "b",
        "text": "Enable prompt shields."
      },
      {
        "id": "c",
        "text": "Use blocklists."
      },
      {
        "id": "d",
        "text": "Implement image moderation."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Image moderation (part of Azure AI Content Safety) classifies uploaded images into harm categories with configurable severity thresholds and can automatically block content above a chosen severity level, matching the \"classify and block by severity\" requirement. OCR keyword scanning only catches embedded text, prompt shields target instruction injection, and blocklists match exact terms rather than visual harm."
  },
  {
    "id": "ai103-51",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have an app named App1 that uses a Microsoft Foundry multimodal model deployment.\n\nApp1 runs optical character recognition (OCR) on uploaded images and appends the OCR output to the prompt as additional context.\n\nSome uploaded images contain embedded text.\n\nYou need to prevent potentially malicious instructions from being processed by the model.\n\nWhat should you use?",
    "choices": [
      {
        "id": "a",
        "text": "image moderation"
      },
      {
        "id": "b",
        "text": "prompt shields for documents"
      },
      {
        "id": "c",
        "text": "protected material text"
      },
      {
        "id": "d",
        "text": "prompt shields for user prompts"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "OCR text extracted from an uploaded image and appended to the prompt is third-party document content, so Prompt Shields for Documents is the control designed to detect embedded malicious instructions in that extracted text before it reaches the model. Image moderation addresses visual harm rather than instructions, protected material detection is a copyright check, and Prompt Shields for user prompts only covers text the user typed directly."
  },
  {
    "id": "ai103-52",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a Microsoft Foundry project that contains an agent.\n\nYou need to process mixed-format documents that contain scanned text, tables, and multicolumn layouts. The extracted content must preserve the document structure and be converted into the Markdown format for downstream reasoning.\n\nWhat should you configure first?",
    "choices": [
      {
        "id": "a",
        "text": "an Azure Language in Foundry Tools text analysis model deployment"
      },
      {
        "id": "b",
        "text": "a generative chat completion request"
      },
      {
        "id": "c",
        "text": "an Azure OpenAI Responses API call that uses a multimodal model"
      },
      {
        "id": "d",
        "text": "an Azure Content Understanding in Foundry Tools analyzer"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Azure Content Understanding analyzers are built specifically to take mixed-format documents - scanned text, tables, multicolumn layouts - and convert them into structure-preserving Markdown suitable for downstream LLM reasoning, and Microsoft recommends it as the first processing step for such files. Plain text-analysis, chat completion, or multimodal Responses calls don't provide that structure-aware extraction on their own."
  },
  {
    "id": "ai103-53",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have an application that processes scanned PDF invoices. The invoices have varied layouts and include multipage tables.\n\nYou have a pipeline that uses optical character recognition (OCR) and extracts totals and invoice numbers. The results are often incorrect because the document structure is ignored.\n\nYou need to implement a solution that provides OCR, layout analysis, and template-generalizing field extraction. The solution must NOT require training a custom model. The solution must minimize administrative effort.\n\nWhat should you include in the solution?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Language in Foundry Tools"
      },
      {
        "id": "b",
        "text": "Azure Content Understanding in Foundry Tools"
      },
      {
        "id": "c",
        "text": "an Azure Machine Learning model"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Content Understanding provides OCR, layout analysis, and field extraction that generalizes across varied invoice templates without any custom model training, directly meeting the \"no custom model, minimal admin effort\" requirement. Azure AI Language is text analytics rather than document/layout extraction, and building an Azure ML model would require training and ongoing maintenance."
  },
  {
    "id": "ai103-54",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have a Microsoft Foundry project that contains an agent.\n\nThe agent uses a knowledge source built from documents stored in Azure Blob Storage. The documents include digitally scanned PDFs that contain multipage tables.\n\nYou have an ingestion job that extracts only plain text, causing loss of table structure, headings, and page-number metadata.\n\nUsers frequently ask questions that require the retrieval of specific table rows across the pages.\n\nYou need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that performs optical character recognition (OCR) on scanned PDFs, preserves tables and headings as structure-aware chunks, and stores page-number metadata with each chunk.\n\nHow should you configure the ingestion job?",
    "choices": [
      {
        "id": "a",
        "text": "Use advanced data parsing to reingest the documents."
      },
      {
        "id": "b",
        "text": "Use OCR and page-level chunking."
      },
      {
        "id": "c",
        "text": "Use page-level OCR extraction and store each page as a single chunk."
      },
      {
        "id": "d",
        "text": "Use basic parsing and fixed-size chunking."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Preserving multipage tables, headings, and page-number metadata as structure-aware chunks calls for an advanced/structure-aware parsing step during ingestion rather than plain OCR. Simple page-level or fixed-size chunking would either blindly cut multipage tables at page boundaries or ignore structure altogether, breaking the ability to retrieve specific table rows accurately."
  },
  {
    "id": "ai103-55",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have a Microsoft Foundry project that contains an agent.\n\nThe agent uses Azure AI Search as the retriever.\n\nYou plan to ingest PDF into an Azure AI Search index to ensure that the agent can ground responses in texts in both documents and embedded images.\n\nUsers require citations that link to the source files.\n\nYou need to ensure that during indexing, the images are extracted into a structure that can be used as input for the built-in optical character recognition (OCR) skill.\n\nWhich indexing approach should you use?",
    "choices": [
      {
        "id": "a",
        "text": "an indexer to extract image data into a normalized_images collection"
      },
      {
        "id": "b",
        "text": "a Shaper skill to restructure the OCR input"
      },
      {
        "id": "c",
        "text": "a skillset to run the OCR skill directly against the content field of the index"
      },
      {
        "id": "d",
        "text": "the outputFieldMappings parameter to write image data to a searchable field"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Azure AI Search's built-in OCR skill expects image data as input, so an indexer must first extract embedded images from the PDFs into the normalized_images collection before OCR can run against them. A Shaper skill just reshapes existing fields, running OCR directly against a text content field is invalid since OCR needs image input, and outputFieldMappings only controls where results are written, not how images are extracted."
  },
  {
    "id": "ai103-56",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that\nbuilds, deploys, and manages generative AI and agent-based solutions using\nMicrosoft Foundry, and uses Microsoft Entra ID for identity, authentication,\nand authorization. Two teams are involved: Agent1Dev Team (optimizes and\nmaintains AI solutions) and Agent1Test Team (validates solutions before\ndeployment). The Foundry deployment has two projects: Project1 hosts a\ncustomer-support agent, Agent1, which uses a base model deployment, has no\nsafety evaluation pipeline, no tool-invocation approval workflow, and no\nconversation memory configured, and runs in an EU region; Project2 hosts an\nin-progress video generation model for the marketing department. Product\ndata lives in Blob Storage account storage1 as PDF product sheets (specs,\nfeatures, support info). Known problems: Agent1 only has general product\nknowledge and doesn't use the storage1 product sheets; a recent chat's\nsentiment analysis hasn't been processed yet; and finance must manually\nreconcile vendor invoices (which have tables, logos, and varied layouts)\nagainst contract terms. Planned changes: add an invoice-processing solution\nthat evaluates both layout and text; standardize/update Agent1's base model\nversion for consistency; let Agent1 retrieve product-sheet details via a\nnew indexing pipeline supporting semantic and vector search; and finish the\nvideo creation solution. Technical requirements: Agent1's model deployment\nmust scale dynamically for variable traffic without reserved throughput;\nindexing must support semantic/vector search; responses must be relevant,\ncomplete, and accurate; the model version must stay consistent; and data\nmust stay in the EU. Security/compliance requirements: no API keys for\nFoundry model access; least-privilege access; Entra ID authentication for\ndevelopers; Project1 access assigned via security groups SC_Agent1_Dev and\nSC_Agent1_Test; Agent1 must never leak customer data even if such data is\naccidentally added to storage1; and Agent1 must be protected against\nmalicious instructions hidden in images within product sheets. Business\nrequirements: Agent1 must retain conversation context/memory across\ninteractions for a personalized experience, and must only answer questions\nabout Contoso's own products.\n\nYou need to recommend an invoice review solution that resolves the issue reported by the finance department.\n\nWhat should you include in the recommendation?",
    "choices": [
      {
        "id": "a",
        "text": "chat completions"
      },
      {
        "id": "b",
        "text": "Azure Document Intelligence in Foundry Tools"
      },
      {
        "id": "c",
        "text": "Azure Content Understanding in Foundry Tools"
      },
      {
        "id": "d",
        "text": "Image Analysis"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The finance requirement is to evaluate both the visual layout and the textual content of varied, non-standard invoices and reason about them against contract terms - the multimodal layout-plus-text-plus-reasoning capability of Content Understanding. Document Intelligence leans more toward structured field extraction from known templates, and chat completions or plain Image Analysis don't provide integrated document layout extraction."
  },
  {
    "id": "ai103-57",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a Microsoft Foundry project that contains an agent.\n\nThe knowledge source for the agent is a set of scanned PDF troubleshooting guides stored in Azure Blob Storage. The guide pages contain two-column layouts and tables.\n\nYou use Azure Content Understanding in Foundry Tools to process the PDFs.\n\nYou plan to ingest the processed content into an index for Retrieval Augmented Generation (RAG) and store extracted fields for downstream automation.\n\nStakeholders must be able to verify where each extracted field value came from in the original PDF and route low-reliability extractions for manual review.\n\nYou need to ensure that the Content Understanding document analyzer output includes a per-field confidence score and source grounding to locations within the source document.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Set enableSegment to true."
      },
      {
        "id": "b",
        "text": "Provide labeled samples."
      },
      {
        "id": "c",
        "text": "Enable estimateFieldSourceAndConfidence."
      },
      {
        "id": "d",
        "text": "Configure the analyzer to use generative extraction for all fields."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Enabling estimateFieldSourceAndConfidence on a Content Understanding document analyzer makes it return, for each extracted field, a confidence score plus a source-grounding location (page and region) in the original PDF - exactly what's needed for stakeholders to verify field provenance and route low-confidence extractions for manual review."
  },
  {
    "id": "ai103-58",
    "type": "single",
    "topic": "Azure AI Speech",
    "prompt": "You are building a speech processing solution in Microsoft Foundry for a customer support platform.\n\nThe platform will transcribe live phone calls, so that supervisors at your company can view call transcripts and detect issues while the calls are in progress. The call audio will arrive as a continuous stream from the telephony system.\n\nYou need to ensure that the call transcripts appear within only a few seconds of the audio stream.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Use text to speech by using a custom neural voice."
      },
      {
        "id": "b",
        "text": "Use speech translation to generate the transcripts into multiple languages."
      },
      {
        "id": "c",
        "text": "Run a batch transcription job on recorded audio files."
      },
      {
        "id": "d",
        "text": "Use real-time speech to text to process streaming audio input."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Getting transcripts within a few seconds of a continuous audio stream requires real-time speech-to-text, which processes streaming audio and returns interim/final results with low latency. Batch transcription is designed for pre-recorded files with much higher latency, and text-to-speech/translation don't produce live transcripts at all."
  },
  {
    "id": "ai103-59",
    "type": "single",
    "topic": "Azure AI Speech",
    "prompt": "You are creating an agent workflow in a Microsoft Foundry project to support natural voice interactions.\n\nThe agent must receive continuous audio input, convert the input into text for reasoning, and then return spoken responses to a user. The workflow must meet the following requirements:\n- Support turn-taking dynamics, where the agent begins to generate the speech output before the user finishes speaking.\n- Operate with low latency to maintain conversational experience.\n\nYou need to enable both speech to text and text to speech in a real-time agent interaction.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Use batch transcription to convert the audio input and return text responses from the agent."
      },
      {
        "id": "b",
        "text": "Use real-time speech to text for incoming audio and text to speech for agent responses."
      },
      {
        "id": "c",
        "text": "Use an embeddings model to encode the audio, and then decode the audio into text and speech."
      },
      {
        "id": "d",
        "text": "Use speech translation to convert the audio into another language and return the translated text."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A responsive, low-latency voice agent needs real-time speech-to-text on the incoming audio stream (so it can start reasoning before the caller finishes) paired with real-time text-to-speech for the spoken reply. Batch transcription is too slow for live turn-taking, and embeddings or speech translation don't perform the transcribe/synthesize round trip needed here."
  },
  {
    "id": "ai103-60",
    "type": "single",
    "topic": "Azure AI Speech",
    "prompt": "You have an application named App1 that uses Azure Speech in Foundry Tools to transcribe live calls.\n\nTranscript segments often contain both English and Spanish. App1 sends each segment to Azure Translator in Foundry Tools to translate to another language.\n\nSometimes, mixed-language segments result in incomplete or incorrect translations.\n\nYou need to reduce translation errors. The solution must ensure that the entire transcript is translated successfully.\n\nWhat should you do before sending the segments to Translator?",
    "choices": [
      {
        "id": "a",
        "text": "Use document translation to translate the entire transcript as a single document."
      },
      {
        "id": "b",
        "text": "Split the mixed-language segments into single-language segments and translate each segment separately."
      },
      {
        "id": "c",
        "text": "Enable automatic language detection for the translation request."
      },
      {
        "id": "d",
        "text": "Specify English as the source language in the translation request for all the segments."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure Translator works most reliably when given text in a single source language, so splitting a mixed English/Spanish segment into single-language spans before sending each one to Translator avoids the errors caused by genuinely mixed-language input. Translating the whole transcript as one document or relying on auto-detection still leaves individual mixed segments mishandled, and forcing English as the source mistranslates the Spanish portions."
  },
  {
    "id": "ai103-61",
    "type": "multi",
    "topic": "Azure AI Search & RAG",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that\nbuilds, deploys, and manages generative AI and agent-based solutions using\nMicrosoft Foundry, and uses Microsoft Entra ID for identity, authentication,\nand authorization. Two teams are involved: Agent1Dev Team (optimizes and\nmaintains AI solutions) and Agent1Test Team (validates solutions before\ndeployment). The Foundry deployment has two projects: Project1 hosts a\ncustomer-support agent, Agent1, which uses a base model deployment, has no\nsafety evaluation pipeline, no tool-invocation approval workflow, and no\nconversation memory configured, and runs in an EU region; Project2 hosts an\nin-progress video generation model for the marketing department. Product\ndata lives in Blob Storage account storage1 as PDF product sheets (specs,\nfeatures, support info). Known problems: Agent1 only has general product\nknowledge and doesn't use the storage1 product sheets; a recent chat's\nsentiment analysis hasn't been processed yet; and finance must manually\nreconcile vendor invoices (which have tables, logos, and varied layouts)\nagainst contract terms. Planned changes: add an invoice-processing solution\nthat evaluates both layout and text; standardize/update Agent1's base model\nversion for consistency; let Agent1 retrieve product-sheet details via a\nnew indexing pipeline supporting semantic and vector search; and finish the\nvideo creation solution. Technical requirements: Agent1's model deployment\nmust scale dynamically for variable traffic without reserved throughput;\nindexing must support semantic/vector search; responses must be relevant,\ncomplete, and accurate; the model version must stay consistent; and data\nmust stay in the EU. Security/compliance requirements: no API keys for\nFoundry model access; least-privilege access; Entra ID authentication for\ndevelopers; Project1 access assigned via security groups SC_Agent1_Dev and\nSC_Agent1_Test; Agent1 must never leak customer data even if such data is\naccidentally added to storage1; and Agent1 must be protected against\nmalicious instructions hidden in images within product sheets. Business\nrequirements: Agent1 must retain conversation context/memory across\ninteractions for a personalized experience, and must only answer questions\nabout Contoso's own products.\n\nYou need to configure an indexing pipeline for Agent1 to retrieve the relevant product information in storage1. The solution must meet the technical requirement.\n\nWhich two built-in skills should you use? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Azure OpenAI Embedding"
      },
      {
        "id": "b",
        "text": "Entity Recognition"
      },
      {
        "id": "c",
        "text": "Text Split"
      },
      {
        "id": "d",
        "text": "Merge"
      },
      {
        "id": "e",
        "text": "Language Detection"
      },
      {
        "id": "f",
        "text": "key phrase extraction"
      }
    ],
    "correctChoiceIds": [
      "a",
      "c"
    ],
    "explanation": "Building a vector-searchable index over the PDF product sheets requires a Text Split skill to chunk the extracted document text into indexable pieces, and an Azure OpenAI Embedding skill to generate the vector embeddings for each chunk that power semantic/vector search. Entity recognition, merge, language detection, and key phrase extraction are optional enrichments not required to produce a working vector index."
  },
  {
    "id": "ai103-62",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that\nbuilds, deploys, and manages generative AI and agent-based solutions using\nMicrosoft Foundry, and uses Microsoft Entra ID for identity, authentication,\nand authorization. Two teams are involved: Agent1Dev Team (optimizes and\nmaintains AI solutions) and Agent1Test Team (validates solutions before\ndeployment). The Foundry deployment has two projects: Project1 hosts a\ncustomer-support agent, Agent1, which uses a base model deployment, has no\nsafety evaluation pipeline, no tool-invocation approval workflow, and no\nconversation memory configured, and runs in an EU region; Project2 hosts an\nin-progress video generation model for the marketing department. Product\ndata lives in Blob Storage account storage1 as PDF product sheets (specs,\nfeatures, support info). Known problems: Agent1 only has general product\nknowledge and doesn't use the storage1 product sheets; a recent chat's\nsentiment analysis hasn't been processed yet; and finance must manually\nreconcile vendor invoices (which have tables, logos, and varied layouts)\nagainst contract terms. Planned changes: add an invoice-processing solution\nthat evaluates both layout and text; standardize/update Agent1's base model\nversion for consistency; let Agent1 retrieve product-sheet details via a\nnew indexing pipeline supporting semantic and vector search; and finish the\nvideo creation solution. Technical requirements: Agent1's model deployment\nmust scale dynamically for variable traffic without reserved throughput;\nindexing must support semantic/vector search; responses must be relevant,\ncomplete, and accurate; the model version must stay consistent; and data\nmust stay in the EU. Security/compliance requirements: no API keys for\nFoundry model access; least-privilege access; Entra ID authentication for\ndevelopers; Project1 access assigned via security groups SC_Agent1_Dev and\nSC_Agent1_Test; Agent1 must never leak customer data even if such data is\naccidentally added to storage1; and Agent1 must be protected against\nmalicious instructions hidden in images within product sheets. Business\nrequirements: Agent1 must retain conversation context/memory across\ninteractions for a personalized experience, and must only answer questions\nabout Contoso's own products.\n\nYou need to recommend a solution to support the planned changes and technical requirements for Agent1 to use the product information stored in storage1.\n\nWhat should you include in the recommendation?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Translator in Foundry Tools"
      },
      {
        "id": "b",
        "text": "Grounding with Bing Search"
      },
      {
        "id": "c",
        "text": "Azure AI Search"
      },
      {
        "id": "d",
        "text": "Azure Document intelligence in Foundry Tools"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The technical requirements call for an indexing pipeline that supports both semantic and vector search over the private PDF product sheets so Agent1 can retrieve grounded, relevant answers — that is exactly what Azure AI Search provides. Translator and Bing grounding don't index private content, and Document Intelligence extracts text/layout but isn't itself a retrieval/index layer."
  },
  {
    "id": "ai103-63",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a Microsoft Foundry project named Project1. Project1 contains an application that processes PDF vendor invoices.\n\nYou need to configure Azure Document Intelligence in Foundry Tools to generate a Markdown output that preserves the sections and table structure of the PDFs. The solution must minimize development effort.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Configure output=figures when you analyze the PDF."
      },
      {
        "id": "b",
        "text": "Configure content=markdown when you analyze the document."
      },
      {
        "id": "c",
        "text": "Increase the confidence threshold."
      },
      {
        "id": "d",
        "text": "Set the output_content_format=ContentFormat.MARKDOWN value."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The Document Intelligence Layout/analyze APIs accept an output_content_format parameter that, when set to ContentFormat.MARKDOWN, returns the extracted content as Markdown with headings, sections, and tables preserved — with no extra parsing code required."
  },
  {
    "id": "ai103-64",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a Microsoft Foundry project that ingests scanned PDF invoices stored in Azure Blob Storage. Each invoice contains printed line items and has a table-based layout.\n\nExtracted results are stored as structured JSON and used as grounding data for an agent in a Retrieval Augmented Generation (RAG) solution.\n\nYou need to create a single analyzer that meets the following requirements:\n- Extracts the invoice number, invoice date, vendor name, and total amount across varying templates\n- Returns confidence scores so that results with confidence below 0.80 can be routed for supervisor review\n\nWhat should you use?",
    "choices": [
      {
        "id": "a",
        "text": "a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores"
      },
      {
        "id": "b",
        "text": "a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the extracted fields and the returned confidence scores for routing"
      },
      {
        "id": "c",
        "text": "the Azure Content Understanding in Foundry Tools prebuilt-layout analyzer"
      },
      {
        "id": "d",
        "text": "the Azure Content Understanding in Foundry Tools prebuilt-documentSearch analyzer and search.score from the Azure AI Search results for routing"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A custom Content Understanding analyzer lets you define a field schema (invoice number, date, vendor, total) that works across varying invoice templates and returns per-field confidence scores you can threshold on for review routing. The prebuilt-layout analyzer has no custom fields, documentSearch plus a search relevance score measures retrieval relevance rather than extraction confidence, and a groundedness-guardrail agent doesn't produce structured field-level confidence."
  },
  {
    "id": "ai103-65",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that uses Azure AI Search to ground an agent in internal documentation.\n\nAfter a recent content update, users report that the agent's answers have become less accurate.\n\nYou need to identify whether the retrieved content is negatively influencing the model's generated responses.\n\nWhich observability signal should you review?",
    "choices": [
      {
        "id": "a",
        "text": "indexer status and failure history"
      },
      {
        "id": "b",
        "text": "latency breakdown traces"
      },
      {
        "id": "c",
        "text": "prediction drift metrics"
      },
      {
        "id": "d",
        "text": "groundedness evaluation metrics"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Groundedness evaluation measures how well a generated response is supported by the retrieved context, which is exactly what's needed to tell whether newly retrieved content is causing ungrounded or inaccurate answers. Indexer status shows ingestion health, latency traces show performance, and prediction drift metrics don't apply to generative RAG grounding quality."
  },
  {
    "id": "ai103-66-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains a deployed video generation model in Project2. You need to ensure the marketing department can generate videos using this model.\n\n```python\nimport time\nfrom openai import OpenAI\nclient = OpenAI(\n    base_url=\"https://Contoso.openai.azure.com/openai/v1/\",\n    api_key=...,\n)\nvideo = client.videos.____(\n    model=deployment_name,\n    prompt=\"A video of our products\",\n)\nwhile video.status not in [\"completed\", \"failed\", \"cancelled\"]:\n    time.sleep(20)\n    ...\n```\n\nWhich method should be used to start generating the video?",
    "choices": [
      {
        "id": "a",
        "text": "create"
      },
      {
        "id": "b",
        "text": "download_content"
      },
      {
        "id": "c",
        "text": "list"
      },
      {
        "id": "d",
        "text": "retrieve"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Starting a new video generation job is done with client.videos.create(), the video-API equivalent of submitting a generation request."
  },
  {
    "id": "ai103-66-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains a deployed video generation model in Project2. You need to ensure the marketing department can generate videos using this model.\n\n```python\nvideo = client.videos.create(\n    model=deployment_name,\n    prompt=\"A video of our products\",\n)\nwhile video.status not in [\"completed\", \"failed\", \"cancelled\"]:\n    time.sleep(20)\n    video = client.videos.____(video.id)\n    print(video.status)\n```\n\nWhich method should be used to poll the video's status inside the loop?",
    "choices": [
      {
        "id": "a",
        "text": "create"
      },
      {
        "id": "b",
        "text": "download_content"
      },
      {
        "id": "c",
        "text": "list"
      },
      {
        "id": "d",
        "text": "retrieve"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Polling an existing generation job's current state by its ID is done with client.videos.retrieve(video.id), not create() (which starts a new job) or list()/download_content() (which enumerate jobs or fetch the finished asset)."
  },
  {
    "id": "ai103-67",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "Case study — Contoso, Ltd.: Contoso is a multinational retail company that\nbuilds, deploys, and manages generative AI and agent-based solutions using\nMicrosoft Foundry, and uses Microsoft Entra ID for identity, authentication,\nand authorization. Two teams are involved: Agent1Dev Team (optimizes and\nmaintains AI solutions) and Agent1Test Team (validates solutions before\ndeployment). The Foundry deployment has two projects: Project1 hosts a\ncustomer-support agent, Agent1, which uses a base model deployment, has no\nsafety evaluation pipeline, no tool-invocation approval workflow, and no\nconversation memory configured, and runs in an EU region; Project2 hosts an\nin-progress video generation model for the marketing department. Product\ndata lives in Blob Storage account storage1 as PDF product sheets (specs,\nfeatures, support info). Known problems: Agent1 only has general product\nknowledge and doesn't use the storage1 product sheets; a recent chat's\nsentiment analysis hasn't been processed yet; and finance must manually\nreconcile vendor invoices (which have tables, logos, and varied layouts)\nagainst contract terms. Planned changes: add an invoice-processing solution\nthat evaluates both layout and text; standardize/update Agent1's base model\nversion for consistency; let Agent1 retrieve product-sheet details via a\nnew indexing pipeline supporting semantic and vector search; and finish the\nvideo creation solution. Technical requirements: Agent1's model deployment\nmust scale dynamically for variable traffic without reserved throughput;\nindexing must support semantic/vector search; responses must be relevant,\ncomplete, and accurate; the model version must stay consistent; and data\nmust stay in the EU. Security/compliance requirements: no API keys for\nFoundry model access; least-privilege access; Entra ID authentication for\ndevelopers; Project1 access assigned via security groups SC_Agent1_Dev and\nSC_Agent1_Test; Agent1 must never leak customer data even if such data is\naccidentally added to storage1; and Agent1 must be protected against\nmalicious instructions hidden in images within product sheets. Business\nrequirements: Agent1 must retain conversation context/memory across\ninteractions for a personalized experience, and must only answer questions\nabout Contoso's own products.\n\nYou need to configure personalized user interactions for Agent1. The solution must meet the business requirements.\n\nWhat should you include in the solution?",
    "choices": [
      {
        "id": "a",
        "text": "knowledge"
      },
      {
        "id": "b",
        "text": "memory"
      },
      {
        "id": "c",
        "text": "guardrails"
      },
      {
        "id": "d",
        "text": "tools"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The business requirement is for Agent1 to retain conversation context and recall information from prior interactions for a personalized experience — that is the role of the Foundry Agent Service's memory capability, not knowledge sources, guardrails, or tools."
  },
  {
    "id": "ai103-68-a",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a Microsoft Foundry project named Project1. You need to ensure that Agent1Dev Team can access Agent1 in a way that meets the security and compliance requirement to avoid API keys and use Entra authentication.\n\n```python\nfrom azure.identity import DefaultAzureCredential\nfrom azure.ai.projects import AIProjectClient\nfrom azure.core.credentials import AzureKeyCredential\nmyEndpoint = \"https://contoso.services.ai.azure.com/api/projects/project1\"\nproject_client = AIProjectClient(\n    endpoint=myEndpoint,\n    credential=____,\n)\n```\n\nWhich value should complete the credential argument?",
    "choices": [
      {
        "id": "a",
        "text": "AzureKeyCredential()"
      },
      {
        "id": "b",
        "text": "DefaultAzureCredential()"
      },
      {
        "id": "c",
        "text": "None"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "DefaultAzureCredential() authenticates using Microsoft Entra ID (via the caller's managed identity or signed-in identity) rather than a static key, satisfying the no-API-keys and Entra-authentication requirements."
  },
  {
    "id": "ai103-68-b",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a Microsoft Foundry project named Project1. You need to ensure that Agent1Dev Team can access Agent1.\n\n```python\nmyAgent = \"Agent1\"\nagent = project_client.agents.____(agent_name=myAgent)\nprint(f\"Retrieved agent: {agent.name}\")\n```\n\nWhich method should be used to retrieve the existing agent by name?",
    "choices": [
      {
        "id": "a",
        "text": "create_version"
      },
      {
        "id": "b",
        "text": "get"
      },
      {
        "id": "c",
        "text": "get_version"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Fetching an existing agent by its name is done with the get() method; create_version would create a new agent version, and get_version targets a specific version rather than the agent by name."
  },
  {
    "id": "ai103-69",
    "type": "multi",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a Retrieval Augmented Generation (RAG) chat solution used by customer support agents.\n\nYou are adding an automated pre-production evaluation step to a CI/CD pipeline named Pipeline1. The evaluation will run against a labeled test dataset that contains support questions and the expected grounding context.\n\nYou need to ensure that Pipeline1 fails if unsupported content or a retrieval mismatch exceeds a defined threshold:\n- responses include claims not supported by the retrieved source content\n- retrieved source content does not align with the labeled expected context\n\nWhich two built-in evaluators should you use in Pipeline1? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Retrieval"
      },
      {
        "id": "b",
        "text": "Fluency"
      },
      {
        "id": "c",
        "text": "Coherence"
      },
      {
        "id": "d",
        "text": "Groundedness"
      },
      {
        "id": "e",
        "text": "Response Completeness"
      }
    ],
    "correctChoiceIds": [
      "a",
      "d"
    ],
    "explanation": "The Groundedness evaluator flags claims in the response that aren't supported by the retrieved source content, while the Retrieval evaluator scores how well the retrieved chunks match the expected/labeled context — together covering both failure modes described. Fluency and coherence assess language quality, not factual grounding or retrieval accuracy."
  },
  {
    "id": "ai103-70",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains a support-ticket triage agent built by using the Foundry Agent Service.\n\nThe agent uses a tool to classify the ticket type and set the ticket priority.\n\nSometimes, the same support case continues across multiple sessions over several days.\n\nYou need to persist state by using a durable ID to ensure that the agent can automatically reuse the full interaction history. The solution must preserve previous user messages, tool calls and tool outputs across turns and sessions.\n\nWhich runtime component should you use?",
    "choices": [
      {
        "id": "a",
        "text": "output item"
      },
      {
        "id": "b",
        "text": "agent"
      },
      {
        "id": "c",
        "text": "conversation"
      },
      {
        "id": "d",
        "text": "response"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "In the Foundry Agent Service's Responses-based runtime, a conversation object is the durable container that stores the full item history (messages, tool calls, and tool outputs) across turns, so referencing the same conversation ID across sessions lets the agent resume with full context. Response and output-item objects are per-turn artifacts, and 'agent' is the reusable definition, not the state store."
  },
  {
    "id": "ai103-71-a",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a Retrieval Augmented Generation (RAG) solution. You need to run a pre-production evaluation using a labeled CSV dataset containing the query, context, response, and ground truth, measuring whether responses address the user query and whether responses are supported by the provided context. Which AI quality evaluation metrics should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Coherence and Fluency"
      },
      {
        "id": "b",
        "text": "GPT similarity and F1 score"
      },
      {
        "id": "c",
        "text": "Groundedness and Relevance"
      },
      {
        "id": "d",
        "text": "Groundedness and ROUGE score"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Groundedness measures whether a response is supported by the retrieved context, and Relevance measures whether it actually addresses the user's query — together covering both stated measurement goals."
  },
  {
    "id": "ai103-71-b",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have a Microsoft Foundry project that contains a Retrieval Augmented Generation (RAG) solution. You need to run a pre-production evaluation using a labeled CSV dataset, measuring whether responses contain sensitive or proprietary information. Which evaluator should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Hateful and unfair content"
      },
      {
        "id": "b",
        "text": "Indirect attack"
      },
      {
        "id": "c",
        "text": "Protected material"
      },
      {
        "id": "d",
        "text": "Violent content"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The Protected material evaluator detects when a response reproduces copyrighted, proprietary, or otherwise protected content, which is what \"sensitive or proprietary information\" in the response is checking for."
  },
  {
    "id": "ai103-72",
    "type": "multi",
    "topic": "Observability & Evaluation",
    "prompt": "You plan to configure an evaluation in Microsoft Foundry for a Retrieval Augmented Generation (RAG) chat app.\n\nYou need to provide scores for groundedness, relevance, and harmful content categories.\n\nWhich two evaluation categories can you use? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "risk and safety metrics"
      },
      {
        "id": "b",
        "text": "fluency evaluator"
      },
      {
        "id": "c",
        "text": "similarity evaluators"
      },
      {
        "id": "d",
        "text": "AI quality (NLP) metrics"
      },
      {
        "id": "e",
        "text": "AI quality (AI assisted) metrics"
      }
    ],
    "correctChoiceIds": [
      "a",
      "e"
    ],
    "explanation": "AI quality (AI-assisted) metrics in Foundry evaluation include groundedness and relevance scoring done by an AI judge model, while risk and safety metrics cover harmful/unsafe content categories — together these satisfy all three requested score types. NLP metrics are reference-based statistical measures (like BLEU/ROUGE) and similarity evaluators just compare to a ground-truth answer, neither of which covers harmful content."
  },
  {
    "id": "ai103-73",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent uses two tools to perform the following actions:\n- Use Azure AI Search to retrieve answers from a private product documentation index.\n- Use the web search tool to retrieve public information on the internet.\n\nYou need to ensure that for a specific run, the agent deterministically retrieves information only from the internet.\n\nTo what should you set tool_choice?",
    "choices": [
      {
        "id": "a",
        "text": "{“type”: “bing_grounding”}"
      },
      {
        "id": "b",
        "text": "{“type”: “azure_ai_search”}"
      },
      {
        "id": "c",
        "text": "“auto”"
      },
      {
        "id": "d",
        "text": "“required”"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Setting tool_choice to an explicit tool-type object (the Bing/web grounding tool) forces the model to invoke that specific tool on the run instead of letting it decide, which is what 'deterministically' requires. 'auto' leaves the choice to the model and 'required' just forces some tool call without specifying which one."
  },
  {
    "id": "ai103-74",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project that contains a customer support agent built on a deployed chat model.\n\nThe agent responses are validated by using an automated testing system that compares generated answers to stored expected outputs. Identical prompts must return consistent responses to prevent automated test failures.\n\nYou need to reduce response variability, without modifying the prompt or reducing factual accuracy.\n\nWhat should you do for the model?",
    "choices": [
      {
        "id": "a",
        "text": "Increase the max_tokens parameter."
      },
      {
        "id": "b",
        "text": "Remove stop sequences from the requests."
      },
      {
        "id": "c",
        "text": "Decrease the temperature parameter."
      },
      {
        "id": "d",
        "text": "Increase the temperature parameter."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Temperature controls sampling randomness; lowering it makes the model favor its highest-probability tokens, producing more deterministic, repeatable outputs for identical prompts without touching the prompt itself or degrading factual grounding. Raising temperature would make responses more variable, and max_tokens/stop sequences control length and truncation, not consistency."
  },
  {
    "id": "ai103-75",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You are developing prompts for a Microsoft Foundry project that classifies incoming support tickets by category.\n\nYou need to improve accuracy by showing the model how correct classifications look, without retraining the model or storing knowledge permanently.\n\nWhich prompt engineering approach should you use?",
    "choices": [
      {
        "id": "a",
        "text": "Retrieval Augmented Generation (RAG)"
      },
      {
        "id": "b",
        "text": "zero-shot learning"
      },
      {
        "id": "c",
        "text": "chain of thought"
      },
      {
        "id": "d",
        "text": "few-shot learning"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Few-shot learning embeds a handful of example input/output pairs directly in the prompt so the model can pattern-match the desired classification format, without any fine-tuning or persistent storage of knowledge. RAG requires an external knowledge store, zero-shot gives no examples at all, and chain-of-thought is about reasoning steps rather than demonstrating correct outputs."
  },
  {
    "id": "ai103-76",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent for a customer support chat app. The agent uses a memory store and a memory search tool.\n\nYou need to ensure that the conversation history does NOT persist across separate sessions.\n\nTo what should you set the scope of the memory tool?",
    "choices": [
      {
        "id": "a",
        "text": "session"
      },
      {
        "id": "b",
        "text": "{{$conversationId}}"
      },
      {
        "id": "c",
        "text": "{{$userId}}"
      },
      {
        "id": "d",
        "text": "global"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Scoping the memory tool to 'session' confines stored memory to the current session only, so it is not carried over once that session ends. Scoping by conversation ID or user ID (or globally) would let memories persist and be recalled across separate sessions, which is the opposite of what's required."
  },
  {
    "id": "ai103-77-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent. You need to enable long-term memory so the agent can recall user preferences across separate conversations, with stored memories isolated per authenticated user without the client application manually generating user IDs.\n\n```python\nfrom azure.ai.projects.models import MemorySearchTool, PromptAgentDefinition\nmem_store_name = \"agent_mem_store\"\nmemory_tool = MemorySearchTool(\n    memory_store_name=mem_store_name,\n    scope=____,\n)\n```\n\nWhich value should scope be set to?",
    "choices": [
      {
        "id": "a",
        "text": "\"session\""
      },
      {
        "id": "b",
        "text": "\"{{$conversationId}}\""
      },
      {
        "id": "c",
        "text": "\"{{$userId}}\""
      },
      {
        "id": "d",
        "text": "[mem_store_name]"
      },
      {
        "id": "e",
        "text": "[memory_tool]"
      },
      {
        "id": "f",
        "text": "MemorySearchTool(\"support_mem_store\")"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Scoping memory to \"{{$userId}}\" automatically isolates stored memories per the authenticated caller using the platform-supplied user identifier, without the client needing to generate or pass its own user ID. \"{{$conversationId}}\" or \"session\" would scope memory to a single conversation instead of persisting across conversations."
  },
  {
    "id": "ai103-77-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent. You need to enable long-term memory so the agent can recall user preferences across separate conversations.\n\n```python\nmemory_tool = MemorySearchTool(\n    memory_store_name=mem_store_name,\n    scope=\"{{$userId}}\",\n)\nagent_def = PromptAgentDefinition(\n    model=\"gpt-5.2\",\n    instructions=\"You are a customer support assistant.\",\n    tools=____,\n)\n```\n\nWhich value should tools be set to?",
    "choices": [
      {
        "id": "a",
        "text": "\"session\""
      },
      {
        "id": "b",
        "text": "\"{{$conversationId}}\""
      },
      {
        "id": "c",
        "text": "\"{{$userId}}\""
      },
      {
        "id": "d",
        "text": "[mem_store_name]"
      },
      {
        "id": "e",
        "text": "[memory_tool]"
      },
      {
        "id": "f",
        "text": "MemorySearchTool(\"support_mem_store\")"
      }
    ],
    "correctChoiceIds": [
      "e"
    ],
    "explanation": "The agent definition's tools list must contain the configured memory_tool object (already scoped per-user) so the agent can actually call it; passing the raw store name or a fresh, differently-named MemorySearchTool wouldn't use the scope already configured."
  },
  {
    "id": "ai103-78",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a web app named App1 that processes user prompts by integrating with a Microsoft Foundry project named Project1. App1 performs the following actions:\n- Sends prompts directly to a model by using the Azure OpenAI Responses API\n- Invokes the Azure AI Content Safety tool by using a Foundry connection within the same request\n\nYou need to configure end-to-end visibility into each step of the request workflow.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Enable logging by using the client SDK for Content Safety."
      },
      {
        "id": "b",
        "text": "Enable logging by using Foundry Local."
      },
      {
        "id": "c",
        "text": "Enable application tracing in Project1."
      },
      {
        "id": "d",
        "text": "Route requests through the Azure OpenAI endpoint."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Application (distributed) tracing in a Foundry project captures the full request span — including model calls and connected-tool invocations like Content Safety — giving end-to-end visibility across the whole workflow in one place. SDK-only Content Safety logging or Foundry Local logging would only cover a single component, not the complete request chain."
  },
  {
    "id": "ai103-79-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains two agents, PolicyWriter (generates draft updates for customer policies) and RiskReviewer (reviews the drafts). In the visual builder, you need a workflow that finalizes low-risk updates without manual intervention, ensures predictable execution across the agents, and requires user approval for high-risk updates. Which orchestration pattern should you use?",
    "choices": [
      {
        "id": "a",
        "text": "The sequential template that passes outputs node by-node"
      },
      {
        "id": "b",
        "text": "The group chat template to dynamically route control between the agents"
      },
      {
        "id": "c",
        "text": "The human-in-the-loop template that pauses execution of the workflow for input"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The human-in-the-loop template is built to pause a workflow for human input at defined checkpoints, which is what's needed to require approval only for high-risk updates while other paths run automatically and predictably."
  },
  {
    "id": "ai103-79-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains two agents, PolicyWriter (generates draft updates for customer policies) and RiskReviewer (reviews the drafts). In the visual builder, you need a workflow that finalizes low-risk updates without manual intervention and requires user approval for high-risk updates. What should you add to branch the workflow based on risk level?",
    "choices": [
      {
        "id": "a",
        "text": "Add a Basic chat node."
      },
      {
        "id": "b",
        "text": "Add a Condition statement."
      },
      {
        "id": "c",
        "text": "Add an Ask a question node."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A Condition statement evaluates RiskReviewer's risk-level output and branches the workflow accordingly, routing low-risk updates straight through while sending only high-risk updates to an approval checkpoint."
  },
  {
    "id": "ai103-80",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains an agent named Agent1.\n\nAgent runs succeed, but Foundry Control Plane does NOT display values for error rates, runs, and token usage, and the Traces tab is empty.\n\nYou need to ensure that Foundry Control Plane displays the appropriate values for Agent1.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Update Agent1 to a new version."
      },
      {
        "id": "b",
        "text": "Restart Agent from Foundry Control Plane"
      },
      {
        "id": "c",
        "text": "Assign a Log Analytics workspace to Agent1."
      },
      {
        "id": "d",
        "text": "Enable Application Insights for Agent1."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The Foundry Control Plane's monitoring metrics (error rate, run counts, token usage) and Traces tab are populated from Application Insights telemetry, so an Application Insights resource must be connected/enabled for the project or agent before those values appear. A Log Analytics workspace alone, restarting, or versioning the agent does not wire up that telemetry pipeline."
  },
  {
    "id": "ai103-81",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a Microsoft Foundry project that contains an agent.\n\nThe agent uses Azure Content Understanding in Foundry Tools to process vendor onboarding packets. The packets include digital PDFs that contain tables and hyperlinks.\n\nThe extracted content is indexed for search and provided to a downstream agent in the Markdown format.\n\nYou need to generate a Markdown output that has a layout and a semantic structure optimized for Retrieval Augmented Generation (RAG) workflows.\n\nWhich built-in analyzer should you use?",
    "choices": [
      {
        "id": "a",
        "text": "prebuilt-documentFieldSchema"
      },
      {
        "id": "b",
        "text": "prebuilt-documentSearch"
      },
      {
        "id": "c",
        "text": "prebuilt-read"
      },
      {
        "id": "d",
        "text": "prebuilt-layout"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The prebuilt-documentSearch analyzer in Content Understanding is purpose-built to chunk and format document content as RAG-optimized Markdown with preserved semantic structure, which is what a downstream retrieval/search index needs. prebuilt-layout returns structural layout data rather than RAG-ready Markdown, prebuilt-read only does plain OCR text, and documentFieldSchema is for custom field extraction, not chunked Markdown output."
  },
  {
    "id": "ai103-82",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have a Microsoft Foundry project that contains an agent.\n\nThe agent uses Azure AI Search for Retrieval Augmented Generation (RAG).\n\nYou plan to ingest and index PDF product manuals.\n\nYou need to build a solution that supports semantic similarity matching. The solution must ensure that the agent retrieves relevant data when user questions use different wording than the product manuals.\n\nWhich indexing approach should you use?",
    "choices": [
      {
        "id": "a",
        "text": "vector search"
      },
      {
        "id": "b",
        "text": "semantic ranking"
      },
      {
        "id": "c",
        "text": "suggesters"
      },
      {
        "id": "d",
        "text": "analyzers"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Vector search indexes embeddings of the content so that queries are matched by semantic meaning rather than exact keyword overlap, letting the agent find relevant manual content even when the user's wording differs. Semantic ranking re-ranks an existing keyword result set rather than performing the underlying similarity match, and suggesters/analyzers deal with autocomplete and text tokenization, not semantic matching."
  },
  {
    "id": "ai103-83",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have a Microsoft Foundry agent that grounds responses from an Azure AI Search index that contains the following:\n- Searchable text fields for product names and product codes\n- A vector field that stores embeddings for product descriptions\n\nYou need to ensure that users can query the index by using the following:\n- Exact product names or codes\n- Natural language descriptions of the products\n\nWhat should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "vector search only"
      },
      {
        "id": "b",
        "text": "hybrid search"
      },
      {
        "id": "c",
        "text": "keyword search only"
      },
      {
        "id": "d",
        "text": "semantic search only"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Hybrid search runs keyword (BM25) search over the text fields and vector search over the embedding field in the same query and fuses the results, which is needed to satisfy both exact-match lookups on names/codes and semantic matching on natural-language descriptions. Any single mode alone (keyword-only, vector-only, or semantic-only) would miss one of the two requirements."
  },
  {
    "id": "ai103-84",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have an Azure AI Search indexer that ingests PDF policy manuals.\n\nClient applications must display page-level citations that have bounding polygons for both text and images.\n\nYou need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:\n- Provide text and image location metadata.\n- Extract tables that span multiple pages.\n\nWhat should you add?",
    "choices": [
      {
        "id": "a",
        "text": "Document Extraction"
      },
      {
        "id": "b",
        "text": "Azure Content Understanding in Foundry Tools"
      },
      {
        "id": "c",
        "text": "GenAI Prompt"
      },
      {
        "id": "d",
        "text": "Document Layout"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Azure Content Understanding skill for AI Search is the built-in multimodal extraction skill that returns text and image bounding-polygon location metadata together with tables that span pages, in a single skill. Document Extraction and Document Layout skills provide more limited structural output, and GenAI Prompt is for generative enrichment, not structured location metadata."
  },
  {
    "id": "ai103-85",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You are building an Azure AI Search indexing pipeline named Pipeline1 that ingests invoices stored in Azure Blob Storage. The invoices are stored as scanned images.\n\nYou need to enable users to search invoice data across the invoice fields.\n\nWhich built-in skill should you add to the skillset of Pipeline1?",
    "choices": [
      {
        "id": "a",
        "text": "Text Split"
      },
      {
        "id": "b",
        "text": "Text Translation"
      },
      {
        "id": "c",
        "text": "optical character recognition (OCR)"
      },
      {
        "id": "d",
        "text": "Image Analysis"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Because the invoices are scanned images, the content must first be turned into searchable text, which is exactly what the built-in OCR skill does before the text is chunked/indexed. Text Split just chunks existing text, Translation converts language, and Image Analysis tags/describes image content rather than extracting the literal text needed for full-text search."
  },
  {
    "id": "ai103-86-a",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to analyze marketing videos, with video segmentation enabled. You need to configure an analyzer to output a generated JSON field that describes the color scheme of each video segment. Which field value type should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "classify"
      },
      {
        "id": "b",
        "text": "generate"
      },
      {
        "id": "c",
        "text": "group"
      },
      {
        "id": "d",
        "text": "string"
      },
      {
        "id": "e",
        "text": "table"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A free-text description of a segment's color scheme is represented as a string field value, since it's open-ended natural-language output rather than a fixed category, group, or tabular structure."
  },
  {
    "id": "ai103-86-b",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to analyze marketing videos, with video segmentation enabled. You need to configure an analyzer to output a generated JSON field that describes the color scheme of each video segment. Which field method should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "classify"
      },
      {
        "id": "b",
        "text": "generate"
      },
      {
        "id": "c",
        "text": "group"
      },
      {
        "id": "d",
        "text": "string"
      },
      {
        "id": "e",
        "text": "table"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The generate field method has the model produce new descriptive content for the field, which is required here since describing a color scheme is generated text rather than a classification against a fixed label set."
  },
  {
    "id": "ai103-87",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have an invoice-processing application named App1 that uses Azure Content Understanding in Foundry Tools.\n\nYou are building a new Content Understanding pipeline named Pipeline1 that must meet the following requirements:\n- Compare an invoice to its related purchase order\n- Validate the invoice against static vendor contract documents\n- Return a single structured output that includes discrepancy findings\n\nYou need to configure Pipeline1 and expose the pipeline as a single analyzer endpoint. What should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "a single-file task in standard mode that uses the vendor contract provided as an additional document during analysis."
      },
      {
        "id": "b",
        "text": "a single-file task in standard mode that uses confidence scores enabled for the extracted fields."
      },
      {
        "id": "c",
        "text": "a multiple-file task in pro mode that uses the vendor contract files as reference data"
      },
      {
        "id": "d",
        "text": "a multi-file task in standard mode that uses the invoice and purchase order as input to the analyzer"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Cross-document comparison and reasoning (invoice vs. purchase order vs. contract terms, producing discrepancy findings) requires Content Understanding's pro-mode multi-file task, which can accept multiple related documents plus reference data and synthesize a single structured, reasoned output. Standard-mode single- or multi-file tasks extract fields per document but don't perform this kind of cross-document reasoning/comparison."
  },
  {
    "id": "ai103-88",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that generates short promotional product videos.\n\nAfter several clips are approved, reviewers notice a small watermark in the top-right corner of some videos.\n\nYou need to remove the watermark without regenerating the videos.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Modify the original prompt to exclude watermarks."
      },
      {
        "id": "b",
        "text": "Crop the video by using the size parameter."
      },
      {
        "id": "c",
        "text": "Increase the guidance scale."
      },
      {
        "id": "d",
        "text": "Apply a mask-based inpainting edit to the affected part of the video."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A mask-based inpainting edit lets you target just the watermark region of an already-generated video and replace that area's content, fixing the defect without a full, costly regeneration. Changing the prompt or guidance scale only affects future generations, and cropping would cut off legitimate frame content beyond just the watermark corner."
  },
  {
    "id": "ai103-89",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a web app named App1 that sends requests to a multimodal chat model deployment in a Microsoft Foundry project.\n\nUser messages can contain both text and images.\n\nCurrently, App1 includes image URLs as plain text inside the message content so the model cannot recognize them as images.\n\nTraces show that the requests contain a single text message instead of a multimodal content array.\n\nYou need to send the message as a structured array that includes both the text portion and the image reference to ensure that the model can process the image correctly.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Set the user message content array to include items that have type: text and type: image_url."
      },
      {
        "id": "b",
        "text": "Encode the image to base64 and include the encoded data inside the content string of the user message."
      },
      {
        "id": "c",
        "text": "Add the image URL to the request metadata section, so the model can resolve the processing issue automatically."
      },
      {
        "id": "d",
        "text": "Place the image URL inside the System Message and set type to image_url so the model loads the image at initialization."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Multimodal chat completions require the user message's content field to be an array of typed parts — one or more {type: 'text', ...} items and {type: 'image_url', ...} items — rather than a plain string, so the model can distinguish and process each modality. Embedding a base64 string inside a plain content string, hiding the URL in metadata, or putting it in the system message all bypass the documented multimodal content-array format."
  },
  {
    "id": "ai103-90",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You are building a customer support web app named App1 in Microsoft Foundry that uses a GPT realtime model.\n\nApp1 must support:\n- Live, low-latency voice conversations that use Azure OpenAI\n- Streaming audio input from users and playback audio responses\n\nYou need to configure a connection method that supports real-time audio streaming in client applications and targets approximately 100 ms latency.\n\nWhich connection method should you use?",
    "choices": [
      {
        "id": "a",
        "text": "RTMP"
      },
      {
        "id": "b",
        "text": "WebRTC"
      },
      {
        "id": "c",
        "text": "SIP"
      },
      {
        "id": "d",
        "text": "WebSocket"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "WebRTC is the connection method Microsoft recommends for browser/client-based real-time audio with the GPT Realtime API, offering the lowest latency (roughly 100 ms) suited to natural voice conversation. WebSocket also streams audio but with higher latency, and RTMP/SIP are not the supported client transports for this API."
  },
  {
    "id": "ai103-91",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains an agent and uses a GitHub repository. The repository contains a YAML file named File1 that defines the evaluation settings of the agent.\n\nYou need to create a GitHub Actions workflow that runs the evaluation defined in File1 when a pull request (PR) is opened. How should you configure the workflow?",
    "choices": [
      {
        "id": "a",
        "text": "Set project-endpoint to the endpoint of the project."
      },
      {
        "id": "b",
        "text": "Set evaluation-config to the path of the YAML file."
      },
      {
        "id": "c",
        "text": "Set model-deployment-name to the deployed model."
      },
      {
        "id": "d",
        "text": "Set tenant-id to the Microsoft Entra tenant ID"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The Foundry evaluation GitHub Action authenticates and targets the correct Foundry project through the project-endpoint input; the evaluation configuration file path itself is picked up separately from the repository. Setting project-endpoint is the required step called out for wiring the workflow to the right project."
  },
  {
    "id": "ai103-92-a",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent currently uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless-credentials requirement. You need to ensure the agent can retrieve the secrets while following the principle of least privilege. What managed identity scope should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Enable a system-assigned managed identity at the Foundry level."
      },
      {
        "id": "b",
        "text": "Enable a system-assigned managed identity at the project level."
      },
      {
        "id": "c",
        "text": "Create a service principal and store the principal's client secret."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A project-scoped system-assigned managed identity is tied to just the project that hosts this agent, which is narrower and more least-privilege than a Foundry-resource-wide identity; a service principal with a stored client secret reintroduces a stored credential, which is exactly what the keyless requirement forbids."
  },
  {
    "id": "ai103-92-b",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent currently uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless-credentials requirement. You need to ensure the agent can retrieve the secrets while following the principle of least privilege. What Key Vault authorization method should you configure?",
    "choices": [
      {
        "id": "a",
        "text": "Add an API key to application settings."
      },
      {
        "id": "b",
        "text": "Add a Key Vault access policy for the secrets."
      },
      {
        "id": "c",
        "text": "Assign the Key Vault Secrets User role to the managed identity."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Assigning the built-in Key Vault Secrets User RBAC role to the managed identity grants exactly the get/list permissions needed to read secrets, following Azure's recommended RBAC model with least privilege; a legacy access policy is the older, less granular authorization model, and an API key contradicts the keyless requirement entirely."
  },
  {
    "id": "ai103-93",
    "type": "multi",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a customer support application.\n\nYou create an evaluation named Run1 that has the following configurations:\n- Includes risk and safety metrics\n- Includes the protected material evaluation\n- Includes harmful content metrics that use a medium severity threshold\n\nYou create an evaluation named Run2 that has the following configurations:\n- Includes risk and safety metrics\n- Includes the protected material evaluation\n- Includes harmful content metrics that use a high severity threshold\n\nYou run both evaluations against a dataset named DB1 and receive the following results:\n- Content harm defect rate of Run1: 12%\n- Content harm defect rate of Run2: 4%\n- Protected material evaluation of Run1: 6%\n- Protected material evaluation of Run2: 6%\n\nYou start a fine-tuning job by using DB1. The job fails during automatic RAI checks for multiple content harm types. You discover that the content filtering configuration is set to high severity.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "choices": [
      {
        "id": "a",
        "text": "Changing the content filtering configuration to low severity will resolve the fine-tuning job issues."
      },
      {
        "id": "b",
        "text": "The difference between the 12% and 4% content harm defect rate is consistent with the different severity thresholds used in Run1 and Run2."
      },
      {
        "id": "c",
        "text": "The identical 6% protected material evaluation values across Run1 and Run2 indicate that this metric is unaffected by the change in the severity threshold."
      }
    ],
    "correctChoiceIds": [
      "b",
      "c"
    ],
    "explanation": "The fine-tuning job fails because Azure OpenAI's automatic RAI checks on the training data itself flagged multiple content harm types — that's separate from the evaluation content-filtering setting, so lowering the latter won't fix it. Run1 used a medium harmful-content severity threshold (flagging more borderline content, 12% defect rate) and Run2 used a high threshold (flagging less, 4% defect rate), so the drop is consistent with the threshold change. The protected material evaluation doesn't use a severity threshold at all, so it's unaffected and produces identical 6% results in both runs."
  },
  {
    "id": "ai103-94-a",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a multi-agent solution. The agents use tool calling to query internal systems.\n\nYou need to implement responsible AI auditing to meet the following requirements:\n- Capture all the nested operations across the entire agent run.\n- Record tool invocation arguments and returned results as metadata.\n\nWhat should you use to capture all the nested operations across the entire agent run? Each option below may be used once, more than once, or not at all.",
    "choices": [
      {
        "id": "a",
        "text": "Hierarchical spans"
      },
      {
        "id": "b",
        "text": "A KQL query filter"
      },
      {
        "id": "c",
        "text": "Sampling"
      },
      {
        "id": "d",
        "text": "Tool call attributes"
      },
      {
        "id": "e",
        "text": "Trace sampling policy"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Hierarchical spans in distributed tracing capture the full nested call tree of an agent run — planning steps, sub-agent calls, and tool calls all appear as parent/child spans — giving complete visibility into every nested operation across the run."
  },
  {
    "id": "ai103-94-b",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains a multi-agent solution. The agents use tool calling to query internal systems.\n\nYou need to implement responsible AI auditing to meet the following requirements:\n- Capture all the nested operations across the entire agent run (use Hierarchical spans for this).\n- Record tool invocation arguments and returned results as metadata.\n\nWhat should you use to record tool invocation arguments and returned results as metadata? Each option below may be used once, more than once, or not at all.",
    "choices": [
      {
        "id": "a",
        "text": "Hierarchical spans"
      },
      {
        "id": "b",
        "text": "A KQL query filter"
      },
      {
        "id": "c",
        "text": "Sampling"
      },
      {
        "id": "d",
        "text": "Tool call attributes"
      },
      {
        "id": "e",
        "text": "Trace sampling policy"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Tool call attributes are span-level metadata that record the arguments passed into a tool call and the value it returned, which is exactly what's needed to audit tool invocations for responsible AI review."
  },
  {
    "id": "ai103-95-a",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads and calls an Azure OpenAI model deployment.\n\nDuring load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error. Some user uploads fail and generate an HTTP 400 file size exceeded error.\n\nYou need to mitigate the errors and reduce call failures. The solution must remain within the service and model limits.\n\nWhat should you do to resolve the HTTP 429 rate limit exceeded error? Each action below may be used once, more than once, or not at all.",
    "choices": [
      {
        "id": "a",
        "text": "Increase tenant-wide quotas."
      },
      {
        "id": "b",
        "text": "Move large content to files and use file search."
      },
      {
        "id": "c",
        "text": "Use additional agent tools to reduce the message size."
      },
      {
        "id": "d",
        "text": "Implement exponential backoff and jitter in the retry logic."
      },
      {
        "id": "e",
        "text": "Split content into smaller files before uploading the files."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "An HTTP 429 means the caller exceeded the deployment's rate limit. Since the solution must stay within existing service/model limits (ruling out a quota increase), the standard mitigation is to implement exponential backoff with jitter in the retry logic so retried requests spread out instead of immediately re-triggering the limit."
  },
  {
    "id": "ai103-95-b",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads and calls an Azure OpenAI model deployment.\n\nDuring load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error (resolved by implementing exponential backoff and jitter in the retry logic). Some user uploads fail and generate an HTTP 400 file size exceeded error.\n\nYou need to mitigate the errors and reduce call failures. The solution must remain within the service and model limits.\n\nWhat should you do to resolve the HTTP 400 file size exceeded error? Each action below may be used once, more than once, or not at all.",
    "choices": [
      {
        "id": "a",
        "text": "Increase tenant-wide quotas."
      },
      {
        "id": "b",
        "text": "Move large content to files and use file search."
      },
      {
        "id": "c",
        "text": "Use additional agent tools to reduce the message size."
      },
      {
        "id": "d",
        "text": "Implement exponential backoff and jitter in the retry logic."
      },
      {
        "id": "e",
        "text": "Split content into smaller files before uploading the files."
      }
    ],
    "correctChoiceIds": [
      "e"
    ],
    "explanation": "An HTTP 400 file-size-exceeded error means an uploaded file is larger than the per-file limit, so the fix is to split the content into smaller files before uploading — retry logic doesn't help with a size-limit rejection."
  },
  {
    "id": "ai103-96",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have a Microsoft Foundry project.\n\nYou need to deploy a model from the model catalog to support a search solution for internal policy documents. The model must generate vector representations of the text in the documents and of user queries.\n\nWhich type of model should you use?",
    "choices": [
      {
        "id": "a",
        "text": "an embedding model"
      },
      {
        "id": "b",
        "text": "an image generation model"
      },
      {
        "id": "c",
        "text": "a large language model (LLM)"
      },
      {
        "id": "d",
        "text": "a small language model (SLM)"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Generating numeric vector representations of text for similarity search is the defining job of an embedding model; LLMs/SLMs generate text and aren't optimized to produce dense vector embeddings, and image generation models are unrelated to text search."
  },
  {
    "id": "ai103-97",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project.\n\nYou need to deploy a model from the model catalog to support real-time inference. The solution must meet the following requirements:\n- Use key-based authentication.\n- Support real-time REST API access.\n- NOT consume the vCPU quota of the virtual machines in the Azure subscription.\n\nWhich type of deployment should you use?",
    "choices": [
      {
        "id": "a",
        "text": "serverless API"
      },
      {
        "id": "b",
        "text": "batch"
      },
      {
        "id": "c",
        "text": "self-hosted container"
      },
      {
        "id": "d",
        "text": "standard"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A standard deployment is Microsoft's pay-as-you-go, Microsoft-hosted deployment type that offers key-based authentication and real-time REST API access while running on Microsoft-managed compute, so it never draws against your subscription's own vCPU/VM quota. A self-hosted (managed compute) deployment would consume your subscription's vCPU quota, and batch deployments are for asynchronous offline scoring rather than real-time calls."
  },
  {
    "id": "ai103-98-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You plan to create a Microsoft Foundry project named Project1 that will contain an agent and use an Azure key vault named KV1. You need to configure a connection from Project1 to KV1 using Bicep:\n\nresource existingKeyVault 'Microsoft.KeyVault/vaults@2024-11-01' existing = {\n  name: 'KV1'\n  scope: resourceGroup()\n}\nresource connection 'Microsoft.CognitiveSevices/accounts/connections@2025-04-01-preview' = {\n  name: '${aiFoundryName}-keyvault'\n  parent: aiFoundry\n  properties: {\n    category: <BLANK>\n    target: existingKeyVault.id\n    authType: <second blank, answered separately>\n    ...\n  }\n}\n\nWhich value should you use for the category property?",
    "choices": [
      {
        "id": "a",
        "text": "'AzureAIService'"
      },
      {
        "id": "b",
        "text": "'AzureKeyVault'"
      },
      {
        "id": "c",
        "text": "'AzureOpenAI'"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The connection resource targets an existing Key Vault (KV1) via existingKeyVault.id, so the category must be 'AzureKeyVault' to correctly classify this as a key-vault connection in Microsoft Foundry."
  },
  {
    "id": "ai103-98-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You plan to create a Microsoft Foundry project named Project1 that will contain an agent and use an Azure key vault named KV1. You need to configure a connection from Project1 to KV1 using Bicep:\n\nresource existingKeyVault 'Microsoft.KeyVault/vaults@2024-11-01' existing = {\n  name: 'KV1'\n  scope: resourceGroup()\n}\nresource connection 'Microsoft.CognitiveSevices/accounts/connections@2025-04-01-preview' = {\n  name: '${aiFoundryName}-keyvault'\n  parent: aiFoundry\n  properties: {\n    category: 'AzureKeyVault'\n    target: existingKeyVault.id\n    authType: <BLANK>\n    ...\n  }\n}\n\nWhich value should you use for the authType property?",
    "choices": [
      {
        "id": "a",
        "text": "'AccountKey'"
      },
      {
        "id": "b",
        "text": "'AccountManagedIdentity'"
      },
      {
        "id": "c",
        "text": "'ApiKey'"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Using 'AccountManagedIdentity' lets the Foundry project's account authenticate to the key vault with its managed identity instead of a stored secret or API key, matching a keyless, least-privilege access pattern."
  },
  {
    "id": "ai103-99-a",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project. You need to create a customer support agent that meets the following requirements:\n- Grounds responses only in company policy documents stored in curated repositories\n- Retains customer preferences across separate chat sessions\n\nHow should you configure Knowledge grounding for the agent?",
    "choices": [
      {
        "id": "a",
        "text": "Configure retrieval from approved data sources."
      },
      {
        "id": "b",
        "text": "Upload the policy documents direct to the agent."
      },
      {
        "id": "c",
        "text": "Embed the policy documents directly into the agent instructions."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Grounding the agent only in curated, approved repositories means configuring retrieval from those approved data sources, rather than uploading files ad hoc or hard-coding content into the system instructions — this keeps responses scoped to vetted policy documents and lets the source repository stay the single source of truth."
  },
  {
    "id": "ai103-99-b",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project. You need to create a customer support agent that meets the following requirements:\n- Grounds responses only in company policy documents stored in curated repositories (configured via retrieval from approved data sources)\n- Retains customer preferences across separate chat sessions\n\nHow should you configure Memory for the agent?",
    "choices": [
      {
        "id": "a",
        "text": "Use orchestration-managed session context."
      },
      {
        "id": "b",
        "text": "Enable agent memory that uses persistent storage."
      },
      {
        "id": "c",
        "text": "Retain user preferences in the state of the client application."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Retaining customer preferences across separate chat sessions requires memory that persists beyond a single session or thread. Enabling agent memory backed by persistent storage provides this, whereas session-scoped orchestration context or client-side application state would not survive into a new session."
  },
  {
    "id": "ai103-100",
    "type": "single",
    "topic": "Observability & Evaluation",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from retrieved policy documents.\n\nYou need to improve response completeness. The solution must be implemented in the logic of the application code before responses are returned.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Add a retry evaluation before the responses are returned."
      },
      {
        "id": "b",
        "text": "Decrease the value of the temperature parameter."
      },
      {
        "id": "c",
        "text": "Increase the value of the presence_penalty parameter"
      },
      {
        "id": "d",
        "text": "Replace the model with a smaller deployment."
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Adding an application-side retry/evaluation step lets the app score a draft response for completeness and automatically re-generate it before returning an answer to the user, which is application logic executed pre-response as required. Temperature and presence_penalty only tune sampling behavior and don't guarantee completeness, and a smaller model would typically hurt rather than help completeness."
  },
  {
    "id": "ai103-101",
    "type": "multi",
    "topic": "Azure AI Vision",
    "prompt": "You develop a test method to verify the results retrieved from a call to the Azure Vision in Foundry Tools API. The call is used to analyze the existence of company logos in images. The call returns a collection of brands named brands.\n\nYou have the following code segment:\n\nfor brand in image_analysis.brands:\n    if brand.confidence >= 0.75:\n        print(f\"\\nLogo of {brand.name} between {brand.rectangle.x}, {brand.rectangle.y} and {brand.rectangle.w}, {brand.rectangle.h}\")\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "choices": [
      {
        "id": "a",
        "text": "The code will display the name of each detected brand with a confidence equal to or higher than 75 percent."
      },
      {
        "id": "b",
        "text": "The code will display coordinates for the top-left corner of the rectangle that contains the brand logo of the displayed brands."
      },
      {
        "id": "c",
        "text": "The code will display coordinates for the bottom-right corner of the rectangle that contains the brand logo of the displayed brands."
      }
    ],
    "correctChoiceIds": [
      "a",
      "b"
    ],
    "explanation": "The code filters on brand.confidence >= 0.75 and prints brand.name, so it does display each qualifying brand's name (statement A). The Vision API's brand-detection rectangle is defined by x, y (the top-left corner) plus w and h (width and height) — not a second corner — so brand.rectangle.x/y correctly give the top-left corner (statement B), but w and h are dimensions, not bottom-right coordinates, so statement C is false."
  },
  {
    "id": "ai103-102",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have an Azure subscription.\n\nYou plan to build an app that will use the Azure AI DALL-E model.\n\nYou need to deploy the model.\n\nWhat should you use?",
    "choices": [
      {
        "id": "a",
        "text": "the Azure SDK for Python and PowerShell cmdlets."
      },
      {
        "id": "b",
        "text": "the Azure SDK for JavaScript and Azure Machine Learning Studio."
      },
      {
        "id": "c",
        "text": "Microsoft Foundry and the Azure Command Line Interface (CLI)"
      },
      {
        "id": "d",
        "text": "the Azure portal and Microsoft Graph API"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure OpenAI/DALL-E model deployments are created and managed through Microsoft Foundry (portal or SDK) and the Azure CLI, which provide the deployment commands and management surface for these models. The other tool pairings (Graph API, ML Studio, PowerShell for this purpose) are not the standard deployment path for Azure OpenAI models."
  },
  {
    "id": "ai103-103-a",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have an Azure subscription. You need to create a new resource that will generate fictional stores in response to user prompts. The solution must ensure that the resource uses a customer-managed key to protect data.\n\nHow should you complete the script?\n\naz cognitiveservices account create -n myresource -g myResourceGroup --kind <BLANK> --sku S -l WestEurope <second blank, answered separately> '{\n  \"keySource\": \"Microsoft.KeyVault\",\n  \"keyVaultProperties\": {\n    \"keyName\": \"KeyName\",\n    \"keyVersion\": \"secretVersion\",\n    \"keyVaultUri\": \"https://issue23056kv.vault.azure.net/\"\n  }\n}'\n\nWhich value should you use for --kind?",
    "choices": [
      {
        "id": "a",
        "text": "AIServices"
      },
      {
        "id": "b",
        "text": "LanguageAuthoring"
      },
      {
        "id": "c",
        "text": "OpenAI"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Generating content (fictional stores) in response to user prompts is a generative-model task, which requires an Azure OpenAI resource — so --kind must be OpenAI rather than the general multi-service AIServices kind or the Language-authoring kind."
  },
  {
    "id": "ai103-103-b",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have an Azure subscription. You need to create a new resource that will generate fictional stores in response to user prompts. The solution must ensure that the resource uses a customer-managed key to protect data.\n\nHow should you complete the script?\n\naz cognitiveservices account create -n myresource -g myResourceGroup --kind OpenAI --sku S -l WestEurope <BLANK> '{\n  \"keySource\": \"Microsoft.KeyVault\",\n  \"keyVaultProperties\": {\n    \"keyName\": \"KeyName\",\n    \"keyVersion\": \"secretVersion\",\n    \"keyVaultUri\": \"https://issue23056kv.vault.azure.net/\"\n  }\n}'\n\nWhich flag should precede this JSON block?",
    "choices": [
      {
        "id": "a",
        "text": "--api-properties"
      },
      {
        "id": "b",
        "text": "--assign-identity"
      },
      {
        "id": "c",
        "text": "--encryption"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Using a customer-managed key requires the Cognitive Services/Azure OpenAI resource to have a managed identity so it can authenticate to the key vault; the --assign-identity flag enables that identity alongside the key vault configuration."
  },
  {
    "id": "ai103-104-a",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have a Python application that collects customer comments before posting them to a public forum. You need to send a text comment to Azure AI Content Safety and return the self-harm severity from the response.\n\ndef get_self_harm_severity(comment: str) -> int:\n    key = os.environ[\"CONTENT_SAFETY_KEY\"]\n    endpoint = os.environ[\"CONTENT_SAFETY_ENDPOINT\"]\n    client = ContentSafetyClient(endpoint, AzureKeyCredential(key))\n    request = <BLANK>\n    response = <second blank, answered separately>\n    result = next(\n        item for item in response.categories_analysis\n        if item.category == TextCategory.SELF_HARM\n    )\n    return result.severity\n\nWhich expression should you use for request?",
    "choices": [
      {
        "id": "a",
        "text": "AnalyzeTextOptions(categories=comment)"
      },
      {
        "id": "b",
        "text": "AnalyzeTextOptions(text=[comment])"
      },
      {
        "id": "c",
        "text": "AnalyzeTextOptions(text=comment)"
      },
      {
        "id": "d",
        "text": "TextCategory.SELF_HARM(comment)"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The Content Safety SDK's AnalyzeTextOptions constructor takes the text to analyze as a plain string via its text parameter (not a list, and not via a categories parameter), so AnalyzeTextOptions(text=comment) is the correct request object."
  },
  {
    "id": "ai103-104-b",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have a Python application that collects customer comments before posting them to a public forum. You need to send a text comment to Azure AI Content Safety and return the self-harm severity from the response.\n\ndef get_self_harm_severity(comment: str) -> int:\n    key = os.environ[\"CONTENT_SAFETY_KEY\"]\n    endpoint = os.environ[\"CONTENT_SAFETY_ENDPOINT\"]\n    client = ContentSafetyClient(endpoint, AzureKeyCredential(key))\n    request = AnalyzeTextOptions(text=comment)\n    response = <BLANK>\n    result = next(\n        item for item in response.categories_analysis\n        if item.category == TextCategory.SELF_HARM\n    )\n    return result.severity\n\nWhich expression should you use for response?",
    "choices": [
      {
        "id": "a",
        "text": "client.analyze_image(request)"
      },
      {
        "id": "b",
        "text": "client.analyze_text(request)"
      },
      {
        "id": "c",
        "text": "client.moderate_text(request)"
      },
      {
        "id": "d",
        "text": "client.path(\"/text:analyze\").post(request)"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Since the input is text (not an image), the SDK's high-level method for text analysis, analyze_text, is the correct call — client.analyze_text(request) submits the AnalyzeTextOptions request and returns the per-category severity results."
  },
  {
    "id": "ai103-105",
    "type": "single",
    "topic": "Azure AI Language",
    "prompt": "You have a custom named entity recognition (NER) project in Azure Language in Foundry Tools for support tickets. The schema for the project contains an entity type named ContactInfo.\n\nIn tagged training files, ContactInfo is used for phone numbers, email addresses, and social media handles.\n\nModel evaluation shows low precision for ContactInfo, including false positives in which nearby text is extracted as ContactInfo.\n\nYou need to improve the precision of the project.\n\nWhat should you do before retraining the model?",
    "choices": [
      {
        "id": "a",
        "text": "Lower the confidence threshold for ContactInfo."
      },
      {
        "id": "b",
        "text": "Trigger an auto-labeling job."
      },
      {
        "id": "c",
        "text": "Add more support tickets as training data and label more ContactInfo entities."
      },
      {
        "id": "d",
        "text": "Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A single broad ContactInfo label lumping together three distinct, differently-shaped patterns (phone, email, handle) makes it easy for the model to over-generalize and pick up nearby text as false positives; splitting it into narrower, more consistent entity types and relabeling gives the model cleaner, more separable patterns to learn, improving precision. Lowering the confidence threshold would increase false positives further, and simply adding more data or auto-labeling under the same overloaded schema wouldn't fix the underlying ambiguity."
  },
  {
    "id": "ai103-106",
    "type": "single",
    "topic": "Azure AI Speech",
    "prompt": "You are building a text-to-speech solution that uses Azure Speech in Foundry Tools to read instructions from the script in a text file.\n\nYou discover that the solution often pronounces technical terms incorrectly.\n\nYou need to prevent the incorrect pronunciations. The solution must minimize development effort.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "From Speech Studio, train a custom neural voice"
      },
      {
        "id": "b",
        "text": "Use Speech Synthesis Markup Language (SSML) to specify phonemes."
      },
      {
        "id": "c",
        "text": "Use Speech Synthesis Markup Language (SSML) to apply say-as rules."
      },
      {
        "id": "d",
        "text": "Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice."
      },
      {
        "id": "e",
        "text": "From Azure OpenAI use the Whisper model."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The SSML <phoneme> element lets you specify the exact phonetic pronunciation for individual technical terms, correcting mispronunciations with minimal effort compared to training a whole custom neural voice. say-as controls how the text is interpreted (e.g., as a date or number) rather than phonetics, prosody adjusts pitch/rate/volume, and Whisper is a speech-to-text model, not text-to-speech."
  },
  {
    "id": "ai103-107",
    "type": "multi",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You have a Python application that redacts sensitive information before sending prompt text to a language model. The application has the following code:\n\nsample_text = \"Contact John Doe at 312-555-1234 or john.doe@contoso.com. His SSN is 859-98-0987.\"\n\ndef redact_for_model(input_text):\n    payload = {\n        \"kind\": \"PiiEntityRecognition\",\n        \"parameters\": {\n            \"modelVersion\": \"latest\",\n            \"piiCategories\": [\"Person\", \"PhoneNumber\"],\n            \"redactionPolicies\": [\n                { \"policyKind\": \"entityMask\" }\n            ]\n        },\n        \"analysisInput\": {\n            \"documents\": [\n                { \"id\": \"1\", \"language\": \"en\", \"text\": input_text }\n            ]\n        }\n    }\n    ...\n    return {\n        \"text_for_model\": doc.get(\"redactedText\", \"\"),\n        \"audit\": [\n            (entity[\"text\"], entity[\"category\"], entity[\"confidenceScore\"])\n            for entity in doc[\"entities\"]\n        ]\n    }\nresult = redact_for_model(sample_text)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "choices": [
      {
        "id": "a",
        "text": "For sample_text, audit will include entity records for Contact and SSN."
      },
      {
        "id": "b",
        "text": "For sample_text, text_for_model will include john.doe@contoso.com and 859-98-0987."
      },
      {
        "id": "c",
        "text": "For sample_text, text_for_model will contain entity type masks for John Doe and 312-555-1234."
      }
    ],
    "correctChoiceIds": [
      "b",
      "c"
    ],
    "explanation": "The piiCategories parameter is scoped to only [\"Person\", \"PhoneNumber\"], so only entities of those two categories are detected and returned — there's no \"Contact\" or SSN category requested, so audit won't contain Contact/SSN entries (statement A is false). Because email and SSN aren't in the requested categories, they pass through unredacted into text_for_model (statement B true), while John Doe (Person) and the phone number (PhoneNumber) are replaced with entity-type masks per the entityMask redaction policy (statement C true)."
  },
  {
    "id": "ai103-108-a",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are developing an application that will detect faulty components produced on a factory production line. The components are specific to your business. You need to use the Azure Custom Vision API to help detect common faults. Which action should you perform first?",
    "choices": [
      {
        "id": "a",
        "text": "Initialize the training dataset."
      },
      {
        "id": "b",
        "text": "Train the classifier model."
      },
      {
        "id": "c",
        "text": "Create a project."
      },
      {
        "id": "d",
        "text": "Upload and tag images."
      },
      {
        "id": "e",
        "text": "Train the object detection model."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Every Custom Vision workflow begins with creating a project (choosing the project type and domain) before any images can be uploaded or training can occur."
  },
  {
    "id": "ai103-108-b",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are developing an application that will detect faulty components produced on a factory production line. The components are specific to your business. You need to use the Azure Custom Vision API to help detect common faults. After creating a project, which action should you perform next?",
    "choices": [
      {
        "id": "a",
        "text": "Initialize the training dataset."
      },
      {
        "id": "b",
        "text": "Train the classifier model."
      },
      {
        "id": "c",
        "text": "Create a project."
      },
      {
        "id": "d",
        "text": "Upload and tag images."
      },
      {
        "id": "e",
        "text": "Train the object detection model."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "After the project exists, you upload sample images of components and tag/label the fault regions so the model has labeled training data to learn from."
  },
  {
    "id": "ai103-108-c",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are developing an application that will detect faulty components produced on a factory production line. The components are specific to your business. You need to use the Azure Custom Vision API to help detect common faults. After creating a project and uploading/tagging images, which action should you perform next?",
    "choices": [
      {
        "id": "a",
        "text": "Initialize the training dataset."
      },
      {
        "id": "b",
        "text": "Train the classifier model."
      },
      {
        "id": "c",
        "text": "Create a project."
      },
      {
        "id": "d",
        "text": "Upload and tag images."
      },
      {
        "id": "e",
        "text": "Train the object detection model."
      }
    ],
    "correctChoiceIds": [
      "e"
    ],
    "explanation": "Detecting faults (locating defects on components) is an object-detection task rather than whole-image classification, so once images are uploaded and tagged, you train the object detection model."
  },
  {
    "id": "ai103-109",
    "type": "single",
    "topic": "Responsible AI & Content Safety",
    "prompt": "You are developing a new sales system that will process user-generated video and text from a public-facing website.\n\nYou plan to notify users that their data has been processed by the sales system.\n\nWhich responsible AI principle does this help meet?",
    "choices": [
      {
        "id": "a",
        "text": "fairness"
      },
      {
        "id": "b",
        "text": "transparency"
      },
      {
        "id": "c",
        "text": "inclusiveness"
      },
      {
        "id": "d",
        "text": "reliability and safety"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Informing users that their data is being processed by an AI system is a core transparency practice under Microsoft's Responsible AI principles — giving people clear disclosure about how their data and content are used. Fairness concerns equitable treatment across groups, inclusiveness concerns accessibility/empowerment, and reliability & safety concerns robust, safe operation, none of which is what a disclosure notice addresses."
  },
  {
    "id": "ai103-110",
    "type": "single",
    "topic": "Azure AI Language",
    "prompt": "You are designing a content management system.\n\nYou need to ensure that the reading experience is optimized for users who have reduced comprehension and learning differences, such as dyslexia. The solution must minimize development effort.\n\nWhich Azure service should you include in the solution?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Document Intelligence in Foundry Tools"
      },
      {
        "id": "b",
        "text": "Azure Language in Foundry Tools"
      },
      {
        "id": "c",
        "text": "Azure AI Immersive Reader"
      },
      {
        "id": "d",
        "text": "Azure Translator in Foundry Tools"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure AI Immersive Reader is purpose-built to improve reading comprehension for users with learning differences such as dyslexia (text spacing, syllabification, read-aloud, picture dictionary) and can be embedded with minimal custom development via its SDK. Document Intelligence, Language, and Translator solve extraction, text analytics, and translation problems, not accessible-reading UX."
  },
  {
    "id": "ai103-111",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have an Azure subscription that contains an Azure App Service app named App1.\n\nYou provision a Microsoft Foundry Service resource named CSAccount1.\n\nYou need to configure App1 to access CSAccount1. The solution must minimize administrative effort.\n\nWhat should you use to configure App1?",
    "choices": [
      {
        "id": "a",
        "text": "the endpoint URI and subscription key"
      },
      {
        "id": "b",
        "text": "the endpoint URI and an OAuth token"
      },
      {
        "id": "c",
        "text": "the endpoint URI and a shared access signature (SAS) token"
      },
      {
        "id": "d",
        "text": "a system assigned managed identity and an X.509 certificate"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The simplest, lowest-effort way to call a Foundry/Cognitive Services resource from an app is its endpoint URI plus one of its subscription (API) keys — no certificate provisioning, token exchange, or identity federation setup required. SAS tokens and X.509 certificates aren't how these AI resources are authenticated, and a bare OAuth token flow requires more setup than a key."
  },
  {
    "id": "ai103-112-a",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a web app that uses Azure AI Search. When reviewing activity you see greater than expected search query volumes. You suspect that the query key is compromised. You need to prevent unauthorized access to the search endpoint and ensure that users only have read-only access to the documents collection. The solution must minimize app downtime. Which action should you perform first?",
    "choices": [
      {
        "id": "a",
        "text": "Regenerate the primary admin key"
      },
      {
        "id": "b",
        "text": "Regenerate the secondary admin key"
      },
      {
        "id": "c",
        "text": "Change the app to use the secondary admin key"
      },
      {
        "id": "d",
        "text": "Add a new query key"
      },
      {
        "id": "e",
        "text": "Change the app to use the new key"
      },
      {
        "id": "f",
        "text": "Delete the compromised key"
      }
    ],
    "correctChoiceIds": [
      "f"
    ],
    "explanation": "Since the compromised credential is a read-only query key (not an admin key), the fastest way to cut off unauthorized access is to delete that specific compromised query key immediately."
  },
  {
    "id": "ai103-112-b",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a web app that uses Azure AI Search. When reviewing activity you see greater than expected search query volumes. You suspect that the query key is compromised. You need to prevent unauthorized access to the search endpoint and ensure that users only have read-only access to the documents collection. The solution must minimize app downtime. After deleting the compromised key, which action should you perform next?",
    "choices": [
      {
        "id": "a",
        "text": "Regenerate the primary admin key"
      },
      {
        "id": "b",
        "text": "Regenerate the secondary admin key"
      },
      {
        "id": "c",
        "text": "Change the app to use the secondary admin key"
      },
      {
        "id": "d",
        "text": "Add a new query key"
      },
      {
        "id": "e",
        "text": "Change the app to use the new key"
      },
      {
        "id": "f",
        "text": "Delete the compromised key"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "A new read-only query key must be provisioned so the app can continue to have read-only search access after the compromised key was removed."
  },
  {
    "id": "ai103-112-c",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You have a web app that uses Azure AI Search. When reviewing activity you see greater than expected search query volumes. You suspect that the query key is compromised. You need to prevent unauthorized access to the search endpoint and ensure that users only have read-only access to the documents collection. The solution must minimize app downtime. After deleting the compromised key and adding a new query key, which action should you perform next?",
    "choices": [
      {
        "id": "a",
        "text": "Regenerate the primary admin key"
      },
      {
        "id": "b",
        "text": "Regenerate the secondary admin key"
      },
      {
        "id": "c",
        "text": "Change the app to use the secondary admin key"
      },
      {
        "id": "d",
        "text": "Add a new query key"
      },
      {
        "id": "e",
        "text": "Change the app to use the new key"
      },
      {
        "id": "f",
        "text": "Delete the compromised key"
      }
    ],
    "correctChoiceIds": [
      "e"
    ],
    "explanation": "Finally, the app's configuration is updated to use the newly created query key, restoring read-only search functionality with minimal downtime, without touching the admin keys at all (which would unnecessarily break write/management access)."
  },
  {
    "id": "ai103-113-a",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You need to create a new resource that will be used to perform sentiment analysis and optical character recognition (OCR). The solution must meet the following requirements:\n- Use a single key and endpoint to access multiple services.\n- Consolidate billing for future services that you might use.\n- Support the use of Azure Vision in Foundry Tools in the future.\n\nHow should you complete the HTTP request to create the new resource?\n\n<BLANK METHOD> https://management.azure.com/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/RG1/providers/Microsoft.CognitiveService/accounts/CS1?api-version=2021-04-30\n{\n  \"location\": \"West US\",\n  \"kind\": \"<second blank, answered separately>\",\n  \"sku\": { \"name\": \"S0\" },\n  \"properties\": {},\n  \"identity\": { \"type\": \"SystemAssigned\" }\n}\n\nWhich HTTP method should you use?",
    "choices": [
      {
        "id": "a",
        "text": "PATCH"
      },
      {
        "id": "b",
        "text": "POST"
      },
      {
        "id": "c",
        "text": "PUT"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Creating (fully defining) a Cognitive Services account via the Azure Resource Manager REST API is done with a PUT request to the resource's URI. POST is not used for this resource-creation call, and PATCH is reserved for partial updates to an existing resource."
  },
  {
    "id": "ai103-113-b",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You need to create a new resource that will be used to perform sentiment analysis and optical character recognition (OCR). The solution must meet the following requirements:\n- Use a single key and endpoint to access multiple services.\n- Consolidate billing for future services that you might use.\n- Support the use of Azure Vision in Foundry Tools in the future.\n\nHow should you complete the HTTP request to create the new resource?\n\nPUT https://management.azure.com/subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/resourceGroups/RG1/providers/Microsoft.CognitiveService/accounts/CS1?api-version=2021-04-30\n{\n  \"location\": \"West US\",\n  \"kind\": \"<BLANK>\",\n  \"sku\": { \"name\": \"S0\" },\n  \"properties\": {},\n  \"identity\": { \"type\": \"SystemAssigned\" }\n}\n\nWhich value should you use for kind?",
    "choices": [
      {
        "id": "a",
        "text": "CognitiveServices"
      },
      {
        "id": "b",
        "text": "ComputerVision"
      },
      {
        "id": "c",
        "text": "TextAnalytics"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Because the solution must use a single key/endpoint for multiple services (sentiment analysis plus OCR), consolidate billing, and support future Vision capabilities, the account kind must be the multi-service \"CognitiveServices\" kind rather than a single-service ComputerVision-only or TextAnalytics-only account."
  },
  {
    "id": "ai103-114-a",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are building a model to detect objects in images. The performance of the model based on training data, shown in the Custom Vision portal's Performance tab for Iteration 1, is: Precision 100.0%, Recall 25.0%, mAP 77.2%.\n\nUse the drop-down menu to select the answer choice that completes this statement based on the information presented: \"The percentage of false positives is:\"",
    "choices": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "25"
      },
      {
        "id": "c",
        "text": "30"
      },
      {
        "id": "d",
        "text": "50"
      },
      {
        "id": "e",
        "text": "100"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Precision = TP / (TP + FP). A precision of 100% is only possible when there are zero false positives, so the false-positive percentage is 0."
  },
  {
    "id": "ai103-114-b",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are building a model to detect objects in images. The performance of the model based on training data, shown in the Custom Vision portal's Performance tab for Iteration 1, is: Precision 100.0%, Recall 25.0%, mAP 77.2%.\n\nUse the drop-down menu to select the answer choice that completes this statement based on the information presented: \"The value for the number of true positives divided by the total number of true positives and false negatives is:\"",
    "choices": [
      {
        "id": "a",
        "text": "0"
      },
      {
        "id": "b",
        "text": "25"
      },
      {
        "id": "c",
        "text": "30"
      },
      {
        "id": "d",
        "text": "50"
      },
      {
        "id": "e",
        "text": "100"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "TP / (TP + FN) is precisely the definition of recall, and the exhibit reports Recall = 25.0%, so that value is 25."
  },
  {
    "id": "ai103-115",
    "type": "multi",
    "topic": "Azure AI Search & RAG",
    "prompt": "You are developing an application that will use Azure AI Search for internal documents.\n\nYou need to implement document-level filtering for Azure AI Search.\n\nWhich three actions should you include in the solution? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "Add allowed groups to each index entry"
      },
      {
        "id": "b",
        "text": "Create one index per group."
      },
      {
        "id": "c",
        "text": "Send access tokens from Microsoft Entra ID, with the search request."
      },
      {
        "id": "d",
        "text": "Retrieve all the groups."
      },
      {
        "id": "e",
        "text": "Retrieve the group memberships of the user"
      },
      {
        "id": "f",
        "text": "Supply the groups as a filter for the search requests"
      }
    ],
    "correctChoiceIds": [
      "a",
      "e",
      "f"
    ],
    "explanation": "Document-level (security-trimming) access control in Azure AI Search is implemented at the application layer: tag each index document with the Entra security groups allowed to see it, look up the requesting user's own group memberships, and pass those group IDs as an OData filter on the search query so results are trimmed to only what the user can access. Creating a separate index per group doesn't scale and isn't the documented pattern, and Azure AI Search itself doesn't natively enforce Entra tokens for row-level filtering."
  },
  {
    "id": "ai103-116",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have an Azure AI Search indexer that ingests PDF policy manuals.\n\nClient applications must display page-level citations that have bounding polygons for both text and images.\n\nYou need to add a single built-in multimodal content extraction skill to the Azure AI Search skillset. The solution must meet the following requirements:\n- Provide text and image location metadata.\n- Extract tables that span multiple pages.\n\nWhat should you add?",
    "choices": [
      {
        "id": "a",
        "text": "Document Layout"
      },
      {
        "id": "b",
        "text": "Document Extraction"
      },
      {
        "id": "c",
        "text": "Azure Content Understanding"
      },
      {
        "id": "d",
        "text": "GenAI Prompt"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "As in the earlier duplicate of this scenario, Azure Content Understanding is the single built-in skill that returns both text and image bounding-polygon location metadata plus multi-page table extraction in one pass. Document Layout/Extraction skills provide narrower structural output and GenAI Prompt is for generative enrichment rather than structured location metadata."
  },
  {
    "id": "ai103-117-a",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains unstructured JSON data and the text from scanned PDF documents. Which projection type should you use for the JSON data?",
    "choices": [
      {
        "id": "a",
        "text": "File projection"
      },
      {
        "id": "b",
        "text": "Object projection"
      },
      {
        "id": "c",
        "text": "Table projection"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Unstructured JSON documents map naturally onto Azure AI Search knowledge-store object projections, which store each enriched JSON object as a document (e.g., as a JSON blob), preserving its structure."
  },
  {
    "id": "ai103-117-b",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains unstructured JSON data (projected using object projection) and the text extracted from scanned PDF documents. Which projection type should you use for the extracted text data?",
    "choices": [
      {
        "id": "a",
        "text": "File projection"
      },
      {
        "id": "b",
        "text": "Object projection"
      },
      {
        "id": "c",
        "text": "Table projection"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Extracted/normalized content such as OCR'd text or images from scanned PDFs is best captured with a file projection, which stores the raw extracted content as a blob file in the knowledge store."
  },
  {
    "id": "ai103-118-a",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are building a custom vision model that will be deployed as part of an iOS app. You have images of cats and dogs. Each image contains either a cat or a dog. You need to use the Azure Custom Vision service to detect whether the image is of a cat or a dog. Which Project Type should you choose?",
    "choices": [
      {
        "id": "a",
        "text": "Classification"
      },
      {
        "id": "b",
        "text": "Object Detection"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Each image is a whole photo of either a cat or a dog, and the task is to classify the entire image rather than locate an object within it, so a Classification project is appropriate, not Object Detection."
  },
  {
    "id": "ai103-118-b",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are building a custom vision model that will be deployed as part of an iOS app. You have images of cats and dogs. Each image contains either a cat or a dog. You need to use the Azure Custom Vision service to detect whether the image is of a cat or a dog. You configure the project as a Classification project. Which Classification Type should you choose?",
    "choices": [
      {
        "id": "a",
        "text": "Multiclass (Single tag per image)"
      },
      {
        "id": "b",
        "text": "Multilabel (Multiple tags per image)"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "Each image contains either a cat or a dog — exactly one label applies per image — so Multiclass classification (single tag per image) is correct rather than Multilabel, which is for images that can have several simultaneous tags."
  },
  {
    "id": "ai103-118-c",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are building a custom vision model that will be deployed as part of an iOS app. You have images of cats and dogs. Each image contains either a cat or a dog. You need to use the Azure Custom Vision service to detect whether the image is of a cat or a dog. You configure the project as a Multiclass Classification project. Which Domain should you choose?",
    "choices": [
      {
        "id": "a",
        "text": "Adult"
      },
      {
        "id": "b",
        "text": "Food"
      },
      {
        "id": "c",
        "text": "General"
      },
      {
        "id": "d",
        "text": "General (compact)"
      },
      {
        "id": "e",
        "text": "Landmarks"
      },
      {
        "id": "f",
        "text": "Landmarks (compact)"
      },
      {
        "id": "g",
        "text": "Retail"
      },
      {
        "id": "h",
        "text": "Retail (compact)"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Because the model will be deployed as part of a mobile (iOS) app, a compact domain that can be exported to an on-device format is required. \"General (compact)\" is the general-purpose compact domain suited to a simple cat-vs-dog classification task, with no need for a more specialized domain like Retail or Landmarks."
  },
  {
    "id": "ai103-119",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol (MCP) tool named kbsearch that queries a knowledge base stored in Azure AI Search.\n\nSome agent runs return answers from the base model without invoking the knowledge base, which results in responses without grounded citations.\n\nYou are provided with a code snippet that runs the agent.\n\nYou need to deterministically force the agent to invoke kbsearch on each run.\n\nWhat should you do?",
    "choices": [
      {
        "id": "a",
        "text": "Add the response_format parameter to the create_and_process() method call."
      },
      {
        "id": "b",
        "text": "Replace the create_and_process() method with the create_thread_and_process_run() method."
      },
      {
        "id": "c",
        "text": "Add the toolset parameter to the create_and_process() method call."
      },
      {
        "id": "d",
        "text": "Add the tool_choice parameter to the create_and_process() method call."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Setting tool_choice to explicitly name the kbsearch tool forces the model to call it on that run instead of optionally deciding to answer from parametric knowledge, guaranteeing grounded, cited responses. response_format only shapes the output schema, toolset just registers which tools are available (not which must be used), and swapping the run-creation method doesn't affect tool invocation behavior."
  },
  {
    "id": "ai103-120",
    "type": "single",
    "topic": "Azure AI Language",
    "prompt": "You are developing a text processing solution.\n\nYou have the following function.\n\nYou call the function and use the following string as the second argument:\n\nOur tour of London included a visit to Buckingham Palace\n\nWhat will be the output of the function?",
    "choices": [
      {
        "id": "a",
        "text": "London and Buckingham Palace only"
      },
      {
        "id": "b",
        "text": "Tour and visit only"
      },
      {
        "id": "c",
        "text": "Our tour of London included a visit to Buckingham Palace"
      },
      {
        "id": "d",
        "text": "London and Tour only"
      }
    ],
    "correctChoiceIds": [
      "a"
    ],
    "explanation": "The described function behaves like a named-entity/key-phrase extraction call that pulls out proper nouns (place names), so it returns only the capitalized location entities — London and Buckingham Palace — rather than the full sentence or generic nouns/verbs like 'tour' and 'visit'."
  },
  {
    "id": "ai103-121",
    "type": "multi",
    "topic": "Azure AI Language",
    "prompt": "You are building a solution that students will use to find references for essays. You use the following code to start building the solution:\n\nfrom azure.core.credentials import AzureKeyCredential\nfrom azure.ai.textanalytics import TextAnalyticsClient\n\nendpoint = os.environ[\"AZURE_TEXT_ANALYTICS_ENDPOINT\"]\nkey = os.environ[\"AZURE_TEXT_ANALYTICS_KEY\"]\n\ntext_analytics_client = TextAnalyticsClient(endpoint=endpoint, credential=AzureKeyCredential(key))\ndocuments = [\n    \"\"\"\n    Our tour guide took us up the Space Needle during our trip to Seattle last week.\n    \"\"\"\n]\n\nresult = text_analytics_client.recognize_linked_entities(documents)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "choices": [
      {
        "id": "a",
        "text": "The code will detect the language of documents."
      },
      {
        "id": "b",
        "text": "The url attribute returned for each linked entity will be a Bing search link."
      },
      {
        "id": "c",
        "text": "The matches attribute returned for each linked entity will provide the location in a document where the entity is referenced."
      }
    ],
    "correctChoiceIds": [
      "b",
      "c"
    ],
    "explanation": "recognize_linked_entities performs entity linking, not language detection, so statement A is false — a separate detect_language call would be needed. Each linked entity's url attribute points to the entity's Wikipedia article via a Bing-generated data source link (statement B true), and the matches collection reports the offset, length, and confidence of each mention of that entity within the document — i.e., where it's referenced (statement C true)."
  },
  {
    "id": "ai103-122-a",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project for a support ticket triage app that reads ticket text from a database. You need to ensure that the app meets the following requirements:\n- Compares candidate models by quality, cost, and throughput\n- Prevents hosting model weights in the Azure subscription\n\nWhat should you configure for Model evaluation?",
    "choices": [
      {
        "id": "a",
        "text": "Configure private endpoint access."
      },
      {
        "id": "b",
        "text": "Use deployment lists and license tabs."
      },
      {
        "id": "c",
        "text": "Use tool catalog connections and run traces."
      },
      {
        "id": "d",
        "text": "Use model catalog leaderboards and model cards."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Comparing candidate models by quality, cost, and throughput is exactly what the Microsoft Foundry model catalog's leaderboards and model cards provide, letting you benchmark models before selecting one for deployment."
  },
  {
    "id": "ai103-122-b",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have a Microsoft Foundry project for a support ticket triage app that reads ticket text from a database. You need to ensure that the app meets the following requirements:\n- Compares candidate models by quality, cost, and throughput (via model catalog leaderboards and model cards)\n- Prevents hosting model weights in the Azure subscription\n\nWhat should you configure for Deployment option?",
    "choices": [
      {
        "id": "a",
        "text": "Bring your own model."
      },
      {
        "id": "b",
        "text": "Build a vector index."
      },
      {
        "id": "c",
        "text": "Use a serverless deployment."
      },
      {
        "id": "d",
        "text": "Use a managed compute deployment."
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "A serverless (pay-as-you-go, models-as-a-service) deployment runs the model on Microsoft-hosted infrastructure without hosting the model weights in your own Azure subscription, unlike a managed compute deployment, which provisions dedicated VMs that host the weights directly."
  },
  {
    "id": "ai103-123",
    "type": "single",
    "topic": "Azure AI Search & RAG",
    "prompt": "You have an Azure subscription.\n\nYou need to build an app that will compare documents for semantic similarity. The solution must meet the following requirements:\n- Return numeric vectors that represent the tokens of each document.\n- Minimize development effort.\n\nWhich Azure OpenAI model should you use?",
    "choices": [
      {
        "id": "a",
        "text": "GPT-3.5"
      },
      {
        "id": "b",
        "text": "embeddings"
      },
      {
        "id": "c",
        "text": "GPT-4"
      },
      {
        "id": "d",
        "text": "DALL-E"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "An embeddings model is specifically designed to turn text into numeric vectors that can be compared (e.g., via cosine similarity) to measure semantic closeness between documents. GPT-3.5/GPT-4 are chat/completion models and DALL-E generates images, none of which are built to output comparable similarity vectors with minimal effort."
  },
  {
    "id": "ai103-124",
    "type": "multi",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You are building an app that will provide users with definitions of common AI terms. You create the following Python code:\n\n...\nopenai.api_key = key\nopenai.api_base = endpoint\nresponse = openai.ChatCompletion.create(\n    engine=deployment_name,\n    messages=[\n        {\"role\": \"system\", \"content\": \"You are a helpful assistant.\"},\n        {\"role\": \"user\", \"content\": \"What is an LLM?\"}\n    ]\n)\nprint(response['choices'][0]['message']['content'])\n...\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "choices": [
      {
        "id": "a",
        "text": "The response will contain an explanation of large language models (LLMs) that has a high degree of certainty."
      },
      {
        "id": "b",
        "text": "Changing \"What is an LLM?\" to \"What is an LLM in the context of AI models?\" will produce the intended response."
      },
      {
        "id": "c",
        "text": "Changing \"You are a helpful assistant.\" to \"You must answer only within the context of AI language models.\" will give a higher likelihood of producing the intended response."
      }
    ],
    "correctChoiceIds": [
      "b",
      "c"
    ],
    "explanation": "\"LLM\" is ambiguous outside context (it can also mean Master of Laws, a legal degree, among other things), so as written the model has no guaranteed high-certainty AI-specific answer — statement A is false. Making the user question more specific (\"in the context of AI models\") and/or tightening the system message to scope answers to AI/language-model terminology both reduce ambiguity and increase the likelihood the model returns the intended definition, so statements B and C are true."
  },
  {
    "id": "ai103-125",
    "type": "single",
    "topic": "Model Deployment & Scaling",
    "prompt": "You have an Azure OpenAI model named AI1.\n\nYou are building a web app named App1 by using the Azure OpenAI SDK.\n\nYou need to configure App1 to connect to AI1.\n\nWhat information must you provide?",
    "choices": [
      {
        "id": "a",
        "text": "the deployment name, key, and model name"
      },
      {
        "id": "b",
        "text": "the endpoint, key, and model type"
      },
      {
        "id": "c",
        "text": "the deployment name, endpoint, and key"
      },
      {
        "id": "d",
        "text": "the endpoint, key, and model name"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The Azure OpenAI SDK addresses a specific model instance by its deployment name, targets the resource via its endpoint URL, and authenticates with the resource's API key — that's the minimal set of values needed to connect. Model name/type alone isn't sufficient since Azure OpenAI routes calls by deployment name, not the underlying base model name."
  },
  {
    "id": "ai103-126",
    "type": "single",
    "topic": "Security & Networking",
    "prompt": "You are building a solution in Azure that will use Azure Language in Foundry Tools service to process sensitive customer data.\n\nYou need to ensure that only specific Azure processes can access the Language service. The solution must minimize administrative effort.\n\nWhat should you include in the solution?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Application Gateway"
      },
      {
        "id": "b",
        "text": "a virtual network gateway"
      },
      {
        "id": "c",
        "text": "IPsec rules"
      },
      {
        "id": "d",
        "text": "virtual network rules"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Configuring virtual network rules on the Cognitive Services/Language resource restricts access to specific subnets/virtual networks with just a network-rule configuration change, requiring far less setup than deploying an Application Gateway, VPN gateway, or manual IPsec rules."
  },
  {
    "id": "ai103-127",
    "type": "multi",
    "topic": "Security & Networking",
    "prompt": "You have an Azure subscription that contains a Microsoft Foundry Service resource named CSAccount1 and a virtual network named VNet1. CSAccount1 is connected to VNet1.\n\nYou need to ensure that only specific resources can access CSAccount1. The solution must meet the following requirements:\n- Prevent external access to CSAccount1.\n- Minimize administrative effort.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct answer is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "In CSAccount1, modify the virtual network settings."
      },
      {
        "id": "b",
        "text": "In VNet1, create a virtual subnet."
      },
      {
        "id": "c",
        "text": "In VNet1, enable a service endpoint for CSAccount1."
      },
      {
        "id": "d",
        "text": "In CSAccount1, configure the Access control (IAM) settings."
      },
      {
        "id": "e",
        "text": "In VNet1, modify the virtual network settings."
      }
    ],
    "correctChoiceIds": [
      "a",
      "c"
    ],
    "explanation": "Restricting a Cognitive Services/Foundry resource to a specific virtual network requires enabling a service endpoint for that resource type on the subnet in VNet1, and then adding that virtual network/subnet to the resource's own network-rule (firewall) settings so only traffic from it is allowed. IAM/RBAC controls identity permissions rather than network-level access, and creating a new subnet or general VNet settings changes aren't themselves what locks down access to the resource."
  },
  {
    "id": "ai103-128-a",
    "type": "single",
    "topic": "Azure AI Document Intelligence",
    "prompt": "You have a collection of press releases stored as PDF files. You need to extract text from the files and perform sentiment analysis. Which service should you use to extract text?",
    "choices": [
      {
        "id": "a",
        "text": "Azure AI Search"
      },
      {
        "id": "b",
        "text": "Azure Vision in Foundry Tools"
      },
      {
        "id": "c",
        "text": "Azure Document Intelligence in Foundry Tools"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Extracting text and structure from PDF documents like press releases is the core purpose of Azure Document Intelligence's prebuilt Read/Layout models."
  },
  {
    "id": "ai103-128-b",
    "type": "single",
    "topic": "Azure AI Language",
    "prompt": "You have a collection of press releases stored as PDF files. You need to extract text from the files (using Azure Document Intelligence) and perform sentiment analysis. Which service should you use to perform sentiment analysis?",
    "choices": [
      {
        "id": "a",
        "text": "Azure AI Search"
      },
      {
        "id": "b",
        "text": "Azure AI Computer Vision"
      },
      {
        "id": "c",
        "text": "Azure Document Intelligence in Foundry Tools"
      },
      {
        "id": "d",
        "text": "Azure Language in Foundry Tools"
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "Sentiment analysis is a text-analytics capability provided by Azure AI Language, which analyzes extracted text and returns positive/negative/neutral sentiment scores."
  },
  {
    "id": "ai103-129",
    "type": "single",
    "topic": "Azure Custom Vision",
    "prompt": "You are designing an Azure AI solution to identify defective products on a production line.\n\nYou have a real-time video feed and an image library of sample products that are approved or rejected manually.\n\nYou need to recommend a service that meets the following requirements:\n- Monitors the video feed and identifies the defective products.\n- Can train a new model by using the image library.\n- Minimizes development effort.\n\nWhat should you recommend?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Vision in Foundry Tools"
      },
      {
        "id": "b",
        "text": "Azure AI Video Indexer"
      },
      {
        "id": "c",
        "text": "Azure AI Custom Vision"
      },
      {
        "id": "d",
        "text": "Azure Machine Learning"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "Azure AI Custom Vision lets you train a classification/object-detection model on your own labeled image library (approved vs. rejected products) with minimal ML expertise, and the trained model can then be applied to frames from the video feed to flag defects. Prebuilt Vision Image Analysis has no custom defect model, Video Indexer targets media metadata/insights rather than custom defect classification, and Azure Machine Learning is a much higher-effort, general-purpose ML platform."
  },
  {
    "id": "ai103-130",
    "type": "multi",
    "topic": "Azure AI Language",
    "prompt": "You run the following command:\n\ndocker run --rm -it -p 5000:5000 --memory 10g --cpus 2 \\\nmcr.microsoft.com/azure-cognitive-services/textanalytics/sentiment \\\nEula=accept \\\nBilling={ENDPOINT_URI} \\\nApiKey={API_KEY}\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "choices": [
      {
        "id": "a",
        "text": "Going to http://localhost:5000/status will query the Azure endpoint to verify whether the API key used to start the container is valid."
      },
      {
        "id": "b",
        "text": "The container logging provider will write log data."
      },
      {
        "id": "c",
        "text": "Going to http://localhost:5000/swagger will provide the details to access the documentation for the available endpoints."
      }
    ],
    "correctChoiceIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Azure AI containers expose a /status endpoint that periodically calls back to the paired Azure resource's billing endpoint to validate the API key and confirm the container is authorized to run. By default, containers write log output (including to any configured logging provider), and each container also exposes a /swagger endpoint with interactive OpenAPI documentation describing its available REST endpoints — so all three statements are true."
  },
  {
    "id": "ai103-131",
    "type": "single",
    "topic": "Microsoft Foundry & Agents",
    "prompt": "You are developing an app that will use the Speech and Language APIs.\n\nYou need to provision resources for the app. The solution must ensure that each service is accessed by using a single endpoint and credential.\n\nWhich type of resource should you create?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Language in Foundry Tools"
      },
      {
        "id": "b",
        "text": "Microsoft Foundry service"
      },
      {
        "id": "c",
        "text": "Azure Speech in Foundry Tools"
      },
      {
        "id": "d",
        "text": "Content Safety in Foundry Control Plane"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "A single multi-service Microsoft Foundry (Cognitive Services) resource exposes one endpoint and one key that can call multiple AI services — including Speech and Language — together, avoiding the need to provision and manage separate resources for each API. Creating individual single-service resources (Language-only or Speech-only) would give separate endpoints/credentials, which is what the requirement rules out."
  },
  {
    "id": "ai103-132",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You are building an app that will include one million scanned magazine articles. Each article will be stored as an image file.\n\nYou need to configure the app to extract text from the images. The solution must minimize development effort.\n\nWhat should you include in the solution?",
    "choices": [
      {
        "id": "a",
        "text": "Azure Document Intelligence in Foundry Tools"
      },
      {
        "id": "b",
        "text": "the Read API in Azure Vision in Foundry Tools"
      },
      {
        "id": "c",
        "text": "Azure Vision in Foundry Tools Image Analysis"
      },
      {
        "id": "d",
        "text": "Azure Language in Foundry Tools"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The Read API in Azure AI Vision is the OCR-optimized API purpose-built to extract printed and handwritten text from images (including scanned documents) at scale with a simple call, requiring minimal development effort. Image Analysis focuses on tagging/captioning images rather than full-text OCR, Document Intelligence is oriented toward structured form/field extraction, and Language services operate on already-extracted text."
  },
  {
    "id": "ai103-133-a",
    "type": "single",
    "topic": "Azure AI Language",
    "prompt": "You are building an app that will scan confidential documents and use the Azure Language in Foundry Tools service to analyze the contents. You provision a Microsoft Foundry Service resource. You need to ensure that the app can make requests to the Azure Language in Foundry Tools service endpoint. The solution must ensure that confidential documents remain on-premises. Which action should you perform first?",
    "choices": [
      {
        "id": "a",
        "text": "Pull an image from Docker Hub."
      },
      {
        "id": "b",
        "text": "Run the container and specify an API key and the Endpoint URL of the Azure AI resource."
      },
      {
        "id": "c",
        "text": "Provision an on-premises Kubernetes cluster that is isolated from the internet."
      },
      {
        "id": "d",
        "text": "Provision an on-premises Kubernetes cluster that has internet connectivity."
      },
      {
        "id": "e",
        "text": "Provision an Azure Kubernetes Service (AKS) resource."
      },
      {
        "id": "f",
        "text": "Run the container and specify an App ID and Client Secret."
      },
      {
        "id": "g",
        "text": "Pull an image from the Microsoft Container Registry (MCR)."
      }
    ],
    "correctChoiceIds": [
      "d"
    ],
    "explanation": "The solution needs an on-premises Kubernetes cluster so confidential documents stay on-premises, but Azure AI containers must periodically reach the Azure billing endpoint over the internet to stay licensed — so the cluster needs internet connectivity, not isolation."
  },
  {
    "id": "ai103-133-b",
    "type": "single",
    "topic": "Azure AI Language",
    "prompt": "You are building an app that will scan confidential documents and use the Azure Language in Foundry Tools service to analyze the contents. You provision a Microsoft Foundry Service resource. You need to ensure that the app can make requests to the Azure Language in Foundry Tools service endpoint. The solution must ensure that confidential documents remain on-premises. After provisioning an on-premises Kubernetes cluster that has internet connectivity, which action should you perform next?",
    "choices": [
      {
        "id": "a",
        "text": "Pull an image from Docker Hub."
      },
      {
        "id": "b",
        "text": "Run the container and specify an API key and the Endpoint URL of the Azure AI resource."
      },
      {
        "id": "c",
        "text": "Provision an on-premises Kubernetes cluster that is isolated from the internet."
      },
      {
        "id": "d",
        "text": "Provision an on-premises Kubernetes cluster that has internet connectivity."
      },
      {
        "id": "e",
        "text": "Provision an Azure Kubernetes Service (AKS) resource."
      },
      {
        "id": "f",
        "text": "Run the container and specify an App ID and Client Secret."
      },
      {
        "id": "g",
        "text": "Pull an image from the Microsoft Container Registry (MCR)."
      }
    ],
    "correctChoiceIds": [
      "g"
    ],
    "explanation": "Azure AI Language containers are published to the Microsoft Container Registry (mcr.microsoft.com), not Docker Hub, so the image must be pulled from MCR."
  },
  {
    "id": "ai103-133-c",
    "type": "single",
    "topic": "Azure AI Language",
    "prompt": "You are building an app that will scan confidential documents and use the Azure Language in Foundry Tools service to analyze the contents. You provision a Microsoft Foundry Service resource. You need to ensure that the app can make requests to the Azure Language in Foundry Tools service endpoint. The solution must ensure that confidential documents remain on-premises. After provisioning an internet-connected on-premises Kubernetes cluster and pulling the image from the Microsoft Container Registry, which action should you perform next?",
    "choices": [
      {
        "id": "a",
        "text": "Pull an image from Docker Hub."
      },
      {
        "id": "b",
        "text": "Run the container and specify an API key and the Endpoint URL of the Azure AI resource."
      },
      {
        "id": "c",
        "text": "Provision an on-premises Kubernetes cluster that is isolated from the internet."
      },
      {
        "id": "d",
        "text": "Provision an on-premises Kubernetes cluster that has internet connectivity."
      },
      {
        "id": "e",
        "text": "Provision an Azure Kubernetes Service (AKS) resource."
      },
      {
        "id": "f",
        "text": "Run the container and specify an App ID and Client Secret."
      },
      {
        "id": "g",
        "text": "Pull an image from the Microsoft Container Registry (MCR)."
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "Azure AI Language containers are started with an ApiKey and Billing (endpoint URI) parameter (plus Eula=accept) so they can validate licensing against the paired Azure AI Language resource while still processing text locally in the container — this matches the correct answer on both the screenshot and the discussion."
  },
  {
    "id": "ai103-134-a",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You are developing an app that will use the Azure Vision in Foundry Tools API to analyze an image. You need to configure the request that will be used by the app to identify whether an image is clipart or a line drawing.\n\n<BLANK METHOD> \"https://*.cognitiveservices.azure.com/vision/v3.2/analyze?visualFeatures=<second blank, answered separately>&details={string}&language=e...\"\n\nWhich HTTP method should you use?",
    "choices": [
      {
        "id": "a",
        "text": "GET"
      },
      {
        "id": "b",
        "text": "PATCH"
      },
      {
        "id": "c",
        "text": "POST"
      }
    ],
    "correctChoiceIds": [
      "c"
    ],
    "explanation": "The Analyze Image operation in the Azure Vision API is invoked with an HTTP POST request, since the image (a binary payload or a URL) is sent in the request body — not with GET or PATCH."
  },
  {
    "id": "ai103-134-b",
    "type": "single",
    "topic": "Azure AI Vision",
    "prompt": "You are developing an app that will use the Azure Vision in Foundry Tools API to analyze an image. You need to configure the request that will be used by the app to identify whether an image is clipart or a line drawing.\n\nPOST \"https://*.cognitiveservices.azure.com/vision/v3.2/analyze?visualFeatures=<BLANK>&details={string}&language=e...\"\n\nWhich value should you use for visualFeatures?",
    "choices": [
      {
        "id": "a",
        "text": "description"
      },
      {
        "id": "b",
        "text": "imageType"
      },
      {
        "id": "c",
        "text": "objects"
      },
      {
        "id": "d",
        "text": "tags"
      }
    ],
    "correctChoiceIds": [
      "b"
    ],
    "explanation": "The imageType visual feature specifically returns clipart-type and line-drawing-type classification scores for the analyzed image, which is exactly the information needed here."
  },
  {
    "id": "ai103-135",
    "type": "multi",
    "topic": "Azure Custom Vision",
    "prompt": "You use the Azure Custom Vision service to build a classifier.\n\nAfter training is complete, you need to evaluate the classifier.\n\nWhich two metrics are available for review? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
    "choices": [
      {
        "id": "a",
        "text": "F-score"
      },
      {
        "id": "b",
        "text": "area under the curve (AUC)"
      },
      {
        "id": "c",
        "text": "precision"
      },
      {
        "id": "d",
        "text": "weighted accuracy"
      },
      {
        "id": "e",
        "text": "recall"
      }
    ],
    "correctChoiceIds": [
      "c",
      "e"
    ],
    "explanation": "After training, Custom Vision's performance page reports precision, recall, and average precision (mAP) for the trained iteration. Precision and recall are the two listed here; F-score, AUC, and weighted accuracy are not among the metrics Custom Vision surfaces natively for a trained classifier."
  }
] as Exam["questions"],
};
