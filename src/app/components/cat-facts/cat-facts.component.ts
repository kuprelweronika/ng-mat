import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CatFactService } from '../../services/cat-fact.service';
import {Observable} from "rxjs";
import {CatFactsModel} from "../../models/cat-facts.model";

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatFactsComponent {
  constructor(private _catFactService: CatFactService) {

  }
  readonly data: Observable<CatFactsModel[]> = this._catFactService.getAll();



}
