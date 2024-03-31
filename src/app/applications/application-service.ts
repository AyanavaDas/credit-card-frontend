import { Injectable } from '@angular/core';
import { IApplication } from './IApplication';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicationStatusService {
  private getAllApplicationsUrl =
    'http://localhost:8080/applications/allApplications';

  constructor(private httpClient: HttpClient) {}

  getApplicationStatus(): Observable<IApplication[]> {
    return this.httpClient
      .get<IApplication[]>(this.getAllApplicationsUrl)
      .pipe(tap((data) => console.log('All', JSON.stringify(data))));
  }
}
