import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BarComponent } from './components/bar/bar.component';
import { NavbarService } from './services/navbar.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
