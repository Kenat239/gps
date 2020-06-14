import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  nombre: String;
  usuario: Usuario;
  menu: any[] = [];

  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.usuario = this._usuarioService.usuario;
   // this.nombre = this.usuario.nombre + ' ' + this.usuario.apellidoP + ' ' + this.usuario.apellidoM;
    this.cargarMenu();
   }

  ngOnInit() {
  }

  verPerfil() {
    console.log('Le diste click en perfil');
  }

  verConfiguraciones() {
    console.log('Le diste click en configuraciones');
  }

  cerrarSesion() {
    this._usuarioService.logout();
  }

  cargarMenu() {
    this.menu = this._usuarioService.menu;
    // console.log(JSON.parse(this.menu[1].submenu));
  }

}
