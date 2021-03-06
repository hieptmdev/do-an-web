import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CartService } from 'src/app/service/cart.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // productPriceSell
  shippingCost = 15000;
  total = 0;
  constructor(
    private cartService: CartService,
    public sharedDataService: SharedDataService
  ) {
    if (
      sharedDataService.cart.cartDetaills != null &&
      sharedDataService.cart.cartDetaills.length > 0
    ) {
      for (let c of sharedDataService.cart.cartDetaills) {
        this.total += c.productInfoProductPriceSell*c.numberPro;
      }
    }
  }

  ngOnInit(): void {}

  public DeleteProduct(id: number): void {
    if (confirm("Bạn có muốn xóa")) {
      this.cartService.deleCart(id).subscribe(
        (data) => {
          this.sharedDataService.cart.cartDetaills = this.sharedDataService.cart.cartDetaills.filter((item : any) => item.id !== id);
          alert("xóa thành công")!
        },
        (error) => {
          console.log(error);
          alert('Delete Failed');
          //sao nó lại nhay
        }
      );
    }
    else {
      alert("Bạn không có quyền")
    }

  }
}
