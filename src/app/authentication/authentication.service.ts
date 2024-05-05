import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _isLogged:boolean=false;
  private _isLoggedCustomer:boolean=false;
  private _isLoggedApprover:boolean=false;
  get isLogged():boolean{
    return this._isLogged;
  }
  get isLoggedCustomer():boolean{
    return this._isLoggedCustomer;
  }
  get isLoggedApprover():boolean{
    return this._isLoggedApprover;
  }

  set isLogged(value:boolean){
    this._isLogged=value;
  }
  set isLoggedApprover(value:boolean){
    this._isLoggedApprover=value;
  }
  set isLoggedCustomer(value:boolean){
    this._isLoggedCustomer=value;
  }
  constructor() { }

  logout(){
    this._isLogged=false;
    this._isLoggedCustomer=false;
    this._isLoggedApprover=false;
  }
  loginAsCustomer(){
    this._isLogged=true;
    this._isLoggedCustomer=true;
    this._isLoggedApprover=false;
  }
}
