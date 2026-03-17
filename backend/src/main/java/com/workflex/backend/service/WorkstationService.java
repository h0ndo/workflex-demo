package com.workflex.backend.service;

import com.workflex.backend.dto.response.WorkstationResponse;
import com.workflex.backend.entity.Workstation;
import com.workflex.backend.repository.WorkstationRepository;
import java.util.Comparator;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class WorkstationService {

    private final WorkstationRepository workstationRepository;

    public WorkstationService(WorkstationRepository workstationRepository) {
        this.workstationRepository = workstationRepository;
    }

    public List<WorkstationResponse> getWorkstations() {
        return workstationRepository.findAll().stream()
                .sorted(Comparator.comparing(Workstation::getEmployee).thenComparing(Workstation::getWorkstationId))
                .map(WorkstationResponse::from)
                .toList();
    }
}
