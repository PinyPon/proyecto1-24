import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {}

  registrar(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword
  }

  iniciarSesion(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  cerrarSesion(){
    return this.auth.signOut();
  }
}
