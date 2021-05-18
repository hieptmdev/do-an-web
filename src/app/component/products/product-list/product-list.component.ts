import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : any;

  constructor(private productsService : ProductService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.productsService.getAll().subscribe(data => {
      this.products = data;
    },
    error => console.log(error)
    )
  }

  public addCart(prodId: any) {

  }
}
