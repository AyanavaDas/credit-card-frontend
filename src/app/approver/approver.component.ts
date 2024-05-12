import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApproverService } from './approver.service';

@Component({
  selector: 'Approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css'],
})
export class ApproverComponent implements OnInit, OnDestroy {
  private _firstname: string = '';
  private _lastname: string = '';
  private _password: string = '';
  private _confirmPassword: string = '';
  private _responseStatus = 0;
  subscription!: Subscription;

  get firstName(): string {
    return this._firstname;
  }
  get lastName(): string {
    return this._lastname;
  }
  get responseStatus(): number {
    return this._responseStatus;
  }
  get password(): string {
    return this._password;
  }
  get confirmPassword(): string {
    return this._confirmPassword;
  }

  set lastName(value: string) {
    this._lastname = value;
  }
  set firstName(value: string) {
    this._firstname = value;
  }
  set password(value: string) {
    this._password = value;
  }
  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }
  set responseStatus(value: number) {
    this._responseStatus = value;
  }
  constructor(private approverService: ApproverService) {}
  ngOnDestroy(): void {
    //undefined check is required otherqise it would lead to buggy redirection
    if (this.subscription !== undefined) this.subscription.unsubscribe();
  }
  addApprover() {
    if (this.verifyPassword() == false) {
      this._responseStatus = 4;
      return;
    }
    this.approverService.firstName = this.firstName;
    this.approverService.lastName = this.lastName;
    this.approverService.password = this.password;

    this.subscription = this.approverService.addApprover().subscribe({
      next: (response) => {
        this._responseStatus = 1;
        console.log(response);
      },
      error: (err) => {
        if (err.status === 400) {
          this._responseStatus = 2;
        } else {
          this._responseStatus = 3;
        }
      },
    });
    this.resetToDefault();
  }
  resetToDefault() {
    this._lastname = '';
    this._firstname = '';
    this._confirmPassword = '';
    this._password = '';
  }
  verifyPassword(): boolean {
    return this.password === this.confirmPassword;
  }
  ngOnInit(): void {
    this._responseStatus = 0;
  }
}
