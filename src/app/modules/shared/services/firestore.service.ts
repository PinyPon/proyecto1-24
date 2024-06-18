import { Injectable } from '@angular/core';
import{ AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  /*definimos de forma privada de la coleccion de usuarios para que NO sea accesible en toda la app. 
  lo definimos como uyna coleccion de Firestore que respete la estructura de nuestar interfaz de Usuario 
  */
private usuarioCollection: AngularFirestoreCollection<Usuario>
  constructor(private database: AngularFirestore) { 
    /* Va a definir una nueva coleccion de usuarios que estará en nuestra BD */
    this.usuarioCollection = this.database.collection<Usuario>('usuarios')
  }

  agregarUsuario(usuario: Usuario, id: string){
    return new Promise(async (resolve, rejet) => {
      //Bloque TRY encapsula la logica
      try{
        usuario.uid = id;

        /*
        cont resultado = colection de usuarios, envia como numero de documento vel UID
          y setea lainfo que ingresa en el formulario REGISTRO
        */

        const resultado = await this.usuarioCollection.doc(id).set(usuario)

        resolve (resultado);

      }catch (error){
        rejet (error)
      }
    })
  }
}
