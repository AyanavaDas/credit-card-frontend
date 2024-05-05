import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CustomersComponent } from './customers/customers.component';
import { ApproverComponent } from './approver/approver.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerLandingComponent } from './customer-module/customer-landing/customer-landing.component';

const routes: Routes = [
  { path: '',component:LandingComponent},
  { path: 'home',component:LandingComponent},
  { path: 'applications',component:ApplicationsComponent},
  { path: 'notifications',component:NotificationsComponent},
  { path: 'addCustomer',component:CustomersComponent},
  { path: 'addApprover',component:ApproverComponent},
  { path: 'login',component:LoginComponent},
  { path: 'customer',component:CustomerLandingComponent},
  { path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
