import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent  implements OnInit {

  // user: string;
  baseUrl: string = 'https://randomuser.me/api';

  constructor(private apiService: ApiService) {
    this.getUser();
  }

  ngOnInit() {}

  getUser() {
    return this.apiService.getRandomUser();
  }
}
