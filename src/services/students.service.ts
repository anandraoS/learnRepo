import { Injectable } from "@angular/core";

@Injectable()
export class studentsService{
    getStudents(){
        return ['anand rao','kavitas','vickye'];
    }
}