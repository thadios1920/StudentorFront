import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Servicesdem } from 'src/app/models/servicesdem';
import { Servicesoff } from 'src/app/models/servicesoff';
import { CrudService } from 'src/app/services/crud.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit,OnDestroy {

  constructor( private crud:CrudService,private router: Router, private tokenStorage:TokenStorageService,
    ) { }
  getServiceDem!: Subscription;
  getServiceOffert!: Subscription;
  hideOff:boolean=false
  hideDem:boolean=true
  listServiceDem : Servicesdem[]=[]
  listServiceOffert : Servicesoff[]=[]


  imageURL: string =  this.tokenStorage.getUser().image
name : string = this.tokenStorage.getUser().nom
    lastname : string = this.tokenStorage.getUser().prenom
    email : string = this.tokenStorage.getUser().email


  deleteServiceOffert(id:string)
{
  this.crud.deleteServiceOffert(id).subscribe()
  window.location.reload();

}
deleteServiceDemande(id:string)
{
  this.crud.deleteServiceDemande(id).subscribe();
  window.location.reload();

}

onEdit(){
  this.router.navigate(["dashborad/edit-profil/"+this.tokenStorage.getUser().id]) 

}

hidden()
{


if((<HTMLInputElement>document.getElementById("hidden1")).checked==false)
{
  this.hideDem=true 
  this.hideOff=false
}
else 
{
  this.hideDem=false
  this.hideOff=true

}
}


  ngOnInit(): void {

//hidden elements 
    this.getServiceDem=this.crud.getAllServicesDem()
    .subscribe( data => {
      this.listServiceDem = data;
    });

   this.getServiceOffert=this.crud.getAllServicesOff()
    .subscribe( data => {
      this.listServiceOffert = data;
    });
  }

  
  ngOnDestroy(): void {
    this.getServiceDem.unsubscribe();
    this.getServiceOffert.unsubscribe();

  }

}