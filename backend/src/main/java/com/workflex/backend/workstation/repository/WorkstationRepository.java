package com.workflex.backend.workstation.repository;

import com.workflex.backend.workstation.entity.Workstation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkstationRepository extends JpaRepository<Workstation, String> {
}
