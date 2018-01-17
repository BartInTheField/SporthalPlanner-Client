import { WorkComponent } from './components/work/work.component';
import { PlanComponent } from './components/plan/plan.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TimeComponent } from './components/time/time.component';
import { LoginComponent } from './components/login/login.component';
import { CustomersComponent } from './components/customers/customers.component';
import {AuthGuard} from "./services/auth-guard.service";
import {FacilityselectorComponent} from "./components/facilityselector/facilityselector.component";
import {AuthGuardSelectedFacility} from "./services/auth-guard-selectedfacility.service";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuardSelectedFacility]},
  { path: 'facilityselector', component: FacilityselectorComponent, canActivate:[AuthGuard]},
  { path: 'customers', component: CustomersComponent, canActivate:[AuthGuardSelectedFacility]},
  { path: 'day', component: CalendarComponent, canActivate:[AuthGuardSelectedFacility]},
  { path: 'week', component: CalendarComponent, canActivate:[AuthGuardSelectedFacility]},
  { path: 'work', component: WorkComponent, canActivate:[AuthGuardSelectedFacility]},
  { path: 'time', component: TimeComponent, canActivate:[AuthGuardSelectedFacility]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,AuthGuardSelectedFacility],
  exports: [RouterModule]
})
export class AppRoutingModule { }
