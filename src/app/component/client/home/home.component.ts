import { Component, OnInit} from '@angular/core';
import { data } from 'jquery';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category : any;
  productSale : any;
  productNew : any;
  constructor( private categoryService  : CategoryService,
    private productService : ProductService) {
  }

  ngOnInit(): void {
    this.loadData();
    this.loadProductNew();
    this.loadProductSale();

  }

  public loadData(){
    this.categoryService.getCategory().subscribe(data =>{
      this.category = data;
    },
    error => console.log(error)
    )
  };
  public loadProductNew(){
    this.productService.getNew().subscribe(
      data => {
        this.productNew = data;
      },
      err => console.log(err)
    )
  };

  public loadProductSale(){
    this.productService.getSale().subscribe(
      data => {
        this.productSale = data
      },
      errr => console.log(errr)
    )
  }


}
