import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListStudentsService {
 studs = new Array();
  constructor() { }
  public getStuds()
  {
    return this.studs;
  }
  public addStudent(str)
  {
    this.studs.push(str);
  }
}
