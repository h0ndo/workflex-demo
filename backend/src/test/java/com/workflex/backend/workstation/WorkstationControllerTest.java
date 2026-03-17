package com.workflex.backend.workstation;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class WorkstationControllerTest {

    @Test
    void shouldParseRiskEnumValues() {
        assertEquals(WorkstationRisk.HIGH, WorkstationRisk.valueOf("HIGH"));
        assertEquals(WorkstationRisk.LOW, WorkstationRisk.valueOf("LOW"));
        assertEquals(WorkstationRisk.NO, WorkstationRisk.valueOf("NO"));
    }
}
