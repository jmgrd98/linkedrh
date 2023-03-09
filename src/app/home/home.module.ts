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
import {CardItemComponent} from "../components/accordion/card-item/card-item.component";
import {CardItem1Component} from "../components/accordion/card-item1/card-item.component";
import {CardItem2Component} from "../components/accordion/card-item2/card-item.component";
import {CardItem3Component} from "../components/accordion/card-item3/card-item.component";
import {CardItem4Component} from "../components/accordion/card-item4/card-item.component";


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
    CardItemComponent,
    CardItem1Component,
    CardItem2Component,
    CardItem3Component,
    CardItem4Component
  ]
})
export class HomePageModule {}
