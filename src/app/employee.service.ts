import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { ReturnStatement } from '@angular/compiler';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Array<Employee> = [
    {
      id: 1,
      name: "Vincent"
    },
    {
      id: 2,
      name: "Lee"
    },
    {
      id: 3,
      name: "Marvin"
    },
  ]
    
  
  constructor() { }

  getEmployees():Observable<Employee[]>{
  return of (this.employees);}

  getEmployee(id: number): Employee {
    return this.employees.find(emp=> emp.id === id);
  }
}
