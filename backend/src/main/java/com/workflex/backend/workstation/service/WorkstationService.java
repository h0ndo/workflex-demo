package com.workflex.backend.workstation.service;

import com.workflex.backend.workstation.dto.response.WorkstationResponse;
import com.workflex.backend.workstation.repository.WorkstationRepository;
import java.util.Set;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class WorkstationService {

    private static final Set<String> ALLOWED_SORT_FIELDS = Set.of(
            "employee",
            "originCountry",
            "destinationCountry",
            "startDate",
            "endDate",
            "officeDays",
            "risk",
            "workstationId"
    );

    private final WorkstationRepository workstationRepository;

    public WorkstationService(WorkstationRepository workstationRepository) {
        this.workstationRepository = workstationRepository;
    }

    public List<WorkstationResponse> getWorkstations(String sortParam) {
        Sort sort = toSort(sortParam);
        return workstationRepository.findAll(sort).stream()
                .map(WorkstationResponse::from)
                .toList();
    }

    private Sort toSort(String sortParam) {
        String[] parts = sortParam == null ? new String[0] : sortParam.split(",");

        String field = parts.length > 0 ? parts[0].trim() : "employee";
        if (!ALLOWED_SORT_FIELDS.contains(field)) {
            field = "employee";
        }

        Sort.Direction direction = Sort.Direction.ASC;
        if (parts.length > 1 && "desc".equalsIgnoreCase(parts[1].trim())) {
            direction = Sort.Direction.DESC;
        }

        return Sort.by(direction, field).and(Sort.by(Sort.Direction.ASC, "workstationId"));
    }
}
