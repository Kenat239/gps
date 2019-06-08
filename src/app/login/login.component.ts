import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario/usuario.service';
import { Usuario } from '../interfaces/usuario';
import { Router } from '@angular/router';
import { NotificacionesService } from '../servicios/notificaciones/notificaciones.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService,
    public notS: NotificacionesService
  ) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl( null, [Validators.required, Validators.email]),
      password: new FormControl( null, Validators.required)
    });
  }

  ingresar() {
    const usuario: Usuario = ( this.login.value );

    this._usuarioService.login( usuario )
        .subscribe(( data: any ) => {
          const datos = data.body;
          this._usuarioService.guardarStorage( datos.id, datos.token, datos.usuario );
          this.router.navigate(['/inicio']);
        },
        ( error: any ) => {
          this.login.get('password').setValue('');
          this.notS.mSwal({ titulo: 'Error al ingresar', mensaje: error.error.mensaje, tipo: 'error' });
        });
  }

}
