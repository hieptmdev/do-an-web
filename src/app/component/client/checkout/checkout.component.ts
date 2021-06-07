import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutService } from 'src/app/service/checkout.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  [x: string]: any;

    url : any;
    data1 = 5;
    constructor(
      private router : Router,
      private checkoutService: CheckoutService
  ) { }

  ngOnInit(): void {
  }

  public checkout(): void{
    this.checkoutService.checkoutPaypal(this.data1).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        console.log(data)
      },
      ( error: any) => {
        alert('Thất bại');
        console.log(error);
      }
    );
  }

}
