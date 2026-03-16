# Acceptance Workflow

Use this workflow for controlled delivery. No commit or push is allowed before local verification is complete and the requester explicitly approves acceptance.

## Core Rule

Do **not** commit and do **not** push until all acceptance gates pass and the requester confirms approval.

## 1) Implementation Phase (Local Only)

- Implement changes in local working tree.
- Keep modifications scoped to the requested feature/fix.
- Do not create commits during this phase.

## 2) Change Inventory

Before review, provide a clear change inventory:

- List every changed file.
- For each file, summarize:
  - what was changed
  - why it was changed
  - risk level (low/medium/high)
- Identify key code locations for review (file + function/class/section).

## 3) Guided Code Review with Requester

- Present relevant code locations to the requester for inspection.
- Answer review questions and clarify trade-offs.
- Apply requested adjustments locally.
- Repeat until requester confirms code-level acceptance.

## 4) Local Runtime Verification

The application must be started locally and reviewed manually:

- Start required services (e.g., database/backend/frontend).
- Validate changed flows in the running application.
- Confirm expected behavior and key error paths.

## 5) Local Quality Gates (All Must Pass)

Run all required checks locally at least once:

- Backend unit tests: pass
- Frontend unit tests: pass
- E2E tests (if in scope): pass
- Linters/static checks: pass
- Formatting checks: pass
- Build checks: pass

If any gate fails:

- Fix locally
- Re-run relevant checks
- Re-present updated change inventory if scope changed

## 6) Acceptance Confirmation

Only proceed when requester explicitly confirms acceptance.

Required confirmation statement (or equivalent explicit approval):

- "Acceptance approved. You may commit and push."

Without explicit confirmation, remain in local-only mode.

## 7) Commit and Push (After Approval Only)

After acceptance confirmation:

1. Create commit(s) with clear conventional messages.
2. Push to target branch.
3. Share commit hash(es) and summary.
4. Monitor CI and report status.

## 8) Documentation Update

After push, update project history/documentation as required:

- `prompt-history/YYYY-MM-DD.md`
- requirements docs if scope/status changed
- any workflow/rules documents impacted by the work

## Optional Review Checklist

- [ ] All changed files listed and explained
- [ ] Requester reviewed key code locations
- [ ] Application run locally and visually verified
- [ ] Unit tests passed
- [ ] E2E passed (if applicable)
- [ ] Lint/format/build passed
- [ ] Requester explicitly approved acceptance
- [ ] Commit and push completed
- [ ] CI green
