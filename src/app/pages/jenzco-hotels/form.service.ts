import { tap } from 'rxjs/operators';
import { IForm } from './form-Interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import observable cuz backend returns assynchronous data
import { Observable } from 'rxjs';

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
      bodyMass: 0,
      description: 'null',
    };
  }

  // -READ (http.get)    get stuff
  getData(): Observable<IForm[]> {
    return this.http
      .get<IForm[]>(this.baseUrl)
      .pipe(tap((response) => console.log(JSON.stringify(response))));
  }
  //get the specific data of the list by its id.  this.http.get<any>(`${}/${}`)  <- that's a 'template literal' which specifies the link to pass into the fn
  getDataById(id: number): Observable<IForm> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
    // .pipe(tap(data => console.log('Specific item:' + data)
    // ))
  }

  updateItem(updatedItem: IForm) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); //specifies that the content will be in json format
    return this.http.put<IForm[]>(
      `${this.baseUrl}/${updatedItem.id}`,
      updatedItem,
      { headers }
    ); // remember `${}/${}` cone,dollar braces/dollar braces.   Also remember headers has to be in braces {headers}
  }

  createItem(savedItem: IForm) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); //specifies that the content will be in json format
    return this.http
      .post<IForm>(this.baseUrl, savedItem, { headers })
      .pipe(tap(() => console.log('updateItem: ' + savedItem.id)));
  }

  deleteItemById(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); //specifies that the content will be in json format
    return this.http.delete<IForm>(`${this.baseUrl}/${id}`, { headers });
  }
}
