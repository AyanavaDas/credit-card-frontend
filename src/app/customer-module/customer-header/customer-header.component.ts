import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'CustomerHeader',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css'],
})
export class CustomerHeaderComponent implements OnInit {
  constructor(private auth: AuthenticationService, private route: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    this.route.navigate(['/home']);
  }
}
