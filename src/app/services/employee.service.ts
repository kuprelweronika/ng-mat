import { Injectable } from '@angular/core';
import {EmployeeModel} from "../models/employee.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../models/api-response.model";
import {map} from "rxjs/operators";
import {EmployeeResponse} from "../models/employee-response.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<EmployeeModel[]> {
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

  }}
