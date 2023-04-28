import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Padre } from 'src/app/Entidad/Padre';
import { ServicePadreService } from 'src/app/Service/Padre/service-padre.service';

@Component({
  selector: 'app-guardar-padre',
  templateUrl: './guardar-padre.component.html',
  styleUrls: ['./guardar-padre.component.css']
})
export class GuardarPadreComponent implements OnInit{
  constructor(private router : Router, private service : ServicePadreService ){}


  ngOnInit(): void {

  }

padre : Padre = new Padre();



  guardar(){
    this.service.guardarC(this.padre).subscribe(data=>{
      alert("Se Guardo El Padre "+this.padre.nombre);
      this.router.navigate(["listarPadre"]);
    });
  }
}
