import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ApproverLandingService } from './approver-landing.service';

@Component({
  selector: 'ApproverLanding',
  templateUrl: './approver-landing.component.html',
  styleUrls: ['./approver-landing.component.css'],
})
export class ApproverLandingComponent implements OnInit, OnDestroy {
  private _userId: number = 0;
  private _userName: string = '';
  subscription!: Subscription;
  get UserId(): number {
    return this._userId;
  }
  get Name(): string {
    return this._userName;
  }

  set UserId(value: number) {
    this._userId = value;
  }
  set Name(value: string) {
    this._userName = value;
  }
  constructor(
    private route: Router,
    private auth: AuthenticationService,
    private approverService: ApproverLandingService
  ) {}
  ngOnDestroy(): void {
    //undefined check is required otherwise it would lead to buggy redirection
    if (this.subscription !== undefined) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this._userId = this.auth.fetchUser();
    this.subscription = this.approverService.getApproverDetails().subscribe({
      next: (response) => {
        this._userName = response.firstName;
        console.log('response' + response.firstName);
      },
    });
  }
  checkApplications() {
    this.route.navigate(['/applications']);
  }
}
