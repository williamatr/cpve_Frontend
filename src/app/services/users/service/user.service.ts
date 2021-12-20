import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { UserGetDto } from './../dto/user-get.dto';
import { UserPutDto } from './../dto/user-put.dto';
import { UserPostDto } from './../dto/user-post.dto';
import { User } from '../interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private configUrl!: string;

  constructor(private httpClient: HttpClient) { }

  public getUserById(id: number): Observable<UserGetDto>{
    this.configUrl = `${environment.cpveUrl}/user/userDto/${id}`;
    return this.httpClient.get<UserGetDto>(this.configUrl);
  }

  public getUsersPage(page: number, size:number): Observable<UserGetDto[]>{
    this.configUrl = `${environment.cpveUrl}/user/pageuser?page=${page}&size=${size}`;
    return this.httpClient.get<UserGetDto[]>(this.configUrl);
  }

  public saveUser(UserPostDto:UserPostDto): Observable<User>{
    this.configUrl = `${environment.cpveUrl}/user/saveuser`;
    return this.httpClient.post<User>(this.configUrl,UserPostDto);
  }

  public updateUser(userPutDto: UserPutDto ,id: number):Observable<User>{
    this.configUrl = `${environment.cpveUrl}/user/${id}`;
    return this.httpClient.put<User>(this.configUrl,userPutDto);
  }


}
