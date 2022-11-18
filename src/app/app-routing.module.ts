import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { GenderComponent } from './components/gender/gender.component';
import { SortingEmployeeComponent } from './components/sorting-employee/sorting-employee.component';
import { FilteringEmployeesComponent } from './components/filtering-employees/filtering-employees.component';
import { BeersComponent } from './components/beers/beers.component';
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
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { SortingEmployeeComponentModule } from './components/sorting-employee/sorting-employee.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { FilteringEmployeesComponentModule } from './components/filtering-employees/filtering-employees.component-module';
import { BeersComponentModule } from './components/beers/beers.component-module';
import { BeersServiceModule } from './services/beers.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'cat-fact', component: CatFactsComponent },
    { path: 'age/:name', component: AgePredictionComponent },
    { path: 'cart/:id', component: CartComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'products/:category', component: FilteredProductListComponent },
    { path: 'products', component: SortedProductListComponent },
    { path: 'gender/:name', component: GenderComponent },
    { path: 'sort-employee', component: SortingEmployeeComponent },
    { path: 'filtered-employees', component: FilteringEmployeesComponent },
    { path: 'beers', component: BeersComponent }
  ]), ProductDetailComponentModule, ProductServiceModule, CatFactsComponentModule, CatFactServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, CartComponentModule, CartServiceModule, UserComponentModule, UserServiceModule, GenderComponentModule, GenderServiceModule, FilteredProductListComponentModule, CategoriesServiceModule, SortedProductListComponentModule, SortingEmployeeComponentModule, EmployeeServiceModule, FilteringEmployeesComponentModule, BeersComponentModule, BeersServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
