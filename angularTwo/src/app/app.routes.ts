import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,

    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
