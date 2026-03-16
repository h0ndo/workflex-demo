# All Prompts - Project Log (Workflex)

This file lists project prompts in chronological order.
Prompts are translated to English and spelling/grammar corrected.

Note: Entries are reconstructed from available chat history and backfilled summaries.

| # | Date & Time (Europe/Berlin) | Prompt (translated, corrected) |
| --- | --- | --- |
| 1 | 2026-03-16 Pre-chat | Do we already have frontend-agent rules? I suspect duplicate rule files; can we remove obsolete duplicates? |
| 2 | 2026-03-16 21:15 | In another project we used Playwright with Gherkin language and feature files to describe tests and steps clearly. Is this also supported in Playwright TypeScript? |
| 3 | 2026-03-16 21:15 | Yes, please set that up, and also add rules for Gherkin tests: each test must have exactly one `Then`; multiple `Given` and `When` steps are allowed. |
| 4 | 2026-03-16 21:18 | Markdown lint reports `MD032/blanks-around-lists`. |
| 5 | 2026-03-16 21:22 | Frontend libs should keep first-layer structure inside each library `src` folder, and empty folders should be removed. |
| 6 | 2026-03-16 21:30 | I want Angular Material integrated, and the frontend agent should use it. |
| 7 | 2026-03-16 21:36 | How can I start the backend? |
| 8 | 2026-03-16 21:37 | Can this chat also run in Visual Studio Code so I do not need to switch tabs constantly? |
| 9 | 2026-03-16 21:38 | Check option 3 (VS Code extension/integration). |
| 10 | 2026-03-16 21:41 | Yes please (set up the VS Code task workflow). |
| 11 | 2026-03-16 21:43 | Yes please (add one-click backend/frontend startup). |
| 12 | 2026-03-16 21:48 | Can we also add a Postgres task for Docker Compose? |
| 13 | 2026-03-16 21:51 | Can you shorten task names so the terminal bar is less crowded? |
| 14 | 2026-03-16 21:52 | I need tasks to run frontend unit tests, backend unit tests, and E2E tests. |
| 15 | 2026-03-16 21:54 | Please include project-start context from before this chat in prompt history. |
| 16 | 2026-03-16 21:57 | We had an E2E pipeline issue because no environment was available. |
| 17 | 2026-03-16 21:57 | Please do option 1 (self-contained pipeline setup). |
| 18 | 2026-03-16 22:01 | Backend error in startup: connection to `localhost:5433` refused. |
| 19 | 2026-03-16 22:02 | This happens in the pipeline. |
| 20 | 2026-03-16 22:02 | E2E pipeline. |
| 21 | 2026-03-16 22:03 | The backend start task crashes with `.\mvnw` command not found in bash. |
| 22 | 2026-03-16 22:04 | Maven Spring Boot plugin fails due to Java runtime mismatch (class file version 61 vs 55). |
| 23 | 2026-03-16 22:05 | Yes please (add task safeguards for Java version). |
| 24 | 2026-03-16 22:09 | Same Java compatibility failure persists. |
| 25 | 2026-03-16 22:12 | Backend task still exits with code 1 in bash command sequence. |
| 26 | 2026-03-16 22:15 | Explain briefly the difference between Angular Signals and RxJS. |
| 27 | 2026-03-16 22:16 | Do we have Signals usage as a rule in our rule set? |
| 28 | 2026-03-16 22:17 | Yes, please consolidate the Angular rules. |
| 29 | 2026-03-16 22:21 | Connection to `localhost:5433` refused (again). |
| 30 | 2026-03-16 22:23 | The same error also appears in the local backend task. |
| 31 | 2026-03-16 22:25 | Docker image pull failed; Docker Desktop pipe missing; `pg_isready` command not found. |
| 32 | 2026-03-16 22:32 | It works now, sorry. |
| 33 | 2026-03-16 22:32 | Next goal: make all pipelines green. |
| 34 | 2026-03-16 22:38 | Linter pipeline reports `prefer-control-flow` and `prefer-inject` errors. |
| 35 | 2026-03-16 22:50 | Please check the pipeline status. |
| 36 | 2026-03-16 22:58 | This warning appears in pipeline: Node.js 20 actions deprecation. Can we fix it? |
| 37 | 2026-03-16 23:06 | Please create a `workflows` folder and write the detailed process list into an English Markdown file. |
| 38 | 2026-03-16 23:10 | Rename that workflow and update the internal text to `AI Development Workflow`. |
| 39 | 2026-03-16 23:12 | Create a second workflow for acceptance: no commit/push before local checks and my review/approval. |
| 40 | 2026-03-16 23:18 | Create a lessons learned workflow with an error-memory table to prevent recurring mistakes. |
| 41 | 2026-03-16 23:20 | The goal of lessons learned is to prevent and reduce future errors. |
| 42 | 2026-03-16 23:26 | Rename acceptance workflow to `Definition of Done Workflow`. |
| 43 | 2026-03-16 23:26 | Rename AI development workflow to `Development Workflow`. |
| 44 | 2026-03-16 23:29 | Create a `Definition of Ready` workflow as a mandatory prerequisite before development starts. |
| 45 | 2026-03-16 23:31 | Make prompt history a table with timestamps; add a file of my optimized prompts in table form for others to learn from. |
| 46 | 2026-03-16 23:32 | Add the date to timestamps. |
| 47 | 2026-03-16 23:34 | In prompt history, do not shorten content; always translate my prompt, fix spelling, and write it fully. |
| 48 | 2026-03-16 23:37 | List all prompts since this project began, and add sequential numbering in the optimized prompts table. |
