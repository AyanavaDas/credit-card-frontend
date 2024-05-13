import { Component, OnDestroy, OnInit } from '@angular/core';
import { IApplication } from './IApplication';
import { ApplicationStatusService } from './application-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent implements OnInit, OnDestroy {
  constructor(private applicationService: ApplicationStatusService) {}
  ngOnDestroy(): void {
    if (this.applicationSubsciption !== undefined)
      this.applicationSubsciption.unsubscribe();
    if (this.approverSubscription !== undefined)
      this.approverSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this._responseStatus = 0;
    this.refreshList();
  }
  refreshList() {
    this.applicationSubsciption = this.applicationService
      .getApplicationStatus()
      .subscribe({
        next: (applications) => (this.applications = applications),
      });
  }

  applications: IApplication[] = [];
  applicationSubsciption!: Subscription;
  approverSubscription!: Subscription;
  private _responseStatus = 0;

  get responseStatus(): number {
    return this._responseStatus;
  }
  set responseStatus(value: number) {
    this._responseStatus = value;
  }

  approve(applicationId: number) {
    this._responseStatus = 0;
    this.approverSubscription = this.applicationService
      .approveApplication(applicationId)
      .subscribe({
        next: (response) => {
          this._responseStatus = 1;
          console.log(response);
          this.refreshList();
        },
        error: (err) => {
          this._responseStatus = 2;
          console.log(err);
        },
      });
  }
}
