import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
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

  addCustomer() {
    
  }

  constructor() {}

  ngOnInit(): void {}
}
