package com.PortafolioBackend.PortafolioBackend.controller;

import com.PortafolioBackend.PortafolioBackend.model.Project;
import com.PortafolioBackend.PortafolioBackend.repository.ProjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@RestController

public class MainController {

    @Autowired
    ProjectRepo projectRepo;

    @PostMapping("/addProject")
    public void addProject(@RequestBody Project project){
        projectRepo.save(project);

    }

    @GetMapping("/fetchProjects")
    public List<Project> fetchProjects() {
        return projectRepo.findAll().stream()
                .map(this::formatProjectDescription) // Formatear las descripciones antes de enviarlas
                .collect(Collectors.toList());
    }

    @GetMapping("/projects/{rno}")
    public Project getProject(@PathVariable("rno") Integer rno) {
        return projectRepo.findByRno(rno)
                .map(this::formatProjectDescription) // También formatear en la petición individual
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Project not found"));
    }

    // Método para reemplazar \n con <br>
    private Project formatProjectDescription(Project project) {
        project.setDescription(project.getDescription().replace("\n", " <br> "));
        return project;
    }



}
