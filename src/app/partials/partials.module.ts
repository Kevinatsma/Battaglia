import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MenuIconComponent } from './header/menu-icon/menu-icon.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ParallaxBannerComponent } from './parallax-banner/parallax-banner.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ContentBlockComponent } from './content-block/content-block.component';

const COMPONENTS = [
  HeaderComponent,
  MenuIconComponent,
  HeroComponent,
  LoadingSpinnerComponent,
  ParallaxBannerComponent,
  ContentBlockComponent,
  FooterComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule
  ],
  exports: [...COMPONENTS]
})
export class PartialsModule { }
