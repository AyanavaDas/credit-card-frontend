import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ICustomer } from 'src/app/customers/ICustomer';

@Component({
  selector: 'CustomerLanding',
  templateUrl: './customer-landing.component.html',
  styleUrls: ['./customer-landing.component.css'],
})
export class CustomerLandingComponent implements OnInit {
  //userId : number =0;
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    console.log('Logged?' + this.auth.isLogged);
    console.log('Customer?' + this.auth.isLoggedCustomer);
    //console.log(this.user);
  }
}
