import { NgModule } from '@angular/core';
import { CatFactService } from './cat-fact.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CatFactsModel} from "../models/cat-facts.model";

@NgModule({
  imports: [],
  declarations: [],
  providers: [CatFactService],
  exports: []
})
export class CatFactServiceModule {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CatFactsModel[]> {
    return this._httpClient.get<CatFactsModel[]>('https://catfact.ninja/fact');

  }
}
