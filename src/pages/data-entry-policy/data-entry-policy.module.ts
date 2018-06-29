import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataEntryPolicyPage } from './data-entry-policy';

@NgModule({
  declarations: [
    DataEntryPolicyPage,
  ],
  imports: [
    IonicPageModule.forChild(DataEntryPolicyPage),
  ],
})
export class DataEntryPolicyPageModule {}
