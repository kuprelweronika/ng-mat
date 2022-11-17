import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { SortingEmployeeComponent } from './sorting-employee.component';

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, FlexModule],
  declarations: [SortingEmployeeComponent],
  providers: [],
  exports: [SortingEmployeeComponent]
})
export class SortingEmployeeComponentModule {
}
