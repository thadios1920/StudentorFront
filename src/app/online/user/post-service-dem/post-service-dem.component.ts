import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-post-service-dem',
  templateUrl: './post-service-dem.component.html',
  styleUrls: ['./post-service-dem.component.css']
})
export class PostServiceDemComponent implements OnInit {


  constructor( private crud:CrudService ,private formBuilder:FormBuilder,private router: Router
    ) { }


  serviceDemForm=new FormGroup(
    { 
    description:new FormControl('',[Validators.required,Validators.minLength(10)]),
    titre:new FormControl('',Validators.required),
    prix:new FormControl('',[Validators.required,Validators.min(0)]),
    domaine:new FormControl('',[Validators.required]),
    });
  get description()
  {
    return this.serviceDemForm.get('description')
  }
get titre()
{
  return this.serviceDemForm.get('titre')

}
get prix()
{
  return this.serviceDemForm.get('prix')

}
get domaine()
{
  return this.serviceDemForm.get('domaine')
}


  onAjouter(){
    this.crud.addServiceDem(this.serviceDemForm.value)
    .subscribe(data => console.log(data));
    this.router.navigate(["servicesOff"])

  
  }

  ngOnInit(): void {
    this.serviceDemForm = this.formBuilder.group(
      {description:[''],
      titre:[''],
      prix:[],
      domaine:[''],
      tempsService:[new Date().toString()],
      }
      )
  }


}
