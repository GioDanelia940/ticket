import { Component } from '@angular/core';
import {
  faRightLeft,
  faPlaneDeparture,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ticket-mobile',
  templateUrl: './ticket-mobile.component.html',
  styleUrls: ['./ticket-mobile.component.scss'],
})
export class TicketMobileComponent {
  faRightLeft = faRightLeft;
  faPlane = faPlaneDeparture;
}
