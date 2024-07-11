import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FAQRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    FAQRoutingModule
  ]
})
export class FAQModule { }
