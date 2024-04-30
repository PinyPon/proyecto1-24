import { Component } from '@angular/core';

//made in china(que lo importamos)
import { Potones } from 'src/app/models/potones';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 //PROPIEDAD PUBLICA (ARREGLO)
 public info: Potones[];
 //INICIALIZA LA PROPIEDAD DE LA INFO
 constructor(){
 this.info= [
   {
     id: "",
     nombre: "poton uno",
     cantidad: 2,
     imagen: "https://i.pinimg.com/originals/12/30/f2/1230f28b9c10750865e0958be39ddff0.gif",
     alt: "imagen de dos potones"
   },
   {
     id: "",
     nombre: "poton dos",
     cantidad: 1,
     imagen: "https://www.google.com/imgres?q=dibujos%20con%20tracero%20prominente%20cute&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fcute-smiling-welsh-corgi-dog-260nw-1014458896.jpg",
     alt: "imagen de un poton"
   },
   {
     id: "",
     nombre: "poton tres",
     cantidad: 1,
     imagen: "https://img.freepik.com/vector-premium/dibujos-animados-setas-lindo-trasero_579205-96.jpg?w=360",
     alt: "imagen de un hongo poton"
   }
 ]
 
 }
}
