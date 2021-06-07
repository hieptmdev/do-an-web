import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public addCartDetail(cart: any): Observable<any> | null {
    return null;
  }

  public loadCartByUser(user: any): Observable<any> | null {
    return null;
  }
}
