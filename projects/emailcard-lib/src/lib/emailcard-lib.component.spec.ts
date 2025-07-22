import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailcardLibComponent } from './emailcard-lib.component';

describe('EmailcardLibComponent', () => {
  let component: EmailcardLibComponent;
  let fixture: ComponentFixture<EmailcardLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailcardLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailcardLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
