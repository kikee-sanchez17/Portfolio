import { Component, OnInit } from '@angular/core';
import { Project, Technology } from '../project';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  safeVideoEmbedUrl: SafeResourceUrl | null = null;
  selectedImageIndex = 0;

  public project!: Project;
  public selectedTech: Technology | null = null;

  public isTherevideoURL: boolean = false;
  public isTheredocURL: boolean = false;
  public isDivVisible = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const _id = this.route.snapshot.paramMap.get('_id');
    console.log('id recibido:', _id);

    if (_id) {
      this.projectService.getProject(Number(_id)).subscribe(
        (data) => {
          this.project = data;
          const video = (this.project.videoURL ?? '').trim();
          const doc = (this.project.docURL ?? '').trim();

          this.isTherevideoURL = video.length > 0;
          this.isTheredocURL = doc.length > 0;

          this.safeVideoEmbedUrl = this.buildYoutubeEmbed(video);
          

          console.log('Proyecto obtenido:', data.project_title);
          console.log('imagenes cargado:', this.project.imagesURL[0].toString());
          console.log('imagenes cargado:', this.project.imagesURL.length);

        },
        (error) => {
          console.error('Error al obtener el proyecto:', error);
        }
      );
    } else {
      console.error('El parámetro _id no se encontró en la ruta.');
    }

  }

  onButtonClick(tech: Technology): void {
    this.selectedTech = tech;
    this.isDivVisible = true;
  }

  // ✅ AÑADIR ESTO: genera la URL embebible y la “sanitiza” para Angular
  private buildYoutubeEmbed(url?: string): SafeResourceUrl | null {
    if (!url) return null;

    let videoId: string | null = null;

    // youtu.be/VIDEOID
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split(/[?&]/)[0] ?? null;
    }

    // youtube.com/watch?v=VIDEOID
    if (!videoId && url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1]?.split('&')[0] ?? null;
    }

    // youtube.com/embed/VIDEOID
    if (!videoId && url.includes('/embed/')) {
      videoId = url.split('/embed/')[1]?.split(/[?&]/)[0] ?? null;
    }

    if (!videoId) return null;

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
