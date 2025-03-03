import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './auth/components/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApproutingModule {}
