package com.workflex.backend.workstation;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.workflex.backend.workstation.controller.WorkstationController;
import com.workflex.backend.workstation.dto.response.WorkstationResponse;
import com.workflex.backend.workstation.enums.WorkstationRisk;
import com.workflex.backend.workstation.service.WorkstationService;
import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class WorkstationControllerTest {

    @Mock
    private WorkstationService workstationService;

    @InjectMocks
    private WorkstationController workstationController;

    @Test
    void shouldForwardSortParamToService() {
        List<WorkstationResponse> expected = List.of(
                new WorkstationResponse(
                        "w1",
                        "Steffen Jacobs",
                        "Germany",
                        "United States",
                        LocalDate.parse("2024-01-02"),
                        LocalDate.parse("2024-12-31"),
                        65,
                        WorkstationRisk.HIGH
                )
        );

        when(workstationService.getWorkstations("startDate,desc")).thenReturn(expected);

        List<WorkstationResponse> result = workstationController.getWorkstations("startDate,desc");

        assertEquals(expected, result);
        verify(workstationService).getWorkstations("startDate,desc");
    }
}
