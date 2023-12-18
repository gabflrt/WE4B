import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormconnexionComponent } from './formconnexion.component';

describe('FormconnexionComponent', () => {
  let component: FormconnexionComponent;
  let fixture: ComponentFixture<FormconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormconnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
