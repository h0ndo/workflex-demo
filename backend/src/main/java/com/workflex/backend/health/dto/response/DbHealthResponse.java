package com.workflex.backend.health.dto.response;

public record DbHealthResponse(
        boolean up,
        String database,
        String databaseVersion,
        String schema,
        String flywayVersion,
        String error
) {}
