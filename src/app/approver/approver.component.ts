import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css'],
})
export class ApproverComponent implements OnInit {
  private _firstname: string = '';
  private _lastname: string = '';

  get firstName(): string {
    return this._firstname;
  }
  get lastName(): string {
    return this._lastname;
  }

  set lastName(value: string) {
    this._lastname = value;
  }
  set firstName(value: string) {
    this._firstname = value;
  }
  constructor() {}
  addApprover() {}
  ngOnInit(): void {}
}
