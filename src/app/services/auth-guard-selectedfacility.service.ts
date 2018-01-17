import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardSelectedFacility implements CanActivate {
  constructor(private authService: AuthService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot){
    let isUserLoggedIn = this.authService.selectedASportsFacility();

    if(!isUserLoggedIn){
      this.router.navigate(['/login'])
    }
    return isUserLoggedIn;
  }
}
