import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    InicioComponent,
    UsuariosComponent
  ],
  imports: [
    PaginasRoutingModule
  ]
})
export class PaginasModule { }
