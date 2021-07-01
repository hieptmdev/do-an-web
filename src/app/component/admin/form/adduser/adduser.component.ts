import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';
interface code {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  public dataUser: any;
  public id = 0;
  public userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    code: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    isAdminAccount: new FormControl(''),
    isAdmin: new FormControl(2),
    codeString: new FormControl(''),
  });
  code: code[] = [
    {value: 0, viewValue: 'Khách hàng'},
    {value: 1, viewValue: 'Nhân viên'},
    {value: 2, viewValue: 'Quản lý'}
  ];
  constructor(
    private route: Router,
    private routerA: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.id = this.routerA.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadUpdate(this.id);
    }
    this.loadData();
  }


  public loadData(){
    this.userService.getAllUser().subscribe(
      data => {
        this.dataUser = data;
      }
    )
  }
  // tslint:disable-next-line:typedef
  private loadUpdate(id: any) {
    this.userService.getById(id).subscribe(
      data=>{
        for (const valueUserForm in this.userForm.controls){
          if(valueUserForm){
            this.userForm.controls[valueUserForm].setValue(data[valueUserForm])
          }
        }
        console.log('data User', data);
      }
    )
  }
  public saveandGotoList() {
    if(this.id){
      this.userForm.controls['id'].setValue(this.id);
    }
    if(this.userForm.controls['isAdmin'].value === 2){
      this.userForm.controls['isAdminAccount'].setValue(true);
    }else {
      this.userForm.controls['isAdminAccount'].setValue(false);
    }
    if (this.id > 0) {
      this.userService.addUser(this.userForm.value).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        data => {
          alert('Cập nhập thành công');
          this.route.navigate(['admin/a-user']);
        },
        (error: any) => {
          alert("Cập nhập thất bại")}
      );
    }
    else{
      this.userService.addUser(this.userForm.value).subscribe(
        data => {
          console.log('DataUsesr', data);
          alert('Thêm mới thành công user');
          this.route.navigate(['admin/a-user']);
        },
        (error: any) => {
          alert("Thêm user thất bại")}
      );
    }
  }
  public back(){
    this.route.navigate(['admin/a-user'])
  }
}
