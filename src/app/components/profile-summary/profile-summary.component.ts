import { Observable } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent  implements OnInit {

  @Output() randomUserEmitter:EventEmitter<Object> = new EventEmitter();

  firstUser: any;
  users: any = [];
  sections: any = [];
  randomUser:any = [];

  constructor(private apiService: ApiService) {
    this.getRandomUser();
  }

  ngOnInit() {}

  // getFirstUser() {
  //   this.apiService.getFirstUserObject().subscribe(user => {
  //     // this.firstUser = user;
  //     // this.users.push(this.firstUser);
  //     // console.log(this.users);
  //   });
  //   // return this.users.push(this.firstUser);
  // }

  getRandomUser() {
    this.apiService.getRandomUserObject().subscribe(user => {
      this.randomUser = user;
      this.randomUserEmitter.emit(this.randomUser);
      console.log(this.randomUser);
    })
  }
}
