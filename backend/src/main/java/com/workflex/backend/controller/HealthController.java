package com.workflex.backend.controller;

import com.workflex.backend.dto.response.DbHealthResponse;
import java.sql.Connection;
import javax.sql.DataSource;
import org.flywaydb.core.Flyway;
import org.flywaydb.core.api.MigrationInfo;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    private final DataSource dataSource;
    private final ObjectProvider<Flyway> flywayProvider;

    public HealthController(DataSource dataSource, ObjectProvider<Flyway> flywayProvider) {
        this.dataSource = dataSource;
        this.flywayProvider = flywayProvider;
    }

    @GetMapping("/db")
    public ResponseEntity<DbHealthResponse> getDbHealth() {
        try (Connection connection = dataSource.getConnection()) {
            var metaData = connection.getMetaData();
            var flywayVersion = resolveFlywayVersion();

            return ResponseEntity.ok(new DbHealthResponse(
                    true,
                    metaData.getDatabaseProductName(),
                    metaData.getDatabaseProductVersion(),
                    connection.getSchema(),
                    flywayVersion,
                    null
            ));
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body(new DbHealthResponse(false, null, null, null, null, ex.getMessage()));
        }
    }

    private String resolveFlywayVersion() {
        var flyway = flywayProvider.getIfAvailable();
        if (flyway == null) {
            return "unavailable";
        }

        MigrationInfo current = flyway.info().current();
        if (current == null || current.getVersion() == null) {
            return "none";
        }
        return current.getVersion().toString();
    }
}
