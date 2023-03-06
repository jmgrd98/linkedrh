import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  // template: `
  // <div *ngIf="user">
  //     <h2>{{ user.name.first }} {{ user.name.last }}</h2>
  //     <p>{{ user.email }}</p>
  //     <img [src]="user.picture.large" [alt]="user.name.first">
  //   </div>
  //   <button (click)="getRandomUser()">Get random user</button>
  // `,
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  sections: any = [];
  user: any;

  constructor(private apiService: ApiService) {
    this.getFirstUser();
  }

  ngOnInit() {}

  getFirstUser() {
    this.apiService.getFirstUser().subscribe(user => {
      this.user = user;
      this.sections.push(this.user);
    });
  }

  getRandomUser() {
    this.apiService.getRandomUserObject().subscribe(user => {
      this.user = user;
    })
    return this.sections.push(this.user);
  }
}
