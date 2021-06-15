import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingCost = 1;
  total = 0;

  [x: string]: any;

    url : any;
    data1 = 5;
    constructor(
      public sharedDataService: SharedDataService,
      private router : Router,
      private checkoutService: CheckoutService
  ) {
    if (sharedDataService.cart.cartDetaills != null && sharedDataService.cart.cartDetaills.length > 0){
      for(let c of sharedDataService.cart.cartDetaills) {
        this.total += c.productInfoProductPriceSell;
      }
    }
  }

  ngOnInit(): void {
  }

  public checkout(): void{
    this.checkoutService.checkoutPaypal(this.data1).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        window.location.href=data.redirect;
      },
      ( error: any) => {
        alert('Thất bại');
        console.log(error);
      }
    );
  }

}
