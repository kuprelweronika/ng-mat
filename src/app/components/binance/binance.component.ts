import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {BinanceModel} from "../../models/binance.model";
import {BinanceService} from "../../services/binance.service";

@Component({
    selector: 'app-binance',
    templateUrl: './binance.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BinanceComponent {
    readonly list$: Observable<BinanceModel[]> = this._binanceService.getAll()
    public _selectedCryptoSymbolSubject: Subject<string> = new Subject<string>();
    public selectedCryptoSymbol$: Observable<string> = this._selectedCryptoSymbolSubject.asObservable()
    public data: string | undefined
    public dataForSelected = this.selectedCryptoSymbol$.subscribe(data => this.data = data)


    constructor(private _binanceService: BinanceService) {
    }

    selectCrypto(changePrice: string) {
        this._selectedCryptoSymbolSubject.next(changePrice)

    }
}

