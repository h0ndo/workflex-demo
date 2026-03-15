# Libraries

This project uses two Angular module-based libraries:

- `business-lib` for domain/business modules
- `core-lib` for cross-cutting core modules (authentication, translation, messaging, ...)

Structure rule inside each lib:
1. First layer: domain folder
2. Second layer: technical folders (`components`, `services`, `directives`, `pipes`, ...)

Import via aliases:
- `@business-lib/*`
- `@core-lib/*`

No barrel files (`index.ts`) are used.
