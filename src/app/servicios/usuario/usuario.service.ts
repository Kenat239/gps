import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BACKEND } from '../../config/config';
import { Usuario } from '../../interfaces/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;
  menu: any[] = [];
  id: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  login( usuario: Usuario ) {
    const url = BACKEND + '/login';

    return this.http.post<Usuario>( url, usuario, { observe: 'response'} );
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.id = id;
    this.usuario = usuario;
    this.token = token;
  }

  cargarStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.id = '';
      this.usuario = null;
    }
  }
}


