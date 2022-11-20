import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";

@Component({
    selector: 'app-products-for-empty',
    templateUrl: './products-for-empty.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsForEmptyComponent {
    readonly list$: Observable<ProductModel[]> = this._productService.getAll()


    constructor(private _productService: ProductService) {
    }
}
