import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import {combineLatest} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-sorting-employee',
  templateUrl: './sorting-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingEmployeeComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc')
  public order$: Observable<string>= this._orderSubject.asObservable();

readonly employee$: Observable<EmployeeModel[]> = combineLatest([
  this._employeeService.getAll(),
  this.order$
]).pipe(
    map(([employee, order]: [EmployeeModel[],string]) => {
  return employee.sort((a, b) => {
  if (a.salary > b.salary) return order === 'asc' ? 1 : -1;
  if (a.salary < b.salary) return order === 'asc' ? -1 : 1;
  return 0;
})

  }))

  public orders: Observable<string[]>=of(['asc','desc'])

  constructor(private _employeeService: EmployeeService) {
  }

  sort(order:string):void{
  this._orderSubject.next(order)
  }
}

