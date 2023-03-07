import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  @Input() randomUser:any;

  constructor(private apiService: ApiService) {

  }


  ngOnInit() {
    this.randomUser.dob.date = format(new Date(this.randomUser.dob.date), 'MM/dd/yyyy')
  }

  // getFirstUser() {
  //   this.apiService.getFirstUser().subscribe(user => {
  //     this.firstUser = user;
  //     this.sections.push(this.firstUser);
  //     localStorage.setItem('user', JSON.stringify(this.firstUser));
  //   });
  // }

  // getRandomUser() {
  //   const storedUser = localStorage.getItem('users'[0]);
  //   if (storedUser) {
  //   this.randomUser = JSON.parse(storedUser);
  //   console.log(this.randomUser.email)
  //   }
  //
  //   format()
  // }

}
