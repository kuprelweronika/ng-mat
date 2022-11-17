import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {combineLatest, Observable, of, Subject} from "rxjs";
import {map} from "rxjs/operators";
import {EmployeeModel} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-filtering-employees',
  templateUrl: './filtering-employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteringEmployeesComponent {
  public ranges$: Observable<string[]>=of(['0-20','21-30','31-40','41-50','51-100','All'])

  selectAge(range: string, age: any){

    switch (range){
      case "0-20":   return (age>0 && age<20)
      case "21-30":       return (age>21 && age<30)
      case "31-40":      return (age>31 && age<40)
      case "41-50":      return (age>41 && age<50)
      case "51-100":       return (age>51 && age<100)
      case "All":       return true
      default: return true
  }}


  private _ageSubject: Subject<string> = new Subject<string>();
  public age$: Observable<string> = this._ageSubject.asObservable();

  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeeService.getAll(),
    this.age$,
  ]).pipe(map(([employee, age]: [EmployeeModel[], string]) => {
    return employee.filter((employee: EmployeeModel) => this.selectAge(age,parseInt(employee.age)))
  }));





  constructor(private _employeeService: EmployeeService) {
  }


  selectRange(age: string) {
    this._ageSubject.next(age);
  }

}
