import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private baseUrlFirstUser = 'https://localhost:3000/payload';
  private baseUrlRandomUser = 'https://randomuser.me/api';

  // getFirstUser(): Observable<string> {
  //   return this.http.get(this.baseUrlFirstUser);
  // }

  getRandomUser(): Observable<any> {
    return this.http.get(this.baseUrlRandomUser);
  }
}