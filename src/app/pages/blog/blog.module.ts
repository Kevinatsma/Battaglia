import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { PartialsModule } from './../../partials/partials.module';

const COMPONENTS = [
  BlogComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PartialsModule
  ],
  exports: [...COMPONENTS]
})
export class BlogModule { }
