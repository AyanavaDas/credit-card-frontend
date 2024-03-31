import { Component, OnDestroy, OnInit } from '@angular/core';
import { IApplication } from './IApplication';
import { ApplicationStatusService } from './application-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent implements OnInit,OnDestroy {

  constructor(private applicationService : ApplicationStatusService) {

  }
  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

  ngOnInit(): void {
    this.subsciption=this.applicationService.getApplicationStatus().subscribe({
      next : applications => this.applications = applications
    });
  }


  private _filterId: number = 0;
  filteredApplications: IApplication[] = [];
  applications: IApplication[]= [];
  subsciption!: Subscription;

  get filterId(): number {
    return this._filterId;
  }

  set filterId(value: number) {
    this._filterId = value;
    this.filteredApplications = this.filterApplicationsWithId(value);
  }

  filterApplicationsWithId(filter: number): IApplication[] {
    return this.applications.filter(
      (application: IApplication) => application.id === filter
    );
  }
}
