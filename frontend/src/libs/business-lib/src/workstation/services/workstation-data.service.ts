import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';

import { WorkstationSortKey, WorkstationViewModel } from '../models/workstation.view-model';
import { WorkstationProviderService } from '@provider-lib/workstation/services/workstation-provider.service';

@Injectable({ providedIn: 'root' })
export class WorkstationDataService {
  private readonly provider = inject(WorkstationProviderService);

  getAll$(sortKey: WorkstationSortKey, direction: 'asc' | 'desc'): Observable<WorkstationViewModel[]> {
    return this.provider.getAll$(sortKey, direction).pipe(
      map((items) =>
        items.map((item) => ({
          ...item,
          startDate: new Date(item.startDate),
          endDate: new Date(item.endDate),
        })),
      ),
    );
  }
}
