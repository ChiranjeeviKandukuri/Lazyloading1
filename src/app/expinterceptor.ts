import {Injectable} from '@angular/core'
import {HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
    } from '@angular/common/http'
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class Expinterceptor implements HttpInterceptor {
  
    intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<HttpEvent<any>> { 
      debugger;
      
        return next.handle(req).pipe(
            tap(
              event => {
                //logging the http response to browser's console in case of a success
                if (event instanceof HttpResponse) {
                  console.log("api call success :", event);
                }
              },
              error => {
                //logging the http response to browser's console in case of a failuer
                if (event instanceof HttpResponse) {                  
                  console.log("api call error :", event);
                }
              }
            )
          );
    }
}

