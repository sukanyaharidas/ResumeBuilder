import { TestBed } from '@angular/core/testing';

import { ResumeserviceService } from './resumeservice.service';

describe('ResumeserviceService', () => {
  let service: ResumeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
