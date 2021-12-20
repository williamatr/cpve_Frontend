import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/services/roles/interface/rol.interface';
import { RolService } from 'src/app/services/roles/service/rol.service';
import { UserGetDto } from 'src/app/services/users/dto/user-get.dto';
import { UserService } from 'src/app/services/users/service/user.service';


@Component({
  selector: 'app-network-main',
  templateUrl: './network-main.component.html',
  styleUrls: ['./network-main.component.scss']
})
export class NetworkMainComponent implements OnInit {

  conditionCard: boolean = false;
  usersDto: UserGetDto[] = [];
  roles: Rol[] = [];

  userPage: number = 0;
  userSize: number = 10;

  constructor(
    private userService: UserService,
    private rolService: RolService
    ) { }

  ngOnInit():void  {
    this.fetchUsers();
    this.fetchRoles();

  }

  fetchUsers(){
    this.userService.getUsersPage(this.userPage, this.userSize)
    .subscribe(usersDataArray =>{
      this.usersDto = usersDataArray;
    });
  }

  fetchRoles(){
    this.rolService.getRoles()
    .subscribe(rolesArray =>{
      this.roles = rolesArray;
    });
  }


}
