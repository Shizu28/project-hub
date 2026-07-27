package com.example.project_hub;

import com.example.project_hub.project.Project;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.project_hub.project.ProjectRepository;

import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
public class ProjectHubApplication {
    static void main(final String[] args) {
        SpringApplication.run(ProjectHubApplication.class, args);

    }

    @Bean
    CommandLineRunner seed(final ProjectRepository repository) {
        return args -> repository.save(new Project("Project Hub",
                LocalDate.of(2026, 7, 20), LocalDate.of(2026, 7,
                20),
                "active", List.of("Angular 22", "Spring Boot",
                "Java 26")));
    }
}