import { HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// @Injectable()

 // export class AuthInterceptor implements HttpInterceptor {

    // constructor(
      //  private router: Router
    // ) {}

   // intercept( req: HttpRequest<any>, next: HttpHandler ) {

       // const authToken = 'Prueba';

        // const authReq = req.clone({
          //  headers: req.headers.set('Authorization', authToken)
          // });

        // return next.handle(authReq).pipe(
          //  tap(
            //    ( error: any ) => {
              //      if ( error.status === 401 ) {
                //        this.router.navigate(['/login']);
                  //  }
           //     }
            // )
      //  );
   // }

 // }
