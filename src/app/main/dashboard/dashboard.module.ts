import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { EmployeeComponent } from '../employee/employee.component';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    CalendarComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FullCalendarModule
  ]
})
export class DashboardModule { }
