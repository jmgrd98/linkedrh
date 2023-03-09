import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent  implements OnInit {

  @Input() randomUser:any;
  @Input() firstUser: any;
  @Input() shouldSetFirstUser : boolean = true;
  users: any = [];
  sections: any = [];
  cardItems: any = [];
  cardItem0: any;
  companyAdmissionDate : any;
  email: any;
  birthDate: any;
  phone: any;

  constructor() { }

  ngOnInit() {
    this.setCardItem();
  }

  setCardItem(){
    this.sections = this.firstUser.sections;
    this.cardItem0 = this.firstUser.sections[0].cardItems[0].data;
  }

}
