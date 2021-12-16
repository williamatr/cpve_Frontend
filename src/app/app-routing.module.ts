import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { StartUserComponent } from './pages/start-user/start-user.component';
import { StartAdminComponent } from './pages/start-admin/start-admin.component';

const routes: Routes = [

  { path: '', redirectTo: 'start-admin', pathMatch: 'full' },
  {
    path: 'start-user',
    component: StartUserComponent
  },
  {
    path: 'home',
    component: HomeUserComponent,
  },

  {
    path: 'start-admin',
    component: StartAdminComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
