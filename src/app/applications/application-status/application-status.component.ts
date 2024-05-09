import { Component, Input } from '@angular/core';

@Component({
  selector: 'ApplicationStatus',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css'],
})
export class ApplicationStatusComponent {
  @Input() status: boolean = false;
}
