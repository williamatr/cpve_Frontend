import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../../environments/environment';
import { Rol } from '../interface/rol.interface';



@Injectable({
  providedIn: 'root'
})
export class RolService {
  private configUrl!: string;

  constructor(private httpClient: HttpClient) { }

  public getRolById(id: number): Observable<Rol>{
    this.configUrl = `${environment.cpveUrl}/rol/${id}`;
    return this.httpClient.get<Rol>(this.configUrl);
  }

  public getRoles(): Observable<Rol[]>{
    this.configUrl = `${environment.cpveUrl}/rol/`;
    return this.httpClient.get<Rol[]>(this.configUrl);
  }


}
