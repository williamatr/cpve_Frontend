import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-start-admin',
  templateUrl: './start-admin.component.html',
  styleUrls: ['./start-admin.component.scss']
})
export class StartAdminComponent implements OnInit {

  showUserLogoHeader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
