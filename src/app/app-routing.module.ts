import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtentiDettagliComponent } from './utenti-dettagli/utenti-dettagli.component';

const routes: Routes = [
  {
    path: 'detail/:userId',
    component: UtentiDettagliComponent             
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
