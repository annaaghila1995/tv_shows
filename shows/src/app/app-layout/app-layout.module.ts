import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { InnerLayoutComponent } from './inner-layout/inner-layout.component';
import { AppRoutingModule } from './../app-routing.module';


@NgModule({
  declarations: [
    AppHeaderComponent,
    InnerLayoutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class AppLayoutModule { }
