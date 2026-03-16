# E2E Testing Rules

1. E2E is feature-based, not task-based.
2. E2E focuses on money paths and complete use-case chains.
3. Keep E2E scope small; move all possible checks to unit tests.
4. Permission/configuration checks are primarily unit tests.
5. Keep Playwright/Cucumber artifacts for failures.
6. Follow `E2E_GHERKIN_RULES.md` when scenarios are written in Gherkin.
7. Every E2E test that creates data must also clean up that data.
8. Cleanup must always be possible either via UI flow or direct API call.
9. E2E tests are allowed to create required setup data via API calls to speed up execution and establish deterministic test state.
10. Prefer deterministic, low-effort setup/cleanup helpers/utilities so test preparation and teardown remain simple and reliable.
11. Use a dedicated E2E provider layer for API setup/cleanup calls (do not depend on frontend providers).
12. When backend endpoints are added/changed for tested flows, update E2E providers in the same change.

## E2E Folder Structure (Domain-First)

Use a domain-first first layer and technical subfolders inside each domain.

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

## Do / Don't

### Do

- Create preconditions through E2E providers when UI setup would be slow or unstable.
- Keep provider functions small, explicit, and idempotent where possible.
- Reuse page objects for UI interactions.
- Always pair create/setup actions with cleanup/delete actions.

### Don't

- Do not call frontend app providers/services directly from E2E.
- Do not leave created artifacts behind after tests.
- Do not hide business intent in generic helper names.
