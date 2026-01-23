export class Technology {
    name: string = '';
    info: string = '';
  }
  
  
export interface Project {

    _id : number;
    project_title : string;
    short_description : string;
    description : string;
    technologies : Technology [];
    imagesURL : string[];
    repositoryURL : string;
    docURL : string;
    videoURL : string;
}

