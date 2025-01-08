import { CanActivateFn } from '@angular/router';
import { DataService } from './services/data.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const dataService = inject(DataService);
  if (!dataService.isAuthenticated()) {
    return false;
  }
  return true;
};
