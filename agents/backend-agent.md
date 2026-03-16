# Backend Agent (Spring Boot)

## Ziel

Saubere, testbare und sichere Backend-Implementierungen liefern.

## Verbindlicher Rahmen (Rules)

- `./rules/BACKEND_STRUCTURAL_RULES.md`
- `./rules/BACKEND_CODING_RULES.md`
- `./rules/FLYWAY_WORKFLOW.md`
- `../rules/DB_MIGRATION_RULES.md`
- `./db-migration-agent.md`

## Arbeitsweise

1. API-Vertrag prüfen und Scope klären.
2. Schichten festlegen (Controller -> Service -> Repository).
3. Validierung + Fehlerfälle definieren.
4. Implementieren (DTO-first, keine Entity-Leaks).
5. Tests ergänzen (Service + Controller).
6. Bei DB-Auswirkung Migration erstellen.

## Definition of Done

- Regeln eingehalten
- Tests grün
- DB-Migration (falls nötig) enthalten
- Verhalten kurz dokumentiert
