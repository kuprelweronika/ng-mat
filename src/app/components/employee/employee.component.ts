import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject, switchMap, tap} from "rxjs";
import {EmployeeListService} from "../../services/employee-list.service";
import {EmployeeModelDelModel} from "../../models/employee-model-del.model";

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
    //employee with refreshing list
    // private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0)
    // public refresh$: Observable<void> = this._refreshSubject.asObservable();
    // // @ts-ignore
    // readonly refreshedList$: Observable<EmployeeModelDelModel[]> = this.refresh$.pipe(
    //   switchMap(data => this._employeeListService.getAll())
    // );
    /*@formatter:off*/
  readonly list$: Observable<EmployeeModelDelModel[]> = this._employeeListService.getAll()
    private _selectedEmployeeIdSubject: Subject<string> = new Subject<string>();
    public selectedEmployeeId$: Observable<string> = this._selectedEmployeeIdSubject.asObservable()



    /*@formatter:off*/
    readonly details$: Observable<EmployeeModelDelModel> = this.selectedEmployeeId$.pipe((
        switchMap(data => this._employeeListService.getOne(data))),tap(console.log),
    )

  constructor(private _employeeListService: EmployeeListService) {
  }

  //employee with refreshing list
  // private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0)
  // public refresh$: Observable<void> = this._refreshSubject.asObservable();
  // // @ts-ignore
  // readonly refreshedList$: Observable<EmployeeModelDelModel[]> = this.refresh$.pipe(
  //   switchMap(data => this._employeeListService.getAll())
  // );
  //employee with refreshing list
  // private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0)
  // public refresh$: Observable<void> = this._refreshSubject.asObservable();
  // // @ts-ignore
  // readonly refreshedList$: Observable<EmployeeModelDelModel[]> = this.refresh$.pipe(
  //   switchMap(data => this._employeeListService.getAll())
  // );

  selectEmployee(id: number): void {
    this._selectedEmployeeIdSubject.next(String(id))

  }
}
