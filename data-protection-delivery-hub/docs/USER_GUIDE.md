# Data Protection Delivery Hub user guide

## Purpose

Use the Hub to make delivery work, ownership, evidence, readiness, decisions, and reusable practice knowledge visible in one place. The Hub supports better delivery quality and consistency; it does not replace professional judgment or authorized approvals.

## Start here

1. Open **Command Center** to understand portfolio health, quality signals, risks, readiness, and practice-improvement actions.
2. Open **My Work** to work from assigned lifecycle tasks.
3. Select a task stage and status to focus the queue.
4. For each task, confirm the expected outcome, required evidence, owner, due date, blocker, and definition of done.
5. Use the relevant module to update the authoritative delivery record.
6. Use **Administration** for configuration, connection readiness, stage templates, reuse governance, role mapping, and audit information.

## Command Center

Use Command Center for leadership and delivery reviews:

- **Quality metrics:** compare baseline, target, actual, cohort, period, and trend.
- **Practice improvement:** review recurring problems, owners, targets, status, and impact.
- **Leadership alignment:** frame the review around practice impact, evidence/control, scale/reuse, and attention required.
- **Engagement portfolio:** review stage, health, and progress.
- **Priority risks:** identify items needing action or escalation.
- **Stage gate watchlist:** identify gates that are blocked or conditional.

Metrics in the current demonstration are synthetic. Treat them as a presentation model until production metric lineage is configured.

## My Work

My Work is the execution view. Each task should be clear enough that another qualified person can understand what completion means.

Review these fields before changing status:

- **Stage:** the lifecycle point: Discover, Design, Validate, Transition, or another configured stage.
- **Expected outcome:** the result the task must produce.
- **Evidence required:** the record, link, or review outcome that proves completion.
- **Owner and due date:** the accountable person/team and committed date.
- **Definition of done:** the conditions that must be true before completion.
- **Blocker / escalation:** the current obstacle or “No blocker”.

Use status consistently:

| Status | Use when |
| --- | --- |
| Not started | Work has not begun |
| In progress | Work is actively being completed |
| Blocked | Work cannot proceed without a dependency, decision, or escalation |
| Ready for review | The output exists and is awaiting the authorized reviewer |
| Complete | The definition of done and review requirements are satisfied |

Do not mark work complete merely because a file exists. The evidence must be authoritative and reviewed where required.

## Lifecycle expectations

Use the stage template for the current engagement. Confirm required inputs, expected outputs, decision rights, and exit criteria before progressing. A stage gate cannot be treated as Green when a mandatory criterion is unresolved.

## Evidence and deliverables

Evidence remains **Submitted** until an authorized reviewer accepts it. Deliverables follow the configured review path and must not skip mandatory review states. Record the authoritative SharePoint link and metadata; do not duplicate sensitive content unnecessarily.

## Risks, decisions, and exceptions

Record the issue in the appropriate register. Include owner, due date, impact, mitigation, escalation, and decision rationale. Risk acceptance and exceptions require an authorized approver; exceptions also require a compensating control and expiry where applicable.

## Knowledge and reuse

Never publish client-confidential material as a practice asset. Confirm sanitization, assign a reviewer, capture the review outcome, and publish only after approval. Track version and adoption.

## Settings and roles

The demonstration settings pane supports language, theme, and role-based navigation. In production, the selected role is not a security boundary. Entra identity, Dataverse roles, teams, field security, and server-side checks determine access.

## What to do when something is wrong

Do not work around a control by copying data to an unapproved location or changing a record outside the Hub. Capture the engagement, record, action, time, error text, and business impact, then follow `SUPPORT_RUNBOOK.md`.
