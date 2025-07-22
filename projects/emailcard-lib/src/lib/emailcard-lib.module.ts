import { NgModule } from '@angular/core';
import { EmailcardLibComponent } from './emailcard-lib.component';
import { EmailCardComponent } from './email-card/email-card.component';



@NgModule({
  declarations: [
    EmailcardLibComponent,
    EmailCardComponent
  ],
  imports: [
  ],
  exports: [
    EmailcardLibComponent,
    EmailCardComponent
  ]
})
export class EmailcardLibModule { }
