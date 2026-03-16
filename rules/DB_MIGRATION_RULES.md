# DB Migration Rules

1. Every schema or persisted-data change requires a Flyway migration.
2. Never rewrite already executed migrations; use forward-fix migrations.
3. Use expand -> migrate -> contract for risky data evolution.
4. Validate integrity before and after migration.
