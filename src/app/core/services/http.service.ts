import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string;

constructor(private http: HttpClient) {
  this.baseUrl = 'https://reqres.in/api';
}


  postMethod(url: string, params?: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, params);
  }

  getMethod(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${url}`);
  }

  deleteMethod(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}2/${url}`);
  }


}
