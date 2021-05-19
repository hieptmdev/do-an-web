import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginForm } from 'src/app/model/login-form';
import { LoginService } from 'src/app/service/login.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
   loginForm: LoginForm;
   keepLogin: boolean | undefined;

  constructor(private loginService: LoginService,
              private router: Router,
              private jwtService: JwtHelperService) {
    this.loginForm = new LoginForm();
    this.keepLogin = false;
  }

  ngOnInit(): void {
  }

  public login(): void {
    console.log(this.loginForm);
    this.loginService.login(this.loginForm).subscribe(
      data => {
        const token = data.token;
        const username = this.jwtService.decodeToken(token).sub;
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        this.router.navigate(['home']).then(null);
      },
        (error: any) => {
        console.log(error);
      }
    );
  }
}
