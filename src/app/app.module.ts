import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './Courses.component';
import {EventFilteringCoursesComponent} from './EvenFilteringCourse.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    EventFilteringCoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
