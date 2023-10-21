import { catchError, tap } from 'rxjs/operators';
import { IForm } from './form-Interface';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import observable cuz backend returns assynchronous data
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class formServices {
  // this below link is the link to the back end
  private baseUrl = 'api/data';

  constructor(private http: HttpClient) {
    //without "private" http would be localized in the constructor and unavailable to the class
    // this console logs the BackData instantly.
    http.get(this.baseUrl).subscribe((response) => {
      console.log('baseUrl content:', response);
    });
  }

  private newItem(): IForm {
    return {
      id: 0,
      firstName: 'null',
      lastName: 'null',
      bodySize: 0,
      description: 'null',
    };
  }

  // -READ Data
  getData(): Observable<IForm[]> {
    return this.http
      .get<IForm[]>(this.baseUrl)
      .pipe(tap((response) => console.log(JSON.stringify(response))));
  }

  getDataById(id: number): Observable<IForm> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createItem(form: IForm): Observable<IForm> {
    form.id == null;
    return this.http.post<IForm>(this.baseUrl, form).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  updateItem(updatedItem: IForm) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<IForm[]>(
      `${this.baseUrl}/${updatedItem.id}`,
      updatedItem,
      { headers }
    );
  }

  deleteItemById(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<IForm>(`${this.baseUrl}/${id}`, { headers });
  }
}
