package com.workflex.backend.workstation;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/workflex/workstation")
public class WorkstationController {

    private final WorkstationService workstationService;

    public WorkstationController(WorkstationService workstationService) {
        this.workstationService = workstationService;
    }

    @GetMapping
    public List<WorkstationResponse> getWorkstations() {
        return workstationService.getWorkstations();
    }
}
