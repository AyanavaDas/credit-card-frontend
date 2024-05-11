import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IApplication } from 'src/app/applications/IApplication';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerApplicationsService {
  private getApplicationsUrl = 'http://localhost:8080/applications/get';
  private applyApplicationUrl = 'http://localhost:8080/customer/apply';
  constructor(
    private httpClient: HttpClient,
    private auth: AuthenticationService
  ) {}
  getApplications(): Observable<IApplication[]> {
    const options = {
      params: new HttpParams().set('id', this.auth.fetchUser()),
    };

    return this.httpClient
      .get<IApplication[]>(this.getApplicationsUrl, options)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
  applyApplication(): Observable<IApplication> {
    const optionsApplications = {
     params: new HttpParams().set('customerId', this.auth.fetchUser()),
    };

    return this.httpClient
      .post<IApplication>(this.applyApplicationUrl,null,optionsApplications)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
}
