import { CrudService } from '../../../services/crud.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL=environment.apiUrl;

@Component({
  selector: 'app-post-service-off',
  templateUrl: './post-service-off.component.html',
  styleUrls: ['./post-service-off.component.css']
})
export class PostServiceOffComponent implements OnInit { 

  constructor( private crud:CrudService ,
    private http :HttpClient,
    private router: Router ,private storage:TokenStorageService) { } 

  selectedFile : any 
  


    // upload Image
    onFileChanged(event: any){
      console.log(event);
      this.selectedFile = event.target.files[0];
      
    }
    description:string ="" 
    titre:string ="" 
    prix:string =""
    domaine:string ="" 
    tempsService:string ="" 


    getTitre(titre: string | any) {
      this.titre = titre;
    }
    getDescription(description: string | any) {
      this.description = description;
    }
    getDomaine(domaine: string | any) {
      this.domaine = domaine;
    }
    getPrix(prix: string | any) {
      this.prix = prix;
    }
    getTempsService(tempsService: string | any) {
      this.tempsService = tempsService;
    }


 
  
  onAjouter(){
    let formData = new FormData();
    formData.set('titre', this.titre)
    formData.set('domaine', this.domaine)
    formData.set('description', this.description)
    formData.set('tempsService', this.tempsService)
    formData.set('prix', this.prix)
    

    console.log(formData);

    this.http.post(URL+'/serviceOff',formData)
    .subscribe(data => console.log(data))

    }

  ngOnInit(): void {
    
  }

}
