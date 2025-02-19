import { Component, OnInit } from '@angular/core';
import { Project, Technology } from '../project';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  public project!: Project;
  public selectedTech: Technology | null = null; // Tecnología seleccionada
  public isTherevideoURL: boolean = false;
  public isTheredocURL: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const rno = this.route.snapshot.paramMap.get('rno');
    console.log('rno recibido:', rno);

    if (rno) {
      this.projectService.getProject(Number(rno)).subscribe(
        (data) => {
          this.project = data;
          this.isTherevideoURL= this.project.videoURL == "" ? false : true;
          this.isTheredocURL= this.project.docURL == "" ? false : true;
        },
        (error) => {
          console.error('Error al obtener el proyecto:', error);
        }
      );
    } else {
      console.error('El parámetro rno no se encontró en la ruta.');
    }

  }

  public isDivVisible = false;

  onButtonClick(tech: Technology): void {
    this.selectedTech = tech; // Establece la tecnología seleccionada
    this.isDivVisible = true;

   
    
  }
  

}
