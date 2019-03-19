import { Injectable } from '@angular/core';

@Injectable()
export class StudsService {
studs:string ='asdf';
  constructor() { }
  getStudents(){
    return this.studs;
}
setStudents(str){
  this.studs = str;
  console.log(str);
}
}
