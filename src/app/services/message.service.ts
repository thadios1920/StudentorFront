import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
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
export class MessageService {

  constructor(
    private http:HttpClient,
    private tokenStorage:TokenStorageService,) { }

    envayerMsg(idF:string,idT:string,msg:string):Observable<Message>{
      return this.http.post<Message>(URL+'/message/ajout/'+idF+'/'+idT+'/'+msg,requestOptions);
      }


      messagesBetween(idF:string,idT:string):Observable<Message []>{
        return this.http.get<Message[]>(URL+'/message/all/'+idF+'/'+idT,requestOptions);
        }

        contacter(idF:string):Observable<Message []>{
          return this.http.get<Message[]>(URL+'/message/receiver/'+idF,requestOptions);
          }
}