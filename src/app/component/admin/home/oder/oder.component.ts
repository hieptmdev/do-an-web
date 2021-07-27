import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { BrandsForm } from 'src/app/model/brands-form';
import { DowloadOder } from 'src/app/model/exceloder';
import { SeachForm } from 'src/app/model/seach';
import { BrandService } from 'src/app/service/brand.service';
import { CategoryService } from 'src/app/service/category.service';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
interface status {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css']
})
export class OderComponent implements OnInit {
  seachFrom :  SeachForm = new SeachForm();
  p = 1;
  codeValue: any = 0;
  status: status[] = [
    { value: 0, viewValue: 'Đang lên đơn' },
    { value: 1, viewValue: 'Đang giao hàng' },
    { value: 2, viewValue: 'Hoàn thành' }
  ];
  constructor(
    private http: HttpClient,
    private oderService: OrderService,
    private route: Router,
    private routerA: ActivatedRoute,
    public sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    this.loadOder();
  }
  public loadOder(): void {
    this.oderService.getAll().subscribe(
      data => {
        this.sharedDataService.productList = data;
      }
    );
  }
  public timkiem(): void { // select theo code la cai nay ah uh
    this.oderService.selectByCode(this.codeValue).subscribe(
      data => {
        this.sharedDataService.productList = data
      },
      error => {
        console.log(error);
        alert('Find Fall');
      }
    );
  }

  public deleteOder(id: any): void {
    if (confirm('Bạn có muốn xóa')) {
      this.oderService.deleteOderbyid(id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert("Delete succsess")
          this.loadOder();
        },
        error => {
          console.log(error);
          alert('Delete Failed');
        }
      );
    }
  }
  public editOder(idOder: any) {
    this.route.navigate(['admin/a-addOder', idOder]);
  }


  dowload(): Observable<Blob> {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/datn/oders/download/order`, this.seachFrom, {
      responseType: 'blob'
    }).subscribe(data => {

      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }




  dataDetail: any;
  public getDetailByCode(code: any) {
    this.oderService.getOderdetailByCode(code).subscribe(
      data => {
        this.dataDetail = data;
      },
      err => console.log(err)
    )
  }
  public seach(): void {
    console.log(this.seachFrom);
    this.oderService.seach(this.seachFrom).subscribe(
      data => {
        this.sharedDataService.productList = data;
      },
      error => {
        console.log(error);
        alert('không thấy đơn hàng');
      }
    );
  }


}


