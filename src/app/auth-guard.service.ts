import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.auth.isAuthenticated()
            .then( (authenticated: boolean) => {
            if(authenticated){
                return true;
            } else {
                this.router.navigate([''])
                return false;
            }
        })
    }
}

function authenticated(authenticated: any, arg1: (boolean: any) => true | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Function not implemented.');
}
