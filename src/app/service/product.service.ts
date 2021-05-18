import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url= 'http://localhost:8080/datn/products';


  constructor(private http : HttpClient) { }

  public getAll() : Observable<any>{
    return this.http.get(`${this.url}/all`, {observe: 'body'})
    .pipe(catchError(err => throwError(err)));
  }
  public getNew() : Observable<any>{
    return this.http.get(`${this.url}/new`, {observe :"body"})
    .pipe (catchError(er=> throwError(er)));
  }

  public getSale(): Observable<any>{
    return this.http.get(`${this.url}/sale`, {observe:"body"})
    .pipe(catchError(er=> throwError(er)))
  }
  //lấy chi tiết sản phẩm theo ID(chi tiết sản phẩm)
  public profindById(productId : number): Observable<any>{
    return this.http.get(`${this.url}/${productId}`, {observe :"body"})
    .pipe(catchError(e=> throwError(e)));
  }
  //lấy sản phẩm thep Brands
  public getProductForBrand(brandID : number): Observable<any>{
    return this.http.get(`${this.url}/brands/${brandID}`,{observe : "body"})
    .pipe(catchError(err => throwError(err)))
  }


}
