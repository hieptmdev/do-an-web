import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'http://localhost:8080/datn/type'

  constructor(private http : HttpClient) { }

  public getCategory() : Observable<any>{
    return this.http.get(`${this.url}/all`,{observe : 'body'})
    .pipe(catchError(err => throwError(err)));
  }

  //Lấy sản phẩm theo Category
  public getProductForCategory(cateId :number ): Observable<any>{

    return this.http.get(`${this.url}/${cateId}`,{observe : "body"})
    .pipe(catchError(err => throwError(err)))

  }
}
