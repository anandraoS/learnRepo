import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { PersonComponent } from './person.component';
import { AngualrSessionComponent } from './angualrsession.component';
import { KavitaComponent } from './kavita/kavita.component';
import { ListLoopingComponent } from './kavita/listLooping.component';
import {FormsModule} from '@angular/forms';
import {ListStudentsService} from './list-students.service';
import { SummeryPipe } from './kavita/summerypipe';
import { StarComponentComponent } from './star-component/star-component.component';
import { DirectChekComponentComponent } from './direct-chek-component/direct-chek-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    AngualrSessionComponent,
    KavitaComponent,
    ListLoopingComponent,
    SummeryPipe,
    StarComponentComponent,
    DirectChekComponentComponent,
    NavComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListStudentsService],
  bootstrap: [KavitaComponent]
})
export class AppModule { }
