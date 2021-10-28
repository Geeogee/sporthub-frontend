import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtentiDettagliComponent } from './utenti-dettagli/utenti-dettagli.component';
import { UtentiComponent } from './utenti/utenti.component';

const routes: Routes = [
  { path: 'detail/:userId', component: UtentiDettagliComponent },
  { path: 'users', component: UtentiComponent },
  { path: '', pathMatch: 'full', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
