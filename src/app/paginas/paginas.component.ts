import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../servicios/websocket/websocket.service';
import { UsuarioService } from '../servicios/usuario/usuario.service';

declare function init_plugins();

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.scss']
})
export class PaginasComponent implements OnInit {

  constructor(
    public wsService: WebsocketService,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();

    this.wsService.conectar();

    this.wsService.listen('mensaje').subscribe((data: any) => {
      console.log(data);
    });

  }

}
