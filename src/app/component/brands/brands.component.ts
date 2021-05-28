import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { BrandService } from 'src/app/service/brand.service';
import { ProductService } from 'src/app/service/product.service';

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

  constructor(
    private route : ActivatedRoute,
    private brandSerive : BrandService,
    private productService : ProductService
  ) {
    route.paramMap.subscribe(param =>this.brandID  = param.get('id'));
  }
  ngOnInit(): void {
    this.LoadDataBrand();

    throw new Error('Method not implemented.');
  }

  public LoadDataBrand() : void{
    this.productService.getProductForBrand(this.brandID).subscribe(data =>{
      this.ListBrandsId = data;
    })
  }
   public addCart(){

  }
}
