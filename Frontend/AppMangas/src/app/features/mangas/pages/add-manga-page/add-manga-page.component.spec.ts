import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMangaPageComponent } from './add-manga-page.component';

describe('AddMangaPageComponent', () => {
  let component: AddMangaPageComponent;
  let fixture: ComponentFixture<AddMangaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMangaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMangaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
