import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductMenuComponent,
    ProductsComponent,
    ProductDetailComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class ProductsModule { }
