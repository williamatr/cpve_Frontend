import { UserGetDto } from 'src/app/services/users/dto/user-get.dto';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Rol } from 'src/app/services/roles/interface/rol.interface';


@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() user: UserGetDto = Object();
  @Input() rol: Rol = Object();
  @Output() userClicked: EventEmitter<any> = new EventEmitter();



  iconUser: string = "assets/icons/IconUser.png";

  constructor(

  ) { }

  ngOnInit(): void {
    console.log(this.rol)
  }

  ngAfterViewInit() {
  }



}
