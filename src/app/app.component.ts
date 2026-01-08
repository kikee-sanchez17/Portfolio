import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { Project } from './project';
import { ProjectService } from './project.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NavComponent,HomeComponent,AboutMeComponent,ProjectsComponent,FooterComponent,MobileNavComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PortafolioFrontend';

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
