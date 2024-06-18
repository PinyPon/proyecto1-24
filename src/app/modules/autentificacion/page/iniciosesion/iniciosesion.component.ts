import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {
  //Variable booleana
  hide = true

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ){}
  
//Importar la interfaz de usuario
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }
  async IniciarSesion() {
    /* 

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
*/

    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
.then(res=> {
  alert("Correcto ingreso")

  this.servicioRutas.navigate(['/inicio'])
})
.catch(err => {
  alert("Hubo un problema: "+ err);
  this.limpiarInputs

})

    this.limpiarInputs()
  }
  limpiarInputs(){
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
