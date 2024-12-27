import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(null);
    const directive = new HighlightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
