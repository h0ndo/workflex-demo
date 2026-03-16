import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { TestProviderService } from '@provider-lib/test/services/test-provider.service';

import { TestItemViewModel } from '../models/test-item.view-model';

@Injectable({ providedIn: 'root' })
export class TestPageDataService {
  private readonly provider = inject(TestProviderService);

  getItems$(): Observable<TestItemViewModel[]> {
    return this.provider.getItems$().pipe(
      map((items) =>
        items
          .filter((item) => item.name.trim().length > 0)
          .map((item) => ({
            id: item.id,
            label: item.name.trim(),
            createdAt: new Date(item.createdAt),
          }))
      )
    );
  }
}
