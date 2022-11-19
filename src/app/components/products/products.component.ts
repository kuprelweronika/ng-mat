import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject, switchMap} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  //for remove and refresh list
  // private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0)
  // public refresh$: Observable<void> = this._refreshSubject.asObservable();
  // // @ts-ignore
  // readonly refreshedList$: Observable<ProductModel[]> = this.refresh$.pipe(
  //   switchMap(data => this._productService.getAll())
  // );
  // delete(id: number): void {
  //   this._productService.delete(id).subscribe()
  // }

  //selecting product by ID

  readonly list$: Observable<ProductModel[]> = this._productService.getAll()
  private _selectedProductIdSubject: Subject<string> = new Subject<string>();
  public selectedProductId$: Observable<string> = this._selectedProductIdSubject.asObservable()
  readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(
    switchMap(data => this._productService.getOne(data))
  )

  constructor(private _productService: ProductService) {
  }

  selectProduct(id: number): void {
    this._selectedProductIdSubject.next(String(id))
  }

}
