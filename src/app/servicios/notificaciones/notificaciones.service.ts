import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor() { }

  mSwal({ titulo, mensaje, tipo }: { titulo: string; mensaje: string; tipo: any; }) {
    swal.fire({
      // title: titulo,
      // text: mensaje,
      // type: tipo,
     // background: 'rgba(0, 0, 0, 0.96)'
    });
  }
}
