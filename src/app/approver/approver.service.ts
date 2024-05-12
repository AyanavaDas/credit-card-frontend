import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApprover } from './IApprover';
import { IApproverDto } from './IApproverDto';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApproverService {
  private addApproverUrl = 'http://localhost:8080/approver/add';
  private _firstname: string = '';
  private _lastname: string = '';
  private _password = '';
  get password(): string {
    return this._password;
  }
  get firstName(): string {
    return this._firstname;
  }
  get lastName(): string {
    return this._lastname;
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
  constructor(private httpClient: HttpClient) {}
  addApprover(): Observable<IApprover> {
    var approver: IApproverDto = {
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    };

    return this.httpClient
      .post<IApprover>(this.addApproverUrl, approver)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
}
