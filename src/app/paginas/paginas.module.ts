import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { PaginasRoutingModule } from './paginas-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RadiosComponent } from './radios/radios.component';

@NgModule({
  declarations: [
    InicioComponent,
    UsuariosComponent,
    RadiosComponent
  ],
  imports: [
    PaginasRoutingModule
  ]
})
export class PaginasModule { }
