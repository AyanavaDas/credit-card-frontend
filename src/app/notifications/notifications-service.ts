import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { INotification } from './INotification';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private getNotificationsUrl = 'http://localhost:8080/customer/notifications';
  private _customerId: number | undefined;

  constructor(private httpClient: HttpClient) {}
  get customerId(): number | undefined {
    return this._customerId;
  }

  set customerId(value: number | undefined) {
    this._customerId = value;
  }
  getNotificationsForCustomer(): Observable<INotification[]> {
    const options = this.customerId
      ? { params: new HttpParams().set('customerId', this.customerId!) }
      : {};
    return this.httpClient
      .get<INotification[]>(this.getNotificationsUrl, options)
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
}
