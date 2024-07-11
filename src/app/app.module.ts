import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LayoutmModule } from './layoutm/layoutm.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CostumpipeModule } from './layoutm/costumpipe/costumpipe.module';




@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutmModule,
   ReactiveFormsModule,
    CostumpipeModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
