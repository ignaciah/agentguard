# agentguard
Fine-grained authorization &amp; governance for autonomous agents
Architecture

agentguard/
├── backend/
│   ├── src/
│   │   ├── server.ts
│   │   ├── agentRegistry.ts
│   │   ├── policyEngine.ts
│   │   ├── auditLog.ts
│   │   └── humanApproval.ts
│   ├── policies/
│   │   └── agent.rego
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.tsx
│   └── package.json
├── demo/
│   └── sample-agent.js
├── .env.example
├── docker-compose.yml
└── README.md
# AgentGuard 🛡️

> Fine‑grained authorization & governance for autonomous agents  
> *Built for [Hackathon Authorize](https://example.com)*

AgentGuard is an authorization fabric designed for AI agents. It treats agents as first‑class principals, enabling scoped permissions, real‑time policy evaluation, human‑in‑the‑loop approval, and full auditability.

![Demo](https://via.placeholder.com/800x400?text=AgentGuard+Demonstration)

---

##  Features

- **Agent Registry** – Register agents with metadata and API keys  
- **Policy‑as‑Code** – OPA (Open Policy Agent) with Rego rules  
- **Natural Language Policies** – Describe permissions in plain English → auto‑generated Rego  
- **Human‑in‑the‑Loop** – Risky actions request user approval  
- **Delegation Chains** – Agents delegate sub‑tasks with constrained permissions  
- **Audit Logs** – Every decision is logged for compliance  
- **Dashboard** – Manage agents, policies, and view real‑time activity  
## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker (for OPA)
- (Optional) OpenAI API key for NL policies

### 1. Clone & Install

