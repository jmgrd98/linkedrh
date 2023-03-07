import { Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {createReducer, Store} from "@ngrx/store";
import {appReducer, IUserState} from "../../store/reducer";


@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent  implements OnInit {


  users: any = [];
  firstUser: any;
  randomUser:any;
  nome: any;
  lastName: any;

  constructor(private apiService: ApiService, private store: Store<{ app: IUserState }>) {
    // this.getRandomUser();
  }

  ngOnInit() {
    this.getRandomUser();
  }

  // getFirstUser() {
  //   this.apiService.getFirstUserObject().subscribe(user => {
  //     this.firstUser = user;
  //     this.users.push(this.firstUser);
  //     console.log(this.users);
  //   });
  //   // return this.users.push(this.firstUser);
  // }


  getRandomUser() {
    this.apiService.getRandomUserObject().subscribe(user => {
      this.randomUser = user;
      console.log(this.randomUser);
      console.log(this.randomUser[0].name.first);
      this.nome = this.randomUser[0].name.first;
      this.lastName = this.randomUser[0].name.last;
      this.users.push(this.randomUser);
      localStorage.setItem('users', JSON.stringify(this.users));

      const storedUser = localStorage.getItem('users'[0]);
      if (storedUser) {
      this.randomUser = JSON.parse(storedUser);
      console.log(this.randomUser);
    }}
    );
  }
}
