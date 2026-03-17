package com.workflex.backend.workstation.bootstrap;

import com.workflex.backend.workstation.entity.Workstation;
import com.workflex.backend.workstation.entity.WorkstationRisk;
import com.workflex.backend.workstation.repository.WorkstationRepository;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

@Component
public class WorkstationCsvImporter implements ApplicationRunner {

    private final WorkstationRepository workstationRepository;

    public WorkstationCsvImporter(WorkstationRepository workstationRepository) {
        this.workstationRepository = workstationRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws IOException {
        if (workstationRepository.count() > 0) {
            return;
        }

        var csv = new ClassPathResource("workstations.csv");
        try (var reader = new BufferedReader(new InputStreamReader(csv.getInputStream(), StandardCharsets.UTF_8))) {
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.isBlank() || line.startsWith("workstation_id")) {
                    continue;
                }

                String[] parts = line.split(",");
                Workstation workstation = new Workstation();
                workstation.setWorkstationId(parts[0].trim());
                workstation.setEmployee(parts[1].trim());
                workstation.setOriginCountry(parts[2].trim());
                workstation.setDestinationCountry(parts[3].trim());
                workstation.setStartDate(LocalDate.parse(parts[4].trim()));
                workstation.setEndDate(LocalDate.parse(parts[5].trim()));
                workstation.setOfficeDays(Integer.parseInt(parts[6].trim()));
                workstation.setRisk(WorkstationRisk.valueOf(parts[7].trim()));

                workstationRepository.save(workstation);
            }
        }
    }
}
