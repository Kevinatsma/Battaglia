import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { PartialsModule } from './../../partials/partials.module';

const COMPONENTS = [
  ShopComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PartialsModule
  ],
  exports: [...COMPONENTS]
})
export class ShopModule { }
