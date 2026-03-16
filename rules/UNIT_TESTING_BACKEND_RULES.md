# Backend Unit Testing Rules

1. Backend business logic and permission rules must be covered by unit tests.
2. Use JUnit 5 and Mockito (PowerMockito only when truly needed).
3. Include negative-path tests for critical rules.
4. Tests must be fast and deterministic.
