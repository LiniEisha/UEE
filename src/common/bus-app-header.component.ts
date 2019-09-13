import {Component, Input} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector:'bus-app-header',
  template:`<ion-header>
            <ion-navbar>
              <button menuToggle *ngIf="!item">
                <ion-icon name="menu"></ion-icon>
              </button>
              <ion-title>
                <img src="../../assets/imgs/sltb_logo.png" height="51" width="103"/>
                <span text-center padding-left="90px">
                SLTB EXPRESS
              </span>
              </ion-title>
            </ion-navbar>
          </ion-header>`
})
export class BusAppHeaderComponent {
  item: any;
  constructor(public navPrms: NavParams){
    this.item = navPrms.get('title');
  }
}
