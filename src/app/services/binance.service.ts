import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BinanceModel} from "../models/binance.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BinanceService {
    constructor(private _httpClient: HttpClient) {
    }


    getAll(): Observable<BinanceModel[]> {
        return this._httpClient.get<BinanceModel[]>('https://api2.binance.com/api/v3/ticker/24hr')
    }

}
