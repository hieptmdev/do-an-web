import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './component/login-register/login-register.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import {HeaderComponent} from './component/shared/header/header.component';
import {FooterComponent} from './component/shared/footer/footer.component';
import {BrandSlideComponent} from './component/shared/brand-slide/brand-slide.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    HomeComponent,
    WishListComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    FooterComponent,
    BrandSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    BrandSlideComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
