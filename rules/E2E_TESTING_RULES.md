# E2E Testing Rules (Playwright + TypeScript)

## Ziel
Geschäftskritische Use-Cases aus dem Lastenheft verlässlich Ende-zu-Ende absichern.

## Grundsatz
E2E-Tests sind **Feature-basiert**, nicht Task-basiert.

- E2E wird erst erstellt/aktiviert, wenn ein Feature fachlich vollständig umgesetzt ist.
- Unfertige Teilaufgaben bekommen keine vorgezogenen E2E-Tests.
- E2E fokussiert den **Money Path** (zentrale End-to-End-Nutzerketten).
- E2E vermeidet bewusst "klein-klein"-Tests.

## Quelle der Wahrheit

- Requirements Engineering liefert Features/Use-Cases.
- Lastenheft (`requirements/LASTENHEFT.md`) beschreibt den aktuell verfügbaren Stand.
- E2E-Suites orientieren sich an vollständig verfügbaren Features im Lastenheft.

## Testregeln

1. Pro abgeschlossenem Feature mindestens ein Happy-Path-E2E-Test.
2. Für kritische Features zusätzlich mindestens ein negativer/Fehlerfall.
3. Tests müssen reproduzierbar und ohne Sleeps geschrieben sein.
4. Selektoren stabil halten (rollen-/labelbasiert).
5. Testdaten klar definieren und isolieren.
6. Alles, was sinnvoll über Unit-Tests absicherbar ist, gehört **nicht** primär in E2E.
7. Berechtigungen und statische Konfigurationslogik werden primär als Unit-Tests abgesichert.

## CI-Regeln

- E2E-Pipeline muss in GitHub Actions laufen.
- Bei Fehlschlag: Trace/Screenshot/Report als Artefakt speichern.
- Fehlerhafte E2E-Tests blockieren Merge auf `main`.

## Definition of Done (E2E)

- Feature ist vollständig umgesetzt.
- E2E-Test(s) für den Use-Case vorhanden.
- Pipeline läuft grün.
- Testergebnisse sind als Artefakte nachvollziehbar.
