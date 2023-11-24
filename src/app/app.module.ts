import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClientesService } from './clientes.service';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';

@NgModule({
  declarations: [AppComponent, ClientesComponent, ListaClientesComponent, PedidosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [HttpClientModule, ClientesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
