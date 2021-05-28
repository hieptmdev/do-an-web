import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url= 'http://localhost:8080/datn/oders';

  constructor(private http: HttpClient,
              private jwtService: JwtHelperService) { }

  public getAlloderByUser(): Observable<any>{
    const token = localStorage.getItem('token');
    // @ts-ignore
    const userID = this.jwtService.decodeToken(token).userID;
    return this.http.get(`${this.url}/user/${userID}`, {observe: 'body'});
  }

}
