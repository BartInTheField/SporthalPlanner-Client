import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { BookingService } from './services/booking.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarComponent } from './components/bar/bar.component';
import { NavbarService } from './services/navbar.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PlanComponent } from './components/plan/plan.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { WorkComponent } from './components/work/work.component';
import { TimeComponent } from './components/time/time.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import { OpeningHoursService } from './services/openinghours.service';
import { OpeninghoursComponent } from './components/time/openinghours/openinghours.component';
import { ClosingdaysComponent } from './components/time/closingdays/closingdays.component';
import {ClosingDaysService} from "./services/closingdays.service";
import { DayComponent } from './components/calendar/day/day.component';
import { WeekComponent } from './components/calendar/week/week.component';
import { DayOverviewComponent } from './components/calendar/day/day-overview/day-overview.component';
import { DateService } from './services/date.service';
import { CustomersComponent } from './components/customers/customers.component';
import { FacilityselectorComponent } from './components/facilityselector/facilityselector.component';
import {SportsFacilityService} from "./services/sportsfacility.service";
import { AddMemberComponent } from './components/work/add-member/add-member.component';
import { StaffMembersComponent } from './components/work/staff-members/staff-members.component';
import {StaffMemberService} from "./services/staffmember.service";
import {PlanningService} from "./services/planning.service";
import { AddPlanningComponent } from './components/work/add-planning/add-planning.component';
import { PlanningComponent } from './components/work/planning/planning.component';
import {PlanningTogglerService} from './services/planning-toggler.service';

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
    LoginComponent,
    OpeninghoursComponent,
    ClosingdaysComponent,
    DayComponent,
    WeekComponent,
    DayOverviewComponent,
    CustomersComponent,
    FacilityselectorComponent,
    AddMemberComponent,
    StaffMembersComponent,
    AddPlanningComponent,
    PlanningComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    NavbarService,
    BookingService,
    OpeningHoursService,
    AuthService,
    ClosingDaysService,
    DateService,
    CustomerService,
    StaffMemberService,
    SportsFacilityService,
    PlanningService,
    PlanningTogglerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
