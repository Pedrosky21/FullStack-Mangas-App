import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangasPagesComponent } from './mangas-pages.component';

describe('MangasPagesComponent', () => {
  let component: MangasPagesComponent;
  let fixture: ComponentFixture<MangasPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MangasPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangasPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
