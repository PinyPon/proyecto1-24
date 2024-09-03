
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  //Directiva para comunicarse con el componente padre
  @Input() productoReciente: string = '';
  
  @Output() productoAgregado = new EventEmitter<Producto>();//@Output será definido como un nuevo evento

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }

  agregarProducto(info : Producto){
    this.productoAgregado.emit(info);
  }
}
