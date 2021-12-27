import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadComponent } from './components/head/head.component';
import { MenuUserComponent } from './components/menu-user/menu-user.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';

@NgModule({
  declarations: [
    HeadComponent,
    MenuUserComponent,
    MenuAdminComponent,

  ],
  exports: [
    HeadComponent,
    MenuUserComponent,
    MenuAdminComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
