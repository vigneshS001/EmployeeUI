import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import effects from 'chart.js/dist/helpers/helpers.easing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // Employee Status (Bar Chart)
  employeeStatusChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Permanent',
        data: [100, 120, 140, 160],
        backgroundColor: '#3b82f6'
      },
      {
        label: 'Contract',
        data: [60, 80, 90, 100],
        backgroundColor: '#10b981'
      },
      {
        label: 'Probation',
        data: [40, 50, 60, 70],
        backgroundColor: '#f59e0b'
      }
    ]
  };

  employeeStatusChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  };

  // Working Format (Donut Chart)
  workingFormatChartData: any;
  workingFormatChartOptions: any;
  searchText: string = '';

  // Employee Table Data
  employeeList = [
    { empId: 'EMP-123', name: 'James Davis', position: 'UI/UX Designer', email: 'jamesdavis@employeex.com' },
    { empId: 'EMP-456', name: 'Liam Mir', position: 'Frontend Developer', email: 'liammir@employeex.com' },
    { empId: 'EMP-501', name: 'Emma Johnson', position: 'Marketing Specialist', email: 'emmaj@employeex.com' },
    { empId: 'EMP-563', name: 'Olivia Smith', position: 'Product Manager', email: 'olivias@employeex.com' },
    { empId: 'EMP-762', name: 'Ava Williams', position: 'Data Analyst', email: 'avaw@employeex.com' },
    { empId: 'EMP-813', name: 'Sophia Brown', position: 'Content Strategist', email: 'sophiab@employeex.com' },
    { empId: 'EMP-478', name: 'Noah Moore', position: 'Software Engineer', email: 'noahm@employeex.com' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.initWorkingFormatChart();
  }

  initWorkingFormatChart() {
    this.workingFormatChartData = {
      labels: ['On-site', 'Remote'],
      datasets: [
        {
          data: [57.3, 42.2],
          backgroundColor: ['#3b82f6', '#10b981'],
          hoverBackgroundColor: ['#2563eb', '#059669']
        }
      ]
    };

    this.workingFormatChartOptions = {
      cutout: '70%',
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    };
  }
}
