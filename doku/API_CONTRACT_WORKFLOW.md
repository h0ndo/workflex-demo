# API Contract Workflow

1. Backend OpenAPI is the source of truth.
2. Regenerate frontend types after contract changes.
3. Commit generated API artifacts in the same PR.
4. If changed endpoints are used by E2E setup/cleanup flows, update E2E providers in the same PR.
