import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  @Input() randomUser: any;

  users: any = [];
  sections: any = [];
  firstUser: any;

  constructor(private apiService: ApiService) {
    // const userString = localStorage.getItem('user');
    // if (userString) {
    //   this.user = JSON.parse(userString);
    // }
    // this.getFirstUser();
    this.getRandomUser();
  }

  ngOnInit() {
    // console.log(this.randomUser)
  }

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
      console.log(this.randomUser);
    })
  }

  // formatDate(dateString) {
  //   const date = new Date(dateString);
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const year = date.getFullYear().toString();
  //   return `${day}/${month}/${year}`;
  // }

  
}
