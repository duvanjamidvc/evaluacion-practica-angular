import { Observable, of } from 'rxjs';
import { Planta } from '../../app/modules/plantas/classes/planta';


export class PlantaRestServiceMock {


  /**
   *  Metodo para obtener el listado de plantas por http:get
   * @returns  Observable<Planta[]> con listado de plantas
   */
  getPlantas(): Observable<Planta[]> {
    return of(<Planta[]>[
      {
        "id": 1,
        "nombre_comun": "Lengua de vaca",
        "nombre_cientifico": "Sansevieria Trifasciata",
        "tipo": "Interior",
        "altura_maxima": 140,
        "clima": "Templado, cálido",
        "sustrato_siembra": "Tierra orgánica con buen drenaje, arena, cascarilla de arroz"
      },
      {
        "id": 2,
        "nombre_comun": "Chachafruto",
        "nombre_cientifico": "Schefflera actinophylla",
        "tipo": "Exterior",
        "altura_maxima": 1000,
        "clima": "Todos",
        "sustrato_siembra": "Sustrato para huerto"
      },
      {
        "id": 3,
        "nombre_comun": "Espatifilo",
        "nombre_cientifico": "Spathiphyllum Wallasii",
        "tipo": "Interior",
        "altura_maxima": 65,
        "clima": "Templado, cálido",
        "sustrato_siembra": "Tierra orgánica"
      }]);
  }

}
