import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { Page404Component } from './page404/page404.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeResolverService } from './employee-resolver.service';
import { BackNavGuard } from './back-nav.guard';


const routes: Routes = [
 { 
  path: "",
  component: ShellComponent,
  children: [
    {
      path: "",
      redirectTo: "/employee",
      pathMatch: "full", //jika dan hanya jika url kosong
      component: EmployeeListComponent 
    },
    {
      path: "employee",
      component: EmployeeListComponent,
      resolve: {employees: EmployeeResolverService},
    },
    {
      path: "employee/:id", // id adalah parameter
      component: EmployeeDetailComponent,
      canDeactivate: [BackNavGuard],
    },
  ],
},
 { 
  path: "**", //**wildcard */
  component: Page404Component
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
