import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  listEmployees: Employee[] = [
    {id: 1, name: 'Juan', surname: 'Perez', sex: 'Male', salary: 25000},
    { id: 2, name: 'Marcos', surname: 'Gozalez', sex: 'Male', salary: 65000 },
    { id: 3, name: 'Marta', surname: 'Garcia', sex: 'Female', salary: 75000 },
    { id: 4, name: 'Ignacio', surname: 'Cortes', sex: 'Male', salary: 55000 },
    { id: 5, name: 'Maria', surname: 'Navarro', sex: 'Female', salary: 80000 }
  ]

  radioButtonSelect = 'All';

  constructor() {}

  ngOnInit(): void {}

  getTotalEmployees(): number {
    return this.listEmployees.length;
  }

  getTotalEmployeesFemale(): number {
    return this.listEmployees.filter(list => list.sex === 'Female').length;
  }

  getTotalEmployeesMale(): number {
    return this.listEmployees.filter(list => list.sex === 'Male').length;
  }

  employeeCountRadioButtonChange(radioButtonSelect: string): void {
    this.radioButtonSelect = radioButtonSelect;
  }

}

