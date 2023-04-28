import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Padre } from 'src/app/Entidad/Padre';
import { ServicePadreService } from 'src/app/Service/Padre/service-padre.service';

@Component({
  selector: 'app-listar-padre',
  templateUrl: './listar-padre.component.html',
  styleUrls: ['./listar-padre.component.css']
})
export class ListarPadreComponent implements OnInit{
  constructor(private router : Router, private service : ServicePadreService ){}
  padre !: Padre[];

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listarC().subscribe(data=>{
      this.padre = data;
      console.log("Listar Padre "+JSON.stringify(data));
    });
  } //Cierra listar

  editar(padre : Padre){
    localStorage.setItem("id", padre.idPadre.toString());
    this.router.navigate(["editarPadre"]);
  }

  eliminar(padre : Padre){
    localStorage.setItem("id", padre.idPadre.toString());
    this.router.navigate(["eliminarPadre"]);
  }
}
