import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  formulario: any;
  tituloFormulario: string = '';

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {
    this.tituloFormulario = 'Novo Carro';
    this.formulario = new FormGroup({
      cpf: new FormControl(null),
      nome: new FormControl(null),
      email: new FormControl(null),
      telefone: new FormControl(null),
    });
  }
  enviarFormulario(): void {
    const cliente: Cliente = this.formulario.value;
    this.clienteService.cadastrar(cliente).subscribe((result) => {
      alert('Cliente inserido com sucesso.');
    });
  }
}
