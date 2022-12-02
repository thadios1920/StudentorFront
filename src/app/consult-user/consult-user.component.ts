import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Servicesdem } from '../models/servicesdem';
import { Servicesoff } from '../models/servicesoff';
import { User } from '../models/user';
import { CrudService } from '../services/crud.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-consult-user',
  templateUrl: './consult-user.component.html',
  styleUrls: ['./consult-user.component.css']
})
export class ConsultUserComponent implements OnInit {

  sub: any;
  constructor( private crud:CrudService,private router: Router, private tokenStorage:TokenStorageService,private route: ActivatedRoute
    ) { }

    
  getServiceDem!: Subscription;
  
  getServiceOffert!: Subscription;
  hideOff:boolean=false
  hideDem:boolean=true
  listServiceDem : Servicesdem[]=[]
  listServiceOffert : Servicesoff[]=[]
  getUser!:User

  imageURL: string =  this.tokenStorage.getUser().image
name : string = this.tokenStorage.getUser().nom
    lastname : string = this.tokenStorage.getUser().prenom



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
    this.sub = this.route.snapshot.paramMap.get('id');


  this.crud.getUserId(this.sub)    .subscribe( data => {
    this.getUser = data;
  });
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