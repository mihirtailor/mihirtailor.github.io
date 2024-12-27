import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
  standalone: true,
})
export class CountryCodePipe implements PipeTransform {
  transform(value: unknown, country?: string): string {
    if (country === 'USA') {
      return '+1-' + value;
    }
    return '+91-' + value;
  }
}
