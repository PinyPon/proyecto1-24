import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card-crema',
  templateUrl: './card-crema.component.html',
  styleUrls: ['./card-crema.component.css']
})
export class CardCremaComponent {

  coleccionProductos: Producto[] = [];
  coleccionCrema: Producto[] = []; 
  productoSeleccionado!: Producto;
  modalVisible: boolean = false;
  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    
      this.mostrarProductoCrema();
    })
  }

  mostrarProductoCrema(){
    this.coleccionProductos.forEach(producto => {
      if (producto.categoria === "crema") {
        this.coleccionCrema.push(producto)
      } else {
        
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }
}
