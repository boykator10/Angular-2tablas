import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Padre } from 'src/app/Entidad/Padre';
import { ServicePadreService } from 'src/app/Service/Padre/service-padre.service';

@Component({
  selector: 'app-editar-padre',
  templateUrl: './editar-padre.component.html',
  styleUrls: ['./editar-padre.component.css']
})
export class EditarPadreComponent implements OnInit{
  constructor(private router : Router, private service : ServicePadreService ){}


  ngOnInit(): void {
    this.buscar();
  }

padre : Padre = new Padre();

  buscar(){
    let idPadre = localStorage.getItem("id");
    this.padre.idPadre = Number(idPadre);
    this.service.buscarC(this.padre).subscribe(data=>{
      this.padre = data;
    });

  }

  editar(){
    this.service.editarC(this.padre).subscribe(data=>{
      alert("Se Edito El Padre "+this.padre.nombre);
      this.router.navigate(["listarPadre"]);
    });
  }


}
