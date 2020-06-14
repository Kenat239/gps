import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BACKEND } from '../../config/config';
import { Usuario } from '../../interfaces/usuario';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;
  menu: any[] = [];
  id: string;

  constructor(
    private socket: Socket,
    public http: HttpClient,
    public router: Router
  ) { this.cargarStorage(); }

  login( usuario: Usuario ) {
    const url = BACKEND + '/usuario/login';

    return this.http.post<Usuario>( url, usuario, { observe: 'response'} );
  }

  registro( usuario: Usuario) {
    const url = BACKEND + '/usuario/registrar';

    return this.http.post <Usuario> (url, usuario, {observe: 'response'} );
  }

  obtenerinfo(id: any) {
    const url = BACKEND + '/usuario/obtener';

    return this.http.get(url, id )
  }

  actualizar (usuario:Usuario) {
    const url = BACKEND + '/actualizar';

    return this.http.put(url, usuario, {observe: 'response'} );
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');

    this.socket.disconnect();

    this.router.navigate(['/login']);
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  guardarStorage(id: string, token: string, usuario: Usuario, menu: any ) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('menu', JSON.stringify(menu));

    this.id = id;
    this.usuario = usuario;
    this.menu = menu;
    this.token = token;
  }

  actualizarStorage(menu: string) {
    localStorage.setItem('menu', JSON.stringify(menu));
  }

  cargarStorage() {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.menu = JSON.parse(localStorage.getItem('menu') );
    } else {
      this.token = '';
      this.id = '';
      this.usuario = null;
      this.menu = null;
    }
  }
}


