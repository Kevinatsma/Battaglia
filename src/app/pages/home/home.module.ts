import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material.module';
import { HomeService } from './home.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShopBannerTwoComponent } from './shop-banner-two/shop-banner-two.component';
import { ShopBannerOneComponent } from './shop-banner-one/shop-banner-one.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SlideOneComponent } from './about-section/slide-one/slide-one.component';
import { SlideTwoComponent } from './about-section/slide-two/slide-two.component';
import { SlideThreeComponent } from './about-section/slide-three/slide-three.component';

const COMPONENTS = [
  ShopBannerOneComponent,
  ShopBannerTwoComponent,
  AboutSectionComponent,
  SlideOneComponent,
  SlideTwoComponent,
  SlideThreeComponent
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
