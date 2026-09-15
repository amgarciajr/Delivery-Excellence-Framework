# Avanade integration guide

## Purpose and implementation boundary

The Data Protection Delivery Hub is a synthetic/local prototype of a governed practice operating system. This guide describes how to integrate it into Avanade without weakening the delivery, security, evidence, or data-governance expectations in the baseline.

The intended production architecture is:

- **Dataverse**: authoritative structured records, relationships, workflow state, ownership, approvals, audit, and metrics.
- **SharePoint**: approved evidence files and reusable documents.
- **Power Platform solution**: tables, choices, apps, flows, connection references, environment variables, and security artifacts.
- **Entra ID and Dataverse teams**: identity, least privilege, engagement access, and approval boundaries.
- **Power BI or approved reporting surface**: portfolio and practice metrics using permission-filtered data.

The current React/Vite application remains a safe demonstration surface. It uses `src/data/repository.ts` and browser-local persistence; it must not be treated as the production system of record.

## Avanade ownership model

Before configuration, name accountable owners in the target environment:

| Responsibility | Required accountability |
| --- | --- |
| Product owner | Owns practice outcomes, backlog priority, and acceptance |
| Technical owner | Owns solution architecture, integrations, ALM, and reliability |
| Data owner | Owns classification, retention, privacy, and data quality |
| Security owner | Approves roles, teams, field security, audit, and access reviews |
| Practice owner | Owns lifecycle standards, reusable assets, and adoption |
| Support owner | Owns incident response, monitoring, release support, and runbooks |
| Gate approvers | Approve only the gates, risks, exceptions, evidence, or deliverables assigned to their role |

The supplied leadership relationships should be used as a review and sponsorship path, not hard-coded into the application. Configure identities and assignments through Entra and Dataverse.

## Environment strategy

Use separate Power Platform environments:

1. **Development** — unmanaged solution, synthetic data, maker and developer testing.
2. **Test/validation** — managed solution candidate, seeded synthetic test data, security and acceptance testing.
3. **Production** — managed solution, approved connectors, governed data, monitoring, support, and controlled releases.

Configure the following as environment variables or connection references:

| Configuration | Development | Test | Production |
| --- | --- | --- | --- |
| Dataverse environment URL | Environment-specific | Environment-specific | Environment-specific |
| SharePoint evidence site | Synthetic/test site | Approved test site | Approved practice/client site |
| Evidence library | Test library | Validation library | Approved library |
| Connector references | Dev references | Test references | Production references |
| Feature flags | Local and experimental | Controlled pilot | Approved features only |

Never place URLs, tenant IDs, mailbox addresses, secrets, or named users in the client bundle or source code.

## Solution setup

Use the configuration in `apps/data-protection-delivery-hub/power.config.json` as the starting solution identity:

- Solution: `DataProtectionDeliveryHub`
- Publisher prefix: `dpdh`
- Storage: Dataverse
- Document storage: SharePoint through authoritative links
- Sample data: synthetic only

Create the solution components in dependency order:

1. Choices and reference catalogs.
2. Account, Offering, Opportunity, and Engagement.
3. Stakeholders, Workstreams, Milestones, Actions, Scope Items, and Requirements.
4. Architecture Decisions, Controls, Configurations, Exceptions, Risks, Issues, Dependencies, Changes, and Decisions.
5. Test Plans, Test Cases, Evidence, Deliverables, Stage Gates, Readiness Reviews, and Handoff Items.
6. Lessons Learned, Reusable Assets, Improvement Actions, Quality Metrics, Metric Periods, and Audit/Automation Run records.
7. Model-driven or custom app surfaces, flows, dashboards, security roles, and teams.

Engagement is the delivery spine. Every execution record must link to an Engagement and, where applicable, a Workstream. Do not create orphaned actions, requirements, evidence, risks, decisions, or deliverables.

## Data and document integration

### Dataverse

Map the prototype repository contract to Dataverse tables defined in `data-model/full-data-model.json`. Preserve:

- Stable identifiers and lookup relationships.
- Choice values for stage, health, priority, evidence quality, review state, and readiness recommendation.
- Owner and team lookups.
- Active/inactive state rather than normal hard delete.
- Created/modified timestamps and responsible users.
- Source references for records created by flows.

### SharePoint

Create an approved evidence library with metadata for:

- Engagement and workstream.
- Evidence type and authoritative reference.
- Captured date and environment.
- Owner and reviewer.
- Sensitivity and retention category.
- Evidence quality and review state.

Store the file in SharePoint and store only the authoritative URL and metadata in Dataverse. An uploaded or linked file remains **Submitted** until an authorized reviewer accepts it.

### Reusable knowledge

Do not publish client material directly to practice knowledge. Require:

1. Sanitization confirmation.
2. Reviewer assignment.
3. Review outcome and rationale.
4. Publication version.
5. Intended use and adoption tracking.

## Security and role implementation

Create Dataverse security roles and teams from `docs/SECURITY_MODEL.json`. Use engagement teams for restricted client content and practice-level access for sanitized summaries and published assets.

Minimum controls:

- Consultants: assigned engagement records only.
- Workstream Leads: records for led workstreams.
- Architects: design and control approvals within assigned or consulted engagements.
- Project Managers: scope, delivery, RAID, and deliverable management for managed engagements.
- Engagement Managers: stage gates, readiness, risk acceptance, and handoff approvals.
- Reviewers: explicitly assigned evidence, deliverable, and reusable-asset reviews.
- Practice Leaders: sanitized portfolio summaries and published assets; no implicit client-content access.
- Platform Administrators: configuration and support; no business approval authority by default.

Test both positive and negative access. UI filtering is not authorization. Server-side Dataverse privileges, teams, field security, and flow checks must enforce the boundary.

## Lifecycle and workflow integration

Configure the ten stages:

`Qualify → Initiate → Discover → Assess → Design → Build → Validate → Transition → Close → Operate`

Each stage template must define required inputs, outputs, accountable owner, evidence, decision rights, mandatory criteria, and exit conditions. Configure flows for:

- Engagement provisioning and standard workstreams.
- Stage-gate readiness evaluation.
- Risk escalation and decision reminders.
- Evidence review routing.
- Deliverable review and approval.
- Requirement traceability gap detection.
- Test failure to defect creation.
- Exception and risk acceptance.
- Handoff acceptance and post-release validation.
- Lessons-learned and reusable-asset submission.

Every flow must be idempotent, use connection references, write an automation run record, and surface actionable errors without secrets.

## ALM and deployment

1. Build in development using an unmanaged solution.
2. Run solution checker, dependency review, and static configuration review.
3. Export a managed solution candidate.
4. Import into test with environment-specific variables and connection references.
5. Load synthetic acceptance data and execute the full test pack.
6. Obtain product, technical, data, security, and support approval.
7. Deploy to production through the approved release pipeline.
8. Record version, deployment time, operator, rollback package, and known limitations.

Do not enable production connectors until security, retention, audit, evidence handling, rollback, and support ownership are approved.

## Validation and go-live gates

The integration is ready for pilot only when all of the following pass:

- All 16 navigation areas or their production equivalents are available.
- Engagement is the parent spine for delivery records.
- Requirements trace to controls, configuration, tests, evidence, recommendations, and deliverables.
- Mandatory gate failures block approval.
- AI and automation cannot approve gates or accept risk.
- Evidence remains Submitted until reviewed.
- Deliverables follow configured review states.
- Risk acceptance and exceptions require authorized approver, rationale, and expiry where applicable.
- Reusable assets require sanitization and review.
- Restricted content is excluded from unauthorized dashboards.
- Flow retries do not create duplicate records.
- Synthetic data can be removed without breaking the solution.
- Functional, role, accessibility, responsive, recovery, performance, and regression testing is complete.

## Adoption and operating cadence

Pilot with one controlled offering or engagement pattern before broad rollout. Review weekly:

- Stage-gate escape rate.
- Evidence first-pass acceptance.
- Recurring blocker rate.
- Decision latency.
- Reusable asset adoption.
- Rework or defect recurrence.
- Improvement actions completed on time.

Use the Command Center for director and practice-manager review, My Work for execution, Administration for controlled configuration, and Knowledge & Reuse for sanitized practice learning.

## Cutover checklist

Before enabling governed production use:

- [ ] Owners, approvers, support route, and escalation path named.
- [ ] Environment variables and connection references configured.
- [ ] Dataverse tables, relationships, choices, and audit enabled.
- [ ] SharePoint evidence library and retention metadata approved.
- [ ] Security roles, engagement teams, and field security tested.
- [ ] Stage templates and definitions of done approved.
- [ ] Flows tested for idempotency, retry, failure reporting, and audit.
- [ ] Synthetic data isolated or removed.
- [ ] Acceptance, accessibility, responsive, and regression results recorded.
- [ ] Backup, rollback, monitoring, and support runbook approved.
- [ ] Pilot feedback incorporated and release notes published.

The current prototype is ready to support this integration planning. It is not evidence that the Avanade production environment has been configured or approved.

For day-to-day operation and incident handling, use `USER_GUIDE.md` and `SUPPORT_RUNBOOK.md`. For the release decision, use `PRODUCTION_EVALUATION.md` and complete `PRODUCTION_READINESS.md`.
