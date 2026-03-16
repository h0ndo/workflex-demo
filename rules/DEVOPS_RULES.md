# DevOps Rules (GitHub Actions)

## Ziel
Stabile, reproduzierbare CI/CD-Prozesse für Qualität, E2E und produktionsnahe Builds.

## Pflicht-Pipelines

1. **Quality Pipeline**
   - Linting und Unit-/Service-Tests für Frontend und Backend.
   - Muss für Pull Requests und Push auf `main` laufen.

2. **E2E Pipeline**
   - Führt Playwright-E2E-Tests aus.
   - Läuft für Pull Requests und Push auf `main`.
   - Testet nur vollständig umgesetzte Features.

3. **Build/Release Pipeline**
   - Baut produktionsnahe Artefakte für Frontend und Backend.
   - Stellt Artefakte als Workflow-Artefakte bereit.
   - Muss auf `main` und optional manuell (`workflow_dispatch`) laufen.

## Qualitätsregeln

- Pipelines sind fail-fast: Bei Fehlern sofort rot.
- Keine Secrets in Repos/Logs.
- Caching für npm/maven nutzen, wenn sinnvoll.
- Tool-Versionen explizit setzen (Node/Java).
- Relevante Reports/Logs als Artefakte hochladen.

## Branch/PR-Regeln

- Merge nach `main` nur bei grüner Quality- und E2E-Pipeline.
- Build/Release muss auf `main` erfolgreich sein, bevor Artefakte verteilt werden.

## Definition of Done (DevOps)

- Alle Pflicht-Pipelines vorhanden und grün.
- Artefakte verfügbar und nachvollziehbar versioniert.
- E2E und Quality schützen die wichtigsten Produkt-Use-Cases.
