import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataEntryVehiclePage } from './data-entry-vehicle';

@NgModule({
  declarations: [
    DataEntryVehiclePage,
  ],
  imports: [
    IonicPageModule.forChild(DataEntryVehiclePage),
  ],
})
export class DataEntryVehiclePageModule {}
