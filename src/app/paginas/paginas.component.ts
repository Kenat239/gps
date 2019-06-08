import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../servicios/websocket/websocket.service';

declare function init_plugins();

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.scss']
})
export class PaginasComponent implements OnInit {

  constructor(
    public wsService: WebsocketService
  ) { }

  ngOnInit() {
    init_plugins();
  }

}
