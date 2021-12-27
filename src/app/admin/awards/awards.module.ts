import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAwardMainComponent } from './pages/admin-award-main/admin-award-main.component';
import { AdminAwardEditComponent } from './pages/admin-award-edit/admin-award-edit.component';

import { AwardsRoutingModule } from './awards-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    AdminAwardMainComponent,
    AdminAwardEditComponent,
  ],
  exports: [
    AdminAwardMainComponent,
    AdminAwardEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AwardsRoutingModule
  ]
})
export class AwardsModule { }
