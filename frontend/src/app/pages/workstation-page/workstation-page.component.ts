import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, switchMap } from 'rxjs';

import { WorkstationSortKey, WorkstationViewModel } from '@business-lib/workstation/models/workstation.view-model';
import { WorkstationDataService } from '@business-lib/workstation/services/workstation-data.service';
import { CountryCellComponent } from './components/country-cell/country-cell.component';
import { DateCellComponent } from './components/date-cell/date-cell.component';
import { RiskCellComponent } from './components/risk-cell/risk-cell.component';

@Component({
  selector: 'app-workstation-page',
  standalone: true,
  imports: [CountryCellComponent, DateCellComponent, RiskCellComponent],
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
}
