import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly dataUrl = "assets/data/portfolio.projects.json";
  

  constructor(private http: HttpClient) { }

  public getProjects() : Observable<Project[]> {

    return this.http.get<Project[]>(this.dataUrl);
    
  }

  public getProject(id:number) : Observable<Project> {

    return this.http.get<any[]>(this.dataUrl).pipe(
      map(projects => projects.find(p => p._id === id))
    );
    
  }
}
