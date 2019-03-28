import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {
  viewMode='Something';
  listeners = [{id:1,name:'anand'},
{id:2, name:'vicky'},
{id:3,name:'kavie'}];
  constructor( private el: ElementRef) {
    let value:string =this.el.nativeElement.value; 
    this.el.nativeElement.value= value;
  }
addListener()
{
  this.listeners.push({id:4,name:'up coming'});
}
removingListener(litsener)
{
  let index = this.listeners.indexOf(litsener);
  this.listeners.splice(index,1);
}

trackListe(index, listener){
  return listener? listener.id :undefined;
}
  ngOnInit() {
  }

}
