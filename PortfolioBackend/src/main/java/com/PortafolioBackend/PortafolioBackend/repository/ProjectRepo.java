package com.PortafolioBackend.PortafolioBackend.repository;

import com.PortafolioBackend.PortafolioBackend.model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProjectRepo extends MongoRepository<Project,Integer> {
    Optional<Project> findByRno(Integer rno); // Buscar por el campo "rno"


}
