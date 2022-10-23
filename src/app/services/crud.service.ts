import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }


  public getAllUsers():Observable <User[]  > {
    return this.http.get<User[]>(URL+'/utilisateurs')
  }
}
