import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {SuperPowersComponent} from "./super-powers/super-powers.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  {
    path: 'super-powers/:id',
    outlet: 'details',
    component: SuperPowersComponent
  },

/*  The same outlet could be used with path/ component combo.
    {
    path: 'mortal-enemies/:name',
    outlet: 'details',
    component: MortalEnemyComponent
  },*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
