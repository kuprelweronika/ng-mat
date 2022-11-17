import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../services/user.service";
import {GenderModel} from "../../models/gender.model";
import {GenderService} from "../../services/gender.service";

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenderComponent {
  readonly data$: Observable<GenderModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._genderService.getOne(data['name'])));

  constructor(private _activatedRoute: ActivatedRoute, private _genderService: GenderService) {
  }
}
