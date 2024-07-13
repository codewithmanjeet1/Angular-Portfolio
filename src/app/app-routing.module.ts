import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "singup", component: SingUpComponent },
  { path: 'login', component: LoginComponent },
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
