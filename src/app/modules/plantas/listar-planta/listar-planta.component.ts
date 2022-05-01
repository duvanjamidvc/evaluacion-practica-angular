import { Component, OnInit } from '@angular/core';
import { PlantasRestService } from '../services/plantas-rest.service';
import { Planta } from '../classes/planta';

@Component({
  selector: 'app-listar-planta',
  templateUrl: './listar-planta.component.html',
  styleUrls: ['./listar-planta.component.css']
})
export class ListarPlantaComponent implements OnInit {

  plantas: Planta[] = [];
  numPlantasInterior: number = 0;
  numPlantasExterior: number = 0;

  constructor(private plantaService: PlantasRestService) { }

  ngOnInit() {
    this.plantaService.getPlantas().subscribe(plantasList => {
      this.plantas = plantasList;
      this.contarTipoPlantas();
    });
  }

  private contarTipoPlantas() {
    this.numPlantasExterior = this.plantas.filter(planta => planta.tipo.toLowerCase() === 'exterior').length;
    this.numPlantasInterior = this.plantas.filter(planta => planta.tipo.toLowerCase() === 'interior').length;
  }
}
