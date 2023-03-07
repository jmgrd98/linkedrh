import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  users: any = [];
  sections: any = [];
  firstUser: any;
  randomUser: any;

  constructor(private apiService: ApiService) {
    // const userString = localStorage.getItem('user');
    // if (userString) {
    //   this.user = JSON.parse(userString);
    // }
    // this.getFirstUser();
    this.getRandomUser();
  }

  ngOnInit() {}

  getFirstUser() {
    this.apiService.getFirstUser().subscribe(user => {
      this.firstUser = user;
      this.sections.push(this.firstUser);
      localStorage.setItem('user', JSON.stringify(this.firstUser));
    });
  }

  getRandomUser() {
    this.apiService.getRandomUserObject().subscribe(user => {
      this.randomUser = user;
      // this.users.push(this.randomUser);
      // console.log(this.users);
    })
  }
}
