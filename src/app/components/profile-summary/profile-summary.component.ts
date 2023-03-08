import {Observable} from 'rxjs';
import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ApiService} from 'src/app/services/api.service';
import {createReducer, Store} from "@ngrx/store";
import {appReducer, IUserState} from "../../store/reducer";


@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent implements OnInit {


  users: any = [];
  firstUser: any;
  randomUser: any;
  nome: any;
  lastName: any;
  sections: any = [];
  job: any;

  constructor(private apiService: ApiService, private store: Store<{ app: IUserState }>) {

  }

  ngOnInit() {
    this.setFirstUser();
    this.getRandomUser();
    // this.getFirstUser();
  }

  setFirstUser() {
    this.apiService.getFirstUser().subscribe(user => {
      this.firstUser = user;
      this.sections = this.firstUser.sections;
      localStorage.setItem('firstUser', JSON.stringify(this.firstUser));

      this.job = this.firstUser.sections[0].cardItems[0].data.jobName;
      this.nome = this.firstUser.sections[0].cardItems[0].data.employeeName;
    });
  }

  // getFirstUser(){
  //
  //   const storedUser = localStorage.getItem('firstUser');
  //   if (storedUser) {
  //     this.firstUser = JSON.parse(storedUser);
  //     console.log(this.firstUser);
  //   }
  //   this.job = this.firstUser.sections[0].cardItems[0].data.jobName;
  //   this.nome = this.firstUser.sections[0].cardItems[0].data.employeeName;
  // }


  getRandomUser() {
    this.apiService.getRandomUserObject().subscribe(user => {
        this.randomUser = user;
        console.log(this.randomUser);
        console.log(this.randomUser[0].name.first);
        // this.nome = this.randomUser[0].name.first;
        this.lastName = this.randomUser[0].name.last;
        this.users.push(this.randomUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        const storedUser = localStorage.getItem('users'[0]);
        if (storedUser) {
          this.randomUser = JSON.parse(storedUser);
          console.log(this.randomUser);
        }
      }
    );
  }
}
