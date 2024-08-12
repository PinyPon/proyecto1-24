import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referencia Auth de FB en el servicio

//el constructor inicializa un objeto de una clase
  constructor(
    private auth: AngularFireAuth, 
    private servicioFirestore: AngularFirestore
  ){}

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


  obtenerUsuario(email: string){
    /*
    retornamos del servicio Firestore la coleccion de 'usuarios', buscamos una referencia en los emails
    registrados y los vuelve 
    */
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
  
}
