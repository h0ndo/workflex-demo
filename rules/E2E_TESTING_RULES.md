# E2E Testing Rules

1. E2E is feature-based, not task-based.
2. E2E focuses on money paths and complete use-case chains.
3. Keep E2E scope small; move all possible checks to unit tests.
4. Permission/configuration checks are primarily unit tests.
5. Keep Playwright/Cucumber artifacts for failures.
6. Follow `E2E_GHERKIN_RULES.md` when scenarios are written in Gherkin.
