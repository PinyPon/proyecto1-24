import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { InicioComponent } from './modules/inicio/components/inicio/inicio.component';

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
  //carga peresosa
  {
    path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)
  },
  {
    path:"", loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
