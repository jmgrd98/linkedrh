import { ToastComponent } from './../components/toast/toast.component';
import { ApiService } from 'src/app/services/api.service';
import { LoadingComponent } from './../components/header//loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../components/header/header.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { ProfileSummaryComponent } from '../components/profile-summary/profile-summary.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  providers: [ApiService],
  declarations: [
    HomePage,
    HeaderComponent,
    AccordionComponent,
    ProfileSummaryComponent,
    LoadingComponent,
    ToastComponent,
  ]
})
export class HomePageModule {}
