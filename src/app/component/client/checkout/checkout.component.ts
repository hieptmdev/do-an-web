import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout.service';
import { OrderService } from 'src/app/service/order.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  shippingCost = 15000;
  total = 0;
  mobilephone: any;
  usernamKH: any;
  address: any;
  url: any;
  testPrice = 5;
  constructor(
    public sharedDataService: SharedDataService,
    private router: Router,
    private checkoutService: CheckoutService,
    private orderService: OrderService
  ) {
    {
      if (
        sharedDataService.cart.cartDetaills != null &&
        sharedDataService.cart.cartDetaills.length > 0
      ) {
        for (let c of sharedDataService.cart.cartDetaills) {
          this.total += c.productInfoProductPriceSell * c.numberPro;
        }
      }
    }
  }

  public checkoutoff(): void {
    debugger;
    if (this.sharedDataService.cart == null || this.sharedDataService.cart.cartDetaills == null) {
      alert('Không có sản phẩm trong giỏ hàng');
    } else {
      const order = {
        phoneNumber: this.mobilephone,
        tenNguoiNhan: this.usernamKH,
        deliveryAddress: this.address,
        cartId: this.sharedDataService.cart.id,
        username: localStorage.getItem('username')
      }
      this.orderService.saveOrder(order).subscribe(
        data => {
          alert("Đặt hàng thành công đơn hàng: " + data.code);
          this.router.navigate(['products']).then(n => window.location.reload());
        }, error => {
          console.log(error);
          alert("Đặt hàng thất bại");
        }
      );
    }
  }




  ngOnInit(): void {
  }

  public checkout(): void {
    this.checkoutService.checkoutPaypal(this.testPrice).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        window.location.href = data.redirect;
      },
      (error: any) => {
        alert('Thất bại');
        console.log(error);
      }
    );
  }

}
