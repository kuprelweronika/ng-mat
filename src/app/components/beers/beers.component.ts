import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {BeersService} from "../../services/beers.service";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent {

  public _pageSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public page$: Observable<number> = this._pageSubject.asObservable();
  public _sizeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  public size$: Observable<number> = this._sizeSubject.asObservable();

  data$: Observable<any> = this._beersService.getAll(this._pageSubject.value, this._sizeSubject.value)


  constructor(private _beersService: BeersService) {
  }

  handlePageEvent(e: PageEvent) {
    let pageIndex = e.pageIndex
    let pageSize = e.pageSize
    this._pageSubject.next(pageIndex)
    this._sizeSubject.next(pageSize)
    this._beersService.getAll(this._pageSubject.value, this._sizeSubject.value).subscribe(data => this.data$)
    this.data$ = this._beersService.getAll(this._pageSubject.value, this._sizeSubject.value)

  }


}
