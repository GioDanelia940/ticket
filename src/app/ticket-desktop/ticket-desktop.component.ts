import { Component } from '@angular/core';
import { faClockRotateLeft, faDove } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ticket-desktop',
  templateUrl: './ticket-desktop.component.html',
  styleUrls: ['./ticket-desktop.component.scss'],
})
export class TicketDesktopComponent {
  faDove = faDove;
  faPlane = faPlaneDeparture;
  faClock = faClockRotateLeft;
}
