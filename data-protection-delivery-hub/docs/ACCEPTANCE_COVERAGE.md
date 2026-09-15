# Acceptance coverage

The prototype now exposes the evidence needed to automate the baseline acceptance tests:

| Requirement | Prototype evidence | Production test still required |
| --- | --- | --- |
| Mandatory gate failure blocks approval | Readiness panel shows a blocked recommendation | Authorized approval and persistence |
| Lifecycle expectations are explicit | My Work and stage templates show outcomes and definitions of done | Relationship and permission enforcement |
| Meaningful changes are auditable | Local task status changes write audit events | Dataverse audit and retention validation |
| Metrics show change over time | Synthetic metric history and trend view | Source calculation and production lineage |
| Reuse is governed | Sanitization and review state are visible | Publication workflow and content scanning |
| Synthetic boundary is preserved | Repository mode and connector readiness are explicit | Deployment isolation and data removal test |

The remaining acceptance suite should be automated against the Dataverse/SharePoint implementation before production enablement.
