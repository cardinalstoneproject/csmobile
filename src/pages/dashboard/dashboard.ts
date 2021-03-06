import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  private customerData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.customerData = navParams.get('customerData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    console.log(this.customerData);
  }

  ionViewWillEnter(){
   //this.menuController.enable(true, "mycontent");
  }


}
