import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent implements OnInit {

  iconHomeOff: string = "assets/icons/BtnHomeOff.png";

  constructor() { }

  ngOnInit(): void {
  }

}