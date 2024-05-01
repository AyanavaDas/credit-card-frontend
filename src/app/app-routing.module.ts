import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ApplicationsComponent } from './applications/applications.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CustomersComponent } from './customers/customers.component';
import { ApproverComponent } from './approver/approver.component';

const routes: Routes = [
  { path: 'home',component:HeaderComponent},
  { path: 'applications',component:ApplicationsComponent},
  { path: 'notifications',component:NotificationsComponent},
  { path: 'addCustomer',component:CustomersComponent},
  { path: 'addApprover',component:ApproverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
