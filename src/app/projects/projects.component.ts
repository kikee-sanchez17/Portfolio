import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importar CommonModule
import { Project } from '../project';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule,HttpClientModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  public projects!: Project[];
  
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
