import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Lo que ve el usuario
import { InicioRoutingModule } from './inicio-routing.module';

//componente(tarjeta)
import { CardComponent } from './components/card/card.component';

//cosas de angular material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    CardComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],

  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule {}