# Production adapter contract

The UI depends on the repository boundary in `src/data/repository.ts`. Live services must implement the same behaviors without changing the experience:

- Read and write engagement-linked records with server-side authorization.
- Persist task, stage-gate, evidence, deliverable, risk, decision, improvement, and reusable-asset relationships in Dataverse.
- Store evidence files in the approved SharePoint library and retain only authoritative links and metadata in Dataverse.
- Return explicit loading, partial, validation, authorization, and connector errors.
- Record meaningful changes in the audit history.
- Use idempotency keys for provisioning, notifications, retries, and flow-created records.

Environment-specific values belong in Power Platform environment variables and connection references. No endpoint, identity, secret, or tenant value belongs in the client bundle.
