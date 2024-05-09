import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ICustomer } from 'src/app/customers/ICustomer';
import { CustomerLandingService } from './customer-landing.service';

@Component({
  selector: 'CustomerLanding',
  templateUrl: './customer-landing.component.html',
  styleUrls: ['./customer-landing.component.css'],
})
export class CustomerLandingComponent implements OnInit, OnDestroy {
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
    private auth: AuthenticationService,
    private customerService: CustomerLandingService,
    private route: Router
  ) {}
  ngOnDestroy(): void {
    //undefined check is required otherwise it would lead to buggy redirection
    if (this.subscription !== undefined) this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this._userId = this.auth.fetchUser();
    this.subscription = this.customerService.getCustomerDetails().subscribe({
      next: (response) => {
        this._userName = response.firstName;
      },
    });
  }
  applyCreditCard() {
    this.route.navigate(['/apply']);
  }
}
