import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConatctUsComponent } from './conatct-us/conatct-us.component';

const routes: Routes = [
  { path: '', component: ConatctUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
