import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/Cliente';
import { interval } from 'rxjs';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  constructor(private clienteService: ClientesService) {}
  clientes: any[] = [];
  formulario: any;
  tituloFormulario: string = '';
  ngOnInit(): void {
    this.constroiForm();
    interval(1000).subscribe(() => {
      this.carregaTabela();
    });
  }

  carregaTabela() {
    this.clienteService.listar().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Erro ao obter clientes', error);
      }
    );
  }

  constroiForm() {
    this.tituloFormulario = 'Novo Carro';
    this.formulario = new FormGroup({
      cpf: new FormControl(null),
      nome: new FormControl(null),
      email: new FormControl(null),
      telefone: new FormControl(null),
    });
  }

  remover(id: number) {
    this.clienteService.remover(id).subscribe((result) => {
      alert('Cliente desativado com sucesso.');
    });
  }

  reset() {
    this.formulario.reset();
  }

  enviarFormulario(): void {
    const cliente: Cliente = this.formulario.value;
    this.clienteService.cadastrar(cliente).subscribe((result) => {
      alert('Cliente inserido com sucesso.');
      this.reset();
    });
  }
}
