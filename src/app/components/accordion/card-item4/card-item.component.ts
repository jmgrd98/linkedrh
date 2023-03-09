import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-item4',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItem4Component  implements OnInit {

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

  constructor() { }

  ngOnInit() {
    this.setCardItem();
  }

  setCardItem(){
    this.sections = this.firstUser.sections;
    this.cardItem0 = this.firstUser.sections[0].cardItems[0];
    this.cardItem1 = this.firstUser.sections[1].cardItems[0];
    this.cardItem2 = this.firstUser.sections[2].cardItems[0];
    this.cardItem3 = this.firstUser.sections[3].cardItems[0];
    this.cardItem4 = this.firstUser.sections[4].cardItems[0];
  }

}
