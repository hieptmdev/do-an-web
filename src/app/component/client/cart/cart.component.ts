import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public soluong= 1;
  public priceSell= 99;
  constructor() { }

  ngOnInit(): void {
  }

  public tangsl(){
    this.soluong++;
  }
  public giamsl(){
    this.soluong--;
  }
}
