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
  cardItems: any = [];
  companyAdmissionDate : any;
  email: any;
  birthDate: any;
  phone: any;


  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.randomUser.dob.date = format(new Date(this.randomUser.dob.date), 'MM/dd/yyyy');
    // this.setFirstUser();
  }

  setFirstUser() {
    this.apiService.getFirstUser().subscribe(user => {
      this.firstUser = user;
      this.sections = this.firstUser.sections;
      // this.cardItems = this.firstUser.sections.cardItems;
      this.birthDate = this.firstUser.sections[0].cardItems[0].data.birthDate;
      this.phone = this.firstUser.sections[0].cardItems[0].data.cellphoneNumber;
      this.email = this.firstUser.sections[0].cardItems[0].data.email;
      this.companyAdmissionDate = this.firstUser.sections[0].cardItems[0].data.companyAdmissionDate;
    });
  }

}
