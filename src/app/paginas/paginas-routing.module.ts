import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, data: { titulo: 'Inicio'} },
  { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios'} },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
