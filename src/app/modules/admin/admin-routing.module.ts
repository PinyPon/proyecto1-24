import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';

const routes: Routes = [

    // RUTA INICIAL / PRINCIPAL AL COMPONENTE
    {
      path:"admin",component: AdminComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
