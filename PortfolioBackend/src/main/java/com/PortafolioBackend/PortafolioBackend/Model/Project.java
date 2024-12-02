package com.PortafolioBackend.PortafolioBackend.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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

    private String[] technologies;

    private String imageURL;

    private String repositoryURL;

}
