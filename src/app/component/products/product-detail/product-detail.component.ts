import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  quantity: number | undefined;

  constructor() {
    this.quantity = 1;
  }

  ngOnInit(): void {
  }

  changeQuantity(data: any): void {
    this.quantity += data;
  }
}
