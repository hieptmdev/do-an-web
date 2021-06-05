import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { BrandsForm } from 'src/app/model/brands-form';
import { BrandService } from 'src/app/service/brand.service';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.css'],
})
export class EditbrandComponent implements OnInit {
  public brandId: any;
  brandsForm : BrandsForm;
  id : any;
  name: any;
  code:any;
  brandList : any;
  public brandForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    code: new FormControl(''),
  });
  constructor(
    private brandService: BrandService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.brandsForm = new BrandsForm();
    route.paramMap.subscribe((param) => (this.brandId = param.get('id')));
  }

  ngOnInit(): void {
      this.loadData(this.brandId);
  }
  public loadData(id: any) {
    this.brandService.getById(id).subscribe((data) => {
      console.log('brand', data);
      this.brandList = data;
      console.log(this.brandList)
      for (const controlName in this.brandForm.controls) {
        if (controlName) {
          this.brandForm.controls[controlName].setValue(data[controlName]);
        }
      }
    });
  }
  public saveAndGotoList() {
    return this.brandService.saveOfupdate(this.brandsForm).subscribe(
      data=>{
        alert("Thành công");
      },
      error => console.log(error)
    )
  }
}
