/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlantasRestService } from './plantas-rest.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('Service: PlantasRest', () => {
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlantasRestService, { provide: HttpClient, useValue: httpClientSpy }]
    });
  });

  it('should create', inject([PlantasRestService], (service: PlantasRestService) => {
    expect(service).toBeTruthy();
  }));
});
