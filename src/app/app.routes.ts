import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {FirstpageComponent} from "./firstpage/firstpage.component";
export const routes: Routes = [ {
  path: '',
  component: MainPageComponent
},
  {
  path: 'first',
  component: FirstpageComponent
}];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
