import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { CatFactsComponent } from './cat-facts.component';
import { AsyncPipe } from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    AsyncPipe,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    CommonModule,
    FlexModule
  ],
  declarations: [CatFactsComponent],
  providers: [],
  exports: [CatFactsComponent]
})
export class CatFactsComponentModule {
}
