# Optimized Prompts - 2026-03-16

This file captures user prompts that improved process quality, workflow clarity, and delivery discipline.
Prompts are logged in full meaning, translated to English, with spelling/grammar corrected.

| # | Date & Time (Europe/Berlin) | User Prompt (translated, corrected) | Resulting Improvement |
| --- | --- | --- | --- |
| 1 | 2026-03-16 21:15 | In another project we used Playwright with Gherkin language and feature files to describe tests and steps clearly. Is this also supported in Playwright TypeScript? | Added Cucumber + Gherkin setup in `e2e-tests/`. |
| 2 | 2026-03-16 21:15 | Yes, please set that up, and also add rules for Gherkin tests: each test must have exactly one `Then`; multiple `Given` and `When` steps are allowed. We want each test to validate one concrete goal only. | Added strict rule in `rules/E2E_GHERKIN_RULES.md`. |
| 3 | 2026-03-16 21:22 | The frontend libs have a `src` folder; the first layer should be inside `src`, not on the same level. Also remove all empty folders. | Frontend lib structure normalized. |
| 4 | 2026-03-16 21:30 | I want to integrate Angular Material, and the frontend agent should use it. | Material packages/theme/providers added; agent workflow updated. |
| 5 | 2026-03-16 21:41 | Can you check option 3 (VS Code integration)? | `TUI` task added to workspace tasks. |
| 6 | 2026-03-16 21:43 | Yes please (set it up). | `Start App` and related tasks added. |
| 7 | 2026-03-16 21:48 | Can we also add a task for Postgres, i.e., Docker Compose? | `PG Up/Down/Logs` + full-stack startup task added. |
| 8 | 2026-03-16 21:51 | Can you make task names shorter? The bottom bar gets too crowded. | Compact labels introduced across tasks. |
| 9 | 2026-03-16 21:52 | I need tasks to run frontend unit tests, backend unit tests, and E2E tests. | `FE Unit`, `BE Unit`, `E2E` tasks added. |
| 10 | 2026-03-16 21:54 | I want the chat history to include the project start context from before this chat began. Can you add that? | Prompt history updated with backfilled context. |
| 11 | 2026-03-16 21:57 | Please use option 1 if possible (self-contained environment in pipeline). | DB/runtime provisioning hardened in CI. |
| 12 | 2026-03-16 22:58 | We get this warning in pipeline. Can we fix it? (Node.js 20 actions deprecation warning) | Workflows opted into Node 24 JS actions runtime. |
| 13 | 2026-03-16 23:06 | Please create a folder `workflows` and put the process you listed into a Markdown file in English. | `workflows/DEVELOPMENT_WORKFLOW.md` created/refined. |
| 14 | 2026-03-16 23:12 | We need to rename the acceptance workflow to Definition of Done workflow. | `workflows/DEFINITION_OF_DONE_WORKFLOW.md` renamed and aligned. |
| 15 | 2026-03-16 23:18 | We need a lessons learned workflow: every fix should lead to updates in rules/agents/definitions. Log errors in an error memory file to prevent future mistakes. | `workflows/LESSONS_LEARNED_WORKFLOW.md` and `lessons-learned/error-memory.md` added. |
| 16 | 2026-03-16 23:29 | Create a Definition of Ready workflow: discussing the feature with Requirements Engineering from multiple perspectives is mandatory before starting development. | `workflows/DEFINITION_OF_READY_WORKFLOW.md` added as mandatory gate. |

## Usage Note

Use this file as a reference for high-leverage prompt patterns that improved quality, traceability, and team process maturity.
