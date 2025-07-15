import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    MainComponent,
    // CalendarComponent,
    // EmployeeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FullCalendarModule
  ]
})
export class MainModule { }
