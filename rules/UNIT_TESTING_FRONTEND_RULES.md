# Unit Testing Rules Frontend (Angular)

## Ziel
Frontend-Logik schnell, isoliert und zuverlässig über Unit-Tests absichern.

## Grundsätze

- So viel wie möglich über Unit-Tests absichern, um E2E-Aufwand zu reduzieren.
- Unit-Tests sind der Standard für komponentennahe und fachliche UI-Logik.
- Tests müssen schnell und deterministisch laufen.

## Typischer Tooling-Rahmen

- Test-Runner/Framework gemäß Projekt-Setup (z. B. Jasmine/Karma oder Vitest)
- Angular TestBed für Komponenten/Services
- Mocks/Stubs für Abhängigkeiten

## Pflichtabdeckung

1. Service-Logik und Datenverarbeitung
2. Formularvalidierung und Fehlerzustände
3. Guards/Interceptors/Permissions auf Unit-Ebene
4. Edge Cases und Negativpfade

## E2E-Abgrenzung

- Berechtigungs-/Konfigurationslogik primär als Unit-Test absichern.
- Kein unnötiges "klein-klein" in E2E.

## Definition of Done

- Kritische Logik ist per Unit-Tests abgedeckt.
- Relevante Negativfälle sind enthalten.
- Tests laufen lokal und in CI stabil und schnell.
