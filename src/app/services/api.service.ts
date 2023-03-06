import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from, pipe } from 'rxjs';
import { map } from 'rxjs/operators'


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

  getRandomUserObject(): Observable<any> {
    return this.getRandomUser().pipe(
      map(response => response.results[0])
    );
  }
}