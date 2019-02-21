import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatFormPage } from './chat-form';

@NgModule({
  declarations: [
    ChatFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatFormPage),
  ],
})
export class ChatFormPageModule {}
