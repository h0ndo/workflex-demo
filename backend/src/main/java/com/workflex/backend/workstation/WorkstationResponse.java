package com.workflex.backend.workstation;

import java.time.LocalDate;

public record WorkstationResponse(
        String workstationId,
        String employee,
        String originCountry,
        String destinationCountry,
        LocalDate startDate,
        LocalDate endDate,
        Integer officeDays,
        WorkstationRisk risk
) {
    public static WorkstationResponse from(Workstation workstation) {
        return new WorkstationResponse(
                workstation.getWorkstationId(),
                workstation.getEmployee(),
                workstation.getOriginCountry(),
                workstation.getDestinationCountry(),
                workstation.getStartDate(),
                workstation.getEndDate(),
                workstation.getOfficeDays(),
                workstation.getRisk()
        );
    }
}
