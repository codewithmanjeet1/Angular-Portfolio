import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { MypipePipe } from './mypipe.pipe';



@NgModule({
  declarations: [
    PipesComponent,
    MypipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent,
    MypipePipe
  ]
})
export class CostumpipeModule { }
