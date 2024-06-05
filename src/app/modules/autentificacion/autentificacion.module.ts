import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

//ARCHIVO DE RUTAS HIJAS
import { AutentificacionRoutingModule } from './autentificacion-routing.module';
//VISTAS DE AUTENTIFICACIÓN
import { RegistroComponent } from './page/registro/registro.component';
import { IniciosesionComponent } from './page/iniciosesion/iniciosesion.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

//Angular
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    //mATERIAL
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    //Angular
    FormsModule
  ],
  exports:[
    RegistroComponent,
    IniciosesionComponent,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AutentificacionModule { }
