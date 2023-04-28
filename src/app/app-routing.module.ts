import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPadreComponent } from './Componentes/Padre/listar-padre/listar-padre.component';
import { ListarHijoComponent } from './Componentes/Hijo/listar-hijo/listar-hijo.component';
import { GuardarPadreComponent } from './Componentes/Padre/guardar-padre/guardar-padre.component';
import { EditarPadreComponent } from './Componentes/Padre/editar-padre/editar-padre.component';
import { EliminarPadreComponent } from './Componentes/Padre/eliminar-padre/eliminar-padre.component';
import { GuardarHijoComponent } from './Componentes/Hijo/guardar-hijo/guardar-hijo.component';
import { EditarHijoComponent } from './Componentes/Hijo/editar-hijo/editar-hijo.component';
import { EliminarHijoComponent } from './Componentes/Hijo/eliminar-hijo/eliminar-hijo.component';

const routes: Routes = [

  {path: 'listarPadre', component : ListarPadreComponent},
  {path: 'guardarPadre', component : GuardarPadreComponent},
  {path: 'editarPadre', component : EditarPadreComponent},
  {path: 'eliminarPadre', component : EliminarPadreComponent},

  {path: 'listarHijo', component : ListarHijoComponent},
  {path: 'guardarHijo', component : GuardarHijoComponent},
  {path: 'editarHijo', component : EditarHijoComponent},
  {path: 'eliminarHijo', component : EliminarHijoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
