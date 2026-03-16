# DevOps Rules

1. Maintain separate pipelines for quality, E2E, and build/release.
2. Pipelines run on pull requests and push to `main`.
3. Build/release publishes backend and frontend artifacts.
4. Fail fast and never expose secrets.
