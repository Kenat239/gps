import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BACKEND } from '../../config/config';


@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {



  constructor(
    private http:HttpClient,
    private router: Router
  ) { }

  regOrganizacion(org:any) {
    const url = BACKEND + 'organizacion/registrar';

    return this.http.post( url, org, {observe: 'response'} );
  }

  GetOrganizacion(id: any) {
    const url = BACKEND + 'organizacion/obtener';

    return this.http.get( url, id);
  }

  UpOrganizacion(org:any) {
    const url = BACKEND + 'organizacion/actualizar';

    return this.http.put(url, org, {observe:'response'} );
  }
}
