import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';

@Injectable()
export class FanAdminAuthGuard implements CanActivate{
  tokenPayload;

  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      this.tokenPayload = jwt_decode(sessionStorage.getItem(TOKEN_KEY));
      if(this.tokenPayload.scopes[0].authority === "FANZONA_ADMIN"){
        return true;
      }
      else{
        return false;
      }

  }
}
