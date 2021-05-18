import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data, param } from 'jquery';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  cateId : any;
  categoryId: any;

  constructor(
    private route : ActivatedRoute,
    private cateServive : CategoryService
  ) {
    route.paramMap.subscribe(param =>this.cateId  = param.get('id'));
  }

  ngOnInit(): void {
    this.loadProductCategory();
  }

  //lấy product theo categoryId
  public loadProductCategory() : void{
    this.cateServive.getProductForCategory(this.cateId).subscribe(
      data => {
        this.categoryId = data
      },
      err => console.log(err)
    )
  }

  public addCart(){

  }

}
