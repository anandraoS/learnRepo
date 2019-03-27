import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnInit {
@Input()
isStar:boolean;
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isStar= !this.isStar;
  }
}
