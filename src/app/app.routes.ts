import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [ 
    { path: '', component: HomeComponent }, // Página principal
    { path: 'about-me', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'project/:rno', component: ProjectDetailComponent } // Detalle de un proyecto
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}