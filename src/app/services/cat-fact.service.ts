import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from "rxjs";
import {CatFactsModel} from "../models/cat-facts.model";

@Injectable()
export class CatFactService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CatFactsModel[]> {
    return this._httpClient.get<CatFactsModel[]>('https://catfact.ninja/fact');

  }
}
