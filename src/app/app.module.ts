import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { BookingService } from '../services/booking.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BarComponent } from './components/bar/bar.component';
import { NavbarService } from './services/navbar.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PlanComponent } from './components/plan/plan.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WorkComponent } from './components/work/work.component';
import { TimeComponent } from './components/time/time.component';
import { PlanPendingComponent } from './components/plan/plan-pending/plan-pending.component';
import { PlanDeclinedComponent } from './components/plan/plan-declined/plan-declined.component';
import { PlanAcceptedComponent } from './components/plan/plan-accepted/plan-accepted.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BarComponent,
    HomeComponent,
    PlanComponent,
    CalendarComponent,
    WorkComponent,
    TimeComponent,
    PlanPendingComponent,
    PlanDeclinedComponent,
    PlanAcceptedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NavbarService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
