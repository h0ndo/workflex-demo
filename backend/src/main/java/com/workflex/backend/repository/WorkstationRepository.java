package com.workflex.backend.repository;

import com.workflex.backend.entity.Workstation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkstationRepository extends JpaRepository<Workstation, String> {
}
