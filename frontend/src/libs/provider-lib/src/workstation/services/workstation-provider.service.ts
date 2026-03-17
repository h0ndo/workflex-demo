import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkstationApiModel } from '../models/workstation-api.model';

@Injectable({ providedIn: 'root' })
export class WorkstationProviderService {
  private readonly http = inject(HttpClient);

  getAll$(): Observable<WorkstationApiModel[]> {
    return this.http.get<WorkstationApiModel[]>('http://localhost:8080/workflex/workstation');
  }
}
