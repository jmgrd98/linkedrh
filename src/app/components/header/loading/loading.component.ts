import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.component.html',
})
export class LoadingComponent {
  constructor(private loadingCtrl: LoadingController) {}

  async refresh() {
    const loading = await this.loadingCtrl.create({
      message: 'Atualizando o aplicativo em 5 segundos...',
      duration: 5000,
    });

    loading.present();
  }
}