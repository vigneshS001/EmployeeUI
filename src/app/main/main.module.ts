import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MainComponent,
    // CalendarComponent,
    // EmployeeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FullCalendarModule,
    DialogModule
  ]
})
export class MainModule { }
