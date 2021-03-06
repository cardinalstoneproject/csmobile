import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConstantProvider provider.

  Due to my lack of understanding of TypeScript
  I created this service to house constants
  Please pardon me. I would have used Structs to 
  implement this class. If you are better off than 
  me in TypeScript please change this class to an 
  object that does not need to be instantiated for a 
  better performance - Olaleye Osunsanya

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantProvider {

public baseURL = "https://restserver.cardinalstone.com/public/index.php/api/";
public findCustomerByName = this.baseURL + 'findCustomerByName';
public loginLoadingMessage = "Loading Please Wait...";
public toastMessagePasswordMismatch = "Username and Password do not match!";
public toastMessageNetworkError = "Network error, please connect to a network!";
public toastMessageGeneral = "Something went wrong, please try again later!";
public toastDuration = 5000;
public toastPosition = "top";

  constructor(
    public http: Http,
    private toastController: ToastController
  ) {
    console.log('Hello ConstantProvider Provider');
  }

  /**
   * Gets the toast error message
   * 
   * @param status Response error status
   */
  getToastMessage(message: string){
    let toaster = this.toastController.create({
      message: message,
      duration: this.toastDuration,
      position: this.toastPosition
    });
    toaster.present();
  }
  

}
