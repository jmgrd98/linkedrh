import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFirstUser(){
    let firstUser = 
  }

  getRandomUser() {
    let baseUrl = 'https://randomuser.me/api';
  }
}