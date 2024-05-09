import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ICustomer } from 'src/app/customers/ICustomer';

@Injectable({
  providedIn: 'root',
})
export class CustomerLandingService {
  private _userName: string = '';
  private getCustomerUrl = 'http://localhost:8080/customer/get';
  get Name(): string {
    return this._userName;
  }
  set Name(value: string) {
    this._userName = value;
  }
  constructor(
    private httpClient: HttpClient,
    private auth: AuthenticationService
  ) {}

  getCustomerDetails(): Observable<ICustomer> {
    var userId = this.auth.fetchUser();
    const options = {
      params: new HttpParams().set('Id', userId),
    };

    return this.httpClient
      .get<ICustomer>(this.getCustomerUrl, options)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
}
