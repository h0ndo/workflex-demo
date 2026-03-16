# Pflichtenheft (Soll-Stand)

## Zweck
Dokumentiert die geplanten Features, Prioritäten und Umsetzungsziele.

## Priorisierung

- Must: zwingend für MVP/aktuelles Ziel
- Should: wichtig, aber nachrangig
- Could: optional, wertsteigernd

## Feature-Liste (Plan)

| ID | Feature | Ziel/Nutzen | Priorität | Status | Referenzen |
|---|---|---|---|---|---|
| SOLL-001 | Requirements-Archiv aufbauen | Anforderungen langfristig nachvollziehbar halten | Must | in Arbeit | `requirements/README.md` |
| SOLL-002 | UI/UX-Flow systematisch prüfen | UX-Risiken früh erkennen und umsetzbar machen | Should | offen | `agents/ui-ux-agent.md`, `doku/UI_UX_Analyse_Workflow.md` |
| SOLL-003 | DevOps-Pipelines trennen | Quality, E2E und Build/Release klar absichern | Must | in Arbeit | `rules/DEVOPS_RULES.md`, `.github/workflows/` |
| SOLL-004 | Feature-basierte E2E-Absicherung | Vollständige Features via Playwright absichern | Must | in Arbeit | `rules/E2E_TESTING_RULES.md`, `e2e-tests/` |
| SOLL-005 | Unit-Testing aufteilen | Frontend- und Backend-Unit-Testing separat steuern | Must | in Arbeit | `agents/unit-testing-frontend-agent.md`, `agents/unit-testing-backend-agent.md` |

## Änderungsregeln

1. Jede neue Anforderung erhält einen Eintrag in `requirements/entries/`.
2. Pflichtenheft-Einträge verweisen auf passende Entries und GitHub-Issues.
3. Bei Umsetzung wird Status aktualisiert und ggf. ins Lastenheft überführt.
