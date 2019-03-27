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
isAvailable:boolean = true;
Stud="asdfasdfasdf";
isParent= false;
email="asdfasdf@gmail.com";
imageURL = "../../assets/images/23.jpg";
book = {title:"the aetna",rate:40.52456987, authoName:"vickey",publishedDate: new Date(2016,3,1),soldCopies:45632};
descrip = 'kavita vicky anand are good boys adn girls';
  constructor(liststuds: ListStudentsService) { 
    liststuds.addStudent('asdgasd');
    this.students = liststuds.getStuds();
  }
  onSave($event)
  {
    $event.stopPropagation();
    console.log('successfully saved');
  }
  onDivClicked(){
    console.log('div is clicked');
  }
  onKeyUp()
  {
    // console.log('coming');
    
    console.log(this.Stud);
  }
  onKeyup()
  {
    console.log(this.email);
  }
  ngOnInit() {
  }
}
