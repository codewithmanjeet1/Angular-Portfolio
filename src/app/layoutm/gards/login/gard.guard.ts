import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const gardGuard: CanActivateFn = (route, state) => {
  return true;

  // const route = inject(Router);

};
