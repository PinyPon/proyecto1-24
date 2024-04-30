import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Lo que ve el usuario
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';

//componente(tarjeta)
import { CardComponent } from './components/card/card.component';

//cosas de angular material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    CardComponent,
    InicioComponent
  ],
  imports: [
    //importamos desde la web y traemos al modulo
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],

  exports: [
    //exportamos al resto de la pagina
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule {}