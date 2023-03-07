import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  randomUser:any;

  constructor(private apiService: ApiService) {
    this.getRandomUser();
  }

  ngOnInit() {

  }

  // getFirstUser() {
  //   this.apiService.getFirstUser().subscribe(user => {
  //     this.firstUser = user;
  //     this.sections.push(this.firstUser);
  //     localStorage.setItem('user', JSON.stringify(this.firstUser));
  //   });
  // }

  getRandomUser() {
    const storedUser = localStorage.getItem('users'[0]);
    if (storedUser) {
    this.randomUser = JSON.parse(storedUser);
    console.log(this.randomUser.email)
    }
  }

  // formatDate(dateString) {
  //   const date = new Date(dateString);
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const year = date.getFullYear().toString();
  //   return `${day}/${month}/${year}`;
  // }
}