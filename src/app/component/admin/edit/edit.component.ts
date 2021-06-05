import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddProductForm } from 'src/app/model/addProductForm';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  addProductForm: AddProductForm;

  productId:any;
  p=1;
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

      route.paramMap.subscribe(param => this.prodId=param.get('id'));
      this.addProductForm = new AddProductForm();
    }

  ngOnInit(): void {
    this.loadData();
  }


  //lấy thông tin sản phẩm theo id
  public loadData(): void {
    this.productsService.profindById(this.prodId).subscribe(data => {
      this.productId = data;
      this.addProductForm.setValue(data.name)
      console.log(data);
    },
    err => console.log(err)
    )

  }
  public addproducts(): void{
    // 2 cái này là mk đang glaasy giá trị của 2 cái select ở trên màn hình về để gán cho cái db à b uhm
    this.addProductForm.brandId = this.selectBrand;
    this.addProductForm.productTypeId = this.selectCategory;
    this.productsService.saveofupdate(this.addProductForm).subscribe(
      data=> {
        alert("Thêm Thành công!");
      },
      ( error: any) => {
        alert("Thất bại");
        console.log(error);
      }
    );

  }

}
