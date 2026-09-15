# Data Protection Delivery Hub support runbook

## Scope

This runbook covers operational support for the production Power Platform implementation. The current React/Vite prototype is synthetic/local and has no production connector; prototype issues should first be reproduced locally and clearly separated from environment, identity, connector, data, and workflow issues.

## Support model

| Tier | Responsibility | Examples |
| --- | --- | --- |
| Tier 1 — Practice support | Triage, user guidance, severity, evidence collection | Navigation, filters, status meaning, missing assignment |
| Tier 2 — Platform support | Dataverse, SharePoint, security, flows, configuration | Access denial, connector failure, missing relationship, flow failure |
| Tier 3 — Engineering/vendor | Defects, performance, deployment, platform incident | Regression, solution import failure, data integrity issue |
| Data/security owner | Classification, retention, access decisions, suspected exposure | Wrong audience, sensitive record, retention conflict |

Production contacts must be configured in the service catalog; do not place personal contact details in this document.

## Severity and response

| Severity | Definition | Examples | Initial response target |
| --- | --- | --- | --- |
| Sev 1 | Active confidentiality, integrity, availability, or widespread delivery impact | Unauthorized access, data exposure, production-wide outage, duplicate destructive automation | Immediate escalation |
| Sev 2 | Major business function unavailable or critical engagement blocked | Gate workflow unavailable, evidence cannot be reviewed, broad connector failure | Same business day |
| Sev 3 | Limited impact with workaround | One user cannot see a permitted record, non-critical flow failure, incorrect dashboard value | Two business days |
| Sev 4 | Question, cosmetic defect, documentation, or enhancement | Label, layout, minor filter, feature request | Planned backlog |

## Incident handling procedure

1. **Protect:** stop unsafe automation or sharing if exposure or duplicate creation is suspected. Do not delete evidence or audit records.
2. **Capture:** record environment, solution version, user role, engagement, record ID, UTC time, exact error, screenshots, correlation/run ID, and impact.
3. **Classify:** assign severity and determine whether the issue is access, data, workflow, connector, deployment, performance, or user guidance.
4. **Reproduce safely:** use test data in development/test where possible. Never paste sensitive client data into an unapproved ticket.
5. **Diagnose:** follow the relevant symptom guide below.
6. **Resolve or contain:** apply the smallest approved change; preserve auditability.
7. **Validate:** repeat the failed action, test the affected role boundary, and confirm no duplicate or unintended records.
8. **Close:** document cause, resolution, evidence, owner, and preventive action.

## Symptom resolution guide

### User cannot see an engagement or task

Check:

- Is the user in the correct Entra group and Dataverse role?
- Is the user a member of the engagement team or assigned workstream?
- Is the record active and linked to the expected Engagement?
- Is the issue limited to UI filtering, or does the server-side query deny access?

Resolution:

- Correct the approved team/role assignment through the access process.
- Do not grant broad access as a workaround.
- Re-test with both the affected user and a deliberately unauthorized user.

### User can see restricted content

Treat as **Sev 1**. Stop sharing and access immediately, notify the security/data owner, preserve audit evidence, and do not edit or delete the exposed record to hide the event. Review Dataverse privileges, team membership, field security, dashboard queries, exports, and flow recipients.

### Evidence link is broken or evidence remains Submitted

Check the SharePoint URL, library permissions, item existence, metadata, retention, and reviewer assignment. A valid file is not automatically accepted evidence. Route the item to the authorized reviewer and preserve the review outcome.

### Stage gate shows No-go or cannot advance

Check mandatory criteria, evidence quality, open defects, owner confirmation, exception expiry, and required approvals. Resolve the underlying criterion; do not override the recommendation in the client or by editing a status directly. If the criterion is wrong, correct the configured stage template through Administration/change control.

### Deliverable cannot move to Delivered

Check the configured review sequence, current review state, assigned reviewer, approval rationale, version, and authoritative link. Do not skip Draft, Peer review, Quality review, Customer review, or Approved when configured as mandatory.

### Risk acceptance or exception approval fails

Check the approver's role and engagement scope, rationale, compensating control, expiry, and required fields. Reassign to an authorized approver. Platform administrators should not approve business risks by default.

### Task status change does not save

Check browser/network state, record ownership, required fields, optimistic update behavior, Dataverse permissions, and flow errors. Reopen the record and confirm the server value before retrying. If a retry may duplicate downstream actions, use the idempotency key/run record to verify before retry.

### Flow failed or created duplicates

Open the automation run record and capture flow name, run ID, trigger record, error, retry count, and timestamps. Pause repeated retries if duplicates are being generated. Identify the idempotency key and remove or deactivate only duplicate records through the approved data-correction procedure; never delete evidence or audit history as a first response.

### Dashboard metric is incorrect or stale

Check source records, metric definition, cohort/date filters, refresh status, failed flows, and calculation owner. Compare the displayed result to the source query. Mark the metric as data-quality issue if lineage is uncertain; do not manually edit production metrics without an approved correction.

### Solution import or deployment failed

Capture environment, solution version, dependency error, environment-variable values (not secrets), connection-reference state, and import logs. Check solution checker findings, missing components, publisher/prefix mismatch, managed-layer conflicts, and target permissions. Roll back using the approved package only after impact assessment.

### Prototype shows stale or unexpected local data

The prototype uses browser-local storage. Confirm the current browser/profile, clear only the named `dpdh-*` demonstration keys when safe, and reload. Never use this procedure for production Dataverse data.

## Data correction and recovery

- Use inactive/soft-delete states for business records.
- Never delete evidence, approvals, decisions, audit events, or automation run records through normal support.
- Correct data through an approved change or controlled migration with before/after values and approver.
- Restore only through the approved backup and recovery process.
- After recovery, validate relationships, security, flows, dashboards, and audit continuity.

## Monitoring checklist

Review daily during pilot and at an agreed production cadence:

- Failed and repeatedly retried flows.
- Dataverse/API throttling and connector errors.
- SharePoint access or upload failures.
- Records with missing owner, engagement, evidence, or due date.
- Stale stage gates, overdue decisions, and aging risks.
- Unauthorized access alerts and unusual exports.
- Metric refresh failures and lineage exceptions.

## Change and release procedure

Every production change requires a ticket, impact assessment, test evidence, approver, deployment window, rollback plan, and release note. Use managed solutions and environment-specific variables. After deployment, validate one representative engagement, one restricted record, one evidence review, one gate evaluation, one flow, and one dashboard.

## Known prototype limitations

- Browser-local persistence is not authoritative.
- UI role filtering does not enforce authorization.
- Stage-gate logic and task status transitions are illustrative.
- Dataverse and SharePoint adapters are not connected.
- Automated acceptance, accessibility, performance, and recovery tests are not yet executed against production services.

These limitations must be closed or formally accepted before production go-live.
