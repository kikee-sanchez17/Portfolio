import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiServerUrl = "http://localhost:8081";
  

  constructor(private http: HttpClient) { }

  public getProjects() : Observable<Project[]> {

    return this.http.get<Project[]>(`${this.apiServerUrl}/fetchProjects`);
    
  }

  public getProject(rno:number) : Observable<Project> {

    return this.http.get<Project>(`${this.apiServerUrl}/projects/${rno}`);
    
  }
}
