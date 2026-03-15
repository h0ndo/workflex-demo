package com.workflex.backend.dto.response;

import java.time.Instant;

public record TestItemResponse(Long id, String name, Instant createdAt) {}
