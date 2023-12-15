import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFullComponent } from './restaurant-full.component';

describe('RestaurantFullComponent', () => {
  let component: RestaurantFullComponent;
  let fixture: ComponentFixture<RestaurantFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
