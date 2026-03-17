import { DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, switchMap } from 'rxjs';

import { WorkstationSortKey, WorkstationViewModel } from '@business-lib/workstation/models/workstation.view-model';
import { WorkstationDataService } from '@business-lib/workstation/services/workstation-data.service';

@Component({
  selector: 'app-workstation-page',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './workstation-page.component.html',
  styleUrl: './workstation-page.component.scss',
})
export class WorkstationPageComponent {
  private readonly dataService = inject(WorkstationDataService);
  private readonly sortState$ = new BehaviorSubject<{ key: WorkstationSortKey; direction: 'asc' | 'desc' }>({
    key: 'employee',
    direction: 'asc',
  });

  readonly rows = toSignal(
    this.sortState$.pipe(switchMap((sort) => this.dataService.getAll$(sort.key, sort.direction))),
    { initialValue: [] as WorkstationViewModel[] },
  );

  sortKey: WorkstationSortKey = 'employee';
  ascending = true;

  sortBy(key: WorkstationSortKey): void {
    if (this.sortKey === key) {
      this.ascending = !this.ascending;
    } else {
      this.sortKey = key;
      this.ascending = true;
    }

    this.sortState$.next({
      key: this.sortKey,
      direction: this.ascending ? 'asc' : 'desc',
    });
  }

  riskLabel(risk: WorkstationViewModel['risk']): string {
    return risk === 'HIGH' ? 'High risk' : 'No risk';
  }

  riskIcon(risk: WorkstationViewModel['risk']): string {
    if (risk === 'HIGH') return 'assets/risk/red-risk.svg';
    if (risk === 'LOW') return 'assets/risk/yellow-risk.svg';
    return 'assets/risk/green-risk.svg';
  }

  riskClass(risk: WorkstationViewModel['risk']): string {
    if (risk === 'HIGH') return 'risk-high';
    if (risk === 'LOW') return 'risk-low';
    return 'risk-no';
  }
}
