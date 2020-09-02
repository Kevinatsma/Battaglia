import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './../user/user.module';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
    UserModule
  ],
  providers: [
    AuthGuard
  ]
})
export class CoreModule { }
