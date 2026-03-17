import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-risk-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk-cell.component.html',
  styleUrl: './risk-cell.component.scss',
})
export class RiskCellComponent {
  @Input({ required: true }) risk!: 'HIGH' | 'LOW' | 'NO';

  get label(): string {
    return this.risk === 'HIGH' ? 'High risk' : 'No risk';
  }

  get iconPath(): string {
    if (this.risk === 'HIGH') return 'assets/risk/red-risk.svg';
    if (this.risk === 'LOW') return 'assets/risk/yellow-risk.svg';
    return 'assets/risk/green-risk.svg';
  }
}
