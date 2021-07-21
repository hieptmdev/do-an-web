import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DangKyForm } from 'src/app/model/dangky';
import { LoginForm } from 'src/app/model/login-form';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: LoginForm;
  dangKyForm :  DangKyForm;
  keepLogin: boolean | undefined;
  rememberMe: boolean = false;
  display = 'none'
  verifyModalData = {}
 constructor(private loginService: LoginService,
             private router: Router,
             private jwtService: JwtHelperService) {
   this.loginForm = new LoginForm();
   this.dangKyForm = new DangKyForm();
   this.keepLogin = false;
 }


 ngOnInit(): void {
 }

  public login(): void {
    //console.log(this.loginForm);
    this.loginService.login(this.loginForm).subscribe(
      data => {
        const token = data.token;
        const username = this.jwtService.decodeToken(token).sub;
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem("idUser",this.jwtService.decodeToken(token).id);
        localStorage.setItem('isAdmin', this.jwtService.decodeToken(token).admin_account);
        localStorage.setItem('name',this.jwtService.decodeToken(token).name);
        localStorage.setItem('code',this.jwtService.decodeToken(token).role);
        localStorage.setItem('email',this.jwtService.decodeToken(token).email)
        this.router.navigate(['home']).then(() => window.location.reload());
      },
        (error: any) => {
          alert("Đăng nhập không thành công!")
        console.log(error);
      }
    );
  }
}
