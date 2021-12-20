import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  @Input() showUserLogo: boolean = true;
  @Input() showAdminLogo: boolean = true;
  @Input() showOptions: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
