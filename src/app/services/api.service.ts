import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, from, pipe } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public baseUrlFirstUser = 'http://localhost:3000/payload';
  public baseUrlRandomUser = 'https://randomuser.me/api';

  getFirstUser(): Observable<any> {
    return this.http.get<any[]>(this.baseUrlFirstUser).pipe(
      map(users => users[0])
    );
  }

  getFirstUserObject(): Observable<any> {
    return this.getFirstUser().pipe(
      map(response => response.results)
    );
  }

  getRandomUser(): Observable<any> {
    return this.http.get(this.baseUrlRandomUser);
  }

  getRandomUserObject(): Observable<any> {
    return this.getRandomUser().pipe(
      map(response => response.results)
    );

  }
}
