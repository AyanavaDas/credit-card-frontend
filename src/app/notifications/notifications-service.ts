import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { INotification } from './INotification';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private getNotificationsUrl = 'http://localhost:8080/customer/notifications/';
  private _customerId: number | undefined ;

  constructor(private httpClient: HttpClient) {}
  get customerId(): number| undefined{
    return this._customerId;
  }

  set customerId(value: number| undefined) {
    this._customerId = value;
  }

  getNotificationsForCustomer(): Observable<INotification[]> {
    return this.httpClient
      .get<INotification[]>(
        this.getNotificationsUrl + this.customerId?.toString()
      )
      .pipe(tap((data) => console.log('ALL', JSON.stringify(data))));
  }
}
