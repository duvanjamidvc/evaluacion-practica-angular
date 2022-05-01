/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from '@faker-js/faker';
import { ListarPlantaComponent } from './listar-planta.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantasRestService } from '../services/plantas-rest.service';
import { Planta } from '../classes/planta';
import { PlantaRestServiceMock } from '../../../../testing/mocks/plantas-rest.service.mock';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        { provide: PlantasRestService, useClass: PlantaRestServiceMock }
      ],
      declarations: [ListarPlantaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;

    for (let x = 1; x <= 3; ++x) {
      component.plantas.push(
        new Planta(x,
          faker.name.findName(),
          faker.name.findName(),
          x % 2 == 0 ? 'Exterior' : 'Interior',
          faker.datatype.number(),
          faker.name.findName(),
          faker.name.findName()
        ));
    }

    fixture.detectChanges();
    debug = fixture.debugElement;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    expect(component).toBeTruthy();
    const table = debug.queryAll(By.css('table'));
    const numTables: number = table.length;
    expect(numTables).toEqual(1)
  });
  it('should have a table with header', () => {
    expect(component).toBeTruthy();
    const head = debug.queryAll(By.css('table>thead>tr'));
    const numHeads: number = head.length;
    expect(numHeads).toEqual(1)
  });

  it('should have a table with ${component.plantas.length} Rows', () => {
    expect(component).toBeTruthy();
    const rows = debug.queryAll(By.css('table>tbody>tr'));
    const numRows: number = rows.length;
    expect(numRows).toEqual(component.plantas.length)
  });



});
