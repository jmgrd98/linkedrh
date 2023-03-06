import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent  implements OnInit {

  firstUser: any;
  randomUser: any;
  sections: any = [];

  constructor(private apiService: ApiService) {
    this.getRandomUser();
  }

  ngOnInit() {}

  getFirstUser() {
    this.apiService.getFirstUserObject().subscribe(user => {
      this.firstUser = user;
      this.sections.push(this.firstUser);
    });
    return this.sections.push(this.firstUser);
  }

  getRandomUser() {
    this.apiService.getRandomUserObject().subscribe(user => {
      this.randomUser = user;
    })
    return this.sections.push(this.randomUser);
  }
}
