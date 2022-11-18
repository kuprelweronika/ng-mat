import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {BeersModel} from "../models/beers.model";

@Injectable()
export class BeersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(page: number, size: number): Observable<BeersModel> {
    return this._httpClient.get<BeersModel>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${size}`)

  }
}
