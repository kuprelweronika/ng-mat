import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {delay} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
    public data$ = this._categoriesService.getAll().pipe(
        delay(2000),
        map(() => [])
    )

    constructor(private _categoriesService: CategoriesService) {
    }
}
