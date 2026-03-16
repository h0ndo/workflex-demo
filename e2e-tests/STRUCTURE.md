# E2E Test Structure

This project uses a domain-first E2E structure.
The first layer is always business/domain oriented. Technical folders are nested inside each domain.

## Target Folder Layout

```text
e2e-tests/
  domains/
    <domain>/
      features/
      steps/
      page-objects/
      providers/
      fixtures/
```

## Folder Responsibilities

- `features/`: Gherkin feature files for user-facing scenarios.
- `steps/`: Step definitions mapping Gherkin steps to implementation.
- `page-objects/`: UI interaction abstractions for stable, reusable page actions.
- `providers/`: E2E-only API clients/helpers for test setup and cleanup.
- `fixtures/`: Deterministic test data inputs and static templates.

## Mandatory Practices

1. Use page objects for UI interaction logic.
2. Use E2E providers (not frontend providers) for setup/cleanup API calls.
3. Every create/setup operation must have a matching cleanup/delete operation.
4. Prefer API-based setup for speed and deterministic test state when it does not replace the user flow under test.
5. Keep scenario intent in `features/`; keep technical details in `steps`, `page-objects`, and `providers`.

## Endpoint Change Impact Rule

When backend endpoints are created or changed for tested flows:

- Update E2E providers in the same PR.
- Keep setup/cleanup helpers aligned with the new API contract.
