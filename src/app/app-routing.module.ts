import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainViewComponent} from './component/main-view/main-view.component';
import {RegistrationComponent} from './component/registration/registration.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
