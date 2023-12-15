import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcreacompteComponent } from './formcreacompte.component';

describe('FormcreacompteComponent', () => {
  let component: FormcreacompteComponent;
  let fixture: ComponentFixture<FormcreacompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcreacompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcreacompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
