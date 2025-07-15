import { Component, OnInit } from '@angular/core';


export interface Employee {
  id?: number;
  name?: string;
  email?: string;
  department?: string;
  designation?: string;
  photoUrl?: string;
  status?: 'Active' | 'Inactive';
  joiningDate?: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
  
  constructor(){}
  ngOnInit(): void {

    this.defineData();
  }

  defineData(){
  }
  employeeList: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      department: 'IT',
      designation: 'Frontend Developer',
      photoUrl: 'assets/images/user1.jpg',
      status: 'Active',
      joiningDate: '2022-05-10'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      department: 'HR',
      designation: 'HR Manager',
      photoUrl: 'assets/images/user2.jpg',
      status: 'Inactive',
      joiningDate: '2021-08-15'
    }
  ];

}
