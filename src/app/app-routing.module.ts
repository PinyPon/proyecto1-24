import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

const routes: Routes = [
 /* {
  path: "inicio", component: InicioComponent
  },
  {
    path: "galeria", component: GaleriaComponent
  },
  {
    path: "servicios", component: ServiciosComponent
  }*/
  //ruta por default para iniciar siempre en inicio(en tanto se cargue el modulo inicio)
  {
    path: "", component: InicioComponent
  },
  //
  {
    path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
