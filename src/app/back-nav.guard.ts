import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

@Injectable({
  providedIn: 'root'
})
export class BackNavGuard implements 
CanDeactivate<EmployeeDetailComponent> 
{
  canDeactivate(component: EmployeeDetailComponent): boolean{
    if(component.isDirty()){
      //kalau textbox sudah diisi
      return confirm("Yakin ingin kembali?");
    }
    return true;
  }
}
