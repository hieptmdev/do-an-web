import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginRegisterComponent } from './component/login-register/login-register.component';
import {CartComponent} from './component/cart/cart.component';
import {WishListComponent} from './component/wish-list/wish-list.component';
import {CheckoutComponent} from './component/checkout/checkout.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'login-register', component: LoginRegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', loadChildren: () => import('./component/products/products.module').then(m => m.ProductsModule)},
  {path: 'cart', component: CartComponent},
  {path: 'wish-list', component: WishListComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
