import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDonarComponent } from './add-donar/add-donar.component';
import { SearchDonarComponent } from './search-donar/search-donar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDonarComponent,
    SearchDonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
