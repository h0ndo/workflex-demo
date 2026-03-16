# API Contract Rules (Backend <-> Frontend)

## Verbindliche Regeln

1. Änderungen am Backend-Contract (DTOs, Endpunkte, Statuscodes) erfordern eine Regeneration der Frontend-API-Typen.
2. Die generierte Datei muss im **gleichen PR** mit committed werden.
3. CI soll die Generierung prüfen und fehlschlagen, wenn Änderungen nicht committed sind.

## Pflichtkommandos (Frontend)

```bash
npm run generate:api
git diff --exit-code -- src/libs/core-lib/api/generated/openapi.d.ts
```

## Team-Standard

- Keine manuellen, duplizierten Frontend-DTOs pflegen, wenn der Contract in OpenAPI vorliegt.
- OpenAPI bleibt die gemeinsame Vertragsgrundlage zwischen Backend und Frontend.
