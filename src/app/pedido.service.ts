import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  apiUrl = 'http://localhost:5000/Cliente';
  constructor(private http: HttpClient) {}

  cadastrar(cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/Cadastrar`;
    return this.http.post<Cliente>(url, cliente, httpOptions);
  }

  listar(): Observable<Cliente[]> {
    const url = `${this.apiUrl}/Listar`;
    return this.http.get<Cliente[]>(url);
  }

  remover(id: number): Observable<any> {
    const url = `${this.apiUrl}/Desativar/${id}`;
    return this.http.delete<Cliente>(url, httpOptions);
  }
}