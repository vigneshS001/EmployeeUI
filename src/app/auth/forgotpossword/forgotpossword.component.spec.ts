import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotposswordComponent } from './forgotpossword.component';

describe('ForgotposswordComponent', () => {
  let component: ForgotposswordComponent;
  let fixture: ComponentFixture<ForgotposswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotposswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotposswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
