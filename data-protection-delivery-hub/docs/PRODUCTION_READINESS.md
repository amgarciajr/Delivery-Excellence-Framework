# Production readiness checklist

## Current evaluation

**Status: Not ready for production.** The current application is a validated synthetic/local prototype. It is suitable for controlled design review and non-production pilot planning, but live data must not be connected until the controls below are implemented and evidenced.

Use `PRODUCTION_EVALUATION.md` for the assessment and release recommendation, `USER_GUIDE.md` for end-user operation, and `SUPPORT_RUNBOOK.md` for triage and resolution.

## Governance
- Product owner, technical owner, support owner, data owner, and approvers named.
- Approved internal-use classification and client-data boundary.
- Retention, audit, privacy, accessibility, and records requirements reviewed.

## Platform
- Dedicated development, test, and production strategy approved.
- Solution, publisher, environment variables, and connection references configured.
- Data policies and approved connectors confirmed.
- Dataverse capacity and licensing confirmed.

## Security
- Roles tested with least privilege.
- Engagement teams and restricted content tested.
- Field security and audit tested.
- No hard-coded users, secrets, tenant IDs, site URLs, or mailbox addresses.

## Engineering
- Source controlled.
- Managed deployment path tested.
- Solution checker and dependency review complete.
- Backup, rollback, monitoring, alerting, and support runbook complete.

## Quality
- Functional, role, accessibility, responsive, error, recovery, performance, and regression testing complete.
- Synthetic test data removed or clearly isolated.
- Stage gates, traceability, evidence review, and approval controls tested.

## Adoption
- User guide, administrator guide, short training, release notes, known limitations, and feedback route published.

## Required evidence before go-live

- [ ] Production evaluation approved by product, technical, data, security, and support owners.
- [ ] User guide and support runbook published in the approved knowledge location.
- [ ] Pilot results, known limitations, and release notes recorded.
- [ ] Support contacts, escalation route, monitoring ownership, and service hours configured.
- [ ] Backup, restore, rollback, and incident exercises completed.
