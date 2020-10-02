import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material.module';
import { HomeService } from './home.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShopBannerTwoComponent } from './shop-banner-two/shop-banner-two.component';
import { ShopBannerOneComponent } from './shop-banner-one/shop-banner-one.component';

const COMPONENTS = [
  ShopBannerOneComponent,
  ShopBannerTwoComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
