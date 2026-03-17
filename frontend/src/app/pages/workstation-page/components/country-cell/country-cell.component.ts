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
    Germany: 'DE',
    'United States': 'US',
    Ukraine: 'UA',
    Belgium: 'BE',
    Spain: 'ES',
    Greece: 'GR',
    India: 'IN',
  };

  get flagEmoji(): string {
    const code = this.countryCodes[this.country] ?? 'UN';
    return this.toFlagEmoji(code);
  }

  private toFlagEmoji(countryCode: string): string {
    const normalized = countryCode.toUpperCase();
    const first = normalized.codePointAt(0);
    const second = normalized.codePointAt(1);

    if (first === undefined || second === undefined) {
      return '🏳️';
    }

    const base = 127397;
    return String.fromCodePoint(first + base, second + base);
  }
}
