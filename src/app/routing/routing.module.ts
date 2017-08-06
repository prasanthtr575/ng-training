import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '',   redirectTo: '/employees', pathMatch: 'full'},
  {path: "employees", component: EmployeeListComponent},
  {path: "details", component: EmployeeDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
export const routingComponents = [EmployeeListComponent, EmployeeDetailComponent];