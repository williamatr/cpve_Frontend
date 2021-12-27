import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  showAdminLogoHeader: boolean = false;
  showOptionsHeader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
