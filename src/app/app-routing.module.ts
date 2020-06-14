import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginasComponent } from './paginas/paginas.component';
import { LoginGuard } from './servicios/guards/login.guard';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'registro', component: RegistroComponent},
  {
    path: '',
    component: PaginasComponent,
   // canActivate: [ LoginGuard ],
    loadChildren: './paginas/paginas.module#PaginasModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
