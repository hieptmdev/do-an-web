import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { SeachForm } from 'src/app/model/seach';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { UserService } from 'src/app/service/user.service';
interface code {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit {
  p = 1;
  seachFrom: SeachForm = new SeachForm();
  users: any;
  codeValue: any = 0;
  code: code[] = [
    { value: 0, viewValue: 'Khách hàng' },
    { value: 1, viewValue: 'Nhân viên' },
    { value: 2, viewValue: 'Quản lý' }
  ];
  constructor(
    private userService: UserService,
    public sharedDataService: SharedDataService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  public loadUsers() {
    this.userService.getAllUser().subscribe(data => {
      this.sharedDataService.user = data
    },
      error => console.log(error))
  }

  public deleteUser(id: any): void {
    if (confirm('Bạn có muốn xóa')) {
      this.userService.deleteUser(id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert("Delete succsess")
          this.loadUsers();
        },
        error => {
          console.log(error);
          alert('Delete Failed');
        }
      );

    }
  }
  public timkiem(): void { // select theo code la cai nay ah uh
    this.userService.selectByCode(this.codeValue).subscribe(
      data => {
        this.sharedDataService.user = data
      },
      error => {
        console.log(error);
        alert('Find Fall');
      }
    );
  }

  public seachByname(): void {
    this.userService.searchByName(this.seachFrom).subscribe(
      data => {
        this.sharedDataService.user = data
      }
      ,
      error => {
        console.log(error);
        alert('Find Fall');
      }
    );
  }

  public addUser(): void {
    this.router.navigate(['admin/a-addUser', 0]);
  }
  public editUser(id: any): void {
    this.router.navigate(['admin/a-addUser', id]);
  }

}
