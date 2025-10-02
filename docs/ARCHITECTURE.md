# NutriZen Architecture 🏗️

This document describes the high-level architecture of the NutriZen system, its main components, and the technical decisions that guide our development.

## Architectural Philosophy

Our architecture is guided by the following principles:

- **Start Simple, Scale Later:** We use managed services (BaaS like Supabase) to accelerate the MVP, with a clear plan to evolve to more robust solutions as needed.
- **Unified JavaScript/TypeScript Ecosystem:** We maximize the reuse of code, logic, and talent by using a TypeScript-based stack from end to end (frontend, backend, mobile).
- **Monorepo:** We manage all our applications (`web`, `mobile`) and shared packages (`ui`, `utils`) in a single repository to maintain consistency.

## Component Overview

Below is a diagram illustrating the interaction between the main components of our system.

```mermaid
graph TD
    A[User] -->|"App (React Native) / Web (Next.js)"| B[Frontend]
    B --> C{"Backend Gateway (Node.js/Express or Edge Functions)"}

    subgraph "Infrastructure & Backend"
        C --> D["Database (PostgreSQL)"]
        C --> G["Authentication (Supabase Auth / NextAuth)"]
        C --> F["Storage (S3 / Supabase Storage)"]
        C --> K["Payments (Stripe Connect)"]
    end

    subgraph "AI Services"
        C --> E["IA Services (OpenAI / HuggingFace)"]
    end

    subgraph "External Integrations"
        C --> H["Wearables API (Apple Health, Google Fit)"]
        C --> I["Video/Chat (WebRTC / Twilio)"]
    end

    subgraph "Analytics & Monitoring"
        D --> J["Analytics (Metabase / Grafana)"]
        E --> J
    end
```

- **Frontend:** A web application built with Next.js and a mobile app with React Native. Responsible for the entire user interface and experience.
- **Backend:** Initially orchestrated by Edge Functions and Supabase services, with a migration plan to a dedicated Node.js (NestJS) backend for complex business logic.
- **Database:** We use PostgreSQL, hosted on Supabase, for its robustness and scalability.
- **AI Services:** We delegate AI tasks (generating diet/workout plans) to external APIs like OpenAI to ensure high-quality results.

## Key Decisions

- **Why Supabase initially?** To drastically reduce initial complexity and cost, allowing us to focus on delivering value in the MVP.
- **Why Next.js?** For its performance (SSR/SSG), excellent ecosystem, and optimizations that facilitate the development of a modern and fast web application.

---

## Backend Roadmap & API Contracts (Draft)

### Evolution Stages

| Stage   | Infra                                  | Auth                 | Business Logic                    | Notes                  |
| ------- | -------------------------------------- | -------------------- | --------------------------------- | ---------------------- |
| 1 (MVP) | Supabase (DB + Auth + Storage)         | Supabase Auth        | Edge Functions leves              | Foco em velocidade     |
| 2       | Supabase + Dedicated Node/Nest service | JWT (Supabase)       | Services + Domain Layer           | Introduz caching       |
| 3       | k8s / Fly.io / Render                  | Central Auth Gateway | CQRS + Event Sourcing parcial     | Escala horizontal      |
| 4       | Micro frontends + BFF                  | OIDC Provider        | Domain events + Stream processing | Observability avançado |

### Domain (Preliminar)

Core domains (bounded contexts propostos):

- Nutrition (meal plans, macro targets)
- Tracking (progress photos, measurements, achievements)
- Gamification (XP, badges, streaks)
- Community (social feed, challenges)
- AI Assistance (meal suggestions, adjustments)

### Exemplos de Endpoints (versão inicial REST)

```
POST /api/v1/profile -> cria/atualiza preferências nutricionais
GET  /api/v1/meal-plan/today -> retorna plano do dia
POST /api/v1/meal-log -> registra refeição consumida
GET  /api/v1/progress/metrics?range=30d -> métricas agregadas
POST /api/v1/ai/meal-suggestion -> gera sugestão baseada em macros restantes
```

### Event Examples (futuro)

```
UserMealLogged { userId, mealId, calories, macros, timestamp }
DailyGoalAchieved { userId, date, type }
StreakBroken { userId, streakType, length }
```

### Non-Functional Targets (Fases)

| Aspecto         | Fase 1       | Fase 2             | Fase 3              |
| --------------- | ------------ | ------------------ | ------------------- |
| Latência P95    | < 500ms      | < 300ms            | < 150ms             |
| Disponibilidade | 99%          | 99.5%              | 99.9%               |
| Observability   | Logs básicos | Tracing + Métricas | SLO dashboards      |
| Testes          | Unit + Smoke | + Contract + Load  | Chaos + Resiliência |

### Estratégia de AI

1. Proxy simples chamando provedor externo (OpenAI/HuggingFace)
2. Fine-tuning com dados anônimos agregados (enzimado por consentimento)
3. Personalização por perfil (macro histórica + preferências)

---
