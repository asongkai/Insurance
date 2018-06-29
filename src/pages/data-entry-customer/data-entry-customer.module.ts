import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataEntryCustomerPage } from './data-entry-customer';

@NgModule({
  declarations: [
    DataEntryCustomerPage,
  ],
  imports: [
    IonicPageModule.forChild(DataEntryCustomerPage),
  ],
})
export class DataEntryCustomerPageModule {}
