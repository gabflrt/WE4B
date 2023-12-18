import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesRestosComponent } from './mes-restos.component';

describe('MesRestosComponent', () => {
  let component: MesRestosComponent;
  let fixture: ComponentFixture<MesRestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesRestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesRestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
