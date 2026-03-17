import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-cell',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date-cell.component.html',
})
export class DateCellComponent {
  @Input({ required: true }) date!: Date;
}
