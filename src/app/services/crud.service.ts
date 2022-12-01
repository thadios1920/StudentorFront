import { Servicesoff } from './../models/servicesoff';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicesdem } from '../models/servicesdem';
import { TokenStorageService } from './token-storage.service';

const URL=environment.apiUrl;
const SECRET_KEY=environment.api_key;


const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2Mzg3NTQ5MTRlMTZiY2U0NjBiYTM2YTgiLCJpYXQiOjE2Njk4MTgzNDMsImV4cCI6MTY2OTkwNDc0M30.zYd8VqyrH_eZ69Th3wYGBJkXZHB5yPq2UQVRhbqx0Ec'}`
});

const requestOptions = { headers: headers };


 
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http:HttpClient,
    private tokenStorage:TokenStorageService,) { }

    


//Get All Users
  public getAllUsers():Observable <User[]  > {
    return this.http.get<User[]>(URL+'/utilisateur',requestOptions)
  }


  //Delete User  
deleteUserfromRoot(id:string | undefined ):Observable<User>{
  return this.http.delete<User>(URL+'/utilisateur/'+id,requestOptions);
  }

//Get All Service Offert
  public getAllServicesOff():Observable <Servicesoff[]  > {
    return this.http.get<Servicesoff[]>(URL+'/serviceOff',requestOptions)
  }
//Get All Service Demandé
  public getAllServicesDem():Observable <Servicesdem[]  > {
    return this.http.get<Servicesdem[]>(URL+'/serviceDem',requestOptions)
  }
//Ajouter Service Demandé
  addServiceDem(service:Servicesoff):Observable<Servicesdem>{
    return this.http.post<Servicesdem>(URL+'/serviceDem/addServiceDem', service,requestOptions);
    }

//Ajouter Service Offert
    addServiceOffert(service:Servicesoff):Observable<Servicesoff>{
      return this.http.post<Servicesoff>(URL+'/serviceOff/addServiceOff', service,requestOptions);
      }

//supprimer Service
    deleteServiceOffert(id:string):Observable<Servicesoff>{
      return this.http.delete<Servicesoff>(URL+'/serviceOff/'+id,requestOptions);
      }
      //supprimer Service
    deleteServiceDemande(id:string):Observable<Servicesdem>{
      return this.http.delete<Servicesdem>(URL+'/serviceDem/'+id,requestOptions);
      }
 //Modier Profile
 EditProfile(user:User):Observable<User>{
  return this.http.put<User>(URL+'/utilisateur/'+this.tokenStorage.getUser().id, user,requestOptions);
  }    
  
  

//Authentification
login(credentials: Credential): Observable<any>{
  return this.http.post(URL + "/utilisateur/login", credentials)
}
signUp(user: User): Observable<any>{
  return this.http.post(URL + "/utilisateur/register", user)
}

  
}
