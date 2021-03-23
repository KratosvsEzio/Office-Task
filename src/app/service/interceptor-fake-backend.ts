import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    authToken = null;
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('Hello World');
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            return ok('hello');
        }

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }
    }
    
}