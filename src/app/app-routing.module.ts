import { PlanDeclinedComponent } from './components/plan/plan-declined/plan-declined.component';
import { PlanPendingComponent } from './components/plan/plan-pending/plan-pending.component';
import { WorkComponent } from './components/work/work.component';
import { PlanComponent } from './components/plan/plan.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TimeComponent } from './components/time/time.component';
import { PlanAcceptedComponent } from './components/plan/plan-accepted/plan-accepted.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'plan', component: PlanComponent, children: [
    {path: 'pending', component: PlanPendingComponent},
    {path: 'accepted', component: PlanAcceptedComponent},
    {path: 'declined', component: PlanDeclinedComponent}
  ] },
  { path: 'calendar', component: CalendarComponent},
  { path: 'work', component: WorkComponent},
  { path: 'time', component: TimeComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
