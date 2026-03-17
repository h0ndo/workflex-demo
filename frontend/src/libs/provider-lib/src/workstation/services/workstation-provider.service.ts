import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkstationApiModel } from '../models/workstation-api.model';
import { WorkstationSortKey } from '@business-lib/workstation/models/workstation.view-model';

@Injectable({ providedIn: 'root' })
export class WorkstationProviderService {
  private readonly http = inject(HttpClient);

  getAll$(sortKey: WorkstationSortKey, direction: 'asc' | 'desc'): Observable<WorkstationApiModel[]> {
    const params = new HttpParams().set('sort', `${sortKey},${direction}`);
    return this.http.get<WorkstationApiModel[]>('http://localhost:8080/workflex/workstation', { params });
  }
}
