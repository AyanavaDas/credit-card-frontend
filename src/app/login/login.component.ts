import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private _userRole: number = 0;
  private _userId: string = '';
  private _password: string = '';
  private _responseStatus = 0;
  subscription!: Subscription;
  get userRole(): number {
    return this._userRole;
  }
  get userId(): string {
    return this._userId;
  }
  get rawPassword(): string {
    return this._password;
  }
  get responseStatus(): number {
    return this._responseStatus;
  }

  set userRole(value: number) {
    this._userRole = value;
  }
  set userId(value: string) {
    this._userId = value;
  }
  set rawPassword(value: string) {
    this._password = value;
  }
  set responseStatus(value: number) {
    this._responseStatus = value;
  }

  constructor(private loginService: LoginService, private router: Router,private auth:AuthenticationService) {}
  ngOnDestroy(): void {
    //undefined check is required otherwise it would lead to buggy redirection
    if (this.subscription !== undefined) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this._responseStatus = 0;
    this.auth.logout();
  }
  login() {
    //console.log(this.userRole);
    this._responseStatus = 0;
    this.loginService.userId = this.userId;
    this.loginService.rawPassword = this.rawPassword;
    if (this.userRole == 1) {
      this.subscription = this.loginService.userLoginAsCustomer().subscribe({
        next: (response) => {
          //console.log(response);
          this.auth.loginAsCustomer();
          this.router.navigate(['/customer']);
        },
        error: (err) => {
          if (err.status === 400) {
            this._responseStatus = 1;
          } else {
            this._responseStatus = 2;
          }
        },
      });
    } else if (this.userRole == 2) {
      this.subscription = this.loginService.userLoginAsApprover().subscribe({
        next: (response) => {},
        error: (err) => {
          if (err.status === 400) {
            this._responseStatus = 1;
          } else {
            this._responseStatus = 2;
          }
        },
      });
    }

    this.resetToDefault();
  }
  resetToDefault() {
    this._userId = '';
    this._password = '';
    this._userRole = 0;
  }
}
