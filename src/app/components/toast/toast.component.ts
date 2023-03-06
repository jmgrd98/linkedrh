import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.component.html',
})
export class ToastComponent {
  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Aplicativo atualizado!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}