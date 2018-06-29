import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataEntrySummaryPage } from './data-entry-summary';

@NgModule({
  declarations: [
    DataEntrySummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(DataEntrySummaryPage),
  ],
})
export class DataEntrySummaryPageModule {}
