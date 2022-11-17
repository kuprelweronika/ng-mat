import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenderModel} from "../models/gender.model";

@Injectable()
export class GenderService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(name:string): Observable<GenderModel> {
    return this._httpClient.get<GenderModel>(`https://api.genderize.io/?name=${name}`);

  }
}
