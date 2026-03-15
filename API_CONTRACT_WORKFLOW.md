# API Contract Workflow (Backend <-> Frontend)

## Goal
Prevent backend/frontend mismatches by generating frontend types from backend OpenAPI.

## Source of truth
- Backend OpenAPI JSON: `http://localhost:8080/v3/api-docs`
- Backend Swagger UI: `http://localhost:8080/swagger-ui.html`

## Frontend generation
From `frontend/`:

```bash
npm run generate:api
```

Generated file:
- `src/libs/core-lib/api/generated/openapi.d.ts`

## Team rule
1. Backend contract changes (DTOs/endpoints/status codes) require regenerating API types.
2. Generated file must be committed in the same PR.
3. CI should run:
   - `npm run generate:api`
   - `git diff --exit-code -- src/libs/core-lib/api/generated/openapi.d.ts`

## Recommended daily flow
1. Start backend.
2. Run `npm run generate:api` in frontend.
3. Use generated types in services/components.
4. Run lint/build/tests.

## Notes
- Avoid manual duplicate DTO types in frontend when backend contract exists in OpenAPI.
- If generation fails, check backend startup and `/v3/api-docs` availability first.
