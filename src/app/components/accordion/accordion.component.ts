import { ApiService } from './../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import {RandomUser} from "../../models/RandomUser";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  @Input() randomUser:any;
  @Input() firstUser: any;
  @Input() shouldSetFirstUser : boolean = true;
  users: any = [];
  sections: any = [];
  cardItems: any = [];
  cardItem0: any;
  cardItem1: any;
  cardItem2: any;
  cardItem3: any;
  cardItem4: any;
  companyAdmissionDate : any;
  email: any;
  birthDate: any;
  phone: any;


  constructor(private apiService: ApiService) {}


  ngOnInit() {
    this.randomUser.dob.date = format(new Date(this.randomUser.dob.date), 'MM/dd/yyyy');
    // this.shouldGetFirstUser() ? this.setFirstUser() : this.getRandomUser();
    this.setFirstUser();
  }

  setFirstUser() {
    this.apiService.getFirstUser().subscribe(user => {
      this.firstUser = user;
      this.sections = this.firstUser.sections;
      this.cardItem0 = this.firstUser.sections[0].cardItems[0];
      this.cardItem1 = this.firstUser.sections[1].cardItems[0];
      this.cardItem2 = this.firstUser.sections[2].cardItems[0];
      this.cardItem3 = this.firstUser.sections[3].cardItems[0];
      this.cardItem4 = this.firstUser.sections[4].cardItems[0];
      this.birthDate = this.firstUser.sections[0].cardItems[0].data.birthDate;
      this.phone = this.firstUser.sections[0].cardItems[0].data.cellphoneNumber;
      this.email = this.firstUser.sections[0].cardItems[0].data.email;
      this.companyAdmissionDate = this.firstUser.sections[0].cardItems[0].data.companyAdmissionDate;

      console.log(this.cardItem0.data)
    });
  }

}
