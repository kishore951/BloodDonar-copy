import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddDonarComponent } from './add-donar/add-donar.component';
import { SearchDonarComponent } from './search-donar/search-donar.component';
import { DeleteDonarComponent } from './delete-donar/delete-donar.component';
import { ViewAllDonarComponent } from './view-all-donar/view-all-donar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddDonarComponent
  },{
    path:"search",component:SearchDonarComponent
  },
  {
    path:"delete",component:DeleteDonarComponent
  },
  {
    path:"view-all-donar",component:ViewAllDonarComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddDonarComponent,
    SearchDonarComponent,
    DeleteDonarComponent,
    ViewAllDonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
