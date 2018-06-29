import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the DataEntryVehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-data-entry-vehicle',
    templateUrl: 'data-entry-vehicle.html',
})
export class DataEntryVehiclePage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    }

    _vehicleData = {
        VEHID: '',
        P_Code: '',
        Policy_No: '',
        CERT_NO: '', 
        Bsn_Type: '',
        Status: '',
        M_Status: '',
        Inc_date: '',
        Inc_Time: '',
        Exp_Date: '',
        Exp_Time: '',
        Iss_date: '',
        ACC_DATE: '',
        DUR: '',
        D_UNIT: '',
        Premium: '',
        FEE: '',
        VAT: '',
        Total_PRM: '',
        Curcy: '',
        P_Type: '',
        VEHCAT: '',
        TRID: '',
        Mark: '',
        Chassis_No: '',
        Plate_No: '',
        Country: '',
        Age_Usage: '',
        Age_Usage_U: '',
        RED_STK_N1: '',
        RED_STK_R1: '',
        RED_STK_N2: '',
        RED_STK_R2: '',
        RED_STK_N3: '',
        RED_STK_R3: '',
        Bonus_Y: '',
        Bonus_YL: '',
        Red_Fleet: '',
        SP_Discount: '',
        PROMO: '',
        PROMO_ID: '',
        Surcharge: '',
        Udriver: '',
        PVSN: '',
        VVSN: '',
        EDT_T: '',
        EDT_NO: '',
        CL_Signa: '',
        CRE_DATE: '',
        CRE_USER: '',
        UPD_DATE: '',
        UPD_USER: '',
        AGL_Emp: '',
        AGENT_PG: '',
        SP_Claim: '',
        CMS: '',
        COM: '',
        USE_T: '',
        DISCOUNT_ID: '',
        CoverNote_No: '',
        Payment_By: '',
        SI_TPL_01: '',
        SI_TPL_02: '',
        SI_TPL_03: '',
        SI_DV_01: '',
        SI_DV_02: '',
        SI_OD_01: '',
        PM_SI: '',
        PM_SI_V: '',
        Flex_CV: '',
        SC_ID: '',
        SC_T: '',
        SC_PC: '',
        SC_I: '',
        SI_TPL_Max: '',
        SI_TPL_Basi: '',
        SI_H: '',
        Inspect_No: '',
        ST: '',
        ST_C: '',
        ST_O: '',
        PV: ''
    };
    _usageType: any;

    ionViewDidLoad() {
        console.log('ionViewDidLoad DataEntryVehiclePage');
    }

    saveVehicleData() {

    }
}
