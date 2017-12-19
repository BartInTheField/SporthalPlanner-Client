import { WorkComponent } from './components/work/work.component';
import { PlanComponent } from './components/plan/plan.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TimeComponent } from './components/time/time.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'plan', component: PlanComponent},
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
