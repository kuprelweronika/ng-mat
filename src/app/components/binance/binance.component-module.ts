import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {BinanceComponent} from './binance.component';

@NgModule({
    imports: [
        MatGridListModule,
        MatListModule,
        AsyncPipe,
        CommonModule
    ],
    declarations: [BinanceComponent],
    providers: [],
    exports: [BinanceComponent]
})
export class BinanceComponentModule {
}
