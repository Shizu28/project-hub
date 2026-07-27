package com.example.project_hub.project;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final ProjectService service;

    public ProjectController(final ProjectService service) {
        this.service = service;
    }

    @GetMapping
    public List<Project> getAll() {
        return this.service.getAll();
    }

    @GetMapping("/{id}")
    public Project getById(@PathVariable final long id) {
        return this.service.getById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/{id}")
    public Project update(@PathVariable final long id, @RequestBody final Project project) {
        return this.service.save(project);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id) {
        service.delete(id);
    }
}