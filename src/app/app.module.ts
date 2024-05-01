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
import { ApproverComponent } from './approver/approver.component'

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
