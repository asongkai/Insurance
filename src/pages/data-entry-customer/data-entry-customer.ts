import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataEntryPolicyPage} from "../data-entry-policy/data-entry-policy";

/**
 * Generated class for the DataEntryCustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-entry-customer',
  templateUrl: 'data-entry-customer.html',
})
export class DataEntryCustomerPage {
    goToDataEntryPolicy: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataEntryCustomerPage');
    this.goToDataEntryPolicy = DataEntryPolicyPage;
  }

}
