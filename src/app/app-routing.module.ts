import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ApplicationsComponent } from './applications/applications.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  { path: 'home',component:HeaderComponent},
  { path: 'applications',component:ApplicationsComponent},
  { path: 'notifications',component:NotificationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
