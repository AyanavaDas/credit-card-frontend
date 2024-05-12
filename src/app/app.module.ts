import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbCardModule, NbLayoutModule, NbTabsetModule } from '@nebular/theme';
import { HeaderComponent } from './header/header.component';
import { ApplicationsComponent } from './applications/applications.component';
import { FormsModule } from '@angular/forms';
import { showApplicationStatusPipe } from './shared/showApplicationStatus';
import { ApplicationStatusComponent } from './applications/application-status/application-status.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CustomersComponent } from './customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { ApproverComponent } from './approver/approver.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerLandingComponent } from './customer-module/customer-landing/customer-landing.component';
import { CustomerHeaderComponent } from './customer-module/customer-header/customer-header.component';
import { CustomerApplicationsComponent } from './customer-module/customer-applications/customer-applications.component';
import { ApproverHeaderComponent } from './approver-module/approver-header/approver-header.component';
import { ApproverLandingComponent } from './approver-module/approver-landing/approver-landing.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApplicationsComponent,
    showApplicationStatusPipe,
    ApplicationStatusComponent,
    NotificationsComponent,
    CustomersComponent,
    ApproverComponent,
    LoginComponent,
    LandingComponent,
    NotFoundComponent,
    CustomerLandingComponent,
    CustomerHeaderComponent,
    CustomerApplicationsComponent,
    ApproverHeaderComponent,
    ApproverLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
