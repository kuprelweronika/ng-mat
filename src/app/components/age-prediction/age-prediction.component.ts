import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgePredictionService } from '../../services/age-prediction.service';
import {map, Observable} from "rxjs";
import {AgePredictionModel} from "../../models/age-prediction.model";


@Component({
  selector: 'app-age-prediction',
  templateUrl: './age-prediction.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgePredictionComponent {
  constructor(private _agePredictionService: AgePredictionService, private _activatedRoute: ActivatedRoute) {
  }
  readonly data$: Observable<AgePredictionModel> = this._agePredictionService.getAll()

}
