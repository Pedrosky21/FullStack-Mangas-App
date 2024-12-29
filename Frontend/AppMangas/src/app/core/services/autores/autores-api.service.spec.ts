import { TestBed } from '@angular/core/testing';

import { AutoresApiService } from './autores-api.service';

describe('AutoresApiService', () => {
  let service: AutoresApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
