
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProducrsService {
  private apiUrl = 'https://restaurant.stepprojects.ge/api/Products/GetAll';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // addProduct(Product: { name: string; email: string }): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, Product);
  // }
  // updateProduct(id: number, updateProduct: { name: string }): Observable<any> {
  //   return this.http.put<any>(this.apiUrl + '/' + id, updateProduct);
  // }
  // deleteProduct(id: number): Observable<void> {
  //   return this.http.delete<void>(this.apiUrl + '/' + id);
  // }



  private apisxvebi = 'https://restaurant.stepprojects.ge/api/Products/GetAll';


}
