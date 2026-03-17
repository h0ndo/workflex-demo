import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { firstValueFrom } from 'rxjs';

import { WorkstationDataService } from './workstation-data.service';
import { WorkstationProviderService } from '@provider-lib/workstation/services/workstation-provider.service';

describe('WorkstationDataService', () => {
  it('should map api date strings to Date objects', async () => {
    const providerMock = {
      getAll$: () =>
        of([
          {
            workstationId: 'w1',
            employee: 'Steffen Jacobs',
            originCountry: 'Germany',
            destinationCountry: 'United States',
            startDate: '2024-01-02',
            endDate: '2024-12-31',
            officeDays: 65,
            risk: 'HIGH' as const,
          },
        ]),
    };

    TestBed.configureTestingModule({
      providers: [
        WorkstationDataService,
        { provide: WorkstationProviderService, useValue: providerMock },
      ],
    });

    const service = TestBed.inject(WorkstationDataService);

    const rows = await firstValueFrom(service.getAll$('employee', 'asc'));
    expect(rows[0]!.startDate).toBeInstanceOf(Date);
    expect(rows[0]!.endDate).toBeInstanceOf(Date);
  });
});
