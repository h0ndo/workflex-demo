# UI/UX Analyse Workflow (Workflex)

## Ziel

Einheitlicher, reproduzierbarer Ablauf für UI/UX-Analysen pro Story, damit Qualität messbar und nachvollziehbar bleibt.

## Geltungsbereich

- Neue Features
- Änderungen an bestehenden Flows
- Bugfixes mit UI-Auswirkung

## Input

- Story/Task (inkl. Akzeptanzkriterien)
- Betroffene Screens/Flows
- API-Vertrag (falls relevant)

## Standardablauf

1. **Scope klären**
   - Was ist in Scope / Out of Scope?
   - Welche User-Rolle nutzt den Flow?
2. **Happy Path prüfen**
   - Einstieg -> Aktion -> Ergebnis
   - Alle Kernschritte durchlaufen
3. **State-Qualität prüfen**
   - Loading, Empty, Error, Success
   - Sichtbare und verständliche Rückmeldungen
4. **Form- und Validierungscheck**
   - Pflichtfelder, Fehlermeldungen, Grenzwerte
   - Fokusverhalten und Korrekturpfad
5. **Usability-Check**
   - Verständlichkeit von Labels/Buttons
   - Erwartbare Navigation und klare CTA-Reihenfolge
6. **Konsistenz-Check**
   - Gleiches Verhalten bei ähnlichen Komponenten
   - Einheitliches Wording und Interaktionsmuster
7. **Technischer Browser-Check**
   - Reale Interaktion im Browser
   - DOM/Status/Fehler reproduzierbar erfassen
8. **Befund & Priorisierung**
   - Findings als Must/Should/Could markieren
   - Risiken und offene Fragen dokumentieren
9. **GitHub-Übergabe**
   - Befunde in Stories/Tasks/Bugs überführen
   - Akzeptanzkriterien bei Bedarf schärfen

## Mindest-Output pro Analyse

- Kurzfazit (1-3 Sätze)
- Liste der Findings (priorisiert)
- Konkrete Maßnahmen (Issue/Task-fähig)
- Offene Fragen / Annahmen

## Definition of Done

Eine UI/UX-Analyse ist fertig, wenn:

1. Kernflow + relevante Randfälle geprüft sind.
2. Findings priorisiert und eindeutig beschrieben sind.
3. Maßnahmen als umsetzbare Tasks/Stories vorliegen.
4. Ergebnis im Projekt nachvollziehbar dokumentiert ist.
