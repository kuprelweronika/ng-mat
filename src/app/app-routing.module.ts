import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product/:id', component: ProductDetailComponent }, { path: 'cat-fact', component: CatFactsComponent }]), ProductDetailComponentModule, ProductServiceModule, CatFactsComponentModule, CatFactServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
