import { TestBed } from '@angular/core/testing';

import { EmailcardLibService } from './emailcard-lib.service';

describe('EmailcardLibService', () => {
  let service: EmailcardLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailcardLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
