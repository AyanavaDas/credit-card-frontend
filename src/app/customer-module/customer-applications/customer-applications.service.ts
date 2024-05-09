import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IApplication } from 'src/app/applications/IApplication';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerApplicationsService {
  private getApplicationsUrl = 'http://localhost:8080/applications/get?id=1';
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
}
