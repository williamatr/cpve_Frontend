import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Rol } from 'src/app/services/roles/interface/rol.interface';
import { RolService } from 'src/app/services/roles/service/rol.service';
import { UserGetDto } from 'src/app/services/users/dto/user-get.dto';

import { UserService } from '../../../services/users/service/user.service';

@Component({
  selector: 'app-network-show-user',
  templateUrl: './network-show-user.component.html',
  styleUrls: ['./network-show-user.component.scss']
})
export class NetworkShowUserComponent implements OnInit {

  user!: UserGetDto;
  rol!: Rol;

  showConect: boolean = true;
  showUnconect: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private roleService: RolService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.userService.getUserById(id).subscribe(res=>{
        this.user = res;
        const idRol = this.user.idRol;
        this.roleService.getRolById(idRol).subscribe(res=>{
          this.rol = res;
        })
      });
    });

  }
  conect(){

  }
  unconect(){

  }



}
