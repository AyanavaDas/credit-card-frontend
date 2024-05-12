import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IApprover } from 'src/app/approver/IApprover';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ApproverLandingService {
  private _userName: string = '';
  private getApproverUrl = 'http://localhost:8080/approver/get';
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

  getApproverDetails(): Observable<IApprover> {
    var userId = this.auth.fetchUser();
    const options = {
      params: new HttpParams().set('Id', userId),
    };

    return this.httpClient
      .get<IApprover>(this.getApproverUrl, options)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
}
