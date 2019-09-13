import { Component} from "@angular/core";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {ToastController} from "ionic-angular";
import {CardDetails} from "../card-details/card-details";
import {Time} from "@angular/common";

@Component({
  selector: 'page-payment-details',
  templateUrl: 'payment-details.html',
})

export class PaymentDetails {

  seats: Array<{'seatNo': Number, 'IsSeatChecked': boolean, 'seatName': String, 'seatMobile': any, 'seatNIC': String}>;
  journeyDetails: {
    'source': string,
    'destination': string,
    'arrivalTime': string,
    'departureTime': string,
    'amount': Number
  };

  passengerDetails: {
    'name': String,
    'phone': String,
    'nic': String,
    'email': String
  };

  showSeats: boolean;
  icon: String;
  IsArrowDown: boolean;
  styleObj: {'transition': String};
  IsAgreed: boolean;
  name: String;
  phone: any;
  nic: String;
  email: String;
  IsEmptyName: boolean;
  IsEmptyPhone: boolean;
  IsSeatChecked: boolean;
  seatName: String;
  seatMobile: String;
  seatNIC: String;
  checkedSeatNo: Number;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.seats = [];
    this.showSeats = false;
    this.icon = 'arrow-dropdown';
    this.IsArrowDown = true;
    this.styleObj = {
      transition: '0.29s all linear'
    };
    this.IsAgreed = false;
    this.name = '';
    this.nic = '';
    this.email = '';
    this.IsEmptyName = false;
    this.IsEmptyPhone = false;
    this.IsSeatChecked = false;
    this.seatName = '';
    this.seatMobile = '';
    this.seatNIC = '';

    for (let i = 0; i < 3; i++) {
      this.seats.push({
        seatNo: i + 20,
        IsSeatChecked: false,
        seatName: '',
        seatMobile: '',
        seatNIC: ''
      });
    }

    this.journeyDetails = {
      source: 'Colombo',
      destination: 'Kandy',
      departureTime: '12:00 pm',
      arrivalTime: '15:00 pm',
      amount: 1000
    };
  }

  showMessage() {
    const show = this.alertCtrl.create({
      title: 'Message',
      message: 'hello everyone'
    });
    show.present();
  }

  changeIcon() {
    if (this.IsArrowDown) {
      this.IsArrowDown = false;
      this.icon = 'arrow-dropup';
    }
    else {
      this.IsArrowDown = true;
      this.icon = 'arrow-dropdown';
    }
  }

  agreeTermsandConditions() {
    this.IsAgreed = !this.IsAgreed;
  }

  validateName() {
    if (this.name === '') {
      this.IsEmptyName = true;
      const toast = this.toastCtrl.create({
        message: 'Please enter your name',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      });

      toast.present();
      return false;
    }
    else {
      this.IsEmptyName = false;
      return true;
    }
  }

  validateMobile() {
    if (this.phone === undefined) {
      this.IsEmptyPhone = true;
      const toast = this.toastCtrl.create({
        message: 'Please enter your phone number',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      });

      toast.present();
      return false;
    }
    else {
      this.IsEmptyPhone = false;
      return true;
    }

  }

  validateNIC() {
    if (this.nic.length !== 10) {
      const toast = this.toastCtrl.create({
        message: 'Your nic number should contain 10 characters',
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      });

      toast.present();
      return false;
    }
    else {
      if (this.nic.charAt(this.nic.length - 1) !== 'V') {
        return false;
      }
      else {
        return true;
      }
    }
  }

  checkSubmit() {
    var IsValidName = this.validateName();
    var IsValidMobile = this.validateMobile();
    var IsValidNIC = this.validateNIC();

    if (IsValidName && IsValidMobile && IsValidNIC) {
      this.passengerDetails = {
        name: this.name,
        phone: this.phone,
        nic: this.nic,
        email: this.email
      };

      var ctrl = this.navCtrl.push(CardDetails, {
        journeyDetails: this.journeyDetails,
        passengerDetails: this.passengerDetails
      });

    }
  }

  checkSeat(seatNo) {

    this.seats.filter(value => {
      if (value.seatNo === seatNo) {
        value.IsSeatChecked = !value.IsSeatChecked;

        if (value.IsSeatChecked) {
          value.seatName = this.name;
          value.seatMobile = this.phone;
          value.seatNIC = this.nic;
        }
        else {
          value.IsSeatChecked = false;
          value.seatName = '';
          value.seatMobile = '';
          value.seatNIC = '';
        }

      }
      else {
        value.IsSeatChecked = false;
        value.seatName = '';
        value.seatMobile = '';
        value.seatNIC = '';
      }
    });

  }


  displaySeatName(seatNo) {
    if (this.checkedSeatNo === seatNo) {
      return this.seatName;
    }
    else {
      return '';
    }
  }

  displaySeatMobile(seatNo) {
    if (this.checkedSeatNo === seatNo) {
      return this.seatMobile;
    }
    else {
      return '';
    }
  }

  displaySeatNIC(seatNo) {
    if (this.checkedSeatNo === seatNo) {
      return this.seatNIC;
    }
    else {
      return '';
    }
  }
}
