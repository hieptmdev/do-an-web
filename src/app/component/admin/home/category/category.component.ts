import { Component, OnInit } from '@angular/core';
import { BrandsForm } from 'src/app/model/brands-form';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  p=1;
  cateForm: BrandsForm;
  categorys: any;
  brands: any;
  selectCategory: any;
  selectBrand: any;
  constructor(
    private productsService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    public sharedDataService: SharedDataService) {
      this.cateForm = new BrandsForm
    }

  ngOnInit(): void {
    this.loadData();
    this.loadCategory();
  }

  public loadData(): void{
    this.productsService.getAll().subscribe(data => {
      this.sharedDataService.productList = data;
    },
    error => console.log(error)
    );

  }


  public loadCategory() :void{
    this.categoryService.getCategory().subscribe(
      data => {
        this.categorys = data;
      }
    )
  }

  public save(){
    this.brandService.saveOfupdate(this.cateForm).subscribe(data =>
      {
       alert("Thêm Thành công!");
       console.log(data)
     },
     ( error: any) => {
       alert("Thất bại");
       console.log(error);
     }
   );
  }

  public deletebrand(brandId: number): void {
    if (confirm("Bạn có muốn xóa")){
      this.brandService.deleteBrand(brandId).subscribe(
        data => {
          alert("đã xóa");
          this.loadCategory();
        },
        error => console.log(error)
      );

    }
  }
}

