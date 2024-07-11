import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleblogRoutingModule } from './singleblog-routing.module';
import { MyblogComponent } from './myblog/myblog.component';


@NgModule({
  declarations: [
    MyblogComponent
  ],
  imports: [
    CommonModule,
    SingleblogRoutingModule
  ]
})
export class SingleblogModule { }
