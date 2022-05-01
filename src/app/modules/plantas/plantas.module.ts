import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPlantaComponent } from './listar-planta/listar-planta.component';
import { PlantasRestService } from './services/plantas-rest.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarPlantaComponent],
  exports: [ListarPlantaComponent],
  providers: [
    PlantasRestService
  ],
})
export class PlantasModule { }
