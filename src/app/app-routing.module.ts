import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibiliteComponent } from './disponibilite/disponibilite.component';
import { GetCalendarComponent } from './get-calendar/get-calendar.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'calendar',
    component: GetCalendarComponent
  },
  {
    path: 'availabilities',
    component: DisponibiliteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
