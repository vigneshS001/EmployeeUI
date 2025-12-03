import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';


export interface Employee {
  id?: number;
  name?: string;
  email?: string;
  dept?: string;
  desig?: string;
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

  cols: any[] = [];
  itemcols: any[] = [];
  dialog: boolean = false;
  searchText: string = '';
  langList: any[] = [];
  
  constructor(private data: DataService){ }
  ngOnInit(): void {

    this.defineData();
  }

  defineData(){

    this.cols = [
      {field:'name', header:'Name', type: 'text'},
      {field:'dept', header:'Department', type: 'text'},
      {field:'desig', header:'Designation', type: 'text'}
    ];
    this.langList = this.data.getData();
  }
  employeeList: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      dept: 'IT',
      desig: 'Frontend Developer',
      photoUrl: 'assets/images/user1.jpg',
      status: 'Active',
      joiningDate: '2022-05-10'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      dept: 'HR',
      desig: 'HR Manager',
      photoUrl: 'assets/images/user2.jpg',
      status: 'Inactive',
      joiningDate: '2021-08-15'
    },
    {
      id: 2,
      name: 'Smith',
      email: 'jane@example.com',
      dept: 'HR',
      desig: 'HR Manager',
      photoUrl: 'assets/images/user2.jpg',
      status: 'Inactive',
      joiningDate: '2021-08-15'
    }
  ];
  edit(obj: Employee){
    console.log(">>>><<<<",obj);
    this.showDialog();
  }
  showDialog() {
    this.dialog = true;
  }
  
  openNew() {
    this.dialog = true;
  }

}
