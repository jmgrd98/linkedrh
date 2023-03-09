import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-item1',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItem1Component  implements OnInit {

  @Input() randomUser:any;
  @Input() firstUser: any;
  @Input() shouldSetFirstUser : boolean = true;
  users: any = [];
  sections: any = [];
  cardItems: any = [];
  cardItem1: any;

  constructor() { }

  ngOnInit() {
    this.setCardItem();
  }

  setCardItem(){
    this.sections = this.firstUser.sections;
    this.cardItem1 = this.firstUser.sections[1].cardItems[0].data;

  }

}
