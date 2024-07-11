import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [

  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then((m) => m.ContactModule),
      },
      {
        path: 'blogs',
        loadChildren: () =>
          import('./blogs/blogs.module').then((m) => m.BlogsModule),
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then((m) => m.ProjectsModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then((m) => m.ServicesModule),
      },
      {
        path: 'singleblogs',
        loadChildren: () =>
          import('./singleblog/singleblog.module').then((m) => m.SingleblogModule),
      },
      {
        path: 'faqmodule',
        loadChildren: () =>
          import('./faq/faq.module').then((m) => m.FAQModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./about-us/about-us.module').then((m) => m.AboutUsModule)
      }

    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutmRoutingModule { }
