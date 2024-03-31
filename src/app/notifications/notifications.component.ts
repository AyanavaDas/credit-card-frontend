import { Component, OnDestroy, OnInit } from '@angular/core';
import { INotification } from './INotification';
import { NotificationsService } from './notifications-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
})
export class NotificationsComponent implements OnInit,OnDestroy {
  private _customerId: number | undefined;
  notifications: INotification[] = [];
  subsciption!: Subscription;
  get customerId(): number | undefined {
    return this._customerId;
  }

  set customerId(value: number|undefined) {
    this._customerId = value;
  }
  constructor(private notificationService: NotificationsService) {}


  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

  getNotifications() {
    this.notificationService.customerId = this.customerId;
    this.subsciption =this.notificationService.getNotificationsForCustomer().subscribe({
      next: (notifs) =>{
          this.notifications = notifs;
        },
    });
  }

  ngOnInit(): void {}
}
