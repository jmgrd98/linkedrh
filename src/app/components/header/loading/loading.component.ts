import { ToastComponent } from './../../toast/toast.component';
import { ApiService } from 'src/app/services/api.service';
import {Component, Input} from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.component.html',
})
export class LoadingComponent {

  @Input() randomUser: any;

  users: any = [];
  sections: any = [];

  constructor(
    private loadingCtrl: LoadingController,
    public apiService: ApiService,
    ) {}

    getRandomUser() {
      this.apiService.getRandomUserObject().subscribe(user => {
        this.users.push = user;
      })
    }

  async refresh() {
    const loading = await this.loadingCtrl.create({
      message: 'Atualizando o aplicativo em 5 segundos...',
      duration: 5000,
    });
    await loading.present();

    setTimeout(() => {
      const lengthBefore = this.users.length;
      location.reload();
      if (this.users.length > lengthBefore) {
        this.getRandomUser();
      }
    }, loading.duration)

    localStorage.removeItem('firstUser');
    this.getRandomUser();

  }
}
