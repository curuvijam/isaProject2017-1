import { Rekvizit } from './models/rekvizit';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RekvizitService {
  private url = 'http://localhost:8080/rekviziti';


  getRekviziti(): Observable<Rekvizit[]>{
    return this.http.get<Rekvizit[]>(this.url);
  }

  insertRekvizit(rekvizit: Rekvizit): Observable<Rekvizit>{
    return this.http.post<Rekvizit>(this.url, rekvizit, httpOptions).pipe(
      catchError(this.handleError<Rekvizit>('insertRekvizit'))
    );
  }

  deleteRekvizit (rekvizit: Rekvizit | string): Observable<Rekvizit> {
    const id = typeof rekvizit === 'string' ? rekvizit : rekvizit.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Rekvizit>(url, httpOptions).pipe(
      catchError(this.handleError<Rekvizit>('deleteRekvizit'))
    );
  }

  constructor(
    private http: HttpClient
  ) { }


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
