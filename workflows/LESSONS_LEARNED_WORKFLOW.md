# Lessons Learned Workflow

Use this workflow to convert every fix into a permanent process improvement.

Primary objective: prevent and reduce the recurrence of known errors over time.

## Core Principle

Every correction must produce at least one durable improvement in project guidance.

## Mandatory Rule

Whenever a fix is made (tests, lint, compiler, CI, runtime, or process errors):

1. Log the error in `lessons-learned/error-memory.md`.
2. Add a preventive improvement to at least one of:
   - `rules/`
   - `agents/`
   - `doku/` or other project definitions/workflows

No fix is complete until both steps are done.

## 1) Error Capture

For each error/failure, record a short entry in error memory including:

- What failed (short)
- Trigger/context (optional short note)
- Action that fixed it

Keep entries concise and actionable.

## 2) Root-Cause Reflection

For each logged issue, determine whether it is primarily:

- Process gap
- Rule gap
- Agent instruction gap
- Environment/setup gap
- Test strategy gap

## 3) Preventive Update

Apply at least one durable change based on the root cause:

- Update/add rule constraints
- Update agent responsibilities/workflow steps
- Update definitions/workflow docs
- Update local setup guidance if environment-related

## 4) Verification

After preventive updates:

- Re-run relevant local checks
- Confirm the original failure is resolved
- Confirm no regression introduced by the preventive change

## 5) Completion Criteria

A corrective task is complete only when:

- [ ] Error is logged in `lessons-learned/error-memory.md`
- [ ] Preventive guidance is updated (`rules/`, `agents/`, or definitions)
- [ ] Relevant checks are green

## Notes

- Keep error memory practical, not verbose.
- Prefer specific actions over generic statements.
- Treat repeated errors as a signal to strengthen rules and agent workflows.
