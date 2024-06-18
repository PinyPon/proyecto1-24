import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referencia Auth de FB en el servicio

//el constructor inicializa un objeto de una clase
  constructor(public auth: AngularFireAuth) {}

//funcion para registro
  registrar(email: string, password: string){
    //retorna el valor que es creado con el medio "createEmail"
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  //Funcion para inicio sesion
  iniciarSesion(email: string, password: string){
    //Valida la imformacion
    return this.auth.signInWithEmailAndPassword(email,password)
  }
//Funcion 
  cerrarSesion(){
    //Devuelve una promesa vasia -> quita token
    return this.auth.signOut();
  }

  //Funcion para tomar el uid
  async obtenerUid (){
    //Nos va a generar una promesa y la constante la va a captar
    const user = await this.auth.currentUser;
    /*
    Si el usuario no respeta la estructura de la interfaz/ Si hay problemas
    */

    if (user == null) {
      return null
    } else {
      return user.uid;
    }

  }
 
  
}
