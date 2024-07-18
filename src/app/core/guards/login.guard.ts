import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if (sessionStorage.getItem("userId")) {
    return true
  }
  return false;
};
