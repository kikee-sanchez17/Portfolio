import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NavComponent,HomeComponent,AboutMeComponent,ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortafolioFrontend';
  onScroll(event: Event): void {
    const scrollElement = event.target as HTMLElement;
    console.log('Scroll position:', scrollElement.scrollTop);
    // Agrega lógica si necesitas hacer algo basado en la posición del scroll
  }
  scrollToNextSection(): void {
    const currentSection = document.querySelector('.snap-section');
    const nextSection = currentSection?.nextElementSibling as HTMLElement;
  
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  
}
