import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ModalController} from "ionic-angular";
import {ViewModal} from "../view-modal/view-modal";

@Component({
  selector: 'page-view-payment',
  templateUrl: 'view-payment.html',
})
export class ViewPaymentPage {

  cardDetails: any;
  journeyDetails: any;
  passengerDetails: any;
  source: string;
  destination: string;
  departure: string;
  arrival: string;
  name: string;
  nic: string;
  phone: Number;
  email: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.cardDetails = navParams.get('cardDetails');
    this.journeyDetails = navParams.get('journeyDetails');
    this.passengerDetails = navParams.get('passengerDetails');


  }

  viewModal() {
    var source = this.source;

    let modal = this.modalCtrl.create(ViewModal, {
      'source': this.journeyDetails.source,
      'destination': this.journeyDetails.destination,
      'arrival': this.journeyDetails.arrivalTime,
      'departure': this.journeyDetails.departureTime,
      'name': this.passengerDetails.name,
      'nic': this.passengerDetails.nic,
      'phone': this.passengerDetails.phone,
      'email': this.passengerDetails.email,
      'title': 'Ishan'
    });

    return modal.present();
  }

}
