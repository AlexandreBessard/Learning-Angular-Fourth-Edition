import { inject } from '@angular/core';
import { CanActivateFn, CanLoadFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard:
  // Controls whether a route can be activated
  CanActivateFn |
  // Controls access to a route that loads a lazy-loaded module
  CanLoadFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // if true, app can navigate to the specified route.
  if (authService.isLoggedIn) { return true; }
  // Cancel navigation and redirects
  return router.parseUrl('/');
};
