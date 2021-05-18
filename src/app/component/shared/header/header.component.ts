import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  category : any;
  constructor( private cateService : CategoryService) { }

  ngOnInit(): void {

  }

  public loadData() : void {
    this.cateService.getCategory().subscribe(data => {
      this.category = data
    })
  }


}
