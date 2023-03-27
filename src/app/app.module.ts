import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TicketDesktopComponent } from './ticket-desktop/ticket-desktop.component';
import { TicketMobileComponent } from './ticket-mobile/ticket-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketDesktopComponent,
    TicketMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
