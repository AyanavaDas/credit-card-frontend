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
  subscription!: Subscription;
  constructor(private applicationService: CustomerApplicationsService) {}
  ngOnDestroy(): void {
    //undefined check is required otherwise it would lead to buggy redirection
    if (this.subscription !== undefined) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.applicationService.getApplications().subscribe({
      next: (response) => (this.applications = response),
    });
  }
}
