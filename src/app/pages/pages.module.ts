import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PartialsModule } from '../partials/partials.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopModule } from './shop/shop.module';
import { BlogModule } from './blog/blog.module';
import { FindUsComponent } from './find-us/find-us.component';

const COMPONENTS = [
  HomeComponent,
  AboutUsComponent,
  FindUsComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    HomeModule,
    PartialsModule,
    ShopModule,
    BlogModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class PagesModule { }
