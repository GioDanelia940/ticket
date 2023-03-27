import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ticket';
  isMobile!: boolean;
  ngOnInit(): void {
    if (window.innerWidth > 1200) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }

  onResize(event: any) {
    if (event.target.innerWidth > 1200) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }
}
