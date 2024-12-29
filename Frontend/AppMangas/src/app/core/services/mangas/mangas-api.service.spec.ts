import { TestBed } from '@angular/core/testing';

import { MangasApiService } from './mangas-api.service';

describe('MangasApiService', () => {
  let service: MangasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
