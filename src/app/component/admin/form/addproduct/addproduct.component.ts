import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductForm } from 'src/app/model/addProductForm';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { MatButtonModule } from '@angular/material/button';
import { data } from 'jquery';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public id: any;
  selectedFiles: any;
  fileToUpload: File | null | undefined;
  fileAnhProduct: any;
  addProductForm: AddProductForm;
  public categorys: any;
  public brands: any;
  public colors: any;
  selectCategory: any;
  selectBrand: any;
  selectcolor: any;
  public products: any;
  options = [{ value: 'This is value 1', checked: true }];
  statuses = ['control'];

  imageUrl: any;

  constructor(
    private route: Router,
    private productService: ProductService,
    private categoryService: CategoryService,
    private brandService: BrandService,
    private routerA: ActivatedRoute
  ) {
    this.id = this.routerA.snapshot.paramMap.get('id');
    this.addProductForm = new AddProductForm();
  }
  ngOnInit(): void {
    this.loadCategory();
    this.loadBrands();
    this.loadColor();
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }
  private loadData(id: any) {
    // tslint:disable-next-line:no-shadowed-variable
    this.productService.profindById(id).subscribe((data) => {
      this.addProductForm = data;
      console.log(data);
    });
  }


  public saveandGotoList() {
    if (this.id > 0) {
      this.productService.saveofupdate(this.addProductForm).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          console.log('DataFormCategory', data);
          alert('Update category success');
          this.route.navigate(['admin/a-product']);
        },
        err => console.log(err)
      );
    } else if (this.id == 0) {
      this.productService.saveofupdate(this.addProductForm).subscribe(
        data => {
          console.log('DataFormCategory', data);
          alert('Add category success');
          this.route.navigate(['admin/a-product']);
        },
        err => console.log(err)
      );
    }
  }

  // tslint:disable-next-line:typedef
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  fileChangeEvent(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: any = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);
    }
    this.addProductForm.fileImg = fileList[0];
  }

  public addproducts(): void {
    this.addProductForm.brandId = this.selectBrand;
    this.addProductForm.productTypeId = this.selectCategory;
    const formData = new FormData();
    formData.append('fileImg', this.addProductForm.fileImg);
    formData.append('brandId', this.selectBrand);
    formData.append('productTypeId', this.selectCategory);
    formData.append('fileImg', this.addProductForm.fileImg);
    formData.append('brandId', this.selectBrand);
    formData.append('productTypeId', this.selectCategory);
    formData.append('fileImg', this.addProductForm.fileImg);
    formData.append('brandId', this.selectBrand);
    formData.append('productTypeId', this.selectCategory);
    // @ts-ignore
    formData.append('name', this.addProductForm.name);
    console.log(formData);
    this.productService.saveofupdate(formData).subscribe(
      data => {
        console.log('DataFormCategory', data);
        alert('Update category success');
        this.route.navigate(['admin/a-product']);
      },
      (error: any) => {
        alert('Thất bại');
        console.log(error);
      }
    );

  }
  // Get Brand,cate
  public loadCategory(): void {
    this.categoryService.getCategory().subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        this.categorys = data;
      }
    );
  }
  public loadColor(): void{
    this.productService.getcolor().subscribe(
      data => {
        this.colors = data;
      }
    )
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


  public back() {
    this.route.navigate(['admin/dashboard']);
  }
}
