import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  hide = true

  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }
  Inicio_sesion() {

    const cuenta = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
    console.log(cuenta)
    //get item recive la info del registro 
    const sUsuarioEncontrado = localStorage.getItem(cuenta.email)

    if (sUsuarioEncontrado) {
      //convierto el objeto en string
      const oUsuarioEncontrado = JSON.parse(sUsuarioEncontrado)
      const contrasena = oUsuarioEncontrado.password
      console.log('Contraseña = ' + contrasena) 
      if (contrasena == cuenta.password)
        alert("¡¡¡TODO FUNCIONA Y SOY FELIZ!!! Bienvenido " + oUsuarioEncontrado.nombre)  
      else{
        alert("Ops, eso no está bien...")
      }
    } else {
      console.log('User data not found in local storage')
    }
    //console.log(localStorage.getItem(cuenta.emai

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



}
