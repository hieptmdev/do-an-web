import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {LoginForm} from '../../model/login-form';
import {Router} from '@angular/router';

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
