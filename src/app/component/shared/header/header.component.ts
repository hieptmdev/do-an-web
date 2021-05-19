import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CategoryService } from 'src/app/service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: any;
  isLogin: boolean | undefined;
  category: any;

  constructor( private cateService: CategoryService,
               private router: Router) {
    this.username = localStorage.getItem('username');
    if (this.username != null && localStorage.getItem('token') != null){
      this.isLogin = true;
    }else {
      this.isLogin = false;
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.cateService.getCategory().subscribe(data => {
      this.category = data;
    }, error => console.log(error));
  }


  public logout(): void {
    localStorage.clear();
    this.isLogin = false;
    window.location.reload();
  }
}
