import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductinfoService {
  url = 'http://localhost:8080/datn/info';
  constructor(
    private http: HttpClient
  ) { }

  public saveofupdate(formData : any): Observable<any>{
    return this.http.post(`${this.url}`, formData)
    .pipe(catchError((er)=> throwError(er)));
  }




}
