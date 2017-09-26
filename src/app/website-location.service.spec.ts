import { TestBed, inject } from '@angular/core/testing';

import { WebsiteLocationService } from './website-location.service';

describe('WebsiteLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsiteLocationService]
    });
  });

  it('should be created', inject([WebsiteLocationService], (service: WebsiteLocationService) => {
    expect(service).toBeTruthy();
  }));
});
