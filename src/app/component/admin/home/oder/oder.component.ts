import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { BrandsForm } from 'src/app/model/brands-form';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css']
})
export class OderComponent implements OnInit {

  p = 1;
  a: any;
  odersList: any;
  constructor(
    private oderService: OrderService,
    private route: Router,
    private routerA: ActivatedRoute,
    public sharedDataService: SharedDataService) {
    }

  ngOnInit(): void {
    this.loadOder();
  }
  public loadOder(): void{
    this.oderService.getAll().subscribe(
      data => {
        this.sharedDataService.productList = data;
      }
    );
  }

  public deleteOder(id: any): void{
    if (confirm('Bạn có muốn xóa')){
      this.oderService.deleteOderbyid(id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert("Delete succsess")
          this.loadOder();
        },
        error => {console.log(error);
                  alert('đã xóa');
        }
      );
    }
  }
  public editOder(idOder: any){

    this.route.navigate(['admin/a-addOder',idOder]);
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


