import { Component, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { data } from 'jquery';
import { Color, Label } from 'ng2-charts';
import { OrderService } from 'src/app/service/order.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
interface yeared {
  value: number;
  viewValue: number;
}
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  yeared: yeared[] = [
    {value: 0, viewValue: 2016},
    {value: 1, viewValue: 2017},
    {value: 2, viewValue: 2018},
    {value: 3, viewValue: 2019},
    {value: 4, viewValue: 2020},
    {value: 5, viewValue: 2021},
  ];
  dataChartTable: any;
  lineChartData: ChartDataSets[] = [];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June','july','August','September','October','November',
  'December'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  constructor(private orderService: OrderService,
    public sharedDataService: SharedDataService,) {
  }

  ngOnInit(): void {
    this.loadDataChart(2021);
  }
  public changingValue() {
    this.loadDataChart(this.yeared);
  }

  public loadDataChart(year: any){
    this.orderService.getChartData(year).subscribe(
      data => {
        const obj = {
          data: [data.thang1,data.thang2,data.thang3,data.thang4,data.thang5,data.thang6,data.thang7,data.thang8,data.thang9,data.thang10,data.thang11,data.thang12],
          label: 'Doanh thu năm ' + year
        }
        this.lineChartData = [];
        this.lineChartData.push(obj);
        this.sharedDataService.chartData = data;
        },
        error => console.log(error)
    )
  }
}
