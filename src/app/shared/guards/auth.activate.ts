import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: "root"
})

export class AuthActivate implements CanActivate{
    constructor(private authService: AuthService, private router: Router){

    }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user$.pipe(
            take(1),
            map(user => {
                const loginRequired = route.data['loginRequired'];
                console.log(this.authService.isLoggedIn);
        
                if(loginRequired === undefined || !!user === loginRequired) {return true}
                console.log(this.authService.isLoggedIn);
                if(loginRequired === false && this.authService.isLoggedIn === true) {
                    return this.router.createUrlTree(['/ads'])
                }
                return !!user ? 
                this.router.createUrlTree(['/ads']) :
                this.router.createUrlTree(['/login']);
                
            })
        )
        
        
        
    }

}