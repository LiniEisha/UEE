import {Component, Input} from "@angular/core";
import {NavController, ViewController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-view-modal',
  templateUrl: 'view-modal.html'
})

export class ViewModal {

  cardDetails: any;
  journeyDetails: any;
  passengerDetails: any;
  title: string;
  source: string;
  destination: string;
  departure: string;
  arrival: string;
  name: String;
  nic: String;
  phone: String;
  email: String;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.source = navParams.get('source');
    this.title = navParams.get('title');
    this.destination = navParams.get('destination');
    this.departure = navParams.get('departure');
    this.arrival = navParams.get('arrival');
    this.name = navParams.get('name');
    this.nic = navParams.get('nic');
    this.phone = navParams.get('phone');
    this.email = navParams.get('email');
  }


  dismissModal() {
    let data = [];
    this.viewCtrl.dismiss(data);
  }
}
