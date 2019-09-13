import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler, ModalController} from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { PaymentDetails} from "../pages/payment-details/payment-details";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CardDetails} from "../pages/card-details/card-details";
import {NgXCreditCardsModule} from 'ngx-credit-cards';
import {ViewPaymentPage} from "../pages/view-payment/view-payment";
import {ViewModal} from "../pages/view-modal/view-modal";
import {ViewModalModule} from "../pages/view-modal/view-modal-module";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PaymentDetails,
    CardDetails,
    ViewPaymentPage,
    ViewModal
  ],
  imports: [
    BrowserModule,
    NgXCreditCardsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    PaymentDetails,
    CardDetails,
    ViewPaymentPage,
    ViewModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
