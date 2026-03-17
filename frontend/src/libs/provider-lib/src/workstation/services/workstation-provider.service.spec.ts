import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { WorkstationProviderService } from './workstation-provider.service';

describe('WorkstationProviderService', () => {
  let service: WorkstationProviderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(WorkstationProviderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should send backend sort query param', () => {
    service.getAll$('officeDays', 'asc').subscribe();

    const req = httpMock.expectOne((request) => request.url === 'http://localhost:8080/workflex/workstation');
    expect(req.request.params.get('sort')).toBe('officeDays,asc');
    req.flush([]);
  });
});
