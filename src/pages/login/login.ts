import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    version: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private appVersion: AppVersion) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    async getAppName() {
        const appName = await this.appVersion.getAppName();
        console.log(appName);
        alert(appName)
    }

    async getPackageName() {
        const packageName = await this.appVersion.getPackageName();
        console.log(packageName);
        alert(packageName)
    }

    async getVersionNumber() {
        const versionNumber = await this.appVersion.getVersionNumber();
        console.log(versionNumber);
        return versionNumber;
    }

    async getVersionCode() {
        const versionCode = await this.appVersion.getVersionCode();
        console.log(versionCode);
        alert(versionCode)
    }

}
