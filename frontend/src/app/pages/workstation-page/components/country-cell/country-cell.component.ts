import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-cell',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-cell.component.html',
  styleUrl: './country-cell.component.scss',
})
export class CountryCellComponent {
  @Input({ required: true }) country!: string;

  private readonly countryCodes: Record<string, string> = {
    Germany: 'de',
    'United States': 'us',
    Ukraine: 'ua',
    Belgium: 'be',
    Spain: 'es',
    Greece: 'gr',
    India: 'in',
  };

  get flagUrl(): string {
    const code = this.countryCodes[this.country] ?? 'un';
    return `https://flagcdn.com/${code}.svg`;
  }
}
