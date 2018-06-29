import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DataEntrySummaryPage} from "../data-entry-summary/data-entry-summary";
import {DataEntryVehiclePage} from "../data-entry-vehicle/data-entry-vehicle";

/**
 * Generated class for the DataEntryPolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-data-entry-policy',
    templateUrl: 'data-entry-policy.html',
})
export class DataEntryPolicyPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DataEntryPolicyPage');
        this.goToDataEntrySummary = DataEntrySummaryPage;
    }

    _clientData = {
        Client_No: '5180001',
        First_Name: 'Cheng THAO',
        First_Name_Lao: 'ເຈັ່ງ ທ່າວ',
        Mobile: '02098000345',
        Email: 'ceeblajthoj@gmail.com'
    };

    _policyData = {
        Client_No: '',
        Policy_No: '',
        Bsn_Type: '',
        Status: '',
        M_Status: '',
        Prod_Code: '',
        Im_Code: '',
        Com: '',
        Inc_date: '',
        Inc_Time: '',
        Exp_Date: '',
        Exp_Time: '',
        Iss_Date: '',
        DUR: '',
        DUR_Unit: '',
        Curcy: 'LAK',
        Premium: '',
        Fee: '',
        VAT: '',
        Total_PRM: '',
        PVSN: '',
        CRE_DATE: Date(),
        CRE_USER: '',
        UPD_DATE: '',
        UPD_USER: '',
        ST: 'NEW',
        ST_C: 'Y',
        ST_O: ''
    };

    _vehicleList = [
        {
            policy_no: "AI101",
            plate_no: 25000,
            p_code: "Life Insurance"
        },
        {
            policy_no: "CF001",
            plate_no: 30000,
            p_code: "Food City"
        }
    ]

    goToDataEntrySummary: any;

    addNewVehicle() {
        this.navCtrl.push(DataEntryVehiclePage, {Policy_No: this._policyData.Policy_No, PVSN: this._policyData.PVSN});
    }
}
