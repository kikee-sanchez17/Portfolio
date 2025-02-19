export class Technology {
    name: string = '';
    info: string = '';
  }
  
  
export interface Project {

    rno : number;
    project_title : string;
    short_description : string;
    description : string;
    technologies : Technology [];
    imageURL : string;
    repositoryURL : string;
    docURL : string;
    videoURL : string;
}