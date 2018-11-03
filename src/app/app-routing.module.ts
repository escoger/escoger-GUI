import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent }      from './electronics/electronics.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ElectronicDetailComponent }  from './electronic-detail/electronic-detail.component';

const routes: Routes = [
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: ElectronicDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}