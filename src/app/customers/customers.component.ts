import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from './customer.service';
@Component({
  selector: 'Customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  private _firstname: string = '';
  private _lastname: string = '';
  private _email: string = '';
  private _contact: string = '';
  private _responseStatus = 0;
  private _generatedId = -1;
  private _password = '';
  private _confirmPassword = '';
  //private customer :ICustomer={};
  subscription!: Subscription;

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
  get responseStatus(): number {
    return this._responseStatus;
  }
  get generatedId(): number {
    return this._generatedId;
  }
  get password(): string {
    return this._password;
  }
  get confirmPassword(): string {
    return this._confirmPassword;
  }

  set generatedId(value: number) {
    this._generatedId = value;
  }
  set responseStatus(value: number) {
    this._responseStatus = value;
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
  set password(value: string) {
    this._password = value;
  }
  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }

  constructor(private customerService: CustomerService) {}
  ngOnDestroy(): void {
    //undefined check is required otherqise it would lead to buggy redirection
    if (this.subscription !== undefined) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this._responseStatus = 0;
  }

  addCustomer() {
    //console.log(this.firstName, this.lastName, this.email, this.contact);
    if (this.verifyPassword() == false) {
      this._responseStatus = 4;
      return;
    }
    this.customerService.firstName = this.firstName;
    this.customerService.lastName = this.lastName;
    this.customerService.email = this.email;
    this.customerService.contact = this.contact;
    this.customerService.password = this.password;

    this.subscription = this.customerService.addCustomer().subscribe({
      next: (response) => {
        this._responseStatus = 1;
        this._generatedId = response.id;
        console.log(response);
      },
      error: (err) => {
        if (err.status === 400) {
          this._responseStatus = 2;
          console.log(err);
        } else {
          this._responseStatus = 3;
          console.log(err);
        }
      },
    });

    this.resetToDefault();
  }
  verifyPassword(): boolean {
    return this.password === this.confirmPassword;
  }

  resetToDefault() {
    this._lastname = '';
    this._firstname = '';
    this._email = '';
    this._contact = '';
    this._confirmPassword = '';
    this._password = '';
  }
}
