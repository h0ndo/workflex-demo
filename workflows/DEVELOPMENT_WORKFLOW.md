# Development Workflow

Use this workflow to orchestrate end-to-end delivery. The goal is to make planning, ownership, implementation, and test strategy explicit across all agents.

## 1) Intake and Scope

- Clarify the target outcome.
- Define in-scope and out-of-scope boundaries.
- Capture unknowns and open questions for the requester.

## 2) Requirements Engineering Agent

- Create or update `requirements/entries/...` for the requested change.
- Define acceptance criteria.
- List risks, assumptions, and dependencies.
- Record planned scope updates in `requirements/PFLICHTENHEFT.md`.

## 3) Backend Planning (backend-agent)

- Identify affected endpoints, DTOs, services, and validations.
- Plan error handling and response behavior (no internal leakage).
- Decide whether database migrations are required.
- If schema changes are needed, include the db-migration agent path.

## 4) Backend Unit Test Dialogue (unit-testing-backend-agent)

- Propose meaningful backend unit test cases.
- Prioritize by value:
  - Must: core happy path, validation, error mapping
  - Should: edge and boundary cases
  - Could: additional robustness scenarios
- Define required mocks/fakes/test fixtures.
- Explicitly state what is not covered by unit tests.

## 5) Frontend Planning (frontend-agent)

- Define affected pages, components, and user flows.
- Prefer Angular Material components unless custom behavior is required.
- Decide Signals vs RxJS responsibilities.
- Plan all UI states: loading, empty, error, success.

## 6) Frontend Unit Test Dialogue (unit-testing-frontend-agent)

- Propose component/service test cases.
- Cover user interactions and view-state transitions.
- Shift low-level checks from E2E to unit tests where possible.
- Define test doubles and data setup strategy.

## 7) E2E Planning (e2e-testing-agent)

- Only include fully completed feature flows.
- Focus on money paths and full use-case chains.
- Use Gherkin scenarios with exactly one `Then` per scenario.
- Use domain-first E2E structure with technical subfolders (`features`, `steps`, `page-objects`, `providers`, `fixtures`).
- Use E2E providers for API-based setup/cleanup where helpful.
- Ensure each create/setup path has a matching cleanup/delete path.
- Map planned E2E scenarios to completed scope entries before execution.

## 8) CI/CD Impact Review (devops-agent)

- Determine affected workflow(s): quality, e2e, build-release.
- Define required green checks.
- Identify artifacts/logs needed for fast failure analysis.
- Call out runtime risks (flaky tests, startup dependencies, environment gaps).

## 9) Definition of Done

A change is done only when all items below are satisfied:

- Functional acceptance criteria are met.
- Required unit tests are implemented and passing.
- E2E scope (if applicable) is implemented and passing.
- Quality, E2E, and Build/Release workflows are green.
- Requirements docs are updated:
  - New/discussed scope in `PFLICHTENHEFT` + entries
  - Completed scope reflected in `LASTENHEFT` when delivered
- `prompt-history` is updated with concise implementation history.

## 10) Execution Sequence (Task Chain)

Use this order for execution unless explicitly overridden:

1. Requirements clarification and acceptance criteria
2. API contract and backend design
3. DB migration planning (if needed)
4. Backend implementation
5. Backend unit tests
6. Frontend implementation
7. Frontend unit tests
8. E2E scenario authoring (completed flows only)
9. CI/CD verification and pipeline stabilization
10. Documentation updates and final readiness check

## Optional Output Template for Development Planning

For each incoming request, provide:

- Goal summary
- Agent-by-agent plan
- Proposed test dialogue points (backend/frontend)
- Risks and dependencies
- Final task chain with owners
