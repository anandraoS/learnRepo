import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {
  viewMode='Something';
  listeners = [{id:1,name:'anand'},
{id:2, name:'vickye'},
{id:3,name:'kavie'}];
  constructor() { }
addListener()
{
  this.listeners.push({id:4,name:'up coming'});
}
removingListener(litsener)
{
  let index = this.listeners.indexOf(litsener);
  this.listeners.splice(index,1);
}
  ngOnInit() {
  }

}
