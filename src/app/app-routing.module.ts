
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeUserComponent } from './pages/users-pages/home-user/home-user.component';
import { StartUserComponent } from './pages/users-pages/start-user/start-user.component';
import { NetworkMainComponent } from './pages/users-pages/network-main/network-main.component';
import { MessageMainComponent } from './pages/users-pages/message-main/message-main.component';
import { NetworkShowUserComponent } from './pages/users-pages/network-show-user/network-show-user.component';
import { UserProfileComponent } from './pages/users-pages/user-profile/user-profile.component';
import { AwardMainComponent } from './pages/users-pages/award-main/award-main.component';
import { EventMainComponent } from './pages/users-pages/event-main/event-main.component';
import { BlogCreateComponent } from './pages/users-pages/blog-create/blog-create.component';
import { BlogShowOneComponent } from './pages/users-pages/blog-show-one/blog-show-one.component';
import { BlogMainComponent } from './pages/users-pages/blog-main/blog-main.component';
import { TrainingCreateComponent } from './pages/users-pages/training-create/training-create.component';
import { TrainingShowOneComponent } from './pages/users-pages/training-show-one/training-show-one.component';
import { TrainingMainComponent } from './pages/users-pages/training-main/training-main.component';
import { ProjectCreateComponent } from './pages/users-pages/project-create/project-create.component';
import { ProjectShowOneComponent } from './pages/users-pages/project-show-one/project-show-one.component';
import { ProjectMainComponent } from './pages/users-pages/project-main/project-main.component';
import { UserLoginComponent } from './pages/users-pages/user-login/user-login.component';
import { UserSigninComponent } from './pages/users-pages/user-signin/user-signin.component';
import { PageNotFoundComponent } from './pages/users-pages/page-not-found/page-not-found.component';

import { StartAdminComponent } from './pages/admin-pages/start-admin/start-admin.component';
import { AdminEventCreateComponent } from './pages/admin-pages/admin-event-create/admin-event-create.component';
import { AdminEventEditComponent } from './pages/admin-pages/admin-event-edit/admin-event-edit.component';
import { AdminEventMainComponent } from './pages/admin-pages/admin-event-main/admin-event-main.component';
import { AdminAwardEditComponent } from './pages/admin-pages/admin-award-edit/admin-award-edit.component';
import { AdminAwardMainComponent } from './pages/admin-pages/admin-award-main/admin-award-main.component';
import { AdminUserEditComponent } from './pages/admin-pages/admin-user-edit/admin-user-edit.component';
import { AdminUserMainComponent } from './pages/admin-pages/admin-user-main/admin-user-main.component';
import { AdminProjectEditComponent } from './pages/admin-pages/admin-project-edit/admin-project-edit.component';
import { AdminProjectMainComponent } from './pages/admin-pages/admin-project-main/admin-project-main.component';
import { ReportMainComponent } from './pages/admin-pages/report-main/report-main.component';




const routes: Routes = [

  { path: '', redirectTo: 'ppal-ususario', pathMatch: 'full' },
  {
    path: 'ppal-ususario',
    component: StartUserComponent
  },
  {
    path: 'ingreso-usuario',
    component: UserLoginComponent
  },
  {
    path: 'registro-usuario',
    component: UserSigninComponent
  },
  {
    path: 'inicio',
    component: HomeUserComponent
  },
  {
    path: 'red',
    component: NetworkMainComponent
  },
  {
    path: 'red/:id',
    component: NetworkShowUserComponent
  },
  {
    path: 'mensajes',
    component: MessageMainComponent
  },
  {
    path: 'proyectos',
    component: ProjectMainComponent
  },
  {
    path: 'proyecto-seleccionado',
    component: ProjectShowOneComponent
  },
  {
    path: 'crear-proyecto',
    component: ProjectCreateComponent
  },
  {
    path: 'educacion',
    component: TrainingMainComponent
  },
  {
    path: 'capacitacion-seleccionada',
    component: TrainingShowOneComponent
  },
  {
    path: 'crear-capacitacion',
    component: TrainingCreateComponent
  },
  {
    path: 'blog',
    component: BlogMainComponent
  },
  {
    path: 'entrada-seleccionada',
    component: BlogShowOneComponent
  },
  {
    path: 'crear-entrada',
    component: BlogCreateComponent
  },
  {
    path: 'eventos',
    component: EventMainComponent
  },
  {
    path: 'premios',
    component: AwardMainComponent
  },
  {
    path: 'mi-perfil',
    component: UserProfileComponent
  },



  {
    path: 'ppal-admin',
    component: StartAdminComponent
  },
  {
    path: 'reportes',
    component: ReportMainComponent
  },
  {
    path: 'admin-proyectos',
    component: AdminProjectMainComponent
  },
  {
    path: 'admin-editar-proyectos',
    component: AdminProjectEditComponent
  },
  {
    path: 'admin-usuarios',
    component: AdminUserMainComponent
  },
  {
    path: 'admin-editar-usuarios',
    component: AdminUserEditComponent
  },
  {
    path: 'admin-premios',
    component: AdminAwardMainComponent
  },
  {
    path: 'admin-editar-premios',
    component: AdminAwardEditComponent
  },
  {
    path: 'admin-eventos',
    component: AdminEventMainComponent
  },
  {
    path: 'admin-editar-eventos',
    component: AdminEventEditComponent
  },
  {
    path: 'admin-crear-eventos',
    component: AdminEventCreateComponent
  },



  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
