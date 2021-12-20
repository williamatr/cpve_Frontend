import { Rol } from "src/app/services/roles/interface/rol.interface";

export interface User {
  idUser: number;
  idRol: number;
  username: string;
  email: string;
  phone: string;
  name: string;
  lastName: string;
  password: string;
  country: string;
  city: string;
  grant: String;
  stateActive: number;
  registrationDate: Date;

}
