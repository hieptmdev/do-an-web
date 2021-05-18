import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginForm } from 'src/app/model/login-form';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
   loginForm: LoginForm;
   keepLogin: boolean | undefined;

  constructor(private loginService: LoginService,
              private router: Router) {
    this.loginForm = new LoginForm();
    this.keepLogin = false;
  }

  ngOnInit(): void {
  }

  public login(): void {
    console.log(this.loginForm);
    this.loginService.login(this.loginForm).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['home']).then(null);
      },
        (error: any) => {
        console.log(error);
      }
    );
  }
}
