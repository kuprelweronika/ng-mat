import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from "rxjs";
import {EmployeeListService} from "../../services/employee-list.service";
import {EmployeeModelDelModel} from "../../models/employee-model-del.model";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  readonly list$: Observable<EmployeeModelDelModel[]> = this._employeeListService.getAll()
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0)
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  // @ts-ignore
  readonly refreshedList$: Observable<EmployeeModelDelModel[]> = this.refresh$.pipe(
    switchMap(data => this._employeeListService.getAll())
  );

  constructor(private _employeeListService: EmployeeListService) {
  }

  delete(id: number): void {
    this._employeeListService.delete(id).subscribe()
  }
}
