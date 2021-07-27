import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType } from 'chart.js';
import { OrderService } from 'src/app/service/order.service';
import { SharedDataService } from 'src/app/service/shared-data.service';
interface yeared {
  value: number;
  viewValue: number;
}
@Component({
  selector: 'app-chartmonth',
  templateUrl: './chartmonth.component.html',
  styleUrls: ['./chartmonth.component.css']
})
export class ChartmonthComponent implements OnInit {

  lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November',
  'December'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };

  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType : ChartType = 'line';

  constructor(private orderService: OrderService,
    public sharedDataService: SharedDataService,) {
      this.year = new Date().getFullYear();
  }
  ngOnInit(): void {
    this.loadDataChart(this.year);
  }
  yeared: yeared[] = [
    {value: 0, viewValue: 2016},
    {value: 1, viewValue: 2017},
    {value: 2, viewValue: 2018},
    {value: 3, viewValue: 2019},
    {value: 4, viewValue: 2020},
    {value: 5, viewValue: 2021},
  ];
  year!: number;
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
        this.barChartData = [];
        this.barChartData.push(obj);
        this.sharedDataService.chartData = data;
        },
        error => console.log(error)
    )
  }
  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['1','2', '3', '4', '5', '6', '7','8','9','10','11', '12', '13', '14', '15', '16', '17','18','19','20','21', '22', '23', '24', '25', '26', '27','28','29','30'];
  public barChartType : ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
