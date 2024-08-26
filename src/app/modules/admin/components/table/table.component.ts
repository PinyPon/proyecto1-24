import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos colección local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];

  productoSeleccionado!: Producto; // !<= indica que puede tomar valores vacios

  modalVisibleProducto: boolean = false

  // Definimos formulario para los productos
  /**
   * Atributos alfanuméricos (string) se inicializan con comillas simples
   * Atributos numéricos (number) se inicializan con cero ('0')
   */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required)
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!
      }

      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          Swal.fire({
            title: "¡Producto cargado!",
            icon: "success"
          });
          this.producto.reset();
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No pudimos guardar tu producto",
          });
          this.producto.reset();
        })
    }

  }

  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true;

    this.productoSeleccionado = productoSeleccionado
  }


borrarProducto(){ 
  this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto)
  .then(respuesta=>{
    Swal.fire({
      title: "¡Producto cargado!",
      icon: "success"
    });
  })
  .catch(error=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No pudimos guardar tu producto",
    });
  })
}

//EDITAR PRODUCTOS
mostrarEditar(productoSeleccionado: Producto){
  this.producto.setValue({
  nombre  : productoSeleccionado.nombre,
  precio  : productoSeleccionado.precio,
  descripcion  : productoSeleccionado.descripcion,
  categoria  : productoSeleccionado.categoria,
  imagen  : productoSeleccionado.imagen,
  alt  : productoSeleccionado.alt
  })
}

//Vincula a evento clic
editarProducto(){
  let dato: Producto= {
    // Solo id Producto no se modifica por el usuario
    idProducto: this.productoSeleccionado.idProducto,

    nombre: this.producto.value.nombre!,
    precio: this.producto.value.precio!,
    descripcion: this.producto.value.descripcion!,  
    categoria: this.producto.value.categoria!,
    imagen: this.producto.value.imagen!,    
    alt: this.producto.value.alt!
  }
  this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, dato)
  .then(producto => {
    Swal.fire({
      title: "¡Producto cargado!",
      icon: "success"
    });
  })
  .catch(error => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No pudimos guardar tu producto",
    });
  })
}


}