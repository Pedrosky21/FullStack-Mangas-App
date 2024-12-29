import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMangasComponent } from './form-mangas.component';

describe('FormMangasComponent', () => {
  let component: FormMangasComponent;
  let fixture: ComponentFixture<FormMangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMangasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
