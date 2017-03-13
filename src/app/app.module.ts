import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './route.module';

import { AppComponent } from './app.component';
import { GlobalState } from './global.state';
import { DashboardComponent } from'./dashboard/dashborad.component';
import { UserComponent } from './sysManage/user.component'

//Application wide providers
const APP_PROVIDERS = [
  GlobalState
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
