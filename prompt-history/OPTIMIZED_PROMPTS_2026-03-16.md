# Optimized Prompts - 2026-03-16

This file captures user prompts that improved process quality, workflow clarity, and delivery discipline.

| Date & Time (Europe/Berlin) | User Prompt (optimized intent) | Resulting Improvement |
| --- | --- | --- |
| 2026-03-16 21:15 | Use Gherkin in Playwright TypeScript with feature files and step structure. | Added Cucumber + Gherkin setup in `e2e-tests/`. |
| 2026-03-16 21:15 | Enforce one `Then` per test scenario. | Added strict rule in `rules/E2E_GHERKIN_RULES.md`. |
| 2026-03-16 21:22 | Move lib first-layer structure into each library `src/`; remove empty folders. | Frontend lib structure normalized. |
| 2026-03-16 21:30 | Integrate Angular Material and require frontend agent usage. | Material packages/theme/providers added; agent workflow updated. |
| 2026-03-16 21:41 | Add VS Code task for in-editor OpenClaw usage. | `TUI` task added to workspace tasks. |
| 2026-03-16 21:43 | Add one-click backend + frontend startup tasks. | `Start App` and related tasks added. |
| 2026-03-16 21:48 | Add Postgres Docker Compose task support. | `PG Up/Down/Logs` + full-stack startup task added. |
| 2026-03-16 21:51 | Keep task labels short to reduce terminal clutter. | Compact labels introduced across tasks. |
| 2026-03-16 21:52 | Add dedicated test tasks for FE unit, BE unit, and E2E. | `FE Unit`, `BE Unit`, `E2E` tasks added. |
| 2026-03-16 21:54 | Backfill pre-chat project start context into prompt history. | Prompt history updated with backfilled context. |
| 2026-03-16 21:57 | Make E2E pipeline self-contained without external environment dependency. | DB/runtime provisioning hardened in CI. |
| 2026-03-16 22:38 | Validate option to run this workflow ergonomically from VS Code. | Tasking and shell compatibility progressively stabilized. |
| 2026-03-16 22:58 | Remove Node 20 deprecation warnings in GitHub Actions. | Workflows opted into Node 24 JS actions runtime. |
| 2026-03-16 23:06 | Formalize detailed development orchestration workflow. | `workflows/DEVELOPMENT_WORKFLOW.md` created/refined. |
| 2026-03-16 23:12 | Rename Acceptance workflow to Definition of Done workflow. | `workflows/DEFINITION_OF_DONE_WORKFLOW.md` renamed and aligned. |
| 2026-03-16 23:18 | Add lessons learned workflow + error memory to reduce repeated mistakes. | `workflows/LESSONS_LEARNED_WORKFLOW.md` and `lessons-learned/error-memory.md` added. |
| 2026-03-16 23:29 | Add Definition of Ready as prerequisite before development starts. | `workflows/DEFINITION_OF_READY_WORKFLOW.md` added as mandatory gate. |

## Usage Note

Use this file as a reference for high-leverage prompt patterns that improved quality, traceability, and team process maturity.
