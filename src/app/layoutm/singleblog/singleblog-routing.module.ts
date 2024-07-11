import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyblogComponent } from './myblog/myblog.component';

const routes: Routes = [
  {path:'', component:MyblogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleblogRoutingModule { }
