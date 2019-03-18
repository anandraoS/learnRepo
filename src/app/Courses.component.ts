import { Component } from "@angular/core";

@Component({
    selector:'courses',
    template: `
    <div (click)="divClicked()">
    <button (click)="onSave()">Save</button>
    </div>
    `
})
export class CoursesComponent{
divClicked()
{
    console.log("div is clicked");
}
onSave()
{
    console.log("save button is clicked");
}
}