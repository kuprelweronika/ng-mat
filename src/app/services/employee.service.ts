import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {EmployeeModel} from "../models/employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  delete(id: number): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('ttps://dummy.restapiexample.com/api/v1/employees')
  }


}
