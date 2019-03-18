import { Component } from '@angular/core';

@Component({
    selector: "colleagues",
    template: `<h1>{{name}}</h1>`    
})
export class PersonComponent{
    name = 'vickey';
}