import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  // @Input() randomUser: any;

  users: any = [];
  sections: any = [];
  firstUser: any;
  randomUser:any

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
     this.randomUser = JSON.parse(localStorage.getItem('user'));
     console.log(this.randomUser.email);
    }
    
  }

  // formatDate(dateString) {
  //   const date = new Date(dateString);
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const year = date.getFullYear().toString();
  //   return `${day}/${month}/${year}`;
  // }

