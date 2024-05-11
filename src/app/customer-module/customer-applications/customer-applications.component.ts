import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IApplication } from 'src/app/applications/IApplication';
import { CustomerApplicationsService } from './customer-applications.service';

@Component({
  selector: 'CustomerApplications',
  templateUrl: './customer-applications.component.html',
  styleUrls: ['./customer-applications.component.css'],
})
export class CustomerApplicationsComponent implements OnInit, OnDestroy {
  applications: IApplication[] = [];
  private _responseStatus = 0;

  get responseStatus(): number {
    return this._responseStatus;
  }
  set responseStatus(value: number) {
    this._responseStatus = value;
  }
  applicationSubscription!: Subscription;
  applySubscription!: Subscription;
  constructor(private applicationService: CustomerApplicationsService) {}
  ngOnDestroy(): void {
    //undefined check is required otherwise it would lead to buggy redirection
    if (this.applicationSubscription !== undefined)
      this.applicationSubscription.unsubscribe();
    if (this.applySubscription !== undefined)
      this.applySubscription.unsubscribe();
  }

  ngOnInit(): void {
    this._responseStatus =0;
    this.refreshApplicationsList();
  }

  refreshApplicationsList():void {

    this.applicationSubscription = this.applicationService
      .getApplications()
      .subscribe({
        next: (response) => (this.applications = response),
      });

  }

  applyForCreditCard() {
    this._responseStatus = 0;
    this.applySubscription = this.applicationService
      .applyApplication()
      .subscribe({
        next: (response) => {
          this._responseStatus = 1
          console.log(response);
        },
        error: (err) => {
          if (err.status === 400) {
            this._responseStatus = 2;
          } else {
            this.responseStatus = 3;
          }
        },
      });
    if(this.responseStatus == 1){
      this.refreshApplicationsList();
    }


  }
}
