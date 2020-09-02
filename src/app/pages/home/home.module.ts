import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../shared/material.module';
import { HomeService } from './home.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const COMPONENTS = [
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
