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
import { FullCalendarModule } from '@fullcalendar/angular';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from "primeng/dialog";


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
    FullCalendarModule,
    CardModule,
    TableModule,
    ChartModule,
    ButtonModule,
    CalendarModule,
    BadgeModule,
    DialogModule
]
})
export class DashboardModule { }
