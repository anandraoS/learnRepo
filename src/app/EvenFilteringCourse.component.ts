import { Component } from "@angular/core";

@Component({
    selector:'eventfiltercourse',
    template: `
<input (keyup.enter) = "onKeyUp()" />
    `
})
export class EventFilteringCoursesComponent{
onKeyUp()
{
        console.log("enter was pressed");
}
}