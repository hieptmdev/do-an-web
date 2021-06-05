import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { ProductService } from 'src/app/service/product.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  quantity: number | undefined;
  prodId: any;
  productId : any;
  // ActivatedRoute: lấy param trên url
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cookieService: CookieService) {
    this.quantity = 1;
    //lấy id của Product dc chọn
    route.paramMap.subscribe(param => this.prodId = param.get('id')); // tên phải giống vs tên bên routing, như này la lấy đc id prod
  }

  ngOnInit(): void {
    this.loadData();
  }


  //lấy thông tin sản phẩm theo id
  public loadData(): void {
    this.productService.profindById(this.prodId).subscribe(data => {
      this.productId = data
    },
    err => console.log(err)
    )

  }

  // tslint:disable-next-line:no-shadowed-variable
  changeQuantity(data: any): void {
    if (this.quantity === 1 && data === -1){
      return;
    }
    this.quantity += data;
  }

  addCart(): void {

  }

  buyNow(): void {

  }
}
