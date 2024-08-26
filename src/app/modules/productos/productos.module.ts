import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { CremaComponent } from './pages/crema/crema.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { CardCremaComponent } from './components/card-crema/card-crema.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    ProductoComponent,
    CremaComponent,
    IndumentariaComponent,
    EjerciciosComponent,
    CardCremaComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  exports:[
    ProductoComponent,
    CremaComponent,
    IndumentariaComponent,
    EjerciciosComponent,
    CardCremaComponent
  ]
})
export class ProductosModule { }
