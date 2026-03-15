package com.workflex.backend.controller;

import com.workflex.backend.dto.response.TestItemResponse;
import com.workflex.backend.service.TestItemService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tests")
public class TestItemController {

    private final TestItemService service;

    public TestItemController(TestItemService service) {
        this.service = service;
    }

    @GetMapping
    public List<TestItemResponse> getAll() {
        return service.getAll();
    }
}
