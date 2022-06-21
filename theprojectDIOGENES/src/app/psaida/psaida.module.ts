import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsaidaPageRoutingModule } from './psaida-routing.module';

import { PsaidaPage } from './psaida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsaidaPageRoutingModule
  ],
  declarations: [PsaidaPage]
})
export class PsaidaPageModule {}
