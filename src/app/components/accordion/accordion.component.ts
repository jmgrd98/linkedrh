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
  @Input() firstUser: any;
  users: any = [];
  sections: any = [];


  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.randomUser.dob.date = format(new Date(this.randomUser.dob.date), 'MM/dd/yyyy');
    this.getFirstUser();
  }

  getFirstUser() {
    this.apiService.getFirstUser().subscribe(user => {
      this.firstUser = user;
      this.sections = this.firstUser.sections;
    });
  }

}
