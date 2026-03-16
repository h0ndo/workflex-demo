# Backend Structural Rules

1. Enforce strict layers: controller -> service -> repository.
2. Use DTOs for API contracts; never expose entities directly.
3. Validate input with bean validation and return proper status codes.
4. Never expose stack traces, class names, method names, or DB internals.
5. Return the updated entity DTO after update/patch operations.
6. Use migrations for all schema/data-impacting changes.
