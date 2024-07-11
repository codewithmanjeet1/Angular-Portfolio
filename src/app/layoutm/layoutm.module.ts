import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutmRoutingModule } from './layoutm-routing.module';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';
import { ContactModule } from './contact/contact.module';
import { BlogsModule } from './blogs/blogs.module';
import { ProjectsModule } from './projects/projects.module';
import { ServicesModule } from './services/services.module';
import { SingleblogModule } from './singleblog/singleblog.module';
import { FAQModule } from './faq/faq.module';
import { PagenotefoundComponent } from './errorpage/pagenotefound/pagenotefound.component';
import { CostumpipeModule } from './costumpipe/costumpipe.module';
import { AboutUsRoutingModule } from './about-us/about-us-routing.module';


@NgModule({
  declarations: [
    ErrorpageComponent,
    LayoutComponent,
    PagenotefoundComponent
  ],
  imports: [
    CommonModule,
    LayoutmRoutingModule,
    HomeModule,
    AboutUsModule,
    ContactModule,
    BlogsModule,
    ProjectsModule,
    ServicesModule,
    SingleblogModule,
    FAQModule,
    CostumpipeModule
  ],
  exports: [
AboutUsModule,
ServicesModule
  ]
})
export class LayoutmModule { }
