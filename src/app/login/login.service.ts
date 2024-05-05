import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IApprover } from '../approver/IApprover';
import { ICustomer } from '../customers/ICustomer';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginAsCustomer = 'http://localhost:8080/user/customer/login';
  private loginAsApprover = 'http://localhost:8080/user/approver/login';
  private _userId: string = '';
  private _password: string = '';

  get userId(): string {
    return this._userId;
  }
  get rawPassword(): string {
    return this._password;
  }

  set userId(value: string) {
    this._userId = value;
  }
  set rawPassword(value: string) {
    this._password = value;
  }
  constructor(private httpClient: HttpClient) {}

  userLoginAsApprover(): Observable<IApprover> {
    const options = {
      params: new HttpParams()
        .set('userId', this.userId)
        .set('rawPassword', this.rawPassword),
    };

    return this.httpClient
      .get<IApprover>(this.loginAsApprover, options)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }

  userLoginAsCustomer(): Observable<ICustomer> {
    const options = {
      params: new HttpParams()
        .set('userId', this.userId)
        .set('rawPassword', this.rawPassword),
    };
    return this.httpClient
      .get<ICustomer>(this.loginAsCustomer, options)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
}
