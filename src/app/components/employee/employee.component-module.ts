import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {EmployeeServiceModule} from '../../services/employee.service-module';
import {EmployeeListServiceModule} from '../../services/employee-list.service-module';
import {EmployeeComponent} from './employee.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  imports: [
    AsyncPipe,
    MatCardModule,
    MatListModule,
    EmployeeServiceModule,
    EmployeeListServiceModule,
    CommonModule,
    MatGridListModule
  ],
  declarations: [EmployeeComponent],
  providers: [],
  exports: [EmployeeComponent]
})
export class EmployeeComponentModule {
}
