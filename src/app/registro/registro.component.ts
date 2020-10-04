import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario/usuario.service';
import { Usuario } from '../interfaces/usuario';
import { NotificacionesService } from '../servicios/notificaciones/notificaciones.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  Reg: FormGroup;
  constructor(
    public US: UsuarioService,
    public NTS: NotificacionesService,
    private router: Router
  ) { }

  Same(campo1: string, campo2: string) {
    return (grupo: FormGroup) => {
      const pass1 = grupo.controls[campo1].value;
      const pass2 = grupo.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }
      return {
        same: true
      };
    };
  }

  ngOnInit(): void {
    this.Reg = new FormGroup ({
      nombre: new FormControl(null, Validators.required),
      apellidoP: new FormControl(null, Validators.required),
      apellidoM: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      password2: new FormControl(null, Validators.required),
    })
  }

  Register() {
    const reg: Usuario = (this.Reg.value);
    if (this.Reg.value.password !== this.Reg.value.password2 ) {
      return this.NTS.mSwal({titulo: '¡Adevertencia!', mensaje: 'las contraseñas deben ser iguales', tipo: 'warningy'});
    }
    this.US.registro(reg)
    .subscribe ( ( data: any ) => {
      console.log(data);
      this.router.navigate(['/login']);
    }, (mistake: Error) => {
      console.log(mistake);
    });
  }

}
