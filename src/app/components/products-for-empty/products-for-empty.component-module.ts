import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {ProductsForEmptyComponent} from './products-for-empty.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, MatProgressSpinnerModule],
    declarations: [ProductsForEmptyComponent],
    providers: [],
    exports: [ProductsForEmptyComponent]
})
export class ProductsForEmptyComponentModule {
}
