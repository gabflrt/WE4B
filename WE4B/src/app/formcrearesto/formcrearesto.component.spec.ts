import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcrearestoComponent } from './formcrearesto.component';

describe('FormcrearestoComponent', () => {
  let component: FormcrearestoComponent;
  let fixture: ComponentFixture<FormcrearestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcrearestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcrearestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
