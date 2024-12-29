import { TestBed } from '@angular/core/testing';

import { GenerosApiService } from './generos-api.service';

describe('GenerosApiService', () => {
  let service: GenerosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
