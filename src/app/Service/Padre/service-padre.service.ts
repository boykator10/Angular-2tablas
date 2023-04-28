import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Padre } from 'src/app/Entidad/Padre';

@Injectable({
  providedIn: 'root'
})
export class ServicePadreService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:7080/api/Padre/'

  listarC() {
    return this.http.get<Padre[]>(this.url + 'listar');
  }

  buscarC(padre : Padre) {
    return this.http.post<Padre>(this.url + 'buscar', padre);
  }

guardarC(padre : Padre) {
    return this.http.post<Padre>(this.url + 'guardar', padre);
  }

  editarC(padre : Padre) {
    return this.http.post<Padre>(this.url + 'editar', padre);
  }

  eliminarC(padre : Padre) {
    return this.http.post<Padre>(this.url + 'eliminar', padre);
  }



}
