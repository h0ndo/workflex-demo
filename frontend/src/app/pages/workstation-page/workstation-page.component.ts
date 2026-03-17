import { DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { WorkstationViewModel } from '@business-lib/workstation/models/workstation.view-model';
import { WorkstationDataService } from '@business-lib/workstation/services/workstation-data.service';

type SortKey = keyof Pick<WorkstationViewModel, 'employee' | 'originCountry' | 'destinationCountry' | 'startDate' | 'endDate' | 'officeDays' | 'risk'>;

@Component({
  selector: 'app-workstation-page',
  standalone: true,
  imports: [DatePipe, NgClass],
  templateUrl: './workstation-page.component.html',
  styleUrl: './workstation-page.component.scss',
})
export class WorkstationPageComponent {
  private readonly dataService = inject(WorkstationDataService);
  private readonly data = toSignal(this.dataService.getAll$(), { initialValue: [] as WorkstationViewModel[] });

  sortKey: SortKey = 'employee';
  ascending = true;

  get rows(): WorkstationViewModel[] {
    const key = this.sortKey;
    const sorted = [...this.data()].sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      if (av instanceof Date && bv instanceof Date) return av.getTime() - bv.getTime();
      if (typeof av === 'number' && typeof bv === 'number') return av - bv;
      return String(av).localeCompare(String(bv));
    });
    return this.ascending ? sorted : sorted.reverse();
  }

  sortBy(key: SortKey): void {
    if (this.sortKey === key) {
      this.ascending = !this.ascending;
      return;
    }
    this.sortKey = key;
    this.ascending = true;
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
