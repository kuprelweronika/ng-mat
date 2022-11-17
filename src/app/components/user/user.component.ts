import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {

  readonly userDetails$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._userService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _userService: UserService) {
  }
}
