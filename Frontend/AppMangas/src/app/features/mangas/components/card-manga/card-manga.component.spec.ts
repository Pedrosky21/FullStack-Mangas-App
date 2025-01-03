import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMangaComponent } from './card-manga.component';

describe('CardMangaComponent', () => {
  let component: CardMangaComponent;
  let fixture: ComponentFixture<CardMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMangaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
