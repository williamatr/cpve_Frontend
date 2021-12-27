import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HomeUserComponent } from './pages/users-pages/home-user/home-user.component';
import { StartUserComponent } from './pages/users-pages/start-user/start-user.component';
import { StartAdminComponent } from './pages/admin-pages/start-admin/start-admin.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { PageNotFoundComponent } from './pages/users-pages/page-not-found/page-not-found.component';
import { ProjectShowOneComponent } from './pages/users-pages/project-show-one/project-show-one.component';
import { ProjectMainComponent } from './pages/users-pages/project-main/project-main.component';
import { ProjectCreateComponent } from './pages/users-pages/project-create/project-create.component';
import { MessageMainComponent } from './pages/users-pages/message-main/message-main.component';
import { NetworkMainComponent } from './pages/users-pages/network-main/network-main.component';
import { NetworkShowUserComponent } from './pages/users-pages/network-show-user/network-show-user.component';
import { TrainingMainComponent } from './pages/users-pages/training-main/training-main.component';
import { TrainingShowOneComponent } from './pages/users-pages/training-show-one/training-show-one.component';
import { TrainingCreateComponent } from './pages/users-pages/training-create/training-create.component';
import { BlogMainComponent } from './pages/users-pages/blog-main/blog-main.component';
import { BlogShowOneComponent } from './pages/users-pages/blog-show-one/blog-show-one.component';
import { BlogCreateComponent } from './pages/users-pages/blog-create/blog-create.component';
import { EventMainComponent } from './pages/users-pages/event-main/event-main.component';
import { AwardMainComponent } from './pages/users-pages/award-main/award-main.component';
import { UserProfileComponent } from './pages/users-pages/user-profile/user-profile.component';
import { UserLoginComponent } from './pages/users-pages/user-login/user-login.component';
import { UserSigninComponent } from './pages/users-pages/user-signin/user-signin.component';
import { ReportMainComponent } from './pages/admin-pages/report-main/report-main.component';
import { AdminProjectMainComponent } from './pages/admin-pages/admin-project-main/admin-project-main.component';
import { AdminProjectEditComponent } from './pages/admin-pages/admin-project-edit/admin-project-edit.component';
import { AdminUserMainComponent } from './pages/admin-pages/admin-user-main/admin-user-main.component';
import { AdminUserEditComponent } from './pages/admin-pages/admin-user-edit/admin-user-edit.component';
import { AdminEventMainComponent } from './pages/admin-pages/admin-event-main/admin-event-main.component';
import { AdminEventEditComponent } from './pages/admin-pages/admin-event-edit/admin-event-edit.component';
import { AdminEventCreateComponent } from './pages/admin-pages/admin-event-create/admin-event-create.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { CardUserComponent } from './components/card-user/card-user.component';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeUserComponent,
    StartUserComponent,
    StartAdminComponent,
    FormLoginComponent,
    PageNotFoundComponent,
    ProjectShowOneComponent,
    ProjectMainComponent,
    ProjectCreateComponent,
    MessageMainComponent,
    NetworkMainComponent,
    NetworkShowUserComponent,
    TrainingMainComponent,
    TrainingShowOneComponent,
    TrainingCreateComponent,
    BlogMainComponent,
    BlogShowOneComponent,
    BlogCreateComponent,
    EventMainComponent,
    AwardMainComponent,
    UserProfileComponent,
    UserLoginComponent,
    UserSigninComponent,
    ReportMainComponent,
    AdminProjectMainComponent,
    AdminProjectEditComponent,
    AdminUserMainComponent,
    AdminUserEditComponent,
    AdminEventMainComponent,
    AdminEventEditComponent,
    AdminEventCreateComponent,
    CardMainComponent,
    CardUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
