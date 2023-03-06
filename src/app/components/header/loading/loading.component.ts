import { ApiService } from 'src/app/services/api.service';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.component.html',
})
export class LoadingComponent {

  sections: any = [];
  user: any;

  constructor(
    private loadingCtrl: LoadingController,
    public apiService: ApiService,
    ) {}

    getRandomUser() {
      this.apiService.getRandomUserObject().subscribe(user => {
        this.user = user;
      })
      return this.sections.push(this.user);
    }

  async refresh() {
    const loading = await this.loadingCtrl.create({
      message: 'Atualizando o aplicativo em 5 segundos...',
      duration: 5000,
    });
    await loading.present();

    setTimeout(() => {
      location.reload();
    }, loading.duration)

    this.getRandomUser();
  }
}