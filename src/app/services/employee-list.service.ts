import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmployeeResponse} from "../models/employee-response.model";
import {ApiResponse} from "../models/api-response.model";
import {map} from "rxjs/operators";
import {EmployeeModelDelModel} from "../models/employee-model-del.model";

@Injectable()
export class EmployeeListService {
  constructor(private _httpClient: HttpClient) {
  }

  delete(id: number): Observable<EmployeeModelDelModel> {
    return this._httpClient.delete<EmployeeModelDelModel>(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
  }

  getAll(): Observable<EmployeeModelDelModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>('https://dummy.restapiexample.com/api/v1/employees',
    ).pipe(
      map((response: ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            name: employeeResponse.employee_name,
            personalNumber: employeeResponse.id,
            img: employeeResponse.employee_image,
            salary: employeeResponse.employee_salary,
            mail: employeeResponse.employee_name + '@lowgular.io',
          }
        })
      }))

  }
}
