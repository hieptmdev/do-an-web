import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import * as _ from 'lodash';
import { SeachForm } from 'src/app/model/seach';
import { ProductService } from 'src/app/service/product.service';
import { ProductinfoService } from 'src/app/service/productinfo.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  p=1;
  colorSelect: any;
  numberProduct: any;
  numberProductInfo: any;
  public colors: any;
  selectcolor: any;
  seachFrom: SeachForm = new SeachForm();
  testTimKiem:any;
  constructor(
    private router: Router,
    private productsService: ProductService,
    public sharedDataService: SharedDataService,
    private productInfoService: ProductinfoService,
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.loadColor();
  }
  public loadColor(): void{
    this.productsService.getcolor().subscribe(
      data => {
        this.colors = data;
      }
    )
  }
  public loadData(): void{
    this.productsService.getAll().subscribe(data => {
       this.sharedDataService.productList = data;
    },
    error => console.log(error)
    );
  }

  //chưa viết :v
  public saveProductInfo(prodId: any): void{
    const formData = {
      productId: prodId,
      numberProduct: this.numberProduct,
      colorId: this.colorSelect
    }
    this.productInfoService.saveofupdate(formData).subscribe(
      data=>{
        console.log(data);
        alert("Thêm chi tiết sản phẩm thành công")
      }
    )
  }

  public updateProductInfo(prodInfo: any): void{
    this.productInfoService.saveofupdate(prodInfo).subscribe(
      data=>{
        console.log(data);
        alert("Cập nhật chi tiết sản phẩm thành công")
      }
    )
  }

  public timkiem(): void{
    this.productsService.seachAll(this.seachFrom).subscribe(
      data => {
          this.testTimKiem = data;
          this.sharedDataService.productList = data;
          if(data = ""){
            alert('Không tìm thấy sản phẩm');
          }
      },
      error => {console.log(error);
        alert('Không tìm thấy sản phẩm');
      }
    );
  }
  public addProduct(){
    this.router.navigate(['admin/a-addProduct/',0]);
  }
  public editProduct(idProduct: any){
    this.router.navigate(['admin/a-addProduct/',idProduct]);
  }

  public deleteProduct(idProduct: any){


  }
  public deleteDetailProduct(id: any){
    if (confirm('Bạn có muốn xóa')) {
      this.productInfoService.deleteDetailPro(id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert("Delete succsess")
          this.getDetailByCode(id);
        },
        error => {
          console.log(error);
          alert('Delete Failed');
        }
      );

    }

  }
  dataDetail: any = {};
  public getDetailByCode(id: any){
    this.productsService.getProductdetailByid(id).subscribe(
      data=>{
        this.dataDetail = data;
      },
      err => console.log(err)
    )
  }

  public sortByCode(dir: any){
    if(dir === "up" ){
      this.sharedDataService.productList = _.orderBy(this.sharedDataService.productList,['code'],['desc']);
    }
    else{
      this.sharedDataService.productList = _.orderBy(this.sharedDataService.productList,['code'],['asc']);
    }
  }
}
