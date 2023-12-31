import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountinfosComponent } from './accountinfos.component';

describe('AccountinfosComponent', () => {
  let component: AccountinfosComponent;
  let fixture: ComponentFixture<AccountinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountinfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
