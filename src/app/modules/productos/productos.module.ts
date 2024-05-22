import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { CremaComponent } from './pages/crema/crema.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';


@NgModule({
  declarations: [
    ProductoComponent,
    CremaComponent,
    IndumentariaComponent,
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports:[
    ProductoComponent,
    CremaComponent,
    IndumentariaComponent,
    EjerciciosComponent
  ]
})
export class ProductosModule { }
