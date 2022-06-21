import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsaidaPage } from './psaida.page';

const routes: Routes = [
  {
    path: '',
    component: PsaidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsaidaPageRoutingModule {}