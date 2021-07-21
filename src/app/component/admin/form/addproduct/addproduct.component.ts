import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductForm } from 'src/app/model/addProductForm';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
interface status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent implements OnInit {
  status: status[] = [
    {value: 'new', viewValue: 'Hàng mới về'},
    {value: 'sale', viewValue: 'Giảm Giá'},
    {value: '', viewValue: 'Thường'}
  ];
  public id: any;
  addProductForm: AddProductForm;
  public categorys: any;
  public brands: any;
  public colors: any;
  selectCategory: any;
  selectBrand: any;
  selectcolor: any;
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
  onSelectedFile($event: any) {
    console.log($event.target.files[0].name);
    this.addProductForm.image = $event.target.files[0].name;
  }
  public saveandGotoList() {

    this.addProductForm.id =  this.id;
    const formData = new FormData();
    // @ts-ignore
    formData.append('id',this.addProductForm.id);
    formData.append('name', this.addProductForm.name);
    formData.append('code', this.addProductForm.code);
    formData.append('priceSell',this.addProductForm.priceSell);
    formData.append('sale',this.addProductForm.sale);
    formData.append('brandId', this.addProductForm.brandId);
    formData.append('productTypeId', this.addProductForm.productTypeId);
    formData.append('status',this.addProductForm.status);
    formData.append("mieuTa",this.addProductForm.mieuTa);
    formData.append('image',this.addProductForm.image);
    console.log(formData);
    console.log(this.id);
    if (this.id > 0) {
      this.productService.saveofupdate(formData).subscribe(
        data => {
          console.log('DataFormCategory', data);
          alert('Update Products success');
          this.route.navigate(['admin/dashboard']);
        },
        (error: any) => {
          alert('Thất bại');
          console.log(error);
        }
      );
    } else if (this.id == 0) {
      this.productService.saveofupdate(formData).subscribe(
        data => {
          console.log('DataFormProducts', data);
          alert('Add category success');
          this.route.navigate(['admin/dashboard']);
        },
        (error: any) => {
          alert('Thất bại');
          console.log(error);
        }
      );
    }
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
