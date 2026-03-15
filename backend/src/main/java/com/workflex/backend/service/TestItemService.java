package com.workflex.backend.service;

import com.workflex.backend.dto.response.TestItemResponse;
import com.workflex.backend.repository.TestItemRepository;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class TestItemService {

    private final TestItemRepository repository;

    public TestItemService(TestItemRepository repository) {
        this.repository = repository;
    }

    public List<TestItemResponse> getAll() {
        return repository.findAllByOrderByIdAsc().stream()
                .map(item -> new TestItemResponse(item.getId(), item.getName(), item.getCreatedAt()))
                .toList();
    }
}
