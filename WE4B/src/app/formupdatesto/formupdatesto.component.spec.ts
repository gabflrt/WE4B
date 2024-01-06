import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormupdatestoComponent } from './formupdatesto.component';

describe('FormupdatestoComponent', () => {
  let component: FormupdatestoComponent;
  let fixture: ComponentFixture<FormupdatestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormupdatestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormupdatestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
