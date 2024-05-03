import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { ICustomer } from './ICustomer';
import { ICustomerDto } from './ICustomerDto';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private addCustomerUrl = 'http://localhost:8080/customer/add';
  private _firstname: string = '';
  private _lastname: string = '';
  private _email: string = '';
  private _contact: string = '';

  get firstName(): string {
    return this._firstname;
  }
  get lastName(): string {
    return this._lastname;
  }
  get email(): string {
    return this._email;
  }
  get contact(): string {
    return this._contact;
  }

  set contact(value: string) {
    this._contact = value;
  }
  set email(value: string) {
    this._email = value;
  }
  set lastName(value: string) {
    this._lastname = value;
  }
  set firstName(value: string) {
    this._firstname = value;
  }

  constructor(private httpClient: HttpClient) {}

  addCustomer(): Observable<ICustomer> {
    var customer: ICustomerDto = {
      firstName: this.firstName,
      lastName: this.lastName,
      emailAddress: this.email,
      contactNumber: this.contact,
    };
    //customer.firstName = this.firstName;

    return this.httpClient
      .post<ICustomer>(this.addCustomerUrl, customer)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
}
