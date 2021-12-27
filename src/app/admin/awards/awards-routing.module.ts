import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AdminAwardMainComponent } from './pages/admin-award-main/admin-award-main.component';
import { AdminAwardEditComponent } from './pages/admin-award-edit/admin-award-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminAwardMainComponent
  },
  {
    path: '/:id',
    component: AdminAwardEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AwardsRoutingModule{

}
