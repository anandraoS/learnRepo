import { Component, OnInit } from '@angular/core';
import {StudsService} from '../studs.service';
@Component({
  selector: 'app-kavita',
  templateUrl: './kavita.component.html',
  styleUrls: ['./kavita.component.css']
})
export class KavitaComponent{
students;
  constructor(stud: StudsService) { 
    this.students = stud.getStudents();
  }

  ngOnInit() {
  }
}
