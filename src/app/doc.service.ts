import { Injectable } from '@angular/core';
import { Doc } from '../doc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private docJsonFile = 'assets/docs-list.json';

  constructor(private http: HttpClient) { }

  getDocs(): Observable<Doc[]> {
    return this.http.get<Doc[]>(this.docJsonFile)
      .pipe(
        tap(_ => this.log('fetched documents')),
        catchError(this.handleError<Doc[]>('getDocs', []))
      );
  }

  getDocumentSource(path: string): string {
    return './assets/' + path + '.md';
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`DocService: ${message}`);
  }
}
