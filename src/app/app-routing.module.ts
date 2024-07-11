import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  { path: "", redirectTo: "singup", pathMatch: "full" },
  { path: "singup", component: SingUpComponent },
  {
    path: 'layout',
    loadChildren: () =>
      import('./layoutm/layoutm.module').then((m) => m.LayoutmModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
