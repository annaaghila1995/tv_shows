import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowListComponent } from './show-list/show-list.component';
import { AppLayoutModule } from './app-layout/app-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppLayoutModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
