import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss'],
})
export class ProfileSummaryComponent  implements OnInit {

  user: any;
  sections: any = [];

  constructor(private apiService: ApiService) {
    this.getUser();
  }

  ngOnInit() {}

  getUser() {
    this.apiService.getRandomUserObject().subscribe(user => {
      this.user = user;
    })
    return this.sections.push(this.user);
  }

}
