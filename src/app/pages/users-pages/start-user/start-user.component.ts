import { Component, OnInit } from '@angular/core';

import { MaterialModule } from '../../../material/material.module'

@Component({
  selector: 'app-start-user',
  templateUrl: './start-user.component.html',
  styleUrls: ['./start-user.component.scss']
})
export class StartUserComponent implements OnInit {

  showAdminLogoHeader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
