import {NgModule} from '@angular/core';
import {BinanceService} from './binance.service';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [MatButtonModule],
    declarations: [],
    providers: [BinanceService],
    exports: []
})
export class BinanceServiceModule {
}
