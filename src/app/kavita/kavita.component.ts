import { Component } from '@angular/core';
import {ListStudentsService} from '../list-students.service';
@Component({
  selector: 'app-kavita',
  templateUrl: './kavita.component.html',
  styleUrls: ['./kavita.component.css']
})
export class KavitaComponent{
students;
colspas= 4;
isAvailable:boolean = false;
imageURL = "../../assets/images/23.jpg";
  constructor(liststuds: ListStudentsService) { 
    liststuds.addStudent('asdgasd');
    this.students = liststuds.getStuds();
  }

  ngOnInit() {
  }
}
