import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import { gardGuard } from './layoutm/gards/login/gard.guard';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "singup", component: SingUpComponent },
  { path: 'login', component: LoginComponent, canActivate: [gardGuard] },
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
