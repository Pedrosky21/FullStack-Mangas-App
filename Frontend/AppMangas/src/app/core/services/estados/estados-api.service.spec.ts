import { TestBed } from '@angular/core/testing';

import { EstadosApiService } from './estados-api.service';

describe('EstadosApiService', () => {
  let service: EstadosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
