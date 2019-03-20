import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { PersonComponent } from './person.component';
import { AngualrSessionComponent } from './angualrsession.component';
import { KavitaComponent } from './kavita/kavita.component';
import { ListLoopingComponent } from './kavita/listLooping.component';

import {ListStudentsService} from './list-students.service';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AngualrSessionComponent,
    KavitaComponent,
    ListLoopingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListStudentsService],
  bootstrap: [KavitaComponent]
})
export class AppModule { }
