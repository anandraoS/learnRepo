  import { Component, OnInit } from '@angular/core';
  import {FormsModule} from '@angular/forms';
  @Component({
    selector: 'sending-message',
    templateUrl: './sending-message.component.html',
    styleUrls: ['./sending-message.component.css']
  })
  export class SendingMessageComponent implements OnInit {
  names:string= 'asdf';
  messages:string = 'sdf asdf a';
    constructor() { }

    ngOnInit() {
    }
    col(message){
  console.log(message);
  console.log(this.messages);
    }
  }
