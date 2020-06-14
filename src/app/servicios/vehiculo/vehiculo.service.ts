import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BACKEND } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(
    private http:HttpClient,
    public router:Router,
  ) { }

  registroveh(vehiculo:any){
    const url = BACKEND + 'vehiculo/registrar';

    return this.http.post(url, vehiculo, {observe: 'response'} );
  }

  GetVeh (id: any) {
    const url = BACKEND + 'vehiculo/obtener';


    return this.http.get ( url, id );
  }

  Putveh(vehiculo: any) {
    const url = BACKEND + 'vehiculo/actualizar';

    return this.http.put(url, vehiculo, {observe: 'response'} )
  }
}
