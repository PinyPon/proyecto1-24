import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
hide= true

usuarios: Usuario ={
uid:'',
nombre:'',
apellido:'',
email:'',
rol:'',
password:''
}

coleccionUsuario: Usuario[] = [];

constructor(
  public servicioAuth: AuthService,
  public servicioRutas: Router
){}

async registro (){

  const credenciales = {
    email: this.usuarios.email,
    password: this.usuarios.password
  }
//constante respuesta
  const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
  .then(res=>
  {
    alert("Accedió");

    this.servicioRutas.navigate(['/inicio'])
  }
  )   
  //toma el  y lo convierte en un error
  .catch(error=>{
    alert("Hubo en error al registrar\n"+error)
  })
}


/* registrar(){
  const credenciales = {
    uid: this.usuarios.uid,
    nombre: this.usuarios.nombre,
    apellido: this.usuarios.apellido,
    email: this.usuarios.email,
    rol: this.usuarios.rol,
    password: this.usuarios.password
  }

  //this.coleccionUsuario.push(credenciales)
  //set item envia informacion a get item. 
  localStorage.setItem(this.usuarios.email, JSON.stringify(credenciales))

  //console.log(localStorage.getItem('clave1'))

  console.log(credenciales);
  console.log(this.coleccionUsuario);

  alert("¡Te registraste con exito!")

this.limpiar()
  
}
limpiar(){
  const input = {
    uid: this.usuarios.uid ='',
    nombre: this.usuarios.nombre ='',
    apellido: this.usuarios.apellido ='',
    email: this.usuarios.email ='',
    rol: this.usuarios.rol ='',
    password: this.usuarios.password ='',
  }
}
*/
}
