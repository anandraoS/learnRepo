import { Component } from '@angular/core';

@Component({
    selector:"loopinglist",
    template:`
    <h2>loooping list</h2>
    <ul style="list-style-type:square;">
    <li *ngFor="let stud of students">{{stud}}</li>
    </ul>
    `
})
export class ListLoopingComponent{
students = ['anand','kavita','vicky'];
}