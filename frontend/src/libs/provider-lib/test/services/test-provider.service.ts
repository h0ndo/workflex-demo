import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TestItemApiModel } from '../models/test-item.api-model';

@Injectable({ providedIn: 'root' })
export class TestProviderService {
  private readonly baseUrl = 'http://localhost:8080/api/tests';

  constructor(private readonly http: HttpClient) {}

  getItems$(): Observable<TestItemApiModel[]> {
    return this.http.get<TestItemApiModel[]>(this.baseUrl);
  }
}
