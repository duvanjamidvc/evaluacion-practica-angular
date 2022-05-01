import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planta } from '../classes/planta';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlantasRestService {

  constructor(private http: HttpClient) { }

  /**
   *  Metodo para obtener el listado de plantas por http:get
   * @returns  Observable<Planta[]> con listado de plantas
   */
  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(environment.backendUrl);
  }

}
