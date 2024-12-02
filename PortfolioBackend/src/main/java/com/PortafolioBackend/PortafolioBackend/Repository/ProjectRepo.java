package com.PortafolioBackend.PortafolioBackend.Repository;

import com.PortafolioBackend.PortafolioBackend.Model.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepo extends MongoRepository<Project,Integer> {

}
