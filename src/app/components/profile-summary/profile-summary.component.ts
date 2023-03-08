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
  firstName: any;
  lastName: any;
  sections: any = [];
  job: any;
  @Output() shouldSetFirstUser: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // this.shouldGetFirstUser() ? this.setFirstUser() : this.getRandomUser();
    this.setFirstUser();
    this.getRandomUser();
  }

  shouldGetFirstUser(): boolean {
    return this.shouldSetFirstUser = !this.shouldSetFirstUser;
  }

  setFirstUser() {
    this.apiService.getFirstUser().subscribe(user => {
      this.firstUser = user;
      this.sections = this.firstUser.sections;
      localStorage.setItem('firstUser', JSON.stringify(this.firstUser));
      this.job = this.firstUser.sections[0].cardItems[0].data.jobName;
      this.firstName = this.firstUser.sections[0].cardItems[0].data.employeeName;
    });
  }

  getRandomUser() {
    this.apiService.getRandomUserObject().subscribe(user => {
        this.randomUser = user;
        this.firstName = this.randomUser[0].name.first;
        this.lastName = this.randomUser[0].name.last;
        this.users.push(this.randomUser);
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    );
  }
}
