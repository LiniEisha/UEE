import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewModal } from './view-modal';

@NgModule({
  declarations: [
    ViewModal,
  ],
  imports: [
    IonicPageModule.forChild(ViewModal)
  ],
})
export class ViewModalModule {}
