package com.PortafolioBackend.PortafolioBackend.Controller;

import com.PortafolioBackend.PortafolioBackend.Model.Project;
import com.PortafolioBackend.PortafolioBackend.Repository.ProjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MainController {

    @Autowired
    ProjectRepo projectRepo;

    @PostMapping("/addProject")
    public void addProject(@RequestBody Project project){
        projectRepo.save(project);

    }

    @GetMapping("/fetchProjects")
    public List<Project> fetchProjects(){
        return projectRepo.findAll();

    }


}
