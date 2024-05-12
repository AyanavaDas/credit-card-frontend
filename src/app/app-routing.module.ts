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
import { AuthenticateCustomerGuard } from './authentication/authenticate-customer.guard';
import { AuthenticatedGuard } from './authentication/authenticated.guard';
import { CustomerApplicationsComponent } from './customer-module/customer-applications/customer-applications.component';
import { ApproverLandingComponent } from './approver-module/approver-landing/approver-landing.component';
import { AuthenticateApproverGuard } from './authentication/authenticate-approver.guard';

const routes: Routes = [
  { path: '', component: LandingComponent, canActivate: [AuthenticatedGuard] },
  {
    path: 'home',
    component: LandingComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'applications',
    component: ApplicationsComponent,
    canActivate: [AuthenticateApproverGuard],
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
    canActivate: [AuthenticateCustomerGuard],
  },
  {
    path: 'addCustomer',
    component: CustomersComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'addApprover',
    component: ApproverComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'customer',
    component: CustomerLandingComponent,
    canActivate: [AuthenticateCustomerGuard],
  },
  {
    path: 'apply',
    component: CustomerApplicationsComponent,
    canActivate: [AuthenticateCustomerGuard],
  },
  {
    path: 'approver',
    component: ApproverLandingComponent,
    canActivate: [AuthenticateApproverGuard],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
