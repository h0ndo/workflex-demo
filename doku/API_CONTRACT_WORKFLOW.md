# API Contract Workflow (Backend <-> Frontend)

## Ziel

Backend/Frontend-Mismatches vermeiden, indem Frontend-Typen aus dem Backend-OpenAPI-Contract erzeugt werden.

## Source of Truth

- Backend OpenAPI JSON: `http://localhost:8080/v3/api-docs`
- Backend Swagger UI: `http://localhost:8080/swagger-ui.html`

## Frontend-Generierung

Aus `frontend/` ausführen:

```bash
npm run generate:api
```

Generierte Datei:

- `src/libs/core-lib/api/generated/openapi.d.ts`

## Empfohlener Daily Flow

1. Backend starten.
2. In `frontend/` `npm run generate:api` ausführen.
3. Generierte Typen in Services/Components verwenden.
4. Lint/Build/Tests laufen lassen.

## CI-Hinweis

CI sollte zusätzlich sicherstellen, dass nach der Generierung kein ungecommiteter Unterschied bleibt:

```bash
git diff --exit-code -- src/libs/core-lib/api/generated/openapi.d.ts
```

## Troubleshooting

Wenn die Generierung fehlschlägt:

1. Prüfen, ob Backend läuft.
2. Prüfen, ob `/v3/api-docs` erreichbar ist.
3. Erst danach Frontend/Tooling-Probleme analysieren.
