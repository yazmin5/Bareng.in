import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, JsonpModule } from '@angular/http';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
  
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { LogoutPage } from '../pages/logout/logout';
import { GuidemePage } from '../pages/guideme/guideme';
import { HaltelocationPage } from '../pages/haltelocation/haltelocation';
import { ParkinghistoryPage } from '../pages/parkinghistory/parkinghistory';
import { AccountsettingsPage } from '../pages/accountsettings/accountsettings';
import { OpeningPage } from '../pages/opening/opening';
import { ParkirPage } from '../pages/parkir/parkir';
import { ForgetPage } from '../pages/forget/forget';
// import { firebaseConfig } from './firebaseconfig';
import { Data } from '../providers/datasource';
// import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    OpeningPage,
    LoginPage,
    RegisterPage,
    HomePage,
    GuidemePage,
    HaltelocationPage,
    ParkinghistoryPage,
    AccountsettingsPage,
    LogoutPage,
    ForgetPage,
    ParkirPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireAuthModule,
    // AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OpeningPage,
    LoginPage,
    RegisterPage,
    HomePage,
    GuidemePage,
    HaltelocationPage,
    ParkinghistoryPage,
    AccountsettingsPage,
    LogoutPage,
    ForgetPage,
    ParkirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
