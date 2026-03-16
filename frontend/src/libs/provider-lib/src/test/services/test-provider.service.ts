import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TestItemApiModel } from '../models/test-item.api-model';

@Injectable({ providedIn: 'root' })
export class TestProviderService {
  private readonly baseUrl = 'http://localhost:8080/api/tests';

  private readonly http = inject(HttpClient);

  getItems$(): Observable<TestItemApiModel[]> {
    return this.http.get<TestItemApiModel[]>(this.baseUrl);
  }
}
