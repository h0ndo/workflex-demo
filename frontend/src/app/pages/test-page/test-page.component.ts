import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { TestItemViewModel } from '@business-lib/test/models/test-item.view-model';
import { TestPageDataService } from '@business-lib/test/services/test-page-data.service';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.scss',
})
export class TestPageComponent {
  private readonly dataService = inject(TestPageDataService);
  readonly items$: Observable<TestItemViewModel[]> = this.dataService.getItems$();
}
