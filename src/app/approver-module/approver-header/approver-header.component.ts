import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'ApproverHeader',
  templateUrl: './approver-header.component.html',
  styleUrls: ['./approver-header.component.css'],
})
export class ApproverHeaderComponent implements OnInit {
  constructor(private auth: AuthenticationService, private route: Router) {}

  ngOnInit(): void {}
  logout() {
    this.auth.logout();
    this.route.navigate(['/home']);
  }
}
