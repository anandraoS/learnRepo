import { Component } from '@angular/core';
import { StudsService } from '../studs.service';
@Component({
    selector:"loopinglist",
    template:`
    <h2>loooping list</h2>
    <ul style="list-style-type:square;">
    <li>{{students}}</li>
    </ul>
    `
})
export class ListLoopingComponent{
    students;
constructor(studentservice: StudsService){
this.students = studentservice.getStudents();
studentservice.setStudents('rao');
}

    // studentsservice = new studentsService();
    

}