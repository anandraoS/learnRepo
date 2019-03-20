import { Component } from '@angular/core';
import {ListStudentsService} from '../list-students.service';
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
constructor(studentservice: ListStudentsService){
this.students = studentservice.getStuds();
studentservice.addStudent('kavita');
}

    // studentsservice = new studentsService();
    

}