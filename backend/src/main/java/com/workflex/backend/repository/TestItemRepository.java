package com.workflex.backend.repository;

import com.workflex.backend.entity.TestItemEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestItemRepository extends JpaRepository<TestItemEntity, Long> {
    List<TestItemEntity> findAllByOrderByIdAsc();
}
