import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, AuthModule, RouterModule.forRoot([])],
  providers: [],
})
export class AppModule {}
