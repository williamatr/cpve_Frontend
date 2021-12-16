import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { StartUserComponent } from './pages/start-user/start-user.component';
import { StartAdminComponent } from './pages/start-admin/start-admin.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { HeadComponent } from './components/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeUserComponent,
    StartUserComponent,
    StartAdminComponent,
    MenuAdminComponent,
    MenuUserComponent,
    FormLoginComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
