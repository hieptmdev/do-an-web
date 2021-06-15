import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {
  id= 0;
  public brandForm = new FormGroup({
    name: new FormControl(''),
    code: new FormControl('')
  });
  constructor(
    private brandService: BrandService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public saveandGotoList() {
    this.brandService.saveOfupdate(this.createNewData()).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        console.log("DataFormCategory", data);
        this.route.navigate(['admin/a-brand'])
      },
      err => console.log(err)
    );
  }


  private createNewData() {
    const addBrandObjec = {};
    for (const valueCate in this.brandForm.controls) {
      if (valueCate) {
        // @ts-ignore
        addBrandObjec[valueCate] = this.brandForm.controls[valueCate].value;
      }
    }
    return addBrandObjec;
  }
  public back() {
    this.route.navigate(['admin/a-brand'])
  }
}
