import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

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

registrar(){
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

}
