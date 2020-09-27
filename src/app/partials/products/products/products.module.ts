import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedProductComponent } from '../featured-product/featured-product.component';

const COMPONENTS = [
  FeaturedProductComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ProductsModule { }
