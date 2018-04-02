import { NovoPozoriste } from './../models/novo-pozoriste.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PozoristeService {
  private url = 'http://localhost:8080/pozoriste';

  insertPozoriste(pozoriste: NovoPozoriste): Observable<NovoPozoriste>{
    return this.http.post<NovoPozoriste>(this.url, pozoriste, httpOptions).pipe(
      catchError(this.handleError<NovoPozoriste>('insertPozoriste'))
    );
  }

  constructor(private http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
