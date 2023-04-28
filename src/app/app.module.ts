import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPadreComponent } from './Componentes/Padre/listar-padre/listar-padre.component';
import { ListarHijoComponent } from './Componentes/Hijo/listar-hijo/listar-hijo.component';
import { EditarHijoComponent } from './Componentes/Hijo/editar-hijo/editar-hijo.component';
import { EliminarHijoComponent } from './Componentes/Hijo/eliminar-hijo/eliminar-hijo.component';
import { GuardarHijoComponent } from './Componentes/Hijo/guardar-hijo/guardar-hijo.component';
import { GuardarPadreComponent } from './Componentes/Padre/guardar-padre/guardar-padre.component';
import { EditarPadreComponent } from './Componentes/Padre/editar-padre/editar-padre.component';
import { EliminarPadreComponent } from './Componentes/Padre/eliminar-padre/eliminar-padre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicePadreService } from './Service/Padre/service-padre.service';
import { ServiceHijoService } from './Service/Hijo/service-hijo.service';


@NgModule({
  declarations: [
    AppComponent,
    ListarPadreComponent,
    ListarHijoComponent,
    EditarHijoComponent,
    EliminarHijoComponent,
    GuardarHijoComponent,
    GuardarPadreComponent,
    EditarPadreComponent,
    EliminarPadreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServicePadreService, ServiceHijoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
