import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { GenderComponent } from './components/gender/gender.component';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserComponentModule } from './components/user/user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { GenderComponentModule } from './components/gender/gender.component-module';
import { GenderServiceModule } from './services/gender.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product/:id', component: ProductDetailComponent }, { path: 'cat-fact', component: CatFactsComponent }, { path: 'age/:name', component: AgePredictionComponent }, { path: 'cart/:id', component: CartComponent }, { path: 'user/:id', component: UserComponent }, { path: 'gender/:name', component: GenderComponent }]), ProductDetailComponentModule, ProductServiceModule, CatFactsComponentModule, CatFactServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, CartComponentModule, CartServiceModule, UserComponentModule, UserServiceModule, GenderComponentModule, GenderServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
