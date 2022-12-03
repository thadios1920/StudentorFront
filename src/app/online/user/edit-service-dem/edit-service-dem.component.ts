import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { environment } from 'src/environments/environment';

const URL=environment.apiUrl;



@Component({
  selector: 'app-edit-service-dem',
  templateUrl: './edit-service-dem.component.html',
  styleUrls: ['./edit-service-dem.component.css']
})
export class EditServiceDemComponent implements OnInit { 

  constructor(
    private crud:CrudService ,
    private http :HttpClient,
    private router: Router ,private storage:TokenStorageService,
    private route: ActivatedRoute
  ) { }
  sub: any;



  selectedFile : any 
  


  
    description:string ="" 
    titre:string ="" 
    prix:string =""
    domaine:string ="" 


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
    


 
  
  onModifier(){
    let formData = new FormData();
    formData.set('titre', this.titre)
    formData.set('domaine', this.domaine)
    formData.set('description', this.description)
    formData.set('prix', this.prix)
    

    console.log(formData);

    this.http.put(URL+'/serviceDem/'+this.sub,formData)
    .subscribe()

    }

  ngOnInit(): void {
    this.sub = this.route.snapshot.paramMap.get('id');

  }

}
