import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bebida',
    loadChildren: () => import('./bebida/bebida.module').then( m => m.BebidaPageModule)
  },
  {
    path: 'sobremesa',
    loadChildren: () => import('./sobremesa/sobremesa.module').then( m => m.SobremesaPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'lanche',
    loadChildren: () => import('./lanche/lanche.module').then( m => m.LanchePageModule)
  },
  {
    path: 'psaida',
    loadChildren: () => import('./psaida/psaida.module').then( m => m.PsaidaPageModule)
  },
  {
    path: 'dia',
    loadChildren: () => import('./dia/dia.module').then( m => m.DiaPageModule)
  },
  {
    path: 'desc',
    loadChildren: () => import('./desc/desc.module').then( m => m.DescPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
