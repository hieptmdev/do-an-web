import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { ActivatedRoute } from '@angular/router';
import { AddProductForm } from 'src/app/model/addProductForm';
import { LoginForm } from 'src/app/model/login-form';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  addProductForm: AddProductForm;
  fileToUpload: File | null | undefined ;
  p = 1;
  categorys: any;
  brands: any;
  selectCategory: any;
  selectBrand: any;
  prodId: any;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    public sharedDataService: SharedDataService) {
      this.addProductForm = new AddProductForm();
    }

  ngOnInit(): void {
    this.loadData();
    this.loadCategory();
    this.loadBrands();
  }
  // tslint:disable-next-line:typedef
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
  public loadData(): void{
    // tslint:disable-next-line:no-shadowed-variable
    this.productsService.getAll().subscribe(data => {
      this.sharedDataService.productList = data;
    },
    error => console.log(error)
    );
  }
  // Get Brand,cate
  public loadCategory(): void{
    this.categoryService.getCategory().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        this.categorys = data;
      }
    );
  }
  public loadBrands(): void {
    this.brandService.getAll().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        this.brands = data;
      },
      error => console.log(error)
    );
  }

  public delete(prodId1: number): void {
    if (confirm('Bạn có muốn xóa')){
      this.productsService.deletePro(prodId1).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert('đã xóa');
          this.loadData();
        },
        error => console.log(error)
      );

    }
  }
  public addproducts(): void{
    // gán từ select => form => db
    this.addProductForm.brandId = this.selectBrand;
    this.addProductForm.productTypeId = this.selectCategory;
    this.productsService.saveofupdate(this.addProductForm).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        alert('Thêm Thành công!');
        this.loadData();
      },
      ( error: any) => {
        alert('Thất bại');
        console.log(error);
      }
    );

  }

}

// tslint:disable-next-line:typedef no-shadowed-variable
function data(data: any) {
  throw new Error('Function not implemented.');
}

