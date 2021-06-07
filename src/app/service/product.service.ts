import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:8080/datn/products';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http
      .get(`${this.url}/all`, { observe: 'body' })
      .pipe(catchError((err) => throwError(err)));
  }
  public getNew(): Observable<any> {
    return this.http
      .get(`${this.url}/new`, { observe: 'body' })
      .pipe(catchError((er) => throwError(er)));
  }

  public getSale(): Observable<any> {
    return this.http
      .get(`${this.url}/sale`, { observe: 'body' })
      .pipe(catchError((er) => throwError(er)));
  }
  // lấy chi tiết sản phẩm theo ID(chi tiết sản phẩm)
  public profindById(productId: number): Observable<any> {
    return this.http
      .get(`${this.url}/${productId}`, { observe: 'body' })
      .pipe(catchError((e) => throwError(e)));
  }
  //delete product
  public deletePro(productId: number): Observable<any>{
    return this.http
    .delete(`${this.url}/${productId}`, {observe: 'body'})
    .pipe(catchError((er) => throwError(er)));
  }
  // lấy sản phẩm thep Brands
  public getProductForBrand(brandID: number): Observable<any> {
    return this.http
      .get(`${this.url}/brands/${brandID}`, { observe: 'body' })
      .pipe(catchError((err) => throwError(err)));
  }

  // seach sản phẩm  trên trang người dùng nhập
  public seachAll(data: any): Observable<any> {
    const params = new HttpParams().set('name', data.seach);
    return this.http
      .get(`${this.url}/seach`, { observe: 'body', params })
      .pipe(catchError((err) => throwError(err)));
  }

  // loc san pham
  public getFind(data: any): Observable<any> {
    const params = new HttpParams()
      .set('productTypeId', data.productTypeId)
      .set('brandId', data.brandId);
    return this.http
      .get(`${this.url}/getfind`, { observe: 'body', params })
      .pipe(catchError((er) => throwError(er)));
  }

  public saveofupdate(data : any): Observable<any>{
    return this.http.post(`${this.url}`, data, {observe: 'body'}) //lenh post ma ko truyen data vao body ak
    .pipe(catchError((er)=> throwError(er)));
  }
}
