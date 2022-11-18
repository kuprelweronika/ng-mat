import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BeersComponent} from './beers.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [CommonModule, MatCardModule, MatListModule, MatPaginatorModule],
  declarations: [BeersComponent],
  providers: [],
  exports: [BeersComponent]
})
export class BeersComponentModule {
}
