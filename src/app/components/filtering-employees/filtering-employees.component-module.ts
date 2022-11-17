import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteringEmployeesComponent } from './filtering-employees.component';

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, CommonModule],
  declarations: [FilteringEmployeesComponent],
  providers: [],
  exports: [FilteringEmployeesComponent]
})
export class FilteringEmployeesComponentModule {
}
