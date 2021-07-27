import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/datn/users';
  constructor(
    private http: HttpClient
  ) { }

  public getAllUser(): Observable<any>{
    return this.http.get(`${this.url}/all`,{observe: "body"})
    .pipe(catchError(err => throwError(err)));
  }
  public addUser(data: any): Observable<any> {
    return this.http
      .post(`${this.url}`, data, { observe: 'body' })
      .pipe(catchError((e) => throwError(e)));
  }

  public deleteUser(id: any){
    return this.http.delete(`${this.url}/${id}`,{observe:"body"})
    .pipe(catchError((e)=> throwError(e)))
  }
  public getById(id: number): Observable<any> {
    return this.http
      .get(`${this.url}/${id}`, { observe: 'body' })
      .pipe(catchError((e) => throwError(e)));
  }
  public selectByCode(code : any): Observable<any>{
    return this.http.get(`${this.url}/select-user-by-code/${code}`,{observe:'body'})
    .pipe(catchError((e) => throwError(e)));
  }

  public searchByName(name : any): Observable<any>{
    return this.http.post(`${this.url}/seach` , name,{observe : 'body'})
    .pipe(catchError((err)=> throwError(err)))
  }

}
