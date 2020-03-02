import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
//resolver berguna untuk menyediakan data sebelum halaman di load
export class EmployeeResolverService implements Resolve<any> {

  constructor(private es: EmployeeService) { }

  resolve(): Observable<Employee[]>{
    return this.es.getEmployees();
  }

}
