import { Component, OnDestroy, OnInit } from '@angular/core';
import { INotification } from './INotification';
import { NotificationsService } from './notifications-service';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit, OnDestroy {
  private _customerId: number | undefined;
  notifications: INotification[] = [];
  subscription!: Subscription;
  get customerId(): number | undefined {
    return this._customerId;
  }

  set customerId(value: number | undefined) {
    this._customerId = value;
  }
  constructor(
    private notificationService: NotificationsService,
    private auth: AuthenticationService
  ) {}

  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  getNotifications() {}

  ngOnInit(): void {
    this.notificationService.customerId = this.auth.fetchUser();
    this.subscription = this.notificationService
      .getNotificationsForCustomer()
      .subscribe({
        next: (response) => {
          this.notifications = response;
        },
      });
    console.log('subscription' + this.subscription);
  }
}
