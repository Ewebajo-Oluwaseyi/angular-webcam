import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WebcamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
