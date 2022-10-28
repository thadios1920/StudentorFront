import { Servicesoff } from './../models/servicesoff';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicesdem } from '../models/servicesdem';

const URL=environment.apiUrl;
 
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }


  public getAllUsers():Observable <User[]  > {
    return this.http.get<User[]>(URL+'/utilisateurs')
  }

  public getAllServicesOff():Observable <Servicesoff[]  > {
    return this.http.get<Servicesoff[]>(URL+'/servicesoff')
  }

  public getAllServicesDem():Observable <Servicesdem[]  > {
    return this.http.get<Servicesdem[]>(URL+'/servicesdem')
  }

  addServiceDem(service:Servicesoff):Observable<Servicesoff>{
    return this.http.post<Servicesoff>(URL+'/addServiceOff', service);
    }
}
