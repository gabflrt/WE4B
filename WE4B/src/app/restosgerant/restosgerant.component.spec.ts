import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestosgerantComponent } from './restosgerant.component';

describe('RestosgerantComponent', () => {
  let component: RestosgerantComponent;
  let fixture: ComponentFixture<RestosgerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestosgerantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestosgerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
