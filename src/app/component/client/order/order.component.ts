import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  dataDetail: any;
  dataOder : any;
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.loadData();
  }
  public loadData(){
    this.orderService.getAlloderByUser().subscribe(data=>{
        this.dataOder = data;
    },
    err => console.log(err)
    )
  }

  public getDetailByCode(code: any){
    this.orderService.getOderdetailByCode(code).subscribe(
      data=>{
        this.dataDetail = data;
      },
      err => console.log(err)
    )
  }

}
