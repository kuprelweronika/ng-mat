import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent],
  providers: [],
  exports: [UserComponent]
})
export class UserComponentModule {
}
