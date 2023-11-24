import { Cliente } from './Cliente';

export class Pedido {
  id!: number;
  descricao!: string;
  cliente!: Cliente;
}
