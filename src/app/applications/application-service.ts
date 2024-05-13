import { Injectable } from '@angular/core';
import { IApplication } from './IApplication';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';


@Injectable({
  providedIn: 'root',
})
export class ApplicationStatusService {
  private getAllApplicationsUrl =
    'http://localhost:8080/applications/allApplications';
  private approveApplicationUrl = 'http://localhost:8080/approver/approve';
  private approverId = this.auth.fetchUser();

  constructor(
    private httpClient: HttpClient,
    private auth: AuthenticationService
  ) {}
  approveApplication(applicationId:number): Observable<Boolean> {
    const options = {
      params: new HttpParams()
        .set('approverId', this.approverId)
        .set('applicationId', applicationId),
    };
    return this.httpClient
      .put<Boolean>(this.approveApplicationUrl, null, options)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
  getApplicationStatus(): Observable<IApplication[]> {
    return this.httpClient
      .get<IApplication[]>(this.getAllApplicationsUrl)
      .pipe(tap((data) => console.log('All', JSON.stringify(data))));
  }
}
