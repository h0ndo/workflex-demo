# E2E Gherkin Rules

1. Use `.feature` files to describe completed feature behavior.
2. Each scenario must validate exactly one outcome.
3. **Exactly one `Then` step per scenario** is required.
4. Multiple `Given` and `When` steps are allowed when needed.
5. Scenario titles must describe one concrete business objective.
6. Keep step wording business-readable and implementation-agnostic.
7. Do not encode low-level technical checks in feature text.
