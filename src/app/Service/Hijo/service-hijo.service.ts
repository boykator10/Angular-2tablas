import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hijo } from 'src/app/Entidad/Hijo';

@Injectable({
  providedIn: 'root'
})
export class ServiceHijoService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:7080/api/Hijo/'

  listarH() {
    return this.http.get<Hijo[]>(this.url + 'listar');
  }

  buscarH(hijo : Hijo) {
    return this.http.post<Hijo>(this.url + 'buscar', hijo);
  }

guardarH(hijo : Hijo) {
    return this.http.post<Hijo>(this.url + 'guardar', hijo);
  }

  editarH(hijo : Hijo) {
    return this.http.post<Hijo>(this.url + 'editar', hijo);
  }

  eliminarH(hijo : Hijo) {
    return this.http.post<Hijo>(this.url + 'eliminar', hijo);
  }

}
