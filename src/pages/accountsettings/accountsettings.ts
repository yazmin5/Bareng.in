import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AccountsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accountsettings',
  templateUrl: 'accountsettings.html',
})
export class AccountsettingsPage {

  name: string;
  email: string;
  password: string;
  repassword: string;
  licensePlate: string;
  address: string;
  PhoneNumber: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountsettingsPage');
  }

  register(){
    if(this.name.length==0 || this.email.length==0 || this.password.length==0 || (this.repassword !== this.password)){
      alert("Please fill all fields");
    }
    else {
        this.navCtrl.setRoot(HomePage);
    }
  }

}
