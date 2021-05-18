import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClienRoutingModule } from './client-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BrandSlideComponent } from '../shared/brand-slide/brand-slide.component';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

@NgModule({
  declarations: [
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    BrandSlideComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    LoginRegisterComponent
  ],
  imports: [
    CommonModule,
    ClienRoutingModule,
    FormsModule,
    SlickCarouselModule
  ]
})
export class ClientModule { }
