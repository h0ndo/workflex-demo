# Definition of Ready Workflow

Use this workflow to ensure a feature/request is sufficiently clarified before implementation starts.

## Core Rule

The Development Workflow must **not** start until Definition of Ready is explicitly confirmed.

## Mandatory Collaboration

A Requirements Engineering review is required for every new feature or request.

The requester and the requirements-engineering agent must jointly:

- clarify intent
- challenge assumptions
- evaluate the request from multiple perspectives
- document a detailed implementation-ready definition

## 1) Request Intake

- Capture the request in clear, concise language.
- Identify business/user objective.
- Identify known constraints (technical, timeline, scope, dependencies).

## 2) Multi-Perspective Clarification (Required)

The request must be analyzed from multiple perspectives, including:

- Business value perspective
- End-user workflow perspective
- Backend/API perspective
- Frontend/UX perspective
- Data and migration perspective (if applicable)
- Testing perspective (unit/e2e split)
- Operational/CI perspective
- Risks and failure modes

## 3) Requirements Detailing

Before implementation, produce detailed requirement artifacts:

- Add or update `requirements/entries/...`
- Update `requirements/PFLICHTENHEFT.md`
- Define acceptance criteria that are testable and unambiguous
- Define out-of-scope boundaries
- Define dependencies and sequencing constraints

## 4) Readiness Checklist

A request is "Ready" only if all items are true:

- [ ] Objective and scope are clear
- [ ] Assumptions are validated or explicitly recorded
- [ ] Acceptance criteria are complete and testable
- [ ] API/data/UI impacts are identified
- [ ] Test strategy is defined (backend unit, frontend unit, e2e where appropriate)
- [ ] Risks and open questions are resolved or explicitly tracked
- [ ] Requirements artifacts are updated (`entries` + `PFLICHTENHEFT`)

## 5) Ready Confirmation Gate

Implementation can start only after explicit confirmation, for example:

- "Definition of Ready approved. Start Development Workflow."

Without this confirmation, remain in clarification mode.

## 6) Handover to Development Workflow

After Ready approval:

- Start `workflows/DEVELOPMENT_WORKFLOW.md`
- Use the finalized requirement artifacts as implementation input
- Keep traceability from requirements to implementation and tests
