import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  constructor(
    // Angular Modules
    private http: HttpClient
  ) {

  }

    //******************Handling API calls******************************/
    getData(url:any) {
      return this.http
        .get(url)
        .pipe(catchError((error) => this._handleError(error)));
    }

    private _handleError(err: HttpErrorResponse | any): Observable<any> {
      const errorMsg = err.message || 'Error: Unable to complete request.';
      return ObservableThrowError(errorMsg);
    }
}
