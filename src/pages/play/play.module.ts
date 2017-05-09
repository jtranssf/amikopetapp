import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Play } from './play';

@NgModule({
  declarations: [
    Play,
  ],
  imports: [
    IonicPageModule.forChild(Play),
  ],
  exports: [
    Play
  ]
})
export class PlayModule {}
