package com.workflex.backend.workstation.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import com.workflex.backend.workstation.entity.Workstation;
import com.workflex.backend.workstation.enums.WorkstationRisk;
import com.workflex.backend.workstation.repository.WorkstationRepository;
import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class WorkstationServiceTest {

    @Mock
    private WorkstationRepository workstationRepository;

    @InjectMocks
    private WorkstationService workstationService;

    @Test
    void shouldSortByEmployeeThenWorkstationId() {
        Workstation w1 = workstation("w2", "Steffen Jacobs", WorkstationRisk.HIGH);
        Workstation w2 = workstation("w1", "Steffen Jacobs", WorkstationRisk.HIGH);
        Workstation w3 = workstation("w4", "Andre Fischer", WorkstationRisk.LOW);

        when(workstationRepository.findAll()).thenReturn(List.of(w1, w2, w3));

        var result = workstationService.getWorkstations();

        assertEquals(3, result.size());
        assertEquals("Andre Fischer", result.get(0).employee());
        assertEquals("w1", result.get(1).workstationId());
        assertEquals("w2", result.get(2).workstationId());
    }

    private Workstation workstation(String id, String employee, WorkstationRisk risk) {
        Workstation workstation = new Workstation();
        workstation.setWorkstationId(id);
        workstation.setEmployee(employee);
        workstation.setOriginCountry("Germany");
        workstation.setDestinationCountry("Spain");
        workstation.setStartDate(LocalDate.parse("2024-01-01"));
        workstation.setEndDate(LocalDate.parse("2024-01-31"));
        workstation.setOfficeDays(10);
        workstation.setRisk(risk);
        return workstation;
    }
}
