import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hijo } from 'src/app/Entidad/Hijo';
import { ServiceHijoService } from 'src/app/Service/Hijo/service-hijo.service';

@Component({
  selector: 'app-listar-hijo',
  templateUrl: './listar-hijo.component.html',
  styleUrls: ['./listar-hijo.component.css']
})
export class ListarHijoComponent implements OnInit{
constructor(private router:Router, private service : ServiceHijoService){}
hijo !: Hijo[];

  ngOnInit(): void {
    this.listar();
  }

  listar()
  {
    this.service.listarH().subscribe(data=>{
      this.hijo = data;
      console.log("hijo-> " +JSON.stringify(this.hijo));
    });
  }

  editar(hijo:Hijo){
    localStorage.setItem("id", hijo.idHijo.toString());
    this.router.navigate(["editarHijo"])

  }

  eliminar(hijo:Hijo){
    localStorage.setItem("id", hijo.idHijo.toString());
    this.router.navigate(["eliminarHijo"])

  }

}
