import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';
import { Data } from '../../providers/datasource';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFireAuth } from 'angularfire2/auth';
 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name: string;
  email: string;
  password: string;
  repassword: string;
  registerForm: FormGroup;

  constructor(
    // private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController,
    public data: Data,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
       name:['', Validators.compose([
         Validators.required
         ])],
       email:['', Validators.compose([
         Validators.required,
         Validators.email
         ])],
       password:['', Validators.compose([
         Validators.required
         ])],
       repassword:['', Validators.compose([
         Validators.required
         ])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  ionViewDidEnter() {
    
  }
  register() {
    if (this.registerForm.valid) {
    let input = JSON.stringify({
      name: this.registerForm.controls['name'].value,
      email: this.registerForm.controls['email'].value,
      password: this.registerForm.controls['password'].value,
      repassword: this.registerForm.controls['repassword'].value
    });

    //log hasil inputnya (ini cuma buat testing)
    console.log(input);

    //masukin data ke database
    this.http.post(this.data.BASE_URL + "/register.php", input)
      .subscribe(data => {
        let response = data.json();

        // log responsenya (ini cuma buat testing)
        console.log(response);

        if (response.status == "200") {
          let alert = this.alertCtrl.create({
            title: 'Congrats!',
            subTitle: 'Your account has been registered',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.push(LoginPage);
        }
        else if (response.status == "409") {
          let alert = this.alertCtrl.create({
            title: 'This email has been used before',
            subTitle: 'Please use another email.',
            buttons: ['OK']
          });
          alert.present();
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Password did not match',
            subTitle: 'Please check your password or your confirm password',
            buttons: ['OK']
          });
          alert.present();
        }
    });
    }
  }
}
