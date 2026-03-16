# Backend Structural Rules

1. Use domain-first first-layer packaging.
2. Inside each domain package, keep technical subpackages (e.g., `controller`, `service`, `repository`, `dto`, `mapper`).
3. Enforce strict layer flow: controller -> service -> repository.
4. Use DTOs for API contracts; never expose entities directly.
5. Validate input with bean validation and return proper status codes.
6. Never expose stack traces, class names, method names, or DB internals.
7. Return the updated entity DTO after update/patch operations.
8. Use migrations for all schema/data-impacting changes.
