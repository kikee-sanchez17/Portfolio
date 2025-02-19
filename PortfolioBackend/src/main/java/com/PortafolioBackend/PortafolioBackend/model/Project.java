package com.PortafolioBackend.PortafolioBackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Project {
    @Id
    private Integer rno;

    private String project_title;

    private String short_description;

    private String description;

    private List<Technology> technologies; // Array de objetos Technology

    private String imageURL;

    private String repositoryURL;

    private String docURL;

    private String videoURL;

    public String getDescription() {
        return description;
    }
    public void setDescription(String description){
        this.description=description;

    }

}


