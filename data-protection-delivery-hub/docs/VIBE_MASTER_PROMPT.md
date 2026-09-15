# Vibe master instruction

You are Power Apps Vibe. Build or rebuild the application in this package. The authoritative product specification is this document plus `data-model/full-data-model.json`. Preserve all requested modules. Do not silently omit entities, pages, relationships, stage gates, security boundaries, or audit requirements. Where a feature requires a connector or environment setting that is unavailable, create a clearly labeled configuration placeholder and keep the rest of the application functional.

## Product
**Name:** Data Protection Delivery Hub  
**Tagline:** Govern delivery. Prove readiness. Scale expertise.  
**Purpose:** Standardize and streamline the complete lifecycle of Data Protection consulting engagements while providing traceability from scope and requirements through controls, testing, evidence, readiness, deliverables, acceptance, outcomes, and reusable practice knowledge.

## Target experience
Create a responsive, accessible, data-dense Power Apps Vibe web application with a collapsible left navigation and a command-center home page. Use a professional Avanade-inspired but non-logo-dependent visual system: deep navy, teal, cyan, white, neutral gray, and restrained status colors. Support light, dark, and system themes. Avoid decorative effects that reduce readability.

## Core principles
1. Evidence over assertion.
2. Explicit ownership over implied responsibility.
3. Traceability from commitment to proof.
4. Stage gates prevent premature progression.
5. Reusable patterns reduce dependence on individual experts.
6. AI assists; accountable humans decide.
7. Separate confirmed facts, assumptions, recommendations, and unresolved decisions.
8. Store references and metadata where possible; avoid unnecessary sensitive content.

## Roles
- Consultant: manage assigned engagement execution records.
- Workstream Lead: manage workstreams, requirements, configurations, tests, and evidence.
- Architect: approve architecture, controls, exceptions, and technical decisions.
- Project Manager: manage scope, milestones, RAID, dependencies, and deliverables.
- Engagement Manager: manage governance, stage gates, risks, readiness, and acceptance.
- Reviewer: review deliverables, evidence, and quality gates.
- Practice Leader: portfolio and reusable-asset visibility; no automatic access to restricted client content.
- Platform Administrator: configuration, reference data, security, audit, and support.

Use Dataverse security roles and teams. Do not hard-code names or email addresses. Use Entra identity and configurable role mappings.

## Navigation and pages
### Command Center
- Portfolio dashboard with active engagements, stage distribution, health, critical risks, overdue decisions, readiness, evidence completeness, deliverable status, and recent activity.
- My Work with assigned actions, reviews, approvals, risks, evidence requests, and upcoming milestones.

### Pipeline and Intake
- Opportunities and offering selection.
- Qualification, objectives, regulatory drivers, expected outcomes, assumptions, dependencies, and delivery risk.
- Sales-to-delivery handoff with acceptance checklist and unresolved items.

### Engagements
- Engagement list and detail.
- Charter, scope, objectives, stakeholders, responsibility matrix, workstreams, dates, health, financial/reference identifiers, and stage.
- Stage-gate timeline: Qualify, Initiate, Discover, Assess, Design, Build, Validate, Transition, Close, Operate.

### Discovery and Assessment
- Document request register, workshops, questions, observations, current-state capabilities, maturity dimensions, assessment responses, findings, and recommendations.
- Framework templates for Purview, information protection, data loss prevention, retention/records, insider risk, data security posture, Copilot/AI readiness, and governance.

### Scope and Requirements
- In scope, out of scope, assumptions, constraints, exclusions, acceptance criteria, and change control.
- Requirements mapped to controls, decisions, configurations, test cases, evidence, recommendations, and deliverables.
- Detect orphaned requirements and unapproved scope growth.

### Architecture and Controls
- Architecture decisions, options, rationale, consequences, approvers, review dates.
- Control catalog and engagement control implementations.
- Configuration specifications with target state, environment, owner, reviewer, deployment method, rollback, and validation method.
- Exceptions and compensating controls.

### Delivery Execution
- Workstreams, milestones, actions, dependencies, blockers, changes, and defects.
- Kanban and grid views.
- Clear customer, Avanade, partner, Microsoft, and shared ownership categories.

### RAID and Decisions
- Risks, assumptions, issues, dependencies, and decisions.
- Severity, probability, impact, owner, due date, mitigation, contingency, status, age, escalation, and acceptance.
- Decision log with question, options, recommendation, final decision, rationale, approver, due date, impact, and affected records.

### Testing and Evidence
- Test plans, test cases, preconditions, steps, expected results, actual results, pass/fail/blocked, defects, tester, dates.
- Evidence records with title, type, authoritative URL/reference, captured date, environment, owner, quality status, reviewer, sensitivity, and retention category.
- Traceability matrix and evidence completeness dashboard.
- Never treat a linked file as validated evidence until reviewed.

### Readiness and Assurance
- Technical, governance, operational, security, support, training, deployment, and customer readiness dimensions.
- Gate status: Not assessed, Red, Amber, Green, Accepted exception.
- Weighted scoring is configurable. Always show underlying criteria and do not let a score override a failed mandatory criterion.
- Release recommendation: Go, Go with conditions, No-go, or Not ready for decision.

### Deliverables
- Deliverable register with template, owner, reviewer, version, due date, review state, approval, delivery date, and authoritative link.
- Review workflow: Draft, Peer review, Quality review, Customer review, Approved, Delivered, Superseded.
- Generate draft status reports, executive summaries, risk summaries, readiness reports, handoff packs, and lessons-learned summaries from structured records.

### Transition and Operations
- Handoff checklist, named primary/backup operators, support model, escalation routes, known limitations, deferred backlog, training, runbooks, acceptance, hypercare, and post-release validation.
- Do not infer customer ownership. Require explicit confirmation.

### Knowledge and Reuse
- Lessons learned, reusable patterns, playbooks, templates, known blockers, resolutions, and asset publication workflow.
- Separate client-confidential records from sanitized reusable knowledge.
- Require sanitization and review before practice publication.

### Practice Intelligence
- Engagement health, risk trends, common blockers, readiness trends, delivery quality, decision latency, evidence completeness, asset reuse, and outcome realization.
- Provide filters by offering, capability, industry, region, stage, and date without exposing restricted records.

### Administration
- Offering catalog, capability catalog, assessment templates, stage-gate criteria, control library, risk taxonomy, document types, environment types, status choices, role mappings, notification rules, scoring weights, retention categories, feature flags, integrations, and audit viewer.

## Automation
Create documented flow placeholders and, where supported, working Power Automate flows for:
1. Engagement provisioning and standard workstream creation.
2. Stage-gate readiness evaluation.
3. Risk escalation and aging notices.
4. Decision due/overdue reminders.
5. Evidence review routing.
6. Deliverable review and approval.
7. Requirement traceability gap detection.
8. Test failure to defect creation.
9. Readiness exception approval.
10. Weekly status digest generation.
11. Handoff acceptance routing.
12. Lessons-learned and reusable-asset submission.
13. Post-release validation reminder.
14. Stale record and missing-owner detection.
15. Outcome/benefit follow-up.

All flows must be idempotent, use connection references and environment variables, write an automation run record, and surface actionable failure details without exposing secrets.

## Dashboards
- My Work
- Engagement Command Center
- Portfolio Health
- Risk and Decision Intelligence
- Testing and Evidence Assurance
- Readiness and Release
- Deliverable Quality
- Knowledge Reuse
- Outcomes and Benefits
- Platform Operations

## AI assistant
Add an advisory assistant that can summarize current state, identify missing prerequisites, draft discovery questions, detect traceability gaps, suggest relevant playbooks, and draft reports. Every AI output must show source links, creation time, and a visible “Validate before use” label. AI cannot approve gates, accept risk, alter scope, decide compliance, or publish customer deliverables.

## Nonfunctional requirements
- WCAG 2.2 AA-oriented accessibility.
- Keyboard navigation, focus visibility, semantic labels, contrast, reduced motion.
- Responsive desktop/tablet/mobile layout.
- Search, filtering, saved views, export subject to permissions.
- Optimistic UI only where safe; clear empty, loading, partial, and error states.
- Audit meaningful changes.
- Soft delete or inactive state for business records; do not hard-delete evidence or decisions through normal UI.
- No sample client names or real people. Use synthetic data only.
- No client data in analytics or knowledge reuse without approved sanitization.

## Definition of done
The app is complete only when all pages are navigable, core CRUD works, relationships are usable, stage gates expose missing criteria, traceability gaps are visible, role boundaries are represented, synthetic demo data can be removed, and the production-readiness checklist is available in Administration.
