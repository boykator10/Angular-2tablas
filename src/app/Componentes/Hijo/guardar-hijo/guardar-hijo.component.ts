import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hijo } from 'src/app/Entidad/Hijo';
import { Padre } from 'src/app/Entidad/Padre';
import { ServiceHijoService } from 'src/app/Service/Hijo/service-hijo.service';
import { ServicePadreService } from 'src/app/Service/Padre/service-padre.service';

@Component({
  selector: 'app-guardar-hijo',
  templateUrl: './guardar-hijo.component.html',
  styleUrls: ['./guardar-hijo.component.css']
})
export class GuardarHijoComponent implements OnInit{
constructor(private router : Router, private serviceH : ServiceHijoService, private serviceP : ServicePadreService){}
padre !: Padre[];


  ngOnInit(): void {
    this.llenarPadre();
  }

  llenarPadre(){
    this.serviceP.listarC().subscribe(data=>{
      this.padre = data;
    });
  }

  hijo : Hijo = new Hijo();
guardar(){
  console.log("Se Guardo un Hijo -> "+JSON.stringify(this.hijo));
  this.serviceH.guardarH(this.hijo).subscribe(data=>{
    alert("Se guardo el Hijo de: "+this.hijo.padre.nombre);
    this.router.navigate(["listarHijo"]);
  });

}



}
