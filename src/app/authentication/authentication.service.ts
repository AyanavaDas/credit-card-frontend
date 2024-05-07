import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  logout() {
    localStorage.setItem('isLogged', 'false');
    localStorage.setItem('isLoggedCustomer', 'false');
    localStorage.setItem('isLoggedApprover', 'false');
  }
  loginAsCustomer() {
    localStorage.setItem('isLogged', 'true');
    localStorage.setItem('isLoggedCustomer', 'true');
    localStorage.setItem('isLoggedApprover', 'false');
  }
  loginAsApprover() {
    localStorage.setItem('isLogged', 'true');
    localStorage.setItem('isLoggedCustomer', 'false');
    localStorage.setItem('isLoggedApprover', 'true');
  }

  isCustomerLoggedIn(): boolean {
    return (
      localStorage.getItem('isLogged') === 'true' &&
      localStorage.getItem('isLoggedCustomer') === 'true' &&
      localStorage.getItem('isLoggedApprover') === 'false'
    );
  }

  isApproverLoggedIn(): boolean {
    return (
      localStorage.getItem('isLogged') === 'true' &&
      localStorage.getItem('isLoggedCustomer') === 'false' &&
      localStorage.getItem('isLoggedApprover') === 'true'
    );
  }

  registerUser(value: number) {
    localStorage.setItem('userId', String(value));
  }

  fetchUser():number{
    if(localStorage.getItem('userId')===null)
        return 0;
    else
      return Number(localStorage.getItem('userId'));
  }
}
