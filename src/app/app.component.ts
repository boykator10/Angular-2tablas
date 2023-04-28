import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudPadre';

  constructor(private router : Router){}

  listarP(){
    this.router.navigate(['listarPadre']);
  }

  guardarP(){
    this.router.navigate(['guardarPadre']);
  }

  listarH(){
    this.router.navigate(['listarHijo']);
  }

  guardarH(){
    this.router.navigate(['guardarHijo']);
  }
}
