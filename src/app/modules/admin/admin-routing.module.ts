import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [

    // RUTA INICIAL / PRINCIPAL AL COMPONENTE
    {
      path:"admin",component: AdminComponent
    },
    {
      path: "table", component: TableComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
