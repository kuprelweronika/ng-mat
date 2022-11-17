import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AgePredictionComponent } from './age-prediction.component';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule
  ],
  declarations: [AgePredictionComponent],
  providers: [],
  exports: [AgePredictionComponent]
})
export class AgePredictionComponentModule {
}
