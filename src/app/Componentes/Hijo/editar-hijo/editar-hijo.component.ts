import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hijo } from 'src/app/Entidad/Hijo';
import { Padre } from 'src/app/Entidad/Padre';
import { ServiceHijoService } from 'src/app/Service/Hijo/service-hijo.service';
import { ServicePadreService } from 'src/app/Service/Padre/service-padre.service';

@Component({
  selector: 'app-editar-hijo',
  templateUrl: './editar-hijo.component.html',
  styleUrls: ['./editar-hijo.component.css']
})
export class EditarHijoComponent implements OnInit{
  constructor(private router : Router, private serviceH : ServiceHijoService, private serviceP : ServicePadreService){}
  padre !: Padre[];


    ngOnInit(): void {
      this.llenarPadre();
      this.buscar();
    }

    llenarPadre(){
      this.serviceP.listarC().subscribe(data=>{
        this.padre = data;
      });
    }

    hijo : Hijo = new Hijo();

    buscar(){
      let id = localStorage.getItem("id");
      this.hijo.idHijo = Number(id);
      this.serviceH.buscarH(this.hijo).subscribe(data=>{
        this.hijo = data;
      });
    }

  editar(){
    console.log("Se edito un Hijo -> "+JSON.stringify(this.hijo));
    this.serviceH.editarH(this.hijo).subscribe(data=>{
      alert("Se edito el Hijo de: "+this.hijo.padre.nombre);
      this.router.navigate(["listarHijo"]);
    });

  }
}
