import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import {SharedDataService} from '../../../service/shared-data.service';
import {CartService} from '../../../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {
  p = 1;
  products: any;
  categorys: any;
  brands: any;
  selectCategory: any;
  selectBrand: any;
  constructor(
    private productsService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    public sharedDataService: SharedDataService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.loadData();
    this.loadCategory();
    this.loadBrands();
  }

  public loadData(): void{
    this.productsService.getAll().subscribe(data => {
      this.sharedDataService.productList = data;
    },
    error => console.log(error)
    );

  }

  // list danh sách tìm kiếm
  public loadTimkiem(): void{
    this.productsService.getFind(data).subscribe(
      data=> {
        this.sharedDataService.productList = data;
      },
      error => console.log(error)
    )
  }
  //Get Brand,cate
  public loadCategory() :void{
    this.categoryService.getCategory().subscribe(
      data => {
        this.categorys = data;
      }
    )
  }
  public loadBrands(): void {
    this.brandService.getAll().subscribe(
      data => {
        this.brands = data;
      },
      error => console.log(error)
    );
  }
  public addCart(prod: any): void{

  }

  public nextPage(): void{

  }

  public search(): void {
    console.log(this.selectCategory);
    const data = {
      productTypeId: this.selectCategory,
      brandId: this.selectBrand
    };
    this.productsService.getFind(data).subscribe(
      data=> {
        this.sharedDataService.productList = data;
      },
      error => console.log(error)
    );
  }
}
