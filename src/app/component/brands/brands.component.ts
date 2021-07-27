import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { BrandService } from 'src/app/service/brand.service';
import { CartService } from 'src/app/service/cart.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  p=1;
  brandID: any;
  ListBrandsId: any;
  products : any;
  categorys: any;
  brands: any;
  selectCategory: any = 0;
  selectBrand: any = 0;
  constructor(
    private route : ActivatedRoute,
    private brandSerive : BrandService,
    private productService : ProductService,
    public sharedDataService: SharedDataService,
    private cartService: CartService,
    private categoryService: CategoryService,
    private brandService: BrandService,
  ) {
    route.paramMap.subscribe(param =>this.brandID  = param.get('id'));
  }
  ngOnInit(): void {
    this.LoadDataBrand();
    this.loadCategory();
    this.loadBrands();

    throw new Error('Method not implemented.');
  }

  public LoadDataBrand() : void{
    this.productService.getProductForBrand(this.brandID).subscribe(data =>{
      this.ListBrandsId = data;
    })
  }
  public loadCategory(): void{
    this.categoryService.getCategory().subscribe(
      data => {
        this.categorys = data;
      }
    );
  }
  public loadBrands(): void {
    this.brandService.getAll().subscribe(
      data => {
        this.brands = data;
      },
      error => console.log(error)
    );
  }
   public addCart(prod: any){
    debugger
    if(prod.coloList && prod.coloList.length > 0){
      if(this.sharedDataService.cart){
        prod.cartId = this.sharedDataService.cart.id;
      }
      this.cartService.addCartDetail(prod)?.subscribe(
        data => {
          this.sharedDataService.cart = data;
        }, error => console.log(error)
      );
      alert("Đã thêm vào giỏ")
    } else {
      alert("Sản phẩm đã hết hàng!");
    }
  }

  public search(): void {
    console.log(this.selectCategory);
    if (this.selectBrand != 0 && this.selectCategory != 0) {
    const data = {
      productTypeId: this.selectCategory,
      brandId: this.selectBrand
    };
    this.productService.getFind(data).subscribe(
      data=> {
        this.sharedDataService.productList = data;
      },
      error => console.log(error)
    );
    }else {
      alert("Chưa chọn loại sản phẩm và hãng sản xuất")
    }

  }
}
