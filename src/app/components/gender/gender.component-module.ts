import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderComponent } from './gender.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GenderComponent],
  providers: [],
  exports: [GenderComponent]
})
export class GenderComponentModule {
}
