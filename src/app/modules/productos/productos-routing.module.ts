import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { CremaComponent } from './pages/crema/crema.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';

const routes: Routes = [
  {
    path:"producto", component: ProductoComponent
  },
  {
    path: "crema",component:CremaComponent
  },
  {
    path:"indumentaria", component: IndumentariaComponent
  },
  {
    path:"ejercicio", component: EjerciciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
