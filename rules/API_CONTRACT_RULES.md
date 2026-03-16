# API Contract Rules

1. Backend OpenAPI is the contract source of truth.
2. Any backend contract change requires frontend type regeneration.
3. Generated contract artifacts must be committed in the same PR.
4. If changed endpoints are used by E2E setup/cleanup flows, E2E providers must be updated in the same PR.
